var t,r,e,n,o,i,a,c,u,f,l,s,p,h,v,y,g=globalThis,d={},m={},b=function(t){return t&&t.Math===Math&&t};m=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof g&&g)||b("object"==typeof m&&m)||function(){return this}()||Function("return this")();var w={},O={};w=!(O=function(t){try{return!!t()}catch(t){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var S={},j={};j=!O(function(){var t=(function(){}).bind();return"function"!=typeof t||t.hasOwnProperty("prototype")});var E=Function.prototype.call;S=j?E.bind(E):function(){return E.apply(E,arguments)};var L={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;n=P&&!L.call({1:2},1)?function(t){var r=P(this,t);return!!r&&r.enumerable}:L;var x={};x=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}};var T={},_={},k={},I=Function.prototype,M=I.call,F=j&&I.bind.bind(M,M),D={},N=(k=j?F:function(t){return function(){return M.apply(t,arguments)}})({}.toString),C=k("".slice);D=function(t){return C(N(t),8,-1)};var G=Object,A=k("".split);_=O(function(){return!G("z").propertyIsEnumerable(0)})?function(t){return"String"===D(t)?A(t,""):G(t)}:G;var z={},R={};R=function(t){return null==t};var B=TypeError;z=function(t){if(R(t))throw new B("Can't call method on "+t);return t},T=function(t){return _(z(t))};var H={},W={},Y={},q={},$={},K="object"==typeof document&&document.all,V=($={all:K,IS_HTMLDDA:void 0===K&&void 0!==K}).all;q=$.IS_HTMLDDA?function(t){return"function"==typeof t||t===V}:function(t){return"function"==typeof t};var J=$.all;Y=$.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:q(t)||t===J}:function(t){return"object"==typeof t?null!==t:q(t)};var Q={},U={};U=function(t,r){var e;return arguments.length<2?(e=m[t],q(e)?e:void 0):m[t]&&m[t][r]};var X={};X=k({}.isPrototypeOf);var Z={},tt={},tr={},te={};te="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tn=m.process,to=m.Deno,ti=tn&&tn.versions||to&&to.version,ta=ti&&ti.v8;ta&&(i=(o=ta.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!i&&te&&(!(o=te.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=te.match(/Chrome\/(\d+)/))&&(i=+o[1]),tr=i;var tc=m.String;Z=(tt=!!Object.getOwnPropertySymbols&&!O(function(){var t=Symbol("symbol detection");return!tc(t)||!(Object(t) instanceof Symbol)||!Symbol.sham&&tr&&tr<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tu=Object;Q=Z?function(t){return"symbol"==typeof t}:function(t){var r=U("Symbol");return q(r)&&X(r.prototype,tu(t))};var tf={},tl={},ts={},tp=String;ts=function(t){try{return tp(t)}catch(t){return"Object"}};var th=TypeError;tl=function(t){if(q(t))return t;throw new th(ts(t)+" is not a function")},tf=function(t,r){var e=t[r];return R(e)?void 0:tl(e)};var tv={},ty=TypeError;tv=function(t,r){var e,n;if("string"===r&&q(e=t.toString)&&!Y(n=S(e,t))||q(e=t.valueOf)&&!Y(n=S(e,t))||"string"!==r&&q(e=t.toString)&&!Y(n=S(e,t)))return n;throw new ty("Can't convert object to primitive value")};var tg={},td={};td=!1;var tm={},tb={},tw=Object.defineProperty;tb=function(t,r){try{tw(m,t,{value:r,configurable:!0,writable:!0})}catch(e){m[t]=r}return r};var tO="__core-js_shared__";tm=m[tO]||tb(tO,{}),(tg=function(t,r){return tm[t]||(tm[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.33.3",mode:td?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",source:"https://github.com/zloirock/core-js"});var tS={},tj={},tE=Object;tj=function(t){return tE(z(t))};var tL=k({}.hasOwnProperty);tS=Object.hasOwn||function(t,r){return tL(tj(t),r)};var tP={},tx=0,tT=Math.random(),t_=k(1..toString);tP=function(t){return"Symbol("+(void 0===t?"":t)+")_"+t_(++tx+tT,36)};var tk=m.Symbol,tI=tg("wks"),tM=Z?tk.for||tk:tk&&tk.withoutSetter||tP,tF=TypeError,tD=(tS(tI,t="toPrimitive")||(tI[t]=tt&&tS(tk,t)?tk[t]:tM("Symbol."+t)),tI[t]);W=function(t,r){if(!Y(t)||Q(t))return t;var e,n=tf(t,tD);if(n){if(void 0===r&&(r="default"),e=S(n,t,r),!Y(e)||Q(e))return e;throw new tF("Can't convert object to primitive value")}return void 0===r&&(r="number"),tv(t,r)},H=function(t){var r=W(t,"string");return Q(r)?r:r+""};var tN={},tC={},tG=m.document,tA=Y(tG)&&Y(tG.createElement);tC=function(t){return tA?tG.createElement(t):{}},tN=!w&&!O(function(){return 7!==Object.defineProperty(tC("div"),"a",{get:function(){return 7}}).a});var tz=Object.getOwnPropertyDescriptor;e=w?tz:function(t,r){if(t=T(t),r=H(r),tN)try{return tz(t,r)}catch(t){}if(tS(t,r))return x(!S(n,t,r),t[r])};var tR={},tB={};tB=w&&O(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tH={},tW=String,tY=TypeError;tH=function(t){if(Y(t))return t;throw new tY(tW(t)+" is not an object")};var tq=TypeError,t$=Object.defineProperty,tK=Object.getOwnPropertyDescriptor,tV="enumerable",tJ="configurable",tQ="writable";a=w?tB?function(t,r,e){if(tH(t),r=H(r),tH(e),"function"==typeof t&&"prototype"===r&&"value"in e&&tQ in e&&!e[tQ]){var n=tK(t,r);n&&n[tQ]&&(t[r]=e.value,e={configurable:tJ in e?e[tJ]:n[tJ],enumerable:tV in e?e[tV]:n[tV],writable:!1})}return t$(t,r,e)}:t$:function(t,r,e){if(tH(t),r=H(r),tH(e),tN)try{return t$(t,r,e)}catch(t){}if("get"in e||"set"in e)throw new tq("Accessors not supported");return"value"in e&&(t[r]=e.value),t},tR=w?function(t,r,e){return a(t,r,x(1,e))}:function(t,r,e){return t[r]=e,t};var tU={},tX={},tZ=Function.prototype,t0=w&&Object.getOwnPropertyDescriptor,t1=tS(tZ,"name")&&(!w||w&&t0(tZ,"name").configurable),t2={},t3=k(Function.toString);q(tm.inspectSource)||(tm.inspectSource=function(t){return t3(t)}),t2=tm.inspectSource;var t4={},t7={},t9=m.WeakMap;t7=q(t9)&&/native code/.test(String(t9));var t8={},t5=tg("keys");t8=function(t){return t5[t]||(t5[t]=tP(t))};var t6={};t6={};var rt="Object already initialized",rr=m.TypeError,re=m.WeakMap;if(t7||tm.state){var rn=tm.state||(tm.state=new re);rn.get=rn.get,rn.has=rn.has,rn.set=rn.set,c=function(t,r){if(rn.has(t))throw new rr(rt);return r.facade=t,rn.set(t,r),r},u=function(t){return rn.get(t)||{}},f=function(t){return rn.has(t)}}else{var ro=t8("state");t6[ro]=!0,c=function(t,r){if(tS(t,ro))throw new rr(rt);return r.facade=t,tR(t,ro,r),r},u=function(t){return tS(t,ro)?t[ro]:{}},f=function(t){return tS(t,ro)}}var ri=(t4={set:c,get:u,has:f,enforce:function(t){return f(t)?u(t):c(t,{})},getterFor:function(t){return function(r){var e;if(!Y(r)||(e=u(r)).type!==t)throw new rr("Incompatible receiver, "+t+" required");return e}}}).enforce,ra=t4.get,rc=String,ru=Object.defineProperty,rf=k("".slice),rl=k("".replace),rs=k([].join),rp=w&&!O(function(){return 8!==ru(function(){},"length",{value:8}).length}),rh=String(String).split("String"),rv=tX=function(t,r,e){"Symbol("===rf(rc(r),0,7)&&(r="["+rl(rc(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!tS(t,"name")||t1&&t.name!==r)&&(w?ru(t,"name",{value:r,configurable:!0}):t.name=r),rp&&e&&tS(e,"arity")&&t.length!==e.arity&&ru(t,"length",{value:e.arity});try{e&&tS(e,"constructor")&&e.constructor?w&&ru(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=ri(t);return tS(n,"source")||(n.source=rs(rh,"string"==typeof r?r:"")),t};Function.prototype.toString=rv(function(){return q(this)&&ra(this).source||t2(this)},"toString"),tU=function(t,r,e,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:r;if(q(e)&&tX(e,i,n),n.global)o?t[r]=e:tb(r,e);else{try{n.unsafe?t[r]&&(o=!0):delete t[r]}catch(t){}o?t[r]=e:a(t,r,{value:e,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var ry={},rg={},rd={},rm={},rb={},rw={},rO=Math.ceil,rS=Math.floor;rw=Math.trunc||function(t){var r=+t;return(r>0?rS:rO)(r)},rb=function(t){var r=+t;return r!=r||0===r?0:rw(r)};var rj=Math.max,rE=Math.min;rm=function(t,r){var e=rb(t);return e<0?rj(e+r,0):rE(e,r)};var rL={},rP={},rx=Math.min;rP=function(t){return t>0?rx(rb(t),9007199254740991):0},rL=function(t){return rP(t.length)};var rT=function(t){return function(r,e,n){var o,i=T(r),a=rL(i),c=rm(n,a);if(t&&e!=e){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},r_={includes:rT(!0),indexOf:rT(!1)}.indexOf,rk=k([].push);rd=function(t,r){var e,n=T(t),o=0,i=[];for(e in n)!tS(t6,e)&&tS(n,e)&&rk(i,e);for(;r.length>o;)tS(n,e=r[o++])&&(~r_(i,e)||rk(i,e));return i};var rI=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(t){return rd(t,rI)},s=Object.getOwnPropertySymbols;var rM=k([].concat);rg=U("Reflect","ownKeys")||function(t){var r=l(tH(t));return s?rM(r,s(t)):r},ry=function(t,r,n){for(var o=rg(r),i=0;i<o.length;i++){var c=o[i];tS(t,c)||n&&tS(n,c)||a(t,c,e(r,c))}};var rF={},rD=/#|\.prototype\./,rN=function(t,r){var e=rG[rC(t)];return e===rz||e!==rA&&(q(r)?O(r):!!r)},rC=rN.normalize=function(t){return String(t).replace(rD,".").toLowerCase()},rG=rN.data={},rA=rN.NATIVE="N",rz=rN.POLYFILL="P";rF=rN,d=function(t,r){var n,o,i,a,c,u=t.target,f=t.global,l=t.stat;if(n=f?m:l?m[u]||tb(u,{}):(m[u]||{}).prototype)for(o in r){if(a=r[o],i=t.dontCallGetSet?(c=e(n,o))&&c.value:n[o],!rF(f?o:u+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;ry(a,i)}(t.sham||i&&i.sham)&&tR(a,"sham",!0),tU(n,o,a,t)}};var rR={},rB={},rH=Function.prototype,rW=rH.apply,rY=rH.call;rB="object"==typeof Reflect&&Reflect.apply||(j?rY.bind(rW):function(){return rY.apply(rW,arguments)});var rq={},r$={},rK=(r$=function(t){if("Function"===D(t))return k(t)})(r$.bind);rq=function(t,r){return tl(t),void 0===r?t:j?rK(t,r):function(){return t.apply(r,arguments)}};var rV={};rV=U("document","documentElement");var rJ={};rJ=k([].slice);var rQ={},rU=TypeError;rQ=function(t,r){if(t<r)throw new rU("Not enough arguments");return t};var rX={};rX=/(?:ipad|iphone|ipod).*applewebkit/i.test(te);var rZ={};rZ="process"===D(m.process);var r0=m.setImmediate,r1=m.clearImmediate,r2=m.process,r3=m.Dispatch,r4=m.Function,r7=m.MessageChannel,r9=m.String,r8=0,r5={},r6="onreadystatechange";O(function(){p=m.location});var et=function(t){if(tS(r5,t)){var r=r5[t];delete r5[t],r()}},er=function(t){return function(){et(t)}},ee=function(t){et(t.data)},en=function(t){m.postMessage(r9(t),p.protocol+"//"+p.host)};r0&&r1||(r0=function(t){rQ(arguments.length,1);var r=q(t)?t:r4(t),e=rJ(arguments,1);return r5[++r8]=function(){rB(r,void 0,e)},h(r8),r8},r1=function(t){delete r5[t]},rZ?h=function(t){r2.nextTick(er(t))}:r3&&r3.now?h=function(t){r3.now(er(t))}:r7&&!rX?(y=(v=new r7).port2,v.port1.onmessage=ee,h=rq(y.postMessage,y)):m.addEventListener&&q(m.postMessage)&&!m.importScripts&&p&&"file:"!==p.protocol&&!O(en)?(h=en,m.addEventListener("message",ee,!1)):h=r6 in tC("script")?function(t){rV.appendChild(tC("script"))[r6]=function(){rV.removeChild(this),et(t)}}:function(t){setTimeout(er(t),0)});var eo=(rR={set:r0,clear:r1}).clear;d({global:!0,bind:!0,enumerable:!0,forced:m.clearImmediate!==eo},{clearImmediate:eo});var ei=rR.set,ea={},ec={};ec="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var eu=m.Function,ef=/MSIE .\./.test(te)||ec&&((r=m.Bun.version.split(".")).length<3||"0"===r[0]&&(r[1]<3||"3"===r[1]&&"0"===r[2]));ea=function(t,r){var e=r?2:1;return ef?function(n,o){var i=rQ(arguments.length,1)>e,a=q(n)?n:eu(n),c=i?rJ(arguments,e):[],u=i?function(){rB(a,this,c)}:a;return r?t(u,o):t(u)}:t};var el=m.setImmediate?ea(ei,!1):ei;d({global:!0,bind:!0,enumerable:!0,forced:m.setImmediate!==el},{setImmediate:el});var es=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,e,n,i){var a,c,u=Object.create((e&&e.prototype instanceof g?e:g).prototype);return o(u,"_invoke",{value:(a=new x(i||[]),c=p,function(e,o){if(c===h)throw Error("Generator is already running");if(c===v){if("throw"===e)throw o;return{value:r,done:!0}}for(a.method=e,a.arg=o;;){var i=a.delegate;if(i){var u=function t(e,n){var o=n.method,i=e.iterator[o];if(i===r)return n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=r,t(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),y;var a=s(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var c=a.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,y):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,y)}(i,a);if(u){if(u===y)continue;return u}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var f=s(t,n,a);if("normal"===f.type){if(c=a.done?v:"suspendedYield",f.arg===y)continue;return{value:f.arg,done:a.done}}"throw"===f.type&&(c=v,a.method="throw",a.arg=f.arg)}})}),u}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="executing",v="completed",y={};function g(){}function d(){}function m(){}var b={};f(b,a,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(T([])));O&&O!==e&&n.call(O,a)&&(b=O);var S=m.prototype=g.prototype=Object.create(b);function j(t){["next","throw","return"].forEach(function(r){f(t,r,function(t){return this._invoke(r,t)})})}function E(t,r){var e;o(this,"_invoke",{value:function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=s(t[o],t,i);if("throw"===u.type)c(u.arg);else{var f=u.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){f.value=t,a(f)},function(t){return e("throw",t,a,c)})}}(o,i,e,a)})}return e=e?e.then(a,a):a()}})}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return d.prototype=m,o(S,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:d,configurable:!0}),d.displayName=f(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},j(E.prototype),f(E.prototype,c,function(){return this}),t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(S),f(S,u,"Generator"),f(S,a,function(){return this}),f(S,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(f){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=r,i)?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}({});try{regeneratorRuntime=es}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=es:Function("r","regeneratorRuntime = r")(es)}document.querySelector(".recipe");const ep=async function(){try{console.log("it works");let t=window.location.hash.slice(1);if(!t)return;let r=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}?key=9cd21288-902f-4306-a141-5a2290a3851b`);console.log(r)}catch(t){alert(t)}};window.addEventListener("hashchange",ep),console.log("hello world");
//# sourceMappingURL=index.6901e7f5.js.map