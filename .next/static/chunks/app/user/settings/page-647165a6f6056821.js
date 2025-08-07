(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{2898:function(e,r,n){"use strict";n.d(r,{Z:function(){return createLucideIcon}});var l=n(2265),c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),createLucideIcon=(e,r)=>{let n=(0,l.forwardRef)(({color:n="currentColor",size:d=24,strokeWidth:h=2,absoluteStrokeWidth:f,className:y="",children:g,...b},v)=>(0,l.createElement)("svg",{ref:v,...c,width:d,height:d,stroke:n,strokeWidth:f?24*Number(h)/Number(d):h,className:["lucide",`lucide-${toKebabCase(e)}`,y].join(" "),...b},[...r.map(([e,r])=>(0,l.createElement)(e,r)),...Array.isArray(g)?g:[g]]));return n.displayName=`${e}`,n}},3067:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},6637:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]])},4056:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
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
 */let c=(0,l.Z)("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]])},2549:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},3274:function(e,r,n){Promise.resolve().then(n.bind(n,5760))},5760:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return UserSettings}});var l=n(7437),c=n(2265),d=n(4033),h=n(3067),f=n(6637),y=n(9036),g=n(5883),b=n(4056),v=n(2549),w=n(5925);function UserSettings(){let[e,r]=(0,c.useState)(null),[n,N]=(0,c.useState)(!1),[k,_]=(0,c.useState)(!1),C=(0,d.useRouter)();return((0,c.useEffect)(()=>{let e=localStorage.getItem("user");e?r(JSON.parse(e)):C.push("/user/login")},[C]),e)?(0,l.jsxs)("div",{className:"min-h-screen bg-gray-50 pb-20",children:[(0,l.jsx)("header",{className:"bg-white shadow-sm border-b",children:(0,l.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,l.jsxs)("div",{className:"flex items-center py-4",children:[(0,l.jsxs)("button",{onClick:()=>C.back(),className:"flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200",children:[(0,l.jsx)(h.Z,{className:"h-5 w-5"}),(0,l.jsx)("span",{children:"Back"})]}),(0,l.jsx)("h1",{className:"text-2xl font-bold text-gray-900 ml-4",children:"Settings"})]})})}),(0,l.jsx)("main",{className:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Legal Information"}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("button",{onClick:()=>N(!0),className:"w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-saylani-green hover:bg-saylani-green/5 transition-colors duration-200",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,l.jsx)(f.Z,{className:"h-5 w-5 text-saylani-green"}),(0,l.jsxs)("div",{className:"text-left",children:[(0,l.jsx)("h3",{className:"font-medium text-gray-900",children:"Terms & Conditions"}),(0,l.jsx)("p",{className:"text-sm text-gray-600",children:"Read our terms of service"})]})]}),(0,l.jsx)(h.Z,{className:"h-5 w-5 text-gray-400 rotate-180"})]}),(0,l.jsxs)("button",{onClick:()=>_(!0),className:"w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-saylani-green hover:bg-saylani-green/5 transition-colors duration-200",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,l.jsx)(y.Z,{className:"h-5 w-5 text-saylani-blue"}),(0,l.jsxs)("div",{className:"text-left",children:[(0,l.jsx)("h3",{className:"font-medium text-gray-900",children:"Privacy Policy"}),(0,l.jsx)("p",{className:"text-sm text-gray-600",children:"How we protect your data"})]})]}),(0,l.jsx)(h.Z,{className:"h-5 w-5 text-gray-400 rotate-180"})]})]})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Account"}),(0,l.jsx)("div",{className:"space-y-4",children:(0,l.jsxs)("button",{onClick:()=>{localStorage.removeItem("user"),w.default.success("Logged out successfully"),C.push("/")},className:"w-full flex items-center justify-between p-4 border border-red-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-colors duration-200",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,l.jsx)(g.Z,{className:"h-5 w-5 text-red-600"}),(0,l.jsxs)("div",{className:"text-left",children:[(0,l.jsx)("h3",{className:"font-medium text-red-900",children:"Logout"}),(0,l.jsx)("p",{className:"text-sm text-red-600",children:"Sign out of your account"})]})]}),(0,l.jsx)(h.Z,{className:"h-5 w-5 text-red-400 rotate-180"})]})})]}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"About"}),(0,l.jsx)("div",{className:"space-y-4",children:(0,l.jsxs)("div",{className:"flex items-center space-x-3 p-4 border border-gray-200 rounded-lg",children:[(0,l.jsx)(b.Z,{className:"h-5 w-5 text-gray-600"}),(0,l.jsxs)("div",{className:"text-left",children:[(0,l.jsx)("h3",{className:"font-medium text-gray-900",children:"Saylani Connect"}),(0,l.jsx)("p",{className:"text-sm text-gray-600",children:"Version 1.0.0"})]})]})})]})]})}),n&&(0,l.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:(0,l.jsx)("div",{className:"bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto",children:(0,l.jsxs)("div",{className:"p-6",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold text-gray-900",children:"Terms & Conditions"}),(0,l.jsx)("button",{onClick:()=>N(!1),className:"text-gray-400 hover:text-gray-600",children:(0,l.jsx)(v.Z,{className:"h-6 w-6"})})]}),(0,l.jsxs)("div",{className:"prose prose-sm max-w-none",children:[(0,l.jsx)("h3",{children:"1. Acceptance of Terms"}),(0,l.jsx)("p",{children:"By accessing and using Saylani Connect, you accept and agree to be bound by the terms and provision of this agreement."}),(0,l.jsx)("h3",{children:"2. Use License"}),(0,l.jsx)("p",{children:"Permission is granted to temporarily download one copy of the materials on Saylani Connect for personal, non-commercial transitory viewing only."}),(0,l.jsx)("h3",{children:"3. Disclaimer"}),(0,l.jsx)("p",{children:"The materials on Saylani Connect are provided on an 'as is' basis. Saylani Welfare International Trust makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."}),(0,l.jsx)("h3",{children:"4. Limitations"}),(0,l.jsx)("p",{children:"In no event shall Saylani Welfare International Trust or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Saylani Connect."}),(0,l.jsx)("h3",{children:"5. Accuracy of Materials"}),(0,l.jsx)("p",{children:"The materials appearing on Saylani Connect could include technical, typographical, or photographic errors. Saylani Welfare International Trust does not warrant that any of the materials on its website are accurate, complete or current."}),(0,l.jsx)("h3",{children:"6. Links"}),(0,l.jsx)("p",{children:"Saylani Welfare International Trust has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Saylani Welfare International Trust of the site."}),(0,l.jsx)("h3",{children:"7. Modifications"}),(0,l.jsx)("p",{children:"Saylani Welfare International Trust may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use."})]})]})})}),k&&(0,l.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:(0,l.jsx)("div",{className:"bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto",children:(0,l.jsxs)("div",{className:"p-6",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold text-gray-900",children:"Privacy Policy"}),(0,l.jsx)("button",{onClick:()=>_(!1),className:"text-gray-400 hover:text-gray-600",children:(0,l.jsx)(v.Z,{className:"h-6 w-6"})})]}),(0,l.jsxs)("div",{className:"prose prose-sm max-w-none",children:[(0,l.jsx)("h3",{children:"1. Information We Collect"}),(0,l.jsx)("p",{children:"We collect information you provide directly to us, such as when you create an account, submit a request, or contact us for support."}),(0,l.jsx)("h3",{children:"2. How We Use Your Information"}),(0,l.jsx)("p",{children:"We use the information we collect to provide, maintain, and improve our services, process your requests, and communicate with you."}),(0,l.jsx)("h3",{children:"3. Information Sharing"}),(0,l.jsx)("p",{children:"We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy."}),(0,l.jsx)("h3",{children:"4. Data Security"}),(0,l.jsx)("p",{children:"We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."}),(0,l.jsx)("h3",{children:"5. Data Retention"}),(0,l.jsx)("p",{children:"We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy."}),(0,l.jsx)("h3",{children:"6. Your Rights"}),(0,l.jsx)("p",{children:"You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us."}),(0,l.jsx)("h3",{children:"7. Changes to This Policy"}),(0,l.jsx)("p",{children:"We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page."}),(0,l.jsx)("h3",{children:"8. Contact Us"}),(0,l.jsx)("p",{children:"If you have any questions about this privacy policy, please contact us at privacy@saylani.org"})]})]})})}),(0,l.jsx)("nav",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2",children:(0,l.jsxs)("div",{className:"flex justify-around items-center",children:[(0,l.jsxs)("button",{onClick:()=>C.push("/user/dashboard"),className:"flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-colors duration-200",children:[(0,l.jsx)("div",{className:"w-5 h-5 bg-gray-400 rounded"}),(0,l.jsx)("span",{className:"text-xs font-medium",children:"Home"})]}),(0,l.jsxs)("button",{onClick:()=>C.push("/user/appointment"),className:"flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-colors duration-200",children:[(0,l.jsx)("div",{className:"w-5 h-5 bg-gray-400 rounded"}),(0,l.jsx)("span",{className:"text-xs font-medium",children:"Appointment"})]}),(0,l.jsxs)("button",{onClick:()=>C.push("/user/help-request"),className:"flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-colors duration-200",children:[(0,l.jsx)("div",{className:"w-5 h-5 bg-gray-400 rounded"}),(0,l.jsx)("span",{className:"text-xs font-medium",children:"Help"})]}),(0,l.jsxs)("button",{onClick:()=>C.push("/user/my-requests"),className:"flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-colors duration-200",children:[(0,l.jsx)("div",{className:"w-5 h-5 bg-gray-400 rounded"}),(0,l.jsx)("span",{className:"text-xs font-medium",children:"Requests"})]}),(0,l.jsxs)("button",{onClick:()=>C.push("/user/profile"),className:"flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-colors duration-200",children:[(0,l.jsx)("div",{className:"w-5 h-5 bg-gray-400 rounded"}),(0,l.jsx)("span",{className:"text-xs font-medium",children:"Profile"})]})]})})]}):null}},622:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),c=Symbol.for("react.element"),d=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),h=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,n){var l,y={},g=null,b=null;for(l in void 0!==n&&(g=""+n),void 0!==r.key&&(g=""+r.key),void 0!==r.ref&&(b=r.ref),r)d.call(r,l)&&!f.hasOwnProperty(l)&&(y[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps)void 0===y[l]&&(y[l]=r[l]);return{$$typeof:c,type:e,key:g,ref:b,props:y,_owner:h.current}}r.jsx=q,r.jsxs=q},7437:function(e,r,n){"use strict";e.exports=n(622)},4033:function(e,r,n){e.exports=n(94)},5925:function(e,r,n){"use strict";let l,c;n.r(r),n.d(r,{CheckmarkIcon:function(){return F},ErrorIcon:function(){return P},LoaderIcon:function(){return R},ToastBar:function(){return er},ToastIcon:function(){return M},Toaster:function(){return Oe},default:function(){return ei},resolveValue:function(){return dist_f},toast:function(){return dist_c},useToaster:function(){return O},useToasterStore:function(){return D}});var d=n(2265);let h={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||h,f=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,y=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,o=(e,r)=>{let n="",l="",c="";for(let d in e){let h=e[d];"@"==d[0]?"i"==d[1]?n=d+" "+h+";":l+="f"==d[1]?o(h,d):d+"{"+o(h,"k"==d[1]?"":r)+"}":"object"==typeof h?l+=o(h,r?r.replace(/([^,])+/g,e=>d.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):d):null!=h&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(d,h):d+":"+h+";")}return n+(r&&c?r+"{"+c+"}":c)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,c)=>{var d;let h=s(e),v=b[h]||(b[h]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(h));if(!b[v]){let r=h!==e?e:(e=>{let r,n,l=[{}];for(;r=f.exec(e.replace(y,""));)r[4]?l.shift():r[3]?(n=r[3].replace(g," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(g," ").trim();return l[0]})(e);b[v]=o(c?{["@keyframes "+v]:r}:r,n?"":"."+v)}let w=n&&b.g?b.g:null;return n&&(b.g=b[v]),d=b[v],w?r.data=r.data.replace(w,d):-1===r.data.indexOf(d)&&(r.data=l?d+r.data:r.data+d),v},p=(e,r,n)=>e.reduce((e,l,c)=>{let d=r[c];if(d&&d.call){let e=d(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==d?"":d)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let v,w,N,k=u.bind({k:1});function m(e,r,n,l){o.p=r,v=e,w=n,N=l}function j(e,r){let n=this||{};return function(){let l=arguments;function a(c,d){let h=Object.assign({},c),f=h.className||a.className;n.p=Object.assign({theme:w&&w()},h),n.o=/ *go\d+/.test(f),h.className=u.apply(n,l)+(f?" "+f:""),r&&(h.ref=d);let y=e;return e[0]&&(y=h.as||e,delete h.as),N&&y[0]&&N(h),v(y,h)}return r?r(a):a}}var W=e=>"function"==typeof e,dist_f=(e,r)=>W(e)?e(r):e,_=(l=0,()=>(++l).toString()),A=()=>{if(void 0===c&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");c=!e||e.matches}return c},U=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return U(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:l}=r;return{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let c=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+c}))}}},C=[],E={toasts:[],pausedAt:void 0},dist_u=e=>{E=U(E,e),C.forEach(e=>{e(E)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[r,n]=(0,d.useState)(E),l=(0,d.useRef)(E);(0,d.useEffect)(()=>(l.current!==E&&n(E),C.push(n),()=>{let e=C.indexOf(n);e>-1&&C.splice(e,1)}),[]);let c=r.toasts.map(r=>{var n,l,c;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||(null==(n=e[r.type])?void 0:n.removeDelay)||(null==e?void 0:e.removeDelay),duration:r.duration||(null==(l=e[r.type])?void 0:l.duration)||(null==e?void 0:e.duration)||S[r.type],style:{...e.style,...null==(c=e[r.type])?void 0:c.style,...r.style}}});return{...r,toasts:c}},J=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||_()}),x=e=>(r,n)=>{let l=J(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_c=(e,r)=>x("blank")(e,r);dist_c.error=x("error"),dist_c.success=x("success"),dist_c.loading=x("loading"),dist_c.custom=x("custom"),dist_c.dismiss=e=>{dist_u({type:3,toastId:e})},dist_c.remove=e=>dist_u({type:4,toastId:e}),dist_c.promise=(e,r,n)=>{let l=dist_c.loading(r.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let c=r.success?dist_f(r.success,e):void 0;return c?dist_c.success(c,{id:l,...n,...null==n?void 0:n.success}):dist_c.dismiss(l),e}).catch(e=>{let c=r.error?dist_f(r.error,e):void 0;c?dist_c.error(c,{id:l,...n,...null==n?void 0:n.error}):dist_c.dismiss(l)}),e};var K=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},X=()=>{dist_u({type:5,time:Date.now()})},I=new Map,T=1e3,ee=(e,r=T)=>{if(I.has(e))return;let n=setTimeout(()=>{I.delete(e),dist_u({type:4,toastId:e})},r);I.set(e,n)},O=e=>{let{toasts:r,pausedAt:n}=D(e);(0,d.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_c.dismiss(r.id);return}return setTimeout(()=>dist_c.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,d.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),c=(0,d.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=n||{},h=r.filter(r=>(r.position||d)===(e.position||d)&&r.height),f=h.findIndex(r=>r.id===e.id),y=h.filter((e,r)=>r<f&&e.visible).length;return h.filter(e=>e.visible).slice(...l?[y+1]:[0,y]).reduce((e,r)=>e+(r.height||0)+c,0)},[r]);return(0,d.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)ee(e.id,e.removeDelay);else{let r=I.get(e.id);r&&(clearTimeout(r),I.delete(e.id))}})},[r]),{toasts:r,handlers:{updateHeight:K,startPause:X,endPause:l,calculateOffset:c}}},Z=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,$=k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=k`
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

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${$} 0.15s ease-out forwards;
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
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,z=k`
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
  animation: ${z} 1s linear infinite;
