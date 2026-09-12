import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

function ComputerModel() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    const modelRoot = new THREE.Group()
    const timer = new THREE.Timer()

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)
    scene.add(modelRoot)

    scene.add(new THREE.HemisphereLight(0xf2efe8, 0x151515, 2.2))

    const keyLight = new THREE.DirectionalLight(0xffdca0, 3.5)
    keyLight.position.set(4, 6, 5)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0x9bb8ff, 1.8)
    fillLight.position.set(-5, 2, 2)
    scene.add(fillLight)

    const resize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      if (!width || !height) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    const loader = new GLTFLoader()
    loader.load('/ibm_5150/scene.gltf', (gltf) => {
      const model = gltf.scene
      const bounds = new THREE.Box3().setFromObject(model)
      const center = bounds.getCenter(new THREE.Vector3())
      const size = bounds.getSize(new THREE.Vector3())
      const maxDimension = Math.max(size.x, size.y, size.z)

      model.position.sub(center)
      modelRoot.add(model)
      modelRoot.scale.setScalar(3.5 / maxDimension)
      camera.position.set(0, 0.7, 4.7)
      camera.lookAt(0, 0, 0)
    })

    let frameId
    const render = () => {
      timer.update()
      const elapsed = timer.getElapsed()
      modelRoot.rotation.y = Math.sin(elapsed * 0.35) * 0.16
      modelRoot.rotation.x = Math.sin(elapsed * 0.22) * 0.025
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    render()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      renderer.dispose()
      renderer.domElement.remove()
      scene.traverse((object) => {
        if (!object.isMesh) return
        object.geometry.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose())
        } else {
          object.material.dispose()
        }
      })
    }
  }, [])

  return (
    <div className="computer-model" ref={containerRef} aria-label="Interactive IBM 5150 3D model" role="img" />
  )
}

export default ComputerModel
