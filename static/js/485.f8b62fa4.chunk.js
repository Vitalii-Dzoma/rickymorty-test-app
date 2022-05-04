"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{6485:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(885),o=n(2791),a=n(501),s=n(6871),i=n(4948),c=n(4697);function u(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=u(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function l(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=u(e))&&(r&&(r+=" "),r+=t);return r}var d=n(4164);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function m(e){return"number"===typeof e&&!isNaN(e)}function g(e){return"boolean"===typeof e}function v(e){return"string"===typeof e}function h(e){return"function"===typeof e}function y(e){return v(e)||h(e)?e:null}function b(e){return 0===e||e}var T=!("undefined"===typeof window||!window.document||!window.document.createElement);function E(e){return(0,o.isValidElement)(e)||v(e)||h(e)||m(e)}var C={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},O={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function x(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,s=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=a?t+"--"+s:t,m=a?n+"--"+s:n,g=(0,o.useRef)(),v=(0,o.useRef)(0);function h(e){if(e.target===d.current){var t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===v.current&&(t.className=g.current)}}function y(){var e=d.current;e.removeEventListener("animationend",y),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()}return(0,o.useLayoutEffect)((function(){!function(){var e=d.current;g.current=e.className,e.className+=" "+p,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}()}),[]),(0,o.useEffect)((function(){f||(c?y():function(){v.current=1;var e=d.current;e.className+=" "+m,e.addEventListener("animationend",y)}())}),[f]),o.createElement(o.Fragment,null,r)}}var _={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.list.has(e)&&this.list.get(e).forEach((function(n){var o=setTimeout((function(){n.apply(void 0,r)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(o)}))}},I=["delay","staleId"];function w(e){var t=(0,o.useReducer)((function(e){return e+1}),0)[1],n=(0,o.useState)([]),r=n[0],a=n[1],s=(0,o.useRef)(null),i=(0,o.useRef)(new Map).current,c=function(e){return-1!==r.indexOf(e)},u=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:c,getToast:function(e){return i.get(e)}}).current;function l(e){var t=e.containerId;!u.props.limit||t&&u.containerId!==t||(u.count-=u.queue.length,u.queue=[])}function d(e){a((function(t){return b(e)?t.filter((function(t){return t!==e})):[]}))}function f(){var e=u.queue.shift();C(e.toastContent,e.toastProps,e.staleId)}function T(e,n){var r=n.delay,a=n.staleId,c=p(n,I);if(E(e)&&!function(e){return!s.current||u.props.enableMultiContainer&&e.containerId!==u.props.containerId||i.has(e.toastId)&&null==e.updateId}(c)){var l=c.toastId,T=c.updateId,O=c.data,x=u.props,_=function(){return d(l)},w=null==T;w&&u.count++;var L,k,R={toastId:l,updateId:T,isLoading:c.isLoading,theme:c.theme||x.theme,icon:null!=c.icon?c.icon:x.icon,isIn:!1,key:c.key||u.toastKey++,type:c.type,closeToast:_,closeButton:c.closeButton,rtl:x.rtl,position:c.position||x.position,transition:c.transition||x.transition,className:y(c.className||x.toastClassName),bodyClassName:y(c.bodyClassName||x.bodyClassName),style:c.style||x.toastStyle,bodyStyle:c.bodyStyle||x.bodyStyle,onClick:c.onClick||x.onClick,pauseOnHover:g(c.pauseOnHover)?c.pauseOnHover:x.pauseOnHover,pauseOnFocusLoss:g(c.pauseOnFocusLoss)?c.pauseOnFocusLoss:x.pauseOnFocusLoss,draggable:g(c.draggable)?c.draggable:x.draggable,draggablePercent:c.draggablePercent||x.draggablePercent,draggableDirection:c.draggableDirection||x.draggableDirection,closeOnClick:g(c.closeOnClick)?c.closeOnClick:x.closeOnClick,progressClassName:y(c.progressClassName||x.progressClassName),progressStyle:c.progressStyle||x.progressStyle,autoClose:!c.isLoading&&(L=c.autoClose,k=x.autoClose,!1===L||m(L)&&L>0?L:k),hideProgressBar:g(c.hideProgressBar)?c.hideProgressBar:x.hideProgressBar,progress:c.progress,role:c.role||x.role,deleteToast:function(){i.delete(l);var e=u.queue.length;if(u.count=b(l)?u.count-1:u.count-u.displayedToast,u.count<0&&(u.count=0),e>0){var n=b(l)?1:u.props.limit;if(1===e||1===n)u.displayedToast++,f();else{var r=n>e?e:n;u.displayedToast=r;for(var o=0;o<r;o++)f()}}else t()}};h(c.onOpen)&&(R.onOpen=c.onOpen),h(c.onClose)&&(R.onClose=c.onClose),R.closeButton=x.closeButton,!1===c.closeButton||E(c.closeButton)?R.closeButton=c.closeButton:!0===c.closeButton&&(R.closeButton=!E(x.closeButton)||x.closeButton);var N=e;(0,o.isValidElement)(e)&&!v(e.type)?N=(0,o.cloneElement)(e,{closeToast:_,toastProps:R,data:O}):h(e)&&(N=e({closeToast:_,toastProps:R,data:O})),x.limit&&x.limit>0&&u.count>x.limit&&w?u.queue.push({toastContent:N,toastProps:R,staleId:a}):m(r)&&r>0?setTimeout((function(){C(N,R,a)}),r):C(N,R,a)}}function C(e,t,n){var r=t.toastId;n&&i.delete(n),i.set(r,{content:e,props:t}),a((function(e){return[].concat(e,[r]).filter((function(e){return e!==n}))}))}return(0,o.useEffect)((function(){return u.containerId=e.containerId,_.cancelEmit(3).on(0,T).on(1,(function(e){return s.current&&d(e)})).on(5,l).emit(2,u),function(){return _.emit(3,u)}}),[]),(0,o.useEffect)((function(){u.isToastActive=c,u.displayedToast=r.length,_.emit(4,r.length,e.containerId)}),[r]),(0,o.useEffect)((function(){u.props=e})),{getToastToRender:function(t){var n=new Map,r=Array.from(i.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:c}}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=(0,o.useState)(!1),n=t[0],r=t[1],a=(0,o.useState)(!1),s=a[0],i=a[1],c=(0,o.useRef)(null),u=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=(0,o.useRef)(e),d=e.autoClose,f=e.pauseOnHover,p=e.closeToast,m=e.onClick,g=e.closeOnClick;function v(t){if(e.draggable){u.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",C),document.addEventListener("touchmove",E),document.addEventListener("touchend",C);var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=L(t.nativeEvent),u.y=k(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(){if(u.boundingRect){var t=u.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&u.x>=o&&u.x<=a&&u.y>=n&&u.y<=r?T():b()}}function b(){r(!0)}function T(){r(!1)}function E(t){var r=c.current;u.canDrag&&r&&(u.didMove=!0,n&&T(),u.x=L(t),u.y=k(t),"x"===e.draggableDirection?u.delta=u.x-u.start:u.delta=u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),r.style.transform="translate"+e.draggableDirection+"("+u.delta+"px)",r.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function C(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",C);var t=c.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,o.useEffect)((function(){l.current=e})),(0,o.useEffect)((function(){return c.current&&c.current.addEventListener("d",b,{once:!0}),h(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=l.current;h(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||T();window.addEventListener("focus",b),window.addEventListener("blur",T)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",T))}}),[e.pauseOnFocusLoss]);var O={onMouseDown:v,onTouchStart:v,onMouseUp:y,onTouchEnd:y};return d&&f&&(O.onMouseEnter=T,O.onMouseLeave=b),g&&(O.onClick=function(e){m&&m(e),u.canCloseOnClick&&p()}),{playToast:b,pauseToast:T,isRunning:n,preventExitTransition:s,toastRef:c,eventHandlers:O}}function N(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return(0,o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},(0,o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},(0,o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function P(e){var t,n,r=e.delay,a=e.isRunning,s=e.closeToast,i=e.type,c=e.hide,u=e.className,d=e.style,p=e.controlledProgress,m=e.progress,g=e.rtl,v=e.isIn,y=e.theme,b=f({},d,{animationDuration:r+"ms",animationPlayState:a?"running":"paused",opacity:c?0:1});p&&(b.transform="scaleX("+m+")");var T=l("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+y,"Toastify__progress-bar--"+i,((t={})["Toastify__progress-bar--rtl"]=g,t)),E=h(u)?u({rtl:g,type:i,defaultClassName:T}):l(T,u),C=((n={})[p&&m>=1?"onTransitionEnd":"onAnimationEnd"]=p&&m<1?null:function(){v&&s()},n);return(0,o.createElement)("div",Object.assign({role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:E,style:b},C))}P.defaultProps={type:O.DEFAULT,hide:!1};var B=["theme","type"],j=function(e){var t=e.theme,n=e.type,r=p(e,B);return(0,o.createElement)("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var D={info:function(e){return(0,o.createElement)(j,Object.assign({},e),(0,o.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return(0,o.createElement)(j,Object.assign({},e),(0,o.createElement)("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return(0,o.createElement)(j,Object.assign({},e),(0,o.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return(0,o.createElement)(j,Object.assign({},e),(0,o.createElement)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return(0,o.createElement)("div",{className:"Toastify__spinner"})}},M=function(e){var t,n,r=R(e),a=r.isRunning,s=r.preventExitTransition,i=r.toastRef,c=r.eventHandlers,u=e.closeButton,d=e.children,f=e.autoClose,p=e.onClick,m=e.type,g=e.hideProgressBar,y=e.closeToast,b=e.transition,T=e.position,E=e.className,C=e.style,O=e.bodyClassName,x=e.bodyStyle,_=e.progressClassName,I=e.progressStyle,w=e.updateId,L=e.role,k=e.progress,N=e.rtl,B=e.toastId,j=e.deleteToast,M=e.isIn,S=e.isLoading,A=e.icon,F=e.theme,z=l("Toastify__toast","Toastify__toast-theme--"+F,"Toastify__toast--"+m,((t={})["Toastify__toast--rtl"]=N,t)),H=h(E)?E({rtl:N,position:T,type:m,defaultClassName:z}):l(z,E),q=!!k,U=D[m],Z={theme:F,type:m},Q=U&&U(Z);return!1===A?Q=void 0:h(A)?Q=A(Z):(0,o.isValidElement)(A)?Q=(0,o.cloneElement)(A,Z):v(A)?Q=A:S&&(Q=D.spinner()),(0,o.createElement)(b,{isIn:M,done:j,position:T,preventExitTransition:s,nodeRef:i},(0,o.createElement)("div",Object.assign({id:B,onClick:p,className:H},c,{style:C,ref:i}),(0,o.createElement)("div",Object.assign({},M&&{role:L},{className:h(O)?O({type:m}):l("Toastify__toast-body",O),style:x}),Q&&(0,o.createElement)("div",{className:l("Toastify__toast-icon",(n={},n["Toastify--animate-icon Toastify__zoom-enter"]=!S,n))},Q),(0,o.createElement)("div",null,d)),function(e){if(e){var t={closeToast:y,type:m,theme:F};return h(e)?e(t):(0,o.isValidElement)(e)?(0,o.cloneElement)(e,t):void 0}}(u),(f||q)&&(0,o.createElement)(P,Object.assign({},w&&!q?{key:"pb-"+w}:{},{rtl:N,theme:F,delay:f,isRunning:a,isIn:M,closeToast:y,hide:g,type:m,style:I,className:_,controlledProgress:q,progress:k}))))},S=x({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),A=function(e){var t=w(e),n=t.getToastToRender,r=t.containerRef,a=t.isToastActive,s=e.className,i=e.style,c=e.rtl,u=e.containerId;function d(e){var t,n=l("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=c,t));return h(s)?s({position:e,rtl:c,defaultClassName:n}):l(n,y(s))}return(0,o.createElement)("div",{ref:r,className:"Toastify",id:u},n((function(e,t){var n=t.length?f({},i):f({},i,{pointerEvents:"none"});return(0,o.createElement)("div",{className:d(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return(0,o.createElement)(M,Object.assign({},n,{isIn:a(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?N:n.closeButton}),t)})))})))};A.defaultProps={position:C.TOP_RIGHT,transition:S,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:N,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var F,z,H,q=new Map,U=[],Z=!1;function Q(){return Math.random().toString(36).substring(2,9)}function V(e){return e&&(v(e.toastId)||m(e.toastId))?e.toastId:Q()}function G(e,t){return q.size>0?_.emit(0,e,t):(U.push({content:e,options:t}),Z&&T&&(Z=!1,z=document.createElement("div"),document.body.appendChild(z),(0,d.render)((0,o.createElement)(A,Object.assign({},H)),z))),t.toastId}function W(e,t){return f({},t,{type:t&&t.type||e,toastId:V(t)})}function X(e){return function(t,n){return G(t,W(e,n))}}function Y(e,t){return G(e,W(O.DEFAULT,t))}Y.loading=function(e,t){return G(e,W(O.DEFAULT,f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Y.promise=function(e,t,n){var r,o=t.pending,a=t.error,s=t.success;o&&(r=v(o)?Y.loading(o,n):Y.loading(o.render,f({},n,o)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=f({type:e},i,n,{data:o}),s=v(t)?{render:t}:t;return r?Y.update(r,f({},a,s)):Y(s.render,f({},a,s)),o}Y.dismiss(r)},u=h(e)?e():e;return u.then((function(e){return c("success",s,e)})).catch((function(e){return c("error",a,e)})),u},Y.success=X(O.SUCCESS),Y.info=X(O.INFO),Y.error=X(O.ERROR),Y.warning=X(O.WARNING),Y.warn=Y.warning,Y.dark=function(e,t){return G(e,W(O.DEFAULT,f({theme:"dark"},t)))},Y.dismiss=function(e){return _.emit(1,e)},Y.clearWaitingQueue=function(e){return void 0===e&&(e={}),_.emit(5,e)},Y.isActive=function(e){var t=!1;return q.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Y.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=q.get(n||F);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=f({},r,t,{toastId:t.toastId||e,updateId:Q()});a.toastId!==e&&(a.staleId=e);var s=a.render||o;delete a.render,G(s,a)}}),0)},Y.done=function(e){Y.update(e,{progress:1})},Y.onChange=function(e){return h(e)&&_.on(4,e),function(){h(e)&&_.off(4,e)}},Y.configure=function(e){void 0===e&&(e={}),Z=!0,H=e},Y.POSITION=C,Y.TYPE=O,_.on(2,(function(e){F=e.containerId||e,q.set(F,e),U.forEach((function(e){_.emit(0,e.content,e.options)})),U=[]})).on(3,(function(e){q.delete(e.containerId||e),0===q.size&&_.off(0).off(1).off(5),T&&z&&document.body.removeChild(z)}));var K=n(3329),J=function(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],u=t[1],l=(0,o.useState)(null),d=(0,r.Z)(l,2),f=d[0],p=d[1],m=(0,s.s0)(),g=(0,a.lr)(),v=(0,r.Z)(g,1)[0],h=function(){u("")};return(0,o.useEffect)((function(){v.get("query")&&c.z1(v.get("query")).then(p)}),[v.get("query")]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.toLowerCase();return c.z1(t).then(p),Y("Wow so easy!"),m("../characters?query=".concat(n),{replace:!1}),h(),n},children:[(0,K.jsx)("input",{type:"text",name:"",value:n,onChange:function(e){var t=e.currentTarget.value;u(t)},autoComplete:"off",autoFocus:!0,placeholder:"Search character"}),(0,K.jsx)("button",{type:"submit",children:"Search"})]}),(0,K.jsx)(s.j3,{}),f&&(0,K.jsxs)("ul",{children:[(0,K.jsx)("button",{type:"submit",onClick:function(){m(-1,{replace:!0})},children:"Go Back"}),(0,K.jsx)(i.C,{children:"Results"}),f.map((function(e){return(0,K.jsx)("li",{children:(0,K.jsx)(a.rU,{to:"/characters/".concat(e.id),children:e.name})},e.id)}))]})]})}},4948:function(e,t,n){n.d(t,{C:function(){return i}});var r,o=n(168),a=n(6031).ZP.h1(r||(r=(0,o.Z)(["\n  padding: 8px;\n  margin-top: 0;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-image: repeating-linear-gradient(\n    -45deg,\n    #606dbc,\n    #606dbc 15px,\n    #465298 15px,\n    #465298 30px\n  );\n"]))),s=n(3329),i=function(e){var t=e.children;return(0,s.jsx)(a,{children:t})}},4697:function(e,t,n){n.d(t,{Vb:function(){return c},aq:function(){return v},nd:function(){return f},vO:function(){return l},z1:function(){return m}});var r=n(5861),o=n(7757),a=n.n(o),s=n(4569),i=n.n(s);function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/character");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/location/".concat(t));case 2:return n=e.sent,console.log(n.data.results),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/character/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://rickandmortyapi.com/api/character/?name=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://rickandmortyapi.com/api/character/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i().defaults.baseURL="https://rickandmortyapi.com/api"}}]);
//# sourceMappingURL=485.f8b62fa4.chunk.js.map