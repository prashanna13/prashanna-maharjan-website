import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform vec3 uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

float noise(vec2 texCoord) {
  float e = 2.71828182845904523536;
  vec2 r = e * sin(e * texCoord);
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c) * uv;
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  vec2 uv = rotateUvs(vUv * uScale, uRotation);
  float time = uSpeed * uTime;
  uv.y += 0.03 * sin(8.0 * uv.x - time);

  float pattern = 0.6 + 0.4 * sin(5.0 * (uv.x + uv.y + cos(3.0 * uv.x + 5.0 * uv.y) + 0.02 * time) + sin(20.0 * (uv.x + uv.y - 0.1 * time)));
  vec3 result = uColor * pattern - vec3(rnd / 15.0 * uNoiseIntensity);
  gl_FragColor = vec4(clamp(result, 0.0, 1.0), 1.0);
}
`

function Silk({
  speed = 5,
  scale = 1,
  color = '#7B7481',
  noiseIntensity = 1.5,
  rotation = 0
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uSpeed: { value: speed },
        uScale: { value: scale },
        uRotation: { value: rotation },
        uNoiseIntensity: { value: noiseIntensity }
      },
      vertexShader,
      fragmentShader
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frameId
    let previousTime = 0

    const resize = () => {
      const { clientWidth, clientHeight } = canvas.parentElement
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(clientWidth, clientHeight, false)
    }

    const render = (time) => {
      const delta = (time - previousTime) / 1000
      previousTime = time
      if (!reduceMotion) material.uniforms.uTime.value += delta
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    frameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [color, noiseIntensity, rotation, scale, speed])

  return <canvas ref={canvasRef} className="silk-canvas" aria-hidden="true" />
}

export default Silk
