var t,e,r,n,i,o,a,c,s,u,l,d,p,h,f,g,m,v,y,_=globalThis,b={},w={},E=function(t){return t&&t.Math===Math&&t};w=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof _&&_)||E("object"==typeof w&&w)||function(){return this}()||Function("return this")();var S={},k={};S=!(k=function(t){try{return!!t()}catch(t){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},L={};L=!k(function(){var t=(function(){}).bind();return"function"!=typeof t||t.hasOwnProperty("prototype")});var $=Function.prototype.call;j=L?$.bind($):function(){return $.apply($,arguments)};var O={}.propertyIsEnumerable,F=Object.getOwnPropertyDescriptor;o=F&&!O.call({1:2},1)?function(t){var e=F(this,t);return!!e&&e.enumerable}:O;var M={};M=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var x={},P={},T={},q=Function.prototype,H=q.call,I=L&&q.bind.bind(H,H),A={},C=(T=L?I:function(t){return function(){return H.apply(t,arguments)}})({}.toString),N=T("".slice);A=function(t){return N(C(t),8,-1)};var D=Object,z=T("".split);P=k(function(){return!D("z").propertyIsEnumerable(0)})?function(t){return"String"===A(t)?z(t,""):D(t)}:D;var R={},G={};G=function(t){return null==t};var W=TypeError;R=function(t){if(G(t))throw new W("Can't call method on "+t);return t},x=function(t){return P(R(t))};var U={},B={},Q={},Y={},V={},J="object"==typeof document&&document.all,K=(V={all:J,IS_HTMLDDA:void 0===J&&void 0!==J}).all;Y=V.IS_HTMLDDA?function(t){return"function"==typeof t||t===K}:function(t){return"function"==typeof t};var X=V.all;Q=V.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:Y(t)||t===X}:function(t){return"object"==typeof t?null!==t:Y(t)};var Z={},tt={};tt=function(t,e){var r;return arguments.length<2?(r=w[t],Y(r)?r:void 0):w[t]&&w[t][e]};var te={};te=T({}.isPrototypeOf);var tr={},tn={},ti={},to={};to="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ta=w.process,tc=w.Deno,ts=ta&&ta.versions||tc&&tc.version,tu=ts&&ts.v8;tu&&(c=(a=tu.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!c&&to&&(!(a=to.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=to.match(/Chrome\/(\d+)/))&&(c=+a[1]),ti=c;var tl=w.String;tr=(tn=!!Object.getOwnPropertySymbols&&!k(function(){var t=Symbol("symbol detection");return!tl(t)||!(Object(t) instanceof Symbol)||!Symbol.sham&&ti&&ti<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tp=Object;Z=tr?function(t){return"symbol"==typeof t}:function(t){var e=tt("Symbol");return Y(e)&&te(e.prototype,tp(t))};var th={},tf={},tg={},tm=String;tg=function(t){try{return tm(t)}catch(t){return"Object"}};var tv=TypeError;tf=function(t){if(Y(t))return t;throw new tv(tg(t)+" is not a function")},th=function(t,e){var r=t[e];return G(r)?void 0:tf(r)};var ty={},t_=TypeError;ty=function(t,e){var r,n;if("string"===e&&Y(r=t.toString)&&!Q(n=j(r,t))||Y(r=t.valueOf)&&!Q(n=j(r,t))||"string"!==e&&Y(r=t.toString)&&!Q(n=j(r,t)))return n;throw new t_("Can't convert object to primitive value")};var tb={},tw={};tw=!1;var tE={},tS={},tk=Object.defineProperty;tS=function(t,e){try{tk(w,t,{value:e,configurable:!0,writable:!0})}catch(r){w[t]=e}return e};var tj="__core-js_shared__";tE=w[tj]||tS(tj,{}),(tb=function(t,e){return tE[t]||(tE[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.33.3",mode:tw?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",source:"https://github.com/zloirock/core-js"});var tL={},t$={},tO=Object;t$=function(t){return tO(R(t))};var tF=T({}.hasOwnProperty);tL=Object.hasOwn||function(t,e){return tF(t$(t),e)};var tM={},tx=0,tP=Math.random(),tT=T(1..toString);tM=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tT(++tx+tP,36)};var tq=w.Symbol,tH=tb("wks"),tI=tr?tq.for||tq:tq&&tq.withoutSetter||tM,tA=TypeError,tC=(tL(tH,t="toPrimitive")||(tH[t]=tn&&tL(tq,t)?tq[t]:tI("Symbol."+t)),tH[t]);B=function(t,e){if(!Q(t)||Z(t))return t;var r,n=th(t,tC);if(n){if(void 0===e&&(e="default"),r=j(n,t,e),!Q(r)||Z(r))return r;throw new tA("Can't convert object to primitive value")}return void 0===e&&(e="number"),ty(t,e)},U=function(t){var e=B(t,"string");return Z(e)?e:e+""};var tN={},tD={},tz=w.document,tR=Q(tz)&&Q(tz.createElement);tD=function(t){return tR?tz.createElement(t):{}},tN=!S&&!k(function(){return 7!==Object.defineProperty(tD("div"),"a",{get:function(){return 7}}).a});var tG=Object.getOwnPropertyDescriptor;i=S?tG:function(t,e){if(t=x(t),e=U(e),tN)try{return tG(t,e)}catch(t){}if(tL(t,e))return M(!j(o,t,e),t[e])};var tW={},tU={};tU=S&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tB={},tQ=String,tY=TypeError;tB=function(t){if(Q(t))return t;throw new tY(tQ(t)+" is not an object")};var tV=TypeError,tJ=Object.defineProperty,tK=Object.getOwnPropertyDescriptor,tX="enumerable",tZ="configurable",t0="writable";s=S?tU?function(t,e,r){if(tB(t),e=U(e),tB(r),"function"==typeof t&&"prototype"===e&&"value"in r&&t0 in r&&!r[t0]){var n=tK(t,e);n&&n[t0]&&(t[e]=r.value,r={configurable:tZ in r?r[tZ]:n[tZ],enumerable:tX in r?r[tX]:n[tX],writable:!1})}return tJ(t,e,r)}:tJ:function(t,e,r){if(tB(t),e=U(e),tB(r),tN)try{return tJ(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new tV("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tW=S?function(t,e,r){return s(t,e,M(1,r))}:function(t,e,r){return t[e]=r,t};var t1={},t2={},t3=Function.prototype,t7=S&&Object.getOwnPropertyDescriptor,t4=tL(t3,"name")&&(!S||S&&t7(t3,"name").configurable),t9={},t5=T(Function.toString);Y(tE.inspectSource)||(tE.inspectSource=function(t){return t5(t)}),t9=tE.inspectSource;var t6={},t8={},et=w.WeakMap;t8=Y(et)&&/native code/.test(String(et));var ee={},er=tb("keys");ee=function(t){return er[t]||(er[t]=tM(t))};var en={};en={};var ei="Object already initialized",eo=w.TypeError,ea=w.WeakMap;if(t8||tE.state){var ec=tE.state||(tE.state=new ea);ec.get=ec.get,ec.has=ec.has,ec.set=ec.set,u=function(t,e){if(ec.has(t))throw new eo(ei);return e.facade=t,ec.set(t,e),e},l=function(t){return ec.get(t)||{}},d=function(t){return ec.has(t)}}else{var es=ee("state");en[es]=!0,u=function(t,e){if(tL(t,es))throw new eo(ei);return e.facade=t,tW(t,es,e),e},l=function(t){return tL(t,es)?t[es]:{}},d=function(t){return tL(t,es)}}var eu=(t6={set:u,get:l,has:d,enforce:function(t){return d(t)?l(t):u(t,{})},getterFor:function(t){return function(e){var r;if(!Q(e)||(r=l(e)).type!==t)throw new eo("Incompatible receiver, "+t+" required");return r}}}).enforce,el=t6.get,ed=String,ep=Object.defineProperty,eh=T("".slice),ef=T("".replace),eg=T([].join),em=S&&!k(function(){return 8!==ep(function(){},"length",{value:8}).length}),ev=String(String).split("String"),ey=t2=function(t,e,r){"Symbol("===eh(ed(e),0,7)&&(e="["+ef(ed(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tL(t,"name")||t4&&t.name!==e)&&(S?ep(t,"name",{value:e,configurable:!0}):t.name=e),em&&r&&tL(r,"arity")&&t.length!==r.arity&&ep(t,"length",{value:r.arity});try{r&&tL(r,"constructor")&&r.constructor?S&&ep(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=eu(t);return tL(n,"source")||(n.source=eg(ev,"string"==typeof e?e:"")),t};Function.prototype.toString=ey(function(){return Y(this)&&el(this).source||t9(this)},"toString"),t1=function(t,e,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:e;if(Y(r)&&t2(r,o,n),n.global)i?t[e]=r:tS(e,r);else{try{n.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=r:s(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var e_={},eb={},ew={},eE={},eS={},ek={},ej=Math.ceil,eL=Math.floor;ek=Math.trunc||function(t){var e=+t;return(e>0?eL:ej)(e)},eS=function(t){var e=+t;return e!=e||0===e?0:ek(e)};var e$=Math.max,eO=Math.min;eE=function(t,e){var r=eS(t);return r<0?e$(r+e,0):eO(r,e)};var eF={},eM={},ex=Math.min;eM=function(t){return t>0?ex(eS(t),9007199254740991):0},eF=function(t){return eM(t.length)};var eP=function(t){return function(e,r,n){var i,o=x(e),a=eF(o),c=eE(n,a);if(t&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===r)return t||c||0;return!t&&-1}},eT={includes:eP(!0),indexOf:eP(!1)}.indexOf,eq=T([].push);ew=function(t,e){var r,n=x(t),i=0,o=[];for(r in n)!tL(en,r)&&tL(n,r)&&eq(o,r);for(;e.length>i;)tL(n,r=e[i++])&&(~eT(o,r)||eq(o,r));return o};var eH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(t){return ew(t,eH)},h=Object.getOwnPropertySymbols;var eI=T([].concat);eb=tt("Reflect","ownKeys")||function(t){var e=p(tB(t));return h?eI(e,h(t)):e},e_=function(t,e,r){for(var n=eb(e),o=0;o<n.length;o++){var a=n[o];tL(t,a)||r&&tL(r,a)||s(t,a,i(e,a))}};var eA={},eC=/#|\.prototype\./,eN=function(t,e){var r=ez[eD(t)];return r===eG||r!==eR&&(Y(e)?k(e):!!e)},eD=eN.normalize=function(t){return String(t).replace(eC,".").toLowerCase()},ez=eN.data={},eR=eN.NATIVE="N",eG=eN.POLYFILL="P";eA=eN,b=function(t,e){var r,n,o,a,c,s=t.target,u=t.global,l=t.stat;if(r=u?w:l?w[s]||tS(s,{}):(w[s]||{}).prototype)for(n in e){if(a=e[n],o=t.dontCallGetSet?(c=i(r,n))&&c.value:r[n],!eA(u?n:s+(l?".":"#")+n,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;e_(a,o)}(t.sham||o&&o.sham)&&tW(a,"sham",!0),t1(r,n,a,t)}};var eW={},eU={},eB=Function.prototype,eQ=eB.apply,eY=eB.call;eU="object"==typeof Reflect&&Reflect.apply||(L?eY.bind(eQ):function(){return eY.apply(eQ,arguments)});var eV={},eJ={},eK=(eJ=function(t){if("Function"===A(t))return T(t)})(eJ.bind);eV=function(t,e){return tf(t),void 0===e?t:L?eK(t,e):function(){return t.apply(e,arguments)}};var eX={};eX=tt("document","documentElement");var eZ={};eZ=T([].slice);var e0={},e1=TypeError;e0=function(t,e){if(t<e)throw new e1("Not enough arguments");return t};var e2={};e2=/(?:ipad|iphone|ipod).*applewebkit/i.test(to);var e3={};e3="process"===A(w.process);var e7=w.setImmediate,e4=w.clearImmediate,e9=w.process,e5=w.Dispatch,e6=w.Function,e8=w.MessageChannel,rt=w.String,re=0,rr={},rn="onreadystatechange";k(function(){f=w.location});var ri=function(t){if(tL(rr,t)){var e=rr[t];delete rr[t],e()}},ro=function(t){return function(){ri(t)}},ra=function(t){ri(t.data)},rc=function(t){w.postMessage(rt(t),f.protocol+"//"+f.host)};e7&&e4||(e7=function(t){e0(arguments.length,1);var e=Y(t)?t:e6(t),r=eZ(arguments,1);return rr[++re]=function(){eU(e,void 0,r)},g(re),re},e4=function(t){delete rr[t]},e3?g=function(t){e9.nextTick(ro(t))}:e5&&e5.now?g=function(t){e5.now(ro(t))}:e8&&!e2?(v=(m=new e8).port2,m.port1.onmessage=ra,g=eV(v.postMessage,v)):w.addEventListener&&Y(w.postMessage)&&!w.importScripts&&f&&"file:"!==f.protocol&&!k(rc)?(g=rc,w.addEventListener("message",ra,!1)):g=rn in tD("script")?function(t){eX.appendChild(tD("script"))[rn]=function(){eX.removeChild(this),ri(t)}}:function(t){setTimeout(ro(t),0)});var rs=(eW={set:e7,clear:e4}).clear;b({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==rs},{clearImmediate:rs});var ru=eW.set,rl={},rd={};rd="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rp=w.Function,rh=/MSIE .\./.test(to)||rd&&((e=w.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rl=function(t,e){var r=e?2:1;return rh?function(n,i){var o=e0(arguments.length,1)>r,a=Y(n)?n:rp(n),c=o?eZ(arguments,r):[],s=o?function(){eU(a,this,c)}:a;return e?t(s,i):t(s)}:t};var rf=w.setImmediate?rl(ru,!1):ru;b({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==rf},{setImmediate:rf});var rg=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,r,n,o){var a,c,s=Object.create((r&&r.prototype instanceof m?r:m).prototype);return i(s,"_invoke",{value:(a=new $(o||[]),c=p,function(r,i){if(c===h)throw Error("Generator is already running");if(c===f){if("throw"===r)throw i;return{value:e,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var s=function t(r,n){var i=n.method,o=r.iterator[i];if(o===e)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(s){if(s===g)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var u=d(t,n,a);if("normal"===u.type){if(c=a.done?f:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(c=f,a.method="throw",a.arg=u.arg)}})}),s}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="executing",f="completed",g={};function m(){}function v(){}function y(){}var _={};u(_,a,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==r&&n.call(w,a)&&(_=w);var E=y.prototype=m.prototype=Object.create(_);function S(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function k(t,e){var r;i(this,"_invoke",{value:function(i,o){function a(){return new e(function(r,a){!function r(i,o,a,c){var s=d(t[i],t,o);if("throw"===s.type)c(s.arg);else{var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(l).then(function(t){u.value=t,a(u)},function(t){return r("throw",t,a,c)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw TypeError(typeof t+" is not iterable")}return v.prototype=y,i(E,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(k.prototype),u(k.prototype,c,function(){return this}),t.AsyncIterator=k,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new k(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},S(E),u(E,s,"Generator"),u(E,a,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=t,a.arg=e,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}({});try{regeneratorRuntime=rg}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=rg:Function("r","regeneratorRuntime = r")(rg)}const rm="https://forkify-api.herokuapp.com/api/v2/recipes",rv="21bd1268-05d0-47f0-9575-4357c07bafdc",ry=function(t){return new Promise(function(e,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${t} seconds`))},1e4*t)})},r_=async function(t){try{let e=await Promise.race([fetch(t),ry(10)]),r=await e.json();if(!e.ok)throw Error(`${r.message} ${e.status}`);return r}catch(t){throw t}},rb=async function(t,e){try{let r=e?fetch(t,{method:"POSt",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}):fetch(t),n=await Promise.race([r,ry(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} ${n.status}`);return i}catch(t){throw t}},rw={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},liked:[]},rE=function(t){let{recipe:e}=t.data;return{id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients,liked:!!(rw.liked.findIndex(t=>t.id===id)+1)}},rS=async function(t){try{let e=await r_(`${rm}/${t}?key=${rv}`);rw.recipe=rE(e)}catch(t){throw t}},rk=function(t=rw.search.page){rw.search.page=t;let e=(t-1)*rw.search.resultsPerPage,r=e+rw.search.resultsPerPage;return rw.search.results.slice(e,r)},rj=async function(t){try{rw.search.query=t;let e=await r_(`${rm}?search=${t}&key=${rv}`);rw.search.results=e.data.recipes.map(t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url}))}catch(t){throw t}},rL=function(t){rw.recipe.ingredients.forEach(e=>{e.quantity=e.quantity*(t/rw.recipe.servings)}),rw.recipe.servings=t},r$=function(t){rw.liked.push(t),t.id===rw.recipe.id&&(rw.recipe.liked=!0)},rO=function(t){let e=rw.liked.findIndex(e=>e.id===t);rw.liked.splice(e,1),t===rw.recipe.id&&(rw.recipe.liked=!1)},rF=async function(t){try{let e=Object.entries(t).filter(t=>{t[0].startsWith("ingredient")&&t[1]}).map(t=>{let e=t[1].replaceAll(" ","").split("-");if(3!==e.length)throw Error("Wrong ingredients Input");let[r,n,i]=e;return{quantity:r||null,unit:n,description:i}}),r={title:t.title,source_url:t.sourceUrl,image_url:t.image,publisher:t.publisher,cooking_time:+t.cookingTime,servings:+t.servings,ingredients:e},n=await rb(`${rm}?key=${rv}`,r);rw.recipe=rE(n),r$(rw.recipe)}catch(t){throw t}};rj(),(Fraction=function(t,e){if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e){if("number"==typeof(num=t))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=t&&n.push(t),0!=e&&n.push((0===t?e:Math.abs(e))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var e=this.clone().normalize(),t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},Fraction.prototype.normalize=(r=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},n=function(t,e){if(!e)return Math.round(t);var r=Math.pow(10,e);return Math.round(t*r)/r},function(){if(r(this.denominator)){var t=n(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),this.numerator*=e}if(r(this.numerator)){var t=n(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*e),this.denominator*=e}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(t,e){var r=[],n=Fraction.primeFactors(t),i=Fraction.primeFactors(e);return(n.forEach(function(t){var e=i.indexOf(t);e>=0&&(r.push(t),i.splice(e,1))}),0===r.length)?1:function(){var t,e=r[0];for(t=1;t<r.length;t++)e*=r[t];return e}()},Fraction.primeFactors=function(t){for(var e=Math.abs(t),r=[],n=2;n*n<=e;)e%n==0?(r.push(n),e/=n):n++;return 1!=e&&r.push(e),r},y=Fraction;class rM{_data;render(t,e=!0){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;let r=this._generateMarkup();if(!e)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",'<div class="spinner"></div>')}renderError(t=this._errorMessage){let e=`
    <div class="error">
            <ion-icon name="arrow-back-outline"></ion-icon>
            <p>${t}</p>
          </div>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderMessage(t=this._message){let e=`
    <div class="error">
            <ion-icon name="arrow-back-outline"></ion-icon>
            <p>${t}</p>
          </div>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}class rx extends rM{_parentElement=document.querySelector(".recipe");_errorMessage=":( hmmm it seems like this recipe doesn't exist";_message;addHandlerLikes(t){this._parentElement.addEventListener("click",e=>{let r=e.target.closest(".btn--like");r&&(r.classList.toggle("liked"),t())})}addHandlerUpdateServings(t){this._parentElement.addEventListener("click",e=>{let r=e.target.closest(".btn--update-servings");if(!r)return;let{updateto:n}=r.dataset;console.log(r.dataset),+n>0&&t(+n)})}addHandlerRender(t){["hashchange","load"].forEach(e=>window.addEventListener(e,t))}_generateMarkup(){return console.log(this._data),`<figure class="recipe__fig">
    <img
      src="${this._data.image}"
      alt="${this._data.title}"
      class="recipe__img"
    />
  </figure>
  <h1 class="recipe__title">
    <span>${this._data.title}</span>
  </h1>
  <div class="recipe__details">
    <div class="recipe__info">
      <ion-icon
        name="time-outline"
        class="recipe__info-icon"
      ></ion-icon>
      <span class="recipe__info-data recipe__info-data--minutes"
        >${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <ion-icon name="people-outline"></ion-icon>
      <span class="recipe__info-data recipe__info-data--minutes"
        >${this._data.servings}</span
      >
      <span class="recipe__info-text">servings</span>
      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings btn--update-servings"data-updateTo="${this._data.servings-1}">
          <ion-icon name="remove-circle"></ion-icon>
        </button>
        <button class="btn--tiny btn--increase-servings btn--update-servings"data-updateTo="${this._data.servings+1}">
          <ion-icon name="add-circle"></ion-icon>
        </button>
      </div>
    </div>
    <button class="btn--round btn--like ${this._data.liked?"liked":""}">
      <ion-icon name="heart"></ion-icon>
    </button>
  </div>
  <div class="recipe__ingredients">
    <h2 class="heading-2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._generateMarkupIngredient).join(" ")}
      
      
      
    </ul>
  </div>
  <div class="recipe__directions">
    <h2 class="heading-2">Hot to cook it</h2>
    <div class="recipe__direction-box">
      <h3 class="heading-3">
        Are you looking for this recipe directions?
      </h3>
      <p class="recipe__directions-text">
        Engredients brought this recipe from it's original owner
        <span class="recipe__publisher">${this._data.publisher}</span>. You
        can check out the original recipe directions at their website.
      </p>
      <button class="btn-full">Directions</button>
    </div>
  </div>`}_generateMarkupIngredient(t){return`<li class="recipe__ingredient">
      <ion-icon
        name="checkmark-circle"
        class="recipe__icon"
      ></ion-icon>
      <div class="recipe__quantity">${null===t.quantity||0===t.quantity?" ":new y(t.quantity).toString()}  </div>
      <div class="recipe__description">
        <span class="recipe__unit"> ${null===t.unit?" ":t.unit} </span> ${t.description}
      </div>
    </li>`}}var rP=new rx;class rT extends rM{_parentElement=document.querySelector(".search");_clearView(){this._parentElement.querySelector(".search__field").value=""}getQuery(){let t=this._parentElement.querySelector(".search__field").value;return this._clearView(),t}addHandlerSearch(t){this._parentElement.addEventListener("submit",e=>{e.preventDefault(),t()})}}var rq=new rT,rH=new class extends rM{_parentElement="";_generateMarkup(){return`
    <li class="preview">
    <a
      href="#${this._data.id}"
      class="preview__link ${window.location.hash.slice(1)===this._data.id?"preview__link--active":""}"
    >
      <figure class="preview__fig">
        <img src="${this._data.image}" alt="${this._data.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title}</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
      </div>
    </a>
  </li>`}};class rI extends rM{_parentElement=document.querySelector(".results");_errorMessage=":( hmmm it seems like this recipe doesn't exist please try again";_message;_generateMarkup(){return this._data.map(t=>rH.render(t,!1)).join(" ")}}var rA=new rI;class rC extends rM{_parentElement=document.querySelector(".pages");hidePagination(){this._parentElement.innerHTML=""}addHandlerClick(t){this._parentElement.addEventListener("click",function(e){let r=e.target.closest(".btn__page");r&&t(+r.dataset.goto)})}_generateMarkup=function(){let t=this._data.page;console.log(t);let e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 0===e?"":t<=2?`
        ${Array.from({length:3},(t,e)=>e+1).map(e=>`<button class="btn__page ${e===t?"btn__page--active":""}" data-goto="${e}">${e}</button>`).join("")}
          <button class="btn__page"  data-goto="${t+2}">...</button>
          ${Array.from({length:2},(t,r)=>e+r-1).map(e=>`<button class="btn__page ${e===t?"btn__page--active":""}" data-goto="${e}">${e}</button>`).join("")}
        `:t>2&&t<e-2?`
        <button class="btn__page"  data-goto="1">1</button>
        <button class="btn__page"  data-goto="${t>=2?t-2:t>1?t-1:t}">...</button>
        ${Array.from({length:2},(e,r)=>t+r).map(e=>`<button class="btn__page ${e===t?"btn__page--active":""}" data-goto="${e}">${e}</button>`).join("")}
          <button class="btn__page"  data-goto="${t<=e-2?t+2:t<e-1?t+1:t}">...</button>
        <button class="btn__page"  data-goto="${e}">${e}</button>
        `:`${Array.from({length:2},(t,e)=>e+1).map(e=>`<button class="btn__page ${e===t?"btn__page--active":""}" data-goto="${e}">${e}</button>`).join("")} <button class="btn__page"  data-goto="${t>=2?t-2:t>1?t-1:t}">...</button>
      ${Array.from({length:3},(t,r)=>e-2+r).map(e=>`<button class="btn__page ${e===t?"btn__page--active":""}" data-goto="${e}">${e}</button>`).join("")}`}}var rN=new rC;class rD extends rM{_parentElement=document.querySelector(".bookmark__list");_errorMessage="No bookmarks yet find a nice recipe and bookmark it";addHandlerRender(t){window.addEventListener("load",t)}_generateMarkup(){return this._data.map(t=>rH.render(t,!1)).join("")}}var rz=new rD;class rR extends rM{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_overlay=document.querySelector(".overlay");_ingredient=document.querySelector(".ing__format");_ingredientInputs=Array.from(document.querySelectorAll(".ingredient__input"));constructor(){super(),this._addHandlerClose(),this._addHandlerOpen(),this._checkEmpty()}_checkEmpty(){Array.from(document.querySelectorAll(".upload__column")).forEach(t=>t.addEventListener("input",function(t){let e=t.target.closest(".input__group"),r=e.querySelector("input"),n=e.querySelector(".input__check"),i=e.querySelector(".icon__check"),o=e.querySelector("label");""===r.value?(n.style.opacity="1",i.style.opacity="1",i.name="close-circle-outline",i.style.color="#e74c3c",r.style.border="1px solid #e74c3c",o.style.color="#e74c3c"):(n.style.opacity="0",i.style.opacity="1",i.name="checkmark-circle-outline",i.style.color="#27ae60",r.style.border="1px solid #27ae60",o.style.color="#27ae60")}))}_addHandlerUpload(t){this._parentElement.addEventListener("submit",function(e){e.preventDefault(),console.log(this);let r=Object.fromEntries([...new FormData(this)]);t(r),console.log(r)})}_toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHandlerClose(){this._btnClose.addEventListener("click",this._toggleWindow.bind(this))}_addHandlerOpen(){this._btnOpen.addEventListener("click",this._toggleWindow.bind(this))}}var rG=new rR;class rW extends rM{_parentElement=document.querySelector(".categories");_categoryList=document.querySelector(".category__list");addHandlerCategory(t){this._categoryList.addEventListener("click",function(e){t(e)})}toggleCategory(){this._parentElement.classList.toggle("categories-hidden")}hideCategory(){this._parentElement.classList.add("categories-hidden")}getSearchQuerry(t){return t.target.closest(".category__item").querySelector(".category__title").textContent}markActive(t){let e=t.target.closest(".category__item");Array.from(t.target.closest(".category__list").querySelectorAll(".category__item")).forEach(t=>t.classList.remove("active")),e.classList.add("active")}}var rU=new rW;const rB=async function(){try{let t=window.location.hash.slice(1);if(!t){rU.toggleCategory();return}rU.hideCategory(),rP.renderSpinner(),await rS(t);let{recipe:e}=rw;rP.render(e)}catch(t){rP.renderError(),console.log(t)}},rQ=async function(){try{let t=rq.getQuery();rA.renderSpinner(),await rj(t),rA.render(rk(1)),rN.render(rw.search)}catch(t){rA.renderError(t),console.log(t)}},rY=async function(t){try{rG.renderSpinner(),await rF(t),rP.render(rw.recipe),rz.render(rw.recipe),window.history.pushState(null,"",`#${rw.recipe.id}`),rG._toggleWindow()}catch(t){rG.renderError(t)}},rV=async function(t){try{rU.markActive(t);let e=rU.getSearchQuerry(t);rA.renderSpinner(),await rj(e),rA.render(rk(1)),rN.render(rw.search)}catch(t){}};rG._addHandlerUpload(rY),rz.addHandlerRender(function(){rz.render(rw.liked)}),rP.addHandlerLikes(function(){rw.recipe.liked?rO(rw.recipe.id):rw.recipe.liked||r$(rw.recipe),rz.render(rw.liked)}),rP.addHandlerRender(rB),rP.addHandlerUpdateServings(function(t){rL(t),rP.render(rw.recipe)}),rq.addHandlerSearch(rQ),rN.addHandlerClick(function(t){rA.render(rk(t)),rN.render(rw.search)}),rU.addHandlerCategory(rV);
//# sourceMappingURL=index.f7c9917c.js.map
