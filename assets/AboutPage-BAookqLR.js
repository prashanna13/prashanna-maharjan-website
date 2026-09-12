import{a as e,o as t,t as n}from"./index-BlapRPmG.js";/* empty css                    */import{I as r,J as i,K as a,it as o,l as s,rt as c,t as l}from"./three.module-BCat0h2u.js";var u=t(e(),1),d=n(),f=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,p=`
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
`;function m({speed:e=5,scale:t=1,color:n=`#7B7481`,noiseIntensity:m=1.5,rotation:h=0}){let g=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let u=g.current;if(!u)return;let d=new l({canvas:u,alpha:!0,antialias:!0}),_=new c,v=new a(-1,1,1,-1,0,1),y=new i(2,2),b=new o({uniforms:{uTime:{value:0},uColor:{value:new s(n)},uSpeed:{value:e},uScale:{value:t},uRotation:{value:h},uNoiseIntensity:{value:m}},vertexShader:f,fragmentShader:p}),x=new r(y,b);_.add(x);let S=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,C,w=0,T=()=>{let{clientWidth:e,clientHeight:t}=u.parentElement;d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(e,t,!1)},E=e=>{let t=(e-w)/1e3;w=e,S||(b.uniforms.uTime.value+=t),d.render(_,v),C=requestAnimationFrame(E)};return T(),window.addEventListener(`resize`,T),C=requestAnimationFrame(E),()=>{cancelAnimationFrame(C),window.removeEventListener(`resize`,T),y.dispose(),b.dispose(),d.dispose()}},[n,m,h,t,e]),(0,d.jsx)(`canvas`,{ref:g,className:`silk-canvas`,"aria-hidden":`true`})}function h(){return(0,d.jsxs)(`section`,{className:`content-page section-pad`,children:[(0,d.jsx)(`div`,{className:`about-silk-background`,children:(0,d.jsx)(m,{speed:5.5,scale:1.3,color:`#9C7F49`,noiseIntensity:1,rotation:5.7})}),(0,d.jsxs)(`div`,{className:`container narrow`,children:[(0,d.jsx)(`p`,{className:`eyebrow`,children:`About`}),(0,d.jsx)(`h1`,{className:`page-title`,children:`Frontend developer × Photographer x Videographer`}),(0,d.jsxs)(`div`,{className:`text-block`,children:[(0,d.jsx)(`p`,{children:`I am Prashanna Maharjan, an enthusiastic Computer Science student at Taylor's University with a strong foundation in frontend development and creative digital production.`}),(0,d.jsx)(`p`,{children:`I am currently seeking an internship opportunity as a Frontend Developer, where I can apply my React skills, strengthen my UI/UX practice, and help build engaging, user-friendly web applications.`})]}),(0,d.jsxs)(`div`,{className:`cv-section`,children:[(0,d.jsx)(`h2`,{children:`Education`}),(0,d.jsxs)(`div`,{className:`cv-list`,children:[(0,d.jsxs)(`article`,{children:[(0,d.jsx)(`strong`,{children:`Taylor's University`}),(0,d.jsx)(`span`,{children:`Bachelor of Computer Science (Hons) · Mar 2022 - Dec 2026`})]}),(0,d.jsxs)(`article`,{children:[(0,d.jsx)(`strong`,{children:`Kathmandu Bernhardt College, Kathmandu`}),(0,d.jsx)(`span`,{children:`Computer Science & Business Studies · 2018 - 2021`})]}),(0,d.jsxs)(`article`,{children:[(0,d.jsx)(`strong`,{children:`Rarahil Memorial School, Kathmandu`}),(0,d.jsx)(`span`,{children:`SEE · 2018`})]})]})]}),(0,d.jsxs)(`div`,{className:`cv-section`,children:[(0,d.jsx)(`h2`,{children:`Experience`}),(0,d.jsxs)(`div`,{className:`cv-list`,children:[(0,d.jsxs)(`article`,{children:[(0,d.jsx)(`strong`,{children:`Frontend Developer Intern · Grafi Offshore Nepal`}),(0,d.jsx)(`span`,{children:`Lalitpur District, Nepal`}),(0,d.jsx)(`p`,{children:`Developed responsive web pages with HTML, CSS, JavaScript and React. Built reusable UI components and collaborated on testing, debugging and performance improvements.`})]}),(0,d.jsxs)(`article`,{children:[(0,d.jsx)(`strong`,{children:`Technical Crew · Katha haru`}),(0,d.jsx)(`span`,{children:`Lalitpur District, Nepal`}),(0,d.jsx)(`p`,{children:`Supported filming, photography, content creation, editing and post-production for visual projects.`})]}),(0,d.jsxs)(`article`,{children:[(0,d.jsx)(`strong`,{children:`Content Creator · Elements Studio`}),(0,d.jsx)(`span`,{children:`Lalitpur District, Nepal · Jul 2024 - Nov 2024`}),(0,d.jsx)(`p`,{children:`Captured and edited photos and videos for client projects and events while collaborating with creative teams.`})]}),(0,d.jsxs)(`article`,{children:[(0,d.jsx)(`strong`,{children:`Content Team · Paradygm TV`}),(0,d.jsx)(`span`,{children:`Jan 2022 - Dec 2022`}),(0,d.jsx)(`p`,{children:`Filmed, produced and edited video content for media projects and programs.`})]}),(0,d.jsxs)(`article`,{children:[(0,d.jsx)(`strong`,{children:`Graphic Designer · MOHP`}),(0,d.jsx)(`span`,{children:`Kathmandu · 2022`}),(0,d.jsx)(`p`,{children:`Designed graphics, layouts, infographics and promotional materials for organizational campaigns.`})]})]})]}),(0,d.jsxs)(`div`,{className:`about-grid`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{children:`Skills`}),(0,d.jsxs)(`ul`,{className:`skill-list`,children:[(0,d.jsx)(`li`,{children:`React · Beginner / Entry level`}),(0,d.jsx)(`li`,{children:`UI/UX design · Moderate`}),(0,d.jsx)(`li`,{children:`Photography · Good`}),(0,d.jsx)(`li`,{children:`Videography · Good`}),(0,d.jsx)(`li`,{children:`Graphic design · Moderate`}),(0,d.jsx)(`li`,{children:`Effective communication`}),(0,d.jsx)(`li`,{children:`Critical thinking`})]})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{children:`Languages & certification`}),(0,d.jsxs)(`ul`,{className:`skill-list`,children:[(0,d.jsx)(`li`,{children:`English · Good`}),(0,d.jsx)(`li`,{children:`Nepali · Fluent`}),(0,d.jsx)(`li`,{children:`Nepal bhasa · Fluent`}),(0,d.jsx)(`li`,{children:`React JS Professional Course`}),(0,d.jsx)(`li`,{children:`Agile Institute, Kathmandu · Jul - Nov 2024`})]})]})]})]})]})}export{h as default};