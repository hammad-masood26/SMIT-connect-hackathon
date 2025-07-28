(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[140],{2898:function(e,r,n){"use strict";n.d(r,{Z:function(){return createLucideIcon}});var l=n(2265),c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),createLucideIcon=(e,r)=>{let n=(0,l.forwardRef)(({color:n="currentColor",size:d=24,strokeWidth:f=2,absoluteStrokeWidth:h,className:y="",children:g,...b},v)=>(0,l.createElement)("svg",{ref:v,...c,width:d,height:d,stroke:n,strokeWidth:h?24*Number(f)/Number(d):f,className:["lucide",`lucide-${toKebabCase(e)}`,y].join(" "),...b},[...r.map(([e,r])=>(0,l.createElement)(e,r)),...Array.isArray(g)?g:[g]]));return n.displayName=`${e}`,n}},3067:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},4056:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]])},5883:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},9036:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]])},2299:function(e,r,n){Promise.resolve().then(n.bind(n,8260))},8260:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return AdminSettings}});var l=n(7437),c=n(2265),d=n(4033),f=n(3067),h=n(9036),y=n(4056),g=n(5883),b=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let v=(0,b.Z)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var N=n(5925);function AdminSettings(){let[e,r]=(0,c.useState)(null),n=(0,d.useRouter)();return((0,c.useEffect)(()=>{let e=localStorage.getItem("admin");e?r(JSON.parse(e)):n.push("/admin/login")},[n]),e)?(0,l.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,l.jsx)("header",{className:"bg-white shadow-sm border-b",children:(0,l.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,l.jsxs)("div",{className:"flex items-center py-4",children:[(0,l.jsxs)("button",{onClick:()=>n.back(),className:"flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200",children:[(0,l.jsx)(f.Z,{className:"h-5 w-5"}),(0,l.jsx)("span",{children:"Back"})]}),(0,l.jsx)("h1",{className:"text-2xl font-bold text-gray-900 ml-4",children:"Admin Settings"})]})})}),(0,l.jsx)("main",{className:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Admin Information"}),(0,l.jsx)("div",{className:"space-y-4",children:(0,l.jsxs)("div",{className:"flex items-center space-x-3 p-4 border border-gray-200 rounded-lg",children:[(0,l.jsx)(h.Z,{className:"h-5 w-5 text-saylani-green"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-medium text-gray-900",children:e.name}),(0,l.jsx)("p",{className:"text-sm text-gray-600",children:e.email})]})]})})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"System Information"}),(0,l.jsx)("div",{className:"space-y-4",children:(0,l.jsxs)("div",{className:"flex items-center space-x-3 p-4 border border-gray-200 rounded-lg",children:[(0,l.jsx)(y.Z,{className:"h-5 w-5 text-gray-600"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-medium text-gray-900",children:"Saylani Connect Admin Panel"}),(0,l.jsx)("p",{className:"text-sm text-gray-600",children:"Version 1.0.0"})]})]})})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Account"}),(0,l.jsx)("div",{className:"space-y-4",children:(0,l.jsxs)("button",{onClick:()=>{localStorage.removeItem("admin"),N.default.success("Logged out successfully"),n.push("/")},className:"w-full flex items-center justify-between p-4 border border-red-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-colors duration-200",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,l.jsx)(g.Z,{className:"h-5 w-5 text-red-600"}),(0,l.jsxs)("div",{className:"text-left",children:[(0,l.jsx)("h3",{className:"font-medium text-red-900",children:"Logout"}),(0,l.jsx)("p",{className:"text-sm text-red-600",children:"Sign out of admin panel"})]})]}),(0,l.jsx)(f.Z,{className:"h-5 w-5 text-red-400 rotate-180"})]})})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Quick Actions"}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,l.jsxs)("button",{onClick:()=>n.push("/admin/appointments"),className:"flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-saylani-green hover:bg-saylani-green/5 transition-colors duration-200",children:[(0,l.jsx)(v,{className:"h-6 w-6 text-saylani-green"}),(0,l.jsxs)("div",{className:"text-left",children:[(0,l.jsx)("h4",{className:"font-medium text-gray-900",children:"Manage Appointments"}),(0,l.jsx)("p",{className:"text-sm text-gray-600",children:"Review and process"})]})]}),(0,l.jsxs)("button",{onClick:()=>n.push("/admin/help-requests"),className:"flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-saylani-blue hover:bg-saylani-blue/5 transition-colors duration-200",children:[(0,l.jsx)(v,{className:"h-6 w-6 text-saylani-blue"}),(0,l.jsxs)("div",{className:"text-left",children:[(0,l.jsx)("h4",{className:"font-medium text-gray-900",children:"Manage Help Requests"}),(0,l.jsx)("p",{className:"text-sm text-gray-600",children:"Process assistance"})]})]})]})]})]})})]}):null}},622:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),c=Symbol.for("react.element"),d=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),f=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,n){var l,y={},g=null,b=null;for(l in void 0!==n&&(g=""+n),void 0!==r.key&&(g=""+r.key),void 0!==r.ref&&(b=r.ref),r)d.call(r,l)&&!h.hasOwnProperty(l)&&(y[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps)void 0===y[l]&&(y[l]=r[l]);return{$$typeof:c,type:e,key:g,ref:b,props:y,_owner:f.current}}r.jsx=q,r.jsxs=q},7437:function(e,r,n){"use strict";e.exports=n(622)},4033:function(e,r,n){e.exports=n(94)},5925:function(e,r,n){"use strict";let l,c;n.r(r),n.d(r,{CheckmarkIcon:function(){return V},ErrorIcon:function(){return P},LoaderIcon:function(){return R},ToastBar:function(){return er},ToastIcon:function(){return M},Toaster:function(){return Oe},default:function(){return ei},resolveValue:function(){return dist_f},toast:function(){return dist_c},useToaster:function(){return O},useToasterStore:function(){return D}});var d=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,y=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,o=(e,r)=>{let n="",l="",c="";for(let d in e){let f=e[d];"@"==d[0]?"i"==d[1]?n=d+" "+f+";":l+="f"==d[1]?o(f,d):d+"{"+o(f,"k"==d[1]?"":r)+"}":"object"==typeof f?l+=o(f,r?r.replace(/([^,])+/g,e=>d.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):d):null!=f&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(d,f):d+":"+f+";")}return n+(r&&c?r+"{"+c+"}":c)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,c)=>{var d;let f=s(e),v=b[f]||(b[f]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(f));if(!b[v]){let r=f!==e?e:(e=>{let r,n,l=[{}];for(;r=h.exec(e.replace(y,""));)r[4]?l.shift():r[3]?(n=r[3].replace(g," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(g," ").trim();return l[0]})(e);b[v]=o(c?{["@keyframes "+v]:r}:r,n?"":"."+v)}let N=n&&b.g?b.g:null;return n&&(b.g=b[v]),d=b[v],N?r.data=r.data.replace(N,d):-1===r.data.indexOf(d)&&(r.data=l?d+r.data:r.data+d),v},p=(e,r,n)=>e.reduce((e,l,c)=>{let d=r[c];if(d&&d.call){let e=d(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==d?"":d)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let v,N,w,_=u.bind({k:1});function m(e,r,n,l){o.p=r,v=e,N=n,w=l}function j(e,r){let n=this||{};return function(){let l=arguments;function a(c,d){let f=Object.assign({},c),h=f.className||a.className;n.p=Object.assign({theme:N&&N()},f),n.o=/ *go\d+/.test(h),f.className=u.apply(n,l)+(h?" "+h:""),r&&(f.ref=d);let y=e;return e[0]&&(y=f.as||e,delete f.as),w&&y[0]&&w(f),v(y,f)}return r?r(a):a}}var W=e=>"function"==typeof e,dist_f=(e,r)=>W(e)?e(r):e,k=(l=0,()=>(++l).toString()),A=()=>{if(void 0===c&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");c=!e||e.matches}return c},U=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return U(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:l}=r;return{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let c=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+c}))}}},E=[],C={toasts:[],pausedAt:void 0},dist_u=e=>{C=U(C,e),E.forEach(e=>{e(C)})},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[r,n]=(0,d.useState)(C),l=(0,d.useRef)(C);(0,d.useEffect)(()=>(l.current!==C&&n(C),E.push(n),()=>{let e=E.indexOf(n);e>-1&&E.splice(e,1)}),[]);let c=r.toasts.map(r=>{var n,l,c;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||(null==(n=e[r.type])?void 0:n.removeDelay)||(null==e?void 0:e.removeDelay),duration:r.duration||(null==(l=e[r.type])?void 0:l.duration)||(null==e?void 0:e.duration)||$[r.type],style:{...e.style,...null==(c=e[r.type])?void 0:c.style,...r.style}}});return{...r,toasts:c}},J=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||k()}),x=e=>(r,n)=>{let l=J(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_c=(e,r)=>x("blank")(e,r);dist_c.error=x("error"),dist_c.success=x("success"),dist_c.loading=x("loading"),dist_c.custom=x("custom"),dist_c.dismiss=e=>{dist_u({type:3,toastId:e})},dist_c.remove=e=>dist_u({type:4,toastId:e}),dist_c.promise=(e,r,n)=>{let l=dist_c.loading(r.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let c=r.success?dist_f(r.success,e):void 0;return c?dist_c.success(c,{id:l,...n,...null==n?void 0:n.success}):dist_c.dismiss(l),e}).catch(e=>{let c=r.error?dist_f(r.error,e):void 0;c?dist_c.error(c,{id:l,...n,...null==n?void 0:n.error}):dist_c.dismiss(l)}),e};var K=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},X=()=>{dist_u({type:5,time:Date.now()})},S=new Map,I=1e3,ee=(e,r=I)=>{if(S.has(e))return;let n=setTimeout(()=>{S.delete(e),dist_u({type:4,toastId:e})},r);S.set(e,n)},O=e=>{let{toasts:r,pausedAt:n}=D(e);(0,d.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_c.dismiss(r.id);return}return setTimeout(()=>dist_c.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,d.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),c=(0,d.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=n||{},f=r.filter(r=>(r.position||d)===(e.position||d)&&r.height),h=f.findIndex(r=>r.id===e.id),y=f.filter((e,r)=>r<h&&e.visible).length;return f.filter(e=>e.visible).slice(...l?[y+1]:[0,y]).reduce((e,r)=>e+(r.height||0)+c,0)},[r]);return(0,d.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)ee(e.id,e.removeDelay);else{let r=S.get(e.id);r&&(clearTimeout(r),S.delete(e.id))}})},[r]),{toasts:r,handlers:{updateHeight:K,startPause:X,endPause:l,calculateOffset:c}}},L=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Z=_`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=_`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,P=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,T=_`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,R=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${T} 1s linear infinite;
`,H=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,F=_`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,V=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${F} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=j("div")`
  position: absolute;
`,Y=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=_`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?d.createElement(G,null,r):r:"blank"===n?null:d.createElement(Y,null,d.createElement(R,{...l}),"loading"!==n&&d.createElement(B,null,"error"===n?d.createElement(P,{...l}):d.createElement(V,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,et=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,es=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,c]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${_(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${_(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},er=d.memo(({toast:e,position:r,style:n,children:l})=>{let c=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},f=d.createElement(M,{toast:e}),h=d.createElement(es,{...e.ariaProps},dist_f(e.message,e));return d.createElement(et,{className:e.className,style:{...c,...n,...e.style}},"function"==typeof l?l({icon:f,message:h}):d.createElement(d.Fragment,null,f,h))});m(d.createElement);var ve=({id:e,className:r,style:n,onHeightUpdate:l,children:c})=>{let f=d.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return d.createElement("div",{ref:f,className:r,style:n},c)},Ee=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:A()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},ea=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Oe=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:c,containerStyle:f,containerClassName:h})=>{let{toasts:y,handlers:g}=O(n);return d.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...f},className:h,onMouseEnter:g.startPause,onMouseLeave:g.endPause},y.map(n=>{let f=n.position||r,h=Ee(f,g.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return d.createElement(ve,{id:n.id,key:n.id,onHeightUpdate:g.updateHeight,className:n.visible?ea:"",style:h},"custom"===n.type?dist_f(n.message,n):c?c(n):d.createElement(er,{toast:n,position:f}))}))},ei=dist_c}},function(e){e.O(0,[971,472,744],function(){return e(e.s=2299)}),_N_E=e.O()}]);