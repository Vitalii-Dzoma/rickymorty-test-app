"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[745],{111:function(t,n,r){r.d(n,{W:function(){return m}});var e=r(907);var a=r(181);function i(t){return function(t){if(Array.isArray(t))return(0,e.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,u,c,s=r(885),l=r(2791),f=r(168),d=r(6031),p=(d.ZP.img(o||(o=(0,f.Z)(["\n  display: inline;\n"]))),d.ZP.div(u||(u=(0,f.Z)(["\n  display: flex;\n"]))),d.ZP.h3(c||(c=(0,f.Z)(["\n  margin-left: 10px;\n"]))),r(3033)),h=r(4697),v=r(9434),T=(r(5122),r(3329)),m=function(t){t.characterId;var n=(0,l.useState)([]),r=(0,s.Z)(n,2),e=r[0],a=r[1],o=(0,l.useState)(null),u=(0,s.Z)(o,2),c=u[0],f=u[1],d=(0,v.v9)((function(t){return t.likes.dataLikes})),m=[];return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("button",{style:{color:"red"},onClick:function(){a([].concat(i(e),i((d.forEach((function(t){m.push(t.id)})),m)))),e.length>0&&h.aq(e).then(f)},children:["Double click!"," "]}),(0,T.jsxs)("h2",{children:["Liked Characters",c&&c.map((function(t){return(0,T.jsxs)("div",{children:[(0,T.jsx)(p.Ei,{src:t.image}),(0,T.jsx)("h3",{children:t.species}),(0,T.jsx)("p",{children:t.status}),(0,T.jsx)("h4",{children:"Location"}),(0,T.jsx)("p",{children:t.location.name}),(0,T.jsx)("h5",{children:"Gender"}),(0,T.jsx)("p",{children:t.gender})]},t.id)}))]}),";"]})}},3033:function(t,n,r){r.d(n,{Ei:function(){return c},ZC:function(){return s},dk:function(){return l}});var e,a,i,o=r(168),u=r(6031),c=u.ZP.img(e||(e=(0,o.Z)(["\n  display: inline;\n"]))),s=u.ZP.div(a||(a=(0,o.Z)(["\n  display: flex;\n"]))),l=u.ZP.div(i||(i=(0,o.Z)(["\n  margin-left: 10px;\n"])))},1745:function(t,n,r){r.r(n),r.d(n,{default:function(){return C}});var e,a=r(885),i=r(2791),o=r(6871),u=r(4697),c=r(168),s=r(6031).ZP.ul(e||(e=(0,c.Z)(["\n  list-style: none;\n"]))),l=r(4942),f={data:""},d=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||f},p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,v=/\n+/g,T=function t(n,r){var e="",a="",i="",o=function(o){var c=n[o];"@"==o[0]?"i"==o[1]?e=o+" "+c+";":a+="f"==o[1]?t(c,o):o+"{"+t(c,"k"==o[1]?"":r)+"}":"object"==typeof c?a+=t(c,r?r.replace(/([^,])+/g,(function(t){return o.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):o):null!=c&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=t.p?t.p(o,c):o+":"+c+";"),u=o};for(var u in n)o(u);return e+(r&&i?r+"{"+i+"}":i)+a},m={},S=function t(n){if("object"==typeof n){var r="";for(var e in n)r+=e+t(n[e]);return r}return n},y=function(t,n,r,e,a){var i=S(t),o=m[i]||(m[i]=function(t){for(var n=0,r=11;n<t.length;)r=101*r+t.charCodeAt(n++)>>>0;return"go"+r}(i));if(!m[o]){var u=i!==t?t:function(t){for(var n,r,e=[{}];n=p.exec(t.replace(h,""));)n[4]?e.shift():n[3]?(r=n[3].replace(v," ").trim(),e.unshift(e[0][r]=e[0][r]||{})):e[0][n[1]]=n[2].replace(v," ").trim();return e[0]}(t);m[o]=T(a?(0,l.Z)({},"@keyframes "+o,u):u,r?"":"."+o)}return function(t,n,r){-1==n.data.indexOf(t)&&(n.data=r?t+n.data:n.data+t)}(m[o],n,e),o},A=function(t,n,r){return t.reduce((function(t,e,a){var i=n[a];if(i&&i.call){var o=i(r),u=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=u?"."+u:o&&"object"==typeof o?o.props?"":T(o,""):!1===o?"":o}return t+e+(null==i?"":i)}),"")};function g(t){var n=this||{},r=t.call?t(n.p):t;return y(r.unshift?r.raw?A(r,[].slice.call(arguments,1),n.p):r.reduce((function(t,r){return Object.assign(t,r&&r.call?r(n.p):r)}),{}):r,d(n.target),n.g,n.o,n.k)}g.bind({g:1}),g.bind({k:1});function b(){return b=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},b.apply(this,arguments)}var x,E=function(t,n){return function(t){return"function"===typeof t}(t)?t(n):t},O=function(){var t=0;return function(){return(++t).toString()}}();!function(t){t[t.ADD_TOAST=0]="ADD_TOAST",t[t.UPDATE_TOAST=1]="UPDATE_TOAST",t[t.UPSERT_TOAST=2]="UPSERT_TOAST",t[t.DISMISS_TOAST=3]="DISMISS_TOAST",t[t.REMOVE_TOAST=4]="REMOVE_TOAST",t[t.START_PAUSE=5]="START_PAUSE",t[t.END_PAUSE=6]="END_PAUSE"}(x||(x={}));var _=new Map,j=function(t){if(!_.has(t)){var n=setTimeout((function(){_.delete(t),D({type:x.REMOVE_TOAST,toastId:t})}),1e3);_.set(t,n)}},k=function t(n,r){switch(r.type){case x.ADD_TOAST:return b({},n,{toasts:[r.toast].concat(n.toasts).slice(0,20)});case x.UPDATE_TOAST:return r.toast.id&&function(t){var n=_.get(t);n&&clearTimeout(n)}(r.toast.id),b({},n,{toasts:n.toasts.map((function(t){return t.id===r.toast.id?b({},t,r.toast):t}))});case x.UPSERT_TOAST:var e=r.toast;return n.toasts.find((function(t){return t.id===e.id}))?t(n,{type:x.UPDATE_TOAST,toast:e}):t(n,{type:x.ADD_TOAST,toast:e});case x.DISMISS_TOAST:var a=r.toastId;return a?j(a):n.toasts.forEach((function(t){j(t.id)})),b({},n,{toasts:n.toasts.map((function(t){return t.id===a||void 0===a?b({},t,{visible:!1}):t}))});case x.REMOVE_TOAST:return void 0===r.toastId?b({},n,{toasts:[]}):b({},n,{toasts:n.toasts.filter((function(t){return t.id!==r.toastId}))});case x.START_PAUSE:return b({},n,{pausedAt:r.time});case x.END_PAUSE:var i=r.time-(n.pausedAt||0);return b({},n,{pausedAt:void 0,toasts:n.toasts.map((function(t){return b({},t,{pauseDuration:t.pauseDuration+i})}))})}},w=[],Z={toasts:[],pausedAt:void 0},D=function(t){Z=k(Z,t),w.forEach((function(t){t(Z)}))},P=function(t){return function(n,r){var e=function(t,n,r){return void 0===n&&(n="blank"),b({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},r,{id:(null==r?void 0:r.id)||O()})}(n,t,r);return D({type:x.UPSERT_TOAST,toast:e}),e.id}},I=function(t,n){return P("blank")(t,n)};I.error=P("error"),I.success=P("success"),I.loading=P("loading"),I.custom=P("custom"),I.dismiss=function(t){D({type:x.DISMISS_TOAST,toastId:t})},I.remove=function(t){return D({type:x.REMOVE_TOAST,toastId:t})},I.promise=function(t,n,r){var e=I.loading(n.loading,b({},r,null==r?void 0:r.loading));return t.then((function(t){return I.success(E(n.success,t),b({id:e},r,null==r?void 0:r.success)),t})).catch((function(t){I.error(E(n.error,t),b({id:e},r,null==r?void 0:r.error))})),t};!function(t,n,r,e){T.p=n,t,r,e}(i.createElement);var U=I,R=r(111),M=r(3329),C=function(){var t=(0,o.UO)().movieId,n=(0,i.useState)(null),r=(0,a.Z)(n,2),e=r[0],c=r[1];return(0,i.useEffect)((function(){u.vO(t).then(c),console.log(e),e||U.error("There is no location"),U.success("Vuala")}),[t]),(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(i.Suspense,{fallback:(0,M.jsx)("div",{children:"Loading..."}),children:[(0,M.jsx)(R.W,{}),e&&(0,M.jsx)(s,{children:(0,M.jsxs)("li",{children:["Location",(0,M.jsx)("h5",{children:e.name}),(0,M.jsx)("p",{children:e.dimension}),(0,M.jsx)("span",{children:e.type})]},e.id)})]})})}},4697:function(t,n,r){r.d(n,{Vb:function(){return c},aq:function(){return T},nd:function(){return d},vO:function(){return l},z1:function(){return h}});var e=r(5861),a=r(7757),i=r.n(a),o=r(4569),u=r.n(o);function c(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/character");case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/location/".concat(n));case 2:return r=t.sent,console.log(r.data.results),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/character/".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("https://rickandmortyapi.com/api/character/?name=".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("https://rickandmortyapi.com/api/character/".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u().defaults.baseURL="https://rickandmortyapi.com/api"}}]);
//# sourceMappingURL=745.07f86d11.chunk.js.map