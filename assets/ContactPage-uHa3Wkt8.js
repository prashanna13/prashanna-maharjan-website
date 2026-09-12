import{a as e,o as t,t as n}from"./index-CIt8kCgt.js";/* empty css                    */import{I as r,J as i,K as a,c as o,ft as s,it as c,nt as l,pt as u,rt as d,t as f}from"./three.module-BCat0h2u.js";var p=t(e(),1),m=n(),h=8,g=`
#define MAX_COLORS ${h}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform int uIterations;
uniform float uIntensity;
uniform float uBandWidth;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

  for (int j = 0; j < 5; j++) {
    if (j >= uIterations - 1) break;
    vec2 rr = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
    q += (rr - q) * 0.15;
  }

  vec3 col = vec3(0.0);
  float a = 1.0;

  if (uColorCount > 0) {
    vec2 s = q;
    vec3 sumCol = vec3(0.0);
    float cover = 0.0;
    for (int i = 0; i < MAX_COLORS; ++i) {
      if (i >= uColorCount) break;
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float m = mix(m0, m1, kMix);
      float w = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
      sumCol += uColors[i] * w;
      cover = max(cover, w);
    }
    col = clamp(sumCol, 0.0, 1.0);
    a = uTransparent > 0 ? cover : 1.0;
  } else {
    vec2 s = q;
    for (int k = 0; k < 3; ++k) {
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float m = mix(m0, m1, kMix);
      col[k] = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
    }
    a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
  }

  col *= uIntensity;

  if (uNoise > 0.0001) {
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
    col += (n - 0.5) * uNoise;
    col = clamp(col, 0.0, 1.0);
  }

  vec3 rgb = (uTransparent > 0) ? col * a : col;
  gl_FragColor = vec4(rgb, a);
}
`,_=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function v(e){let t=e.replace(`#`,``).trim(),n=t.length===3?[t[0]+t[0],t[1]+t[1],t[2]+t[2]]:[t.slice(0,2),t.slice(2,4),t.slice(4,6)];return new u(parseInt(n[0],16)/255,parseInt(n[1],16)/255,parseInt(n[2],16)/255)}function y({className:e=``,style:t,rotation:n=90,speed:y=.2,colors:b=[],transparent:x=!0,autoRotate:S=0,scale:C=1,frequency:w=1,warpStrength:T=1,mouseInfluence:E=1,parallax:D=.5,noise:O=.15,iterations:k=1,intensity:A=1.5,bandWidth:j=6}){let M=(0,p.useRef)(null),N=(0,p.useRef)(null),P=(0,p.useRef)(null),F=(0,p.useRef)(null),I=(0,p.useRef)(null),L=(0,p.useRef)(n),R=(0,p.useRef)(S),z=(0,p.useRef)(new s(0,0)),B=(0,p.useRef)(new s(0,0)),V=(0,p.useRef)(8);return(0,p.useEffect)(()=>{let e=M.current;if(!e)return;let t=new d,n=new a(-1,1,1,-1,0,1),p=new i(2,2),m=Array.from({length:h},()=>new u(0,0,0)),v=new c({vertexShader:_,fragmentShader:g,uniforms:{uCanvas:{value:new s(1,1)},uTime:{value:0},uSpeed:{value:y},uRot:{value:new s(1,0)},uColorCount:{value:0},uColors:{value:m},uTransparent:{value:+!!x},uScale:{value:C},uFrequency:{value:w},uWarpStrength:{value:T},uPointer:{value:new s(0,0)},uMouseInfluence:{value:E},uParallax:{value:D},uNoise:{value:O},uIterations:{value:k},uIntensity:{value:A},uBandWidth:{value:j}},premultipliedAlpha:!0,transparent:!0});F.current=v;let b=new r(p,v);t.add(b);let S=new f({antialias:!1,powerPreference:`high-performance`,alpha:!0});N.current=S,S.outputColorSpace=l,S.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),S.setClearColor(0,+!x),S.domElement.style.width=`100%`,S.domElement.style.height=`100%`,S.domElement.style.display=`block`,e.appendChild(S.domElement);let H=()=>{let t=e.clientWidth||1,n=e.clientHeight||1;S.setSize(t,n,!1),v.uniforms.uCanvas.value.set(t,n)};if(H(),`ResizeObserver`in window){let t=new ResizeObserver(H);t.observe(e),I.current=t}else window.addEventListener(`resize`,H);let U=new o,W=()=>{let e=U.getDelta(),r=U.elapsedTime;v.uniforms.uTime.value=r;let i=(L.current%360+R.current*r)*Math.PI/180;v.uniforms.uRot.value.set(Math.cos(i),Math.sin(i));let a=B.current,o=z.current;a.lerp(o,Math.min(1,e*V.current)),v.uniforms.uPointer.value.copy(a),S.render(t,n),P.current=requestAnimationFrame(W)};return P.current=requestAnimationFrame(W),()=>{P.current!==null&&cancelAnimationFrame(P.current),I.current?I.current.disconnect():window.removeEventListener(`resize`,H),p.dispose(),v.dispose(),S.dispose(),S.forceContextLoss(),S.domElement.parentElement===e&&e.removeChild(S.domElement)}},[j,w,A,k,E,O,D,C,y,x,T]),(0,p.useEffect)(()=>{let e=F.current,t=N.current;if(!e)return;L.current=n,R.current=S,e.uniforms.uSpeed.value=y,e.uniforms.uScale.value=C,e.uniforms.uFrequency.value=w,e.uniforms.uWarpStrength.value=T,e.uniforms.uMouseInfluence.value=E,e.uniforms.uParallax.value=D,e.uniforms.uNoise.value=O,e.uniforms.uIterations.value=k,e.uniforms.uIntensity.value=A,e.uniforms.uBandWidth.value=j;let r=b.filter(Boolean).slice(0,h).map(v);for(let t=0;t<h;t+=1){let n=e.uniforms.uColors.value[t];t<r.length?n.copy(r[t]):n.set(0,0,0)}e.uniforms.uColorCount.value=r.length,e.uniforms.uTransparent.value=+!!x,t&&t.setClearColor(0,+!x)},[n,S,y,C,w,T,E,D,O,k,A,j,b,x]),(0,p.useEffect)(()=>{let e=F.current,t=M.current;if(!e||!t)return;let n=e=>{let n=t.getBoundingClientRect(),r=(e.clientX-n.left)/(n.width||1)*2-1,i=-((e.clientY-n.top)/(n.height||1)*2-1);z.current.set(r,i)};return t.addEventListener(`pointermove`,n),()=>t.removeEventListener(`pointermove`,n)},[]),(0,m.jsx)(`div`,{ref:M,className:`color-bends-container ${e}`,style:t,"aria-hidden":`true`})}function b(){let[e,t]=(0,p.useState)(``);return(0,m.jsxs)(`section`,{className:`content-page section-pad`,children:[(0,m.jsx)(y,{className:`contact-color-bends`,colors:[`#ff5c7a`,`#8a5cff`,`#00ffd1`],rotation:53,speed:.2,scale:1,frequency:1,warpStrength:.96,mouseInfluence:1,noise:.38,parallax:1.4,iterations:1,intensity:1.5,bandWidth:3.5,transparent:!0,autoRotate:0}),(0,m.jsxs)(`div`,{className:`container narrow`,children:[(0,m.jsx)(`p`,{className:`eyebrow`,children:`Contact`}),(0,m.jsx)(`h1`,{className:`page-title`,children:`Let’s make something memorable.`}),(0,m.jsxs)(`form`,{className:`contact-form`,onSubmit:async e=>{e.preventDefault(),t(`Sending....`);let n=e.currentTarget,r=new FormData(n);r.append(`access_key`,`75e2f172-f44f-4deb-a1dc-8b70bb013f46`);try{(await(await fetch(`https://api.web3forms.com/submit`,{method:`POST`,body:r})).json()).success?(t(`Form Submitted Successfully`),n.reset()):t(`Error`)}catch{t(`Error`)}},children:[(0,m.jsx)(`label`,{htmlFor:`contact-name`,children:`Name`}),(0,m.jsx)(`input`,{id:`contact-name`,type:`text`,name:`name`,autoComplete:`name`,required:!0}),(0,m.jsx)(`label`,{htmlFor:`contact-email`,children:`Email`}),(0,m.jsx)(`input`,{id:`contact-email`,type:`email`,name:`email`,autoComplete:`email`,required:!0}),(0,m.jsx)(`label`,{htmlFor:`contact-service`,children:`What are you looking for?`}),(0,m.jsxs)(`select`,{id:`contact-service`,name:`service`,defaultValue:``,required:!0,children:[(0,m.jsx)(`option`,{value:``,disabled:!0,children:`Select a service`}),(0,m.jsx)(`option`,{value:`frontend`,children:`Frontend`}),(0,m.jsx)(`option`,{value:`photography`,children:`Photography`}),(0,m.jsx)(`option`,{value:`videography`,children:`Videography`})]}),(0,m.jsx)(`label`,{htmlFor:`contact-message`,children:`Message`}),(0,m.jsx)(`textarea`,{id:`contact-message`,name:`message`,rows:`6`,required:!0}),(0,m.jsxs)(`div`,{className:`contact-form-footer`,children:[(0,m.jsx)(`button`,{type:`submit`,disabled:e===`Sending....`,children:e===`Sending....`?`Sending....`:`Submit Form`}),(0,m.jsx)(`span`,{className:`contact-form-status`,role:`status`,"aria-live":`polite`,children:e})]})]}),(0,m.jsxs)(`div`,{className:`contact-links contact-page-links`,children:[(0,m.jsxs)(`a`,{href:`mailto:prashanamahan13@gmail.com`,children:[(0,m.jsx)(`span`,{children:`Email`}),(0,m.jsx)(`span`,{children:`prashanamahan13@gmail.com`})]}),(0,m.jsxs)(`a`,{href:`https://www.instagram.com/_prashanna.maharjan/`,target:`_blank`,rel:`noreferrer`,children:[(0,m.jsx)(`span`,{children:`Instagram`}),(0,m.jsx)(`span`,{children:`_prashanna.maharjan/`})]}),(0,m.jsxs)(`a`,{href:`tel:+9779843958426`,children:[(0,m.jsx)(`span`,{children:`Phone`}),(0,m.jsx)(`span`,{children:`9843958426`})]}),(0,m.jsxs)(`a`,{href:`http://linkedin.com/in/prashanna-maharjan-32443b342`,target:`_blank`,rel:`noreferrer`,children:[(0,m.jsx)(`span`,{children:`LinkedIn`}),(0,m.jsx)(`span`,{children:`LinkedIn profile`})]}),(0,m.jsxs)(`a`,{href:`https://linktr.ee/Prashanna_Maharjan?utm_source=linktree_profile_share&ltsid=02e487d4-f569-411e-8860-dcb3ffe25c0d`,target:`_blank`,rel:`noreferrer`,children:[(0,m.jsx)(`span`,{children:`More links`}),(0,m.jsx)(`span`,{children:`linktr.ee`})]})]})]})]})}export{b as default};