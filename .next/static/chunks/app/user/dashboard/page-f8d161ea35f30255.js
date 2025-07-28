(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[225],{2898:function(e,r,n){"use strict";n.d(r,{Z:function(){return createLucideIcon}});var l=n(2265),c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),createLucideIcon=(e,r)=>{let n=(0,l.forwardRef)(({color:n="currentColor",size:d=24,strokeWidth:h=2,absoluteStrokeWidth:g,className:f="",children:y,...b},v)=>(0,l.createElement)("svg",{ref:v,...c,width:d,height:d,stroke:n,strokeWidth:g?24*Number(h)/Number(d):h,className:["lucide",`lucide-${toKebabCase(e)}`,f].join(" "),...b},[...r.map(([e,r])=>(0,l.createElement)(e,r)),...Array.isArray(y)?y:[y]]));return n.displayName=`${e}`,n}},8203:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]])},6637:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]])},7810:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]])},5883:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var l=n(2898);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},5481:function(e,r,n){Promise.resolve().then(n.bind(n,5955))},5955:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return UserDashboard}});var l=n(7437),c=n(2265),d=n(4033),h=n(5883),g=n(8203),f=n(7810),y=n(6637),b=n(5925);let getUserAppointments=async e=>{try{let r=JSON.parse(localStorage.getItem("userAppointments")||"{}");return r[e]||[]}catch(e){return console.error("Error fetching appointments:",e),[]}},getUserHelpRequests=async e=>{try{let r=JSON.parse(localStorage.getItem("userHelpRequests")||"{}");return r[e]||[]}catch(e){return console.error("Error fetching help requests:",e),[]}};function UserDashboard(){let[e,r]=(0,c.useState)(null),[n,v]=(0,c.useState)(!0),N=(0,d.useRouter)(),[w,k]=(0,c.useState)([]),[_,E]=(0,c.useState)([]);(0,c.useEffect)(()=>{let loadUserData=async()=>{try{let e=localStorage.getItem("user");if(!e){N.push("/user/login");return}let n=JSON.parse(e);r(n);let l=JSON.parse(localStorage.getItem("userAppointments")||"{}"),c=l[n.id]||[],d=JSON.parse(localStorage.getItem("userHelpRequests")||"{}"),h=d[n.id]||[];k(c),E(h);try{let[e,r]=await Promise.all([getUserAppointments(n.id),getUserHelpRequests(n.id)]);k(e||[]),E(r||[]);let c={...l,[n.id]:e||[]},h={...d,[n.id]:r||[]};localStorage.setItem("userAppointments",JSON.stringify(c)),localStorage.setItem("userHelpRequests",JSON.stringify(h))}catch(e){console.error("Error fetching data:",e),b.default.error("Failed to load latest data")}}catch(e){console.error("Error loading user data:",e),N.push("/user/login")}finally{v(!1)}};loadUserData()},[N]);let handleNavigation=e=>{N.push(e)},parseDate=e=>e?e instanceof Date?e:new Date("string"==typeof e?e:e.seconds?1e3*e.seconds:0):new Date(0);if(n)return(0,l.jsx)("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:(0,l.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"})});if(!e)return null;let S=(()=>{let e=[...w.map(e=>({...e,type:"appointment"})),..._.map(e=>({...e,type:"help-request"}))];return e.map(e=>({...e,parsedDate:parseDate(e.createdAt)})).sort((e,r)=>r.parsedDate.getTime()-e.parsedDate.getTime()).slice(0,4)})();return(0,l.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,l.jsx)("header",{className:"bg-white shadow-sm border-b",children:(0,l.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,l.jsxs)("div",{className:"flex justify-between items-center py-4",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,l.jsx)("div",{className:"w-10 h-10 bg-green-100 rounded-full flex items-center justify-center",children:(0,l.jsx)(h.Z,{className:"h-6 w-6 text-green-600"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"text-2xl font-bold text-gray-900",children:"User Dashboard"}),(0,l.jsxs)("p",{className:"text-gray-600",children:["Welcome back, ",e.name]})]})]}),(0,l.jsxs)("button",{onClick:()=>{localStorage.removeItem("user"),b.default.success("Logged out successfully"),N.push("/")},className:"flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-200",children:[(0,l.jsx)(h.Z,{className:"h-5 w-5"}),(0,l.jsx)("span",{children:"Logout"})]})]})})}),(0,l.jsxs)("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[(0,l.jsx)("div",{className:"bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer",onClick:()=>handleNavigation("/user/appointment"),children:(0,l.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,l.jsx)("div",{className:"w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center",children:(0,l.jsx)(g.Z,{className:"h-6 w-6 text-green-600"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-semibold text-gray-900",children:"Book Appointment"}),(0,l.jsx)("p",{className:"text-gray-600",children:"Schedule a new appointment"})]})]})}),(0,l.jsx)("div",{className:"bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer",onClick:()=>handleNavigation("/user/help-request"),children:(0,l.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,l.jsx)("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",children:(0,l.jsx)(f.Z,{className:"h-6 w-6 text-blue-600"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-semibold text-gray-900",children:"Request Help"}),(0,l.jsx)("p",{className:"text-gray-600",children:"Submit a help request"})]})]})}),(0,l.jsx)("div",{className:"bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer",onClick:()=>handleNavigation("/user/my-requests"),children:(0,l.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,l.jsx)("div",{className:"w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center",children:(0,l.jsx)(y.Z,{className:"h-6 w-6 text-orange-600"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-semibold text-gray-900",children:"My Requests"}),(0,l.jsx)("p",{className:"text-gray-600",children:"View your appointments & requests"})]})]})}),(0,l.jsx)("div",{className:"bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer",onClick:()=>handleNavigation("/user/profile"),children:(0,l.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,l.jsx)("div",{className:"w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center",children:(0,l.jsx)(h.Z,{className:"h-6 w-6 text-purple-600"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-semibold text-gray-900",children:"Profile"}),(0,l.jsx)("p",{className:"text-gray-600",children:"Manage your account details"})]})]})})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[(0,l.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[(0,l.jsxs)("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center",children:[(0,l.jsx)(g.Z,{className:"h-5 w-5 mr-2 text-green-600"}),"Recent Activity"]}),(0,l.jsx)("div",{className:"space-y-4",children:S.length>0?S.map(e=>(0,l.jsxs)("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,l.jsx)("div",{className:"w-8 h-8 rounded-full flex items-center justify-center ".concat("appointment"===e.type?"bg-green-100":"bg-blue-100"),children:"appointment"===e.type?(0,l.jsx)(g.Z,{className:"h-4 w-4 text-green-600"}):(0,l.jsx)(f.Z,{className:"h-4 w-4 text-blue-600"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-medium text-gray-900",children:"appointment"===e.type?e.reason||"Appointment":"".concat(e.type||"Help"," Assistance")}),(0,l.jsx)("p",{className:"text-sm text-gray-600",children:"appointment"===e.type&&e.preferredDate?"Scheduled for ".concat(e.preferredDate):"Submitted on ".concat(e.parsedDate.toLocaleDateString())})]})]}),(0,l.jsx)("div",{className:"px-2 py-1 rounded-full text-xs font-medium ".concat("approved"===e.status?"bg-green-100 text-green-800":"pending"===e.status?"bg-yellow-100 text-yellow-800":"rejected"===e.status?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"),children:e.status||"pending"})]},"".concat(e.type,"-").concat(e.id))):(0,l.jsxs)("div",{className:"text-gray-500 text-center py-8",children:[(0,l.jsx)(y.Z,{className:"h-12 w-12 mx-auto mb-4 text-gray-300"}),(0,l.jsx)("p",{children:"No recent activity found."}),(0,l.jsx)("p",{className:"text-sm mt-2",children:"Your appointments and help requests will appear here."})]})})]}),(0,l.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[(0,l.jsxs)("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center",children:[(0,l.jsx)(y.Z,{className:"h-5 w-5 mr-2 text-blue-600"}),"Quick Stats"]}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{className:"text-center p-4 bg-green-50 rounded-lg",children:[(0,l.jsx)("div",{className:"text-2xl font-bold text-green-600",children:w.length+_.length}),(0,l.jsx)("div",{className:"text-sm text-gray-600",children:"Total Requests"})]}),(0,l.jsxs)("div",{className:"text-center p-4 bg-blue-50 rounded-lg",children:[(0,l.jsx)("div",{className:"text-2xl font-bold text-blue-600",children:[...w,..._].filter(e=>"approved"===e.status).length}),(0,l.jsx)("div",{className:"text-sm text-gray-600",children:"Approved"})]}),(0,l.jsxs)("div",{className:"text-center p-4 bg-yellow-50 rounded-lg",children:[(0,l.jsx)("div",{className:"text-2xl font-bold text-yellow-600",children:[...w,..._].filter(e=>"pending"===e.status).length}),(0,l.jsx)("div",{className:"text-sm text-gray-600",children:"Pending"})]}),(0,l.jsxs)("div",{className:"text-center p-4 bg-gray-50 rounded-lg",children:[(0,l.jsx)("div",{className:"text-2xl font-bold text-gray-600",children:[...w,..._].filter(e=>"rejected"===e.status).length}),(0,l.jsx)("div",{className:"text-sm text-gray-600",children:"Rejected"})]})]}),!1]})]})]}),(0,l.jsx)("nav",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden",children:(0,l.jsxs)("div",{className:"flex justify-around items-center",children:[(0,l.jsxs)("button",{onClick:()=>handleNavigation("/user/dashboard"),className:"flex flex-col items-center space-y-1 py-2 px-3 rounded-lg bg-green-100 text-green-600",children:[(0,l.jsx)(g.Z,{className:"h-5 w-5"}),(0,l.jsx)("span",{className:"text-xs font-medium",children:"Home"})]}),(0,l.jsxs)("button",{onClick:()=>handleNavigation("/user/appointment"),className:"flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50",children:[(0,l.jsx)(g.Z,{className:"h-5 w-5"}),(0,l.jsx)("span",{className:"text-xs font-medium",children:"Appointment"})]}),(0,l.jsxs)("button",{onClick:()=>handleNavigation("/user/help-request"),className:"flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50",children:[(0,l.jsx)(f.Z,{className:"h-5 w-5"}),(0,l.jsx)("span",{className:"text-xs font-medium",children:"Help"})]}),(0,l.jsxs)("button",{onClick:()=>handleNavigation("/user/my-requests"),className:"flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50",children:[(0,l.jsx)(y.Z,{className:"h-5 w-5"}),(0,l.jsx)("span",{className:"text-xs font-medium",children:"Requests"})]}),(0,l.jsxs)("button",{onClick:()=>handleNavigation("/user/profile"),className:"flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50",children:[(0,l.jsx)(h.Z,{className:"h-5 w-5"}),(0,l.jsx)("span",{className:"text-xs font-medium",children:"Profile"})]})]})})]})}},622:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),c=Symbol.for("react.element"),d=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),h=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,n){var l,f={},y=null,b=null;for(l in void 0!==n&&(y=""+n),void 0!==r.key&&(y=""+r.key),void 0!==r.ref&&(b=r.ref),r)d.call(r,l)&&!g.hasOwnProperty(l)&&(f[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps)void 0===f[l]&&(f[l]=r[l]);return{$$typeof:c,type:e,key:y,ref:b,props:f,_owner:h.current}}r.jsx=q,r.jsxs=q},7437:function(e,r,n){"use strict";e.exports=n(622)},4033:function(e,r,n){e.exports=n(94)},5925:function(e,r,n){"use strict";let l,c;n.r(r),n.d(r,{CheckmarkIcon:function(){return B},ErrorIcon:function(){return T},LoaderIcon:function(){return P},ToastBar:function(){return er},ToastIcon:function(){return M},Toaster:function(){return Oe},default:function(){return ei},resolveValue:function(){return dist_f},toast:function(){return dist_c},useToaster:function(){return O},useToasterStore:function(){return D}});var d=n(2265);let h={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||h,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,f=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,o=(e,r)=>{let n="",l="",c="";for(let d in e){let h=e[d];"@"==d[0]?"i"==d[1]?n=d+" "+h+";":l+="f"==d[1]?o(h,d):d+"{"+o(h,"k"==d[1]?"":r)+"}":"object"==typeof h?l+=o(h,r?r.replace(/([^,])+/g,e=>d.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):d):null!=h&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(d,h):d+":"+h+";")}return n+(r&&c?r+"{"+c+"}":c)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,c)=>{var d;let h=s(e),v=b[h]||(b[h]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(h));if(!b[v]){let r=h!==e?e:(e=>{let r,n,l=[{}];for(;r=g.exec(e.replace(f,""));)r[4]?l.shift():r[3]?(n=r[3].replace(y," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(y," ").trim();return l[0]})(e);b[v]=o(c?{["@keyframes "+v]:r}:r,n?"":"."+v)}let N=n&&b.g?b.g:null;return n&&(b.g=b[v]),d=b[v],N?r.data=r.data.replace(N,d):-1===r.data.indexOf(d)&&(r.data=l?d+r.data:r.data+d),v},p=(e,r,n)=>e.reduce((e,l,c)=>{let d=r[c];if(d&&d.call){let e=d(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==d?"":d)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let v,N,w,k=u.bind({k:1});function m(e,r,n,l){o.p=r,v=e,N=n,w=l}function j(e,r){let n=this||{};return function(){let l=arguments;function a(c,d){let h=Object.assign({},c),g=h.className||a.className;n.p=Object.assign({theme:N&&N()},h),n.o=/ *go\d+/.test(g),h.className=u.apply(n,l)+(g?" "+g:""),r&&(h.ref=d);let f=e;return e[0]&&(f=h.as||e,delete h.as),w&&f[0]&&w(h),v(f,h)}return r?r(a):a}}var W=e=>"function"==typeof e,dist_f=(e,r)=>W(e)?e(r):e,_=(l=0,()=>(++l).toString()),A=()=>{if(void 0===c&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");c=!e||e.matches}return c},U=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return U(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:l}=r;return{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let c=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+c}))}}},E=[],S={toasts:[],pausedAt:void 0},dist_u=e=>{S=U(S,e),E.forEach(e=>{e(S)})},C={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[r,n]=(0,d.useState)(S),l=(0,d.useRef)(S);(0,d.useEffect)(()=>(l.current!==S&&n(S),E.push(n),()=>{let e=E.indexOf(n);e>-1&&E.splice(e,1)}),[]);let c=r.toasts.map(r=>{var n,l,c;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||(null==(n=e[r.type])?void 0:n.removeDelay)||(null==e?void 0:e.removeDelay),duration:r.duration||(null==(l=e[r.type])?void 0:l.duration)||(null==e?void 0:e.duration)||C[r.type],style:{...e.style,...null==(c=e[r.type])?void 0:c.style,...r.style}}});return{...r,toasts:c}},J=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||_()}),x=e=>(r,n)=>{let l=J(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_c=(e,r)=>x("blank")(e,r);dist_c.error=x("error"),dist_c.success=x("success"),dist_c.loading=x("loading"),dist_c.custom=x("custom"),dist_c.dismiss=e=>{dist_u({type:3,toastId:e})},dist_c.remove=e=>dist_u({type:4,toastId:e}),dist_c.promise=(e,r,n)=>{let l=dist_c.loading(r.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let c=r.success?dist_f(r.success,e):void 0;return c?dist_c.success(c,{id:l,...n,...null==n?void 0:n.success}):dist_c.dismiss(l),e}).catch(e=>{let c=r.error?dist_f(r.error,e):void 0;c?dist_c.error(c,{id:l,...n,...null==n?void 0:n.error}):dist_c.dismiss(l)}),e};var K=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},X=()=>{dist_u({type:5,time:Date.now()})},Z=new Map,I=1e3,ee=(e,r=I)=>{if(Z.has(e))return;let n=setTimeout(()=>{Z.delete(e),dist_u({type:4,toastId:e})},r);Z.set(e,n)},O=e=>{let{toasts:r,pausedAt:n}=D(e);(0,d.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_c.dismiss(r.id);return}return setTimeout(()=>dist_c.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,d.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),c=(0,d.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=n||{},h=r.filter(r=>(r.position||d)===(e.position||d)&&r.height),g=h.findIndex(r=>r.id===e.id),f=h.filter((e,r)=>r<g&&e.visible).length;return h.filter(e=>e.visible).slice(...l?[f+1]:[0,f]).reduce((e,r)=>e+(r.height||0)+c,0)},[r]);return(0,d.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)ee(e.id,e.removeDelay);else{let r=Z.get(e.id);r&&(clearTimeout(r),Z.delete(e.id))}})},[r]),{toasts:r,handlers:{updateHeight:K,startPause:X,endPause:l,calculateOffset:c}}},$=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=k`
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
}`,T=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
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
`,H=k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,P=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${H} 1s linear infinite;
`,z=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,F=k`
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
}`,B=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,V=j("div")`
  position: absolute;
`,Y=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=k`
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
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?d.createElement(G,null,r):r:"blank"===n?null:d.createElement(Y,null,d.createElement(P,{...l}),"loading"!==n&&d.createElement(V,null,"error"===n?d.createElement(T,{...l}):d.createElement(B,{...l})))},ye=e=>`
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
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,c]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${k(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},er=d.memo(({toast:e,position:r,style:n,children:l})=>{let c=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},h=d.createElement(M,{toast:e}),g=d.createElement(es,{...e.ariaProps},dist_f(e.message,e));return d.createElement(et,{className:e.className,style:{...c,...n,...e.style}},"function"==typeof l?l({icon:h,message:g}):d.createElement(d.Fragment,null,h,g))});m(d.createElement);var ve=({id:e,className:r,style:n,onHeightUpdate:l,children:c})=>{let h=d.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return d.createElement("div",{ref:h,className:r,style:n},c)},Ee=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:A()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},ea=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Oe=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:c,containerStyle:h,containerClassName:g})=>{let{toasts:f,handlers:y}=O(n);return d.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...h},className:g,onMouseEnter:y.startPause,onMouseLeave:y.endPause},f.map(n=>{let h=n.position||r,g=Ee(h,y.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return d.createElement(ve,{id:n.id,key:n.id,onHeightUpdate:y.updateHeight,className:n.visible?ea:"",style:g},"custom"===n.type?dist_f(n.message,n):c?c(n):d.createElement(er,{toast:n,position:h}))}))},ei=dist_c}},function(e){e.O(0,[971,472,744],function(){return e(e.s=5481)}),_N_E=e.O()}]);