`,H=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=k`
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
}`,F=j("div")`
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
    animation: ${B} 0.2s ease-out forwards;
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
`,Y=j("div")`
  position: absolute;
`,V=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=k`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${G} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?d.createElement(Q,null,r):r:"blank"===n?null:d.createElement(V,null,d.createElement(R,{...l}),"loading"!==n&&d.createElement(Y,null,"error"===n?d.createElement(P,{...l}):d.createElement(F,{...l})))},ye=e=>`
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
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,c]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${k(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},er=d.memo(({toast:e,position:r,style:n,children:l})=>{let c=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},h=d.createElement(M,{toast:e}),f=d.createElement(es,{...e.ariaProps},dist_f(e.message,e));return d.createElement(et,{className:e.className,style:{...c,...n,...e.style}},"function"==typeof l?l({icon:h,message:f}):d.createElement(d.Fragment,null,h,f))});m(d.createElement);var ve=({id:e,className:r,style:n,onHeightUpdate:l,children:c})=>{let h=d.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return d.createElement("div",{ref:h,className:r,style:n},c)},Ee=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:A()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},ea=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Oe=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:c,containerStyle:h,containerClassName:f})=>{let{toasts:y,handlers:g}=O(n);return d.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...h},className:f,onMouseEnter:g.startPause,onMouseLeave:g.endPause},y.map(n=>{let h=n.position||r,f=Ee(h,g.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return d.createElement(ve,{id:n.id,key:n.id,onHeightUpdate:g.updateHeight,className:n.visible?ea:"",style:f},"custom"===n.type?dist_f(n.message,n):c?c(n):d.createElement(er,{toast:n,position:h}))}))},ei=dist_c}},function(e){e.O(0,[971,472,744],function(){return e(e.s=3274)}),_N_E=e.O()}]);