import{r as e}from"./index.UCAuQZPX.js";import{u as w,s as L,a as $,P as U,L as b}from"./motion.jMRVqGf2.js";function I(){const n=e.useRef(!1);return w(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function K(){const n=I(),[o,t]=e.useState(0),r=e.useCallback(()=>{n.current&&t(o+1)},[o]);return[e.useCallback(()=>L.postRender(r),[r]),o]}class O extends e.Component{getSnapshotBeforeUpdate(o){const t=this.props.childRef.current;if(t&&o.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function S({children:n,isPresent:o}){const t=e.useId(),r=e.useRef(null),m=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:a,height:f,top:c,left:h}=m.current;if(o||!r.current||!a||!f)return;r.current.dataset.motionPopId=t;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${f}px !important;
            top: ${c}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[o]),e.createElement(O,{isPresent:o,childRef:r,sizeRef:m},e.cloneElement(n,{ref:r}))}const y=({children:n,initial:o,isPresent:t,onExitComplete:r,custom:m,presenceAffectsLayout:a,mode:f})=>{const c=$(B),h=e.useId(),l=e.useMemo(()=>({id:h,initial:o,isPresent:t,custom:m,onExitComplete:i=>{c.set(i,!0);for(const u of c.values())if(!u)return;r&&r()},register:i=>(c.set(i,!1),()=>c.delete(i))}),a?void 0:[t]);return e.useMemo(()=>{c.forEach((i,u)=>c.set(u,!1))},[t]),e.useEffect(()=>{!t&&!c.size&&r&&r()},[t]),f==="popLayout"&&(n=e.createElement(S,{isPresent:t},n)),e.createElement(U.Provider,{value:l},n)};function B(){return new Map}function G(n){return e.useEffect(()=>()=>n(),[])}const E=n=>n.key||"";function T(n,o){n.forEach(t=>{const r=E(t);o.set(r,t)})}function D(n){const o=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&o.push(t)}),o}const W=({children:n,custom:o,initial:t=!0,onExitComplete:r,exitBeforeEnter:m,presenceAffectsLayout:a=!0,mode:f="sync"})=>{let[c]=K();const h=e.useContext(b).forceRender;h&&(c=h);const l=I(),i=D(n);let u=i;const d=new Set,R=e.useRef(u),C=e.useRef(new Map).current,x=e.useRef(!0);if(w(()=>{x.current=!1,T(i,C),R.current=u}),G(()=>{x.current=!0,C.clear(),d.clear()}),x.current)return e.createElement(e.Fragment,null,u.map(s=>e.createElement(y,{key:E(s),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:a,mode:f},s)));u=[...u];const g=R.current.map(E),M=i.map(E),P=g.length;for(let s=0;s<P;s++){const p=g[s];M.indexOf(p)===-1&&d.add(p)}return f==="wait"&&d.size&&(u=[]),d.forEach(s=>{if(M.indexOf(s)!==-1)return;const p=C.get(s);if(!p)return;const z=g.indexOf(s),k=()=>{C.delete(s),d.delete(s);const v=R.current.findIndex(F=>F.key===s);if(R.current.splice(v,1),!d.size){if(R.current=i,l.current===!1)return;c(),r&&r()}};u.splice(z,0,e.createElement(y,{key:E(p),isPresent:!1,onExitComplete:k,custom:o,presenceAffectsLayout:a,mode:f},p))}),u=u.map(s=>{const p=s.key;return d.has(p)?s:e.createElement(y,{key:E(s),isPresent:!0,presenceAffectsLayout:a,mode:f},s)}),e.createElement(e.Fragment,null,d.size?u:u.map(s=>e.cloneElement(s)))};export{W as A};