module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=28)}([function(t,e){t.exports=require("@babel/runtime/regenerator")},function(t,e){t.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(t,e){t.exports=require("debug")},function(t,e){t.exports=require("@babel/runtime/helpers/toConsumableArray")},function(t,e){t.exports=require("path")},function(t,e){t.exports=require("child_process")},function(t,e){t.exports=require("url")},function(t,e){t.exports=require("fs")},function(t,e){t.exports=require("@babel/runtime/helpers/objectSpread")},function(t,e){t.exports=require("denodeify")},function(t,e){t.exports=require("@babel/runtime/helpers/slicedToArray")},function(t,e){t.exports=require("isomorphic-fetch")},function(t,e){t.exports=require("@babel/runtime/helpers/classCallCheck")},function(t,e){t.exports=require("@babel/runtime/helpers/createClass")},function(t,e){t.exports=require("jsonfile")},function(t,e){t.exports=require("minimatch")},function(t,e){t.exports=require("jsdom")},function(t){t.exports={a:"1.2.6-dev"}},function(t,e){t.exports=require("node-ask")},function(t,e){t.exports=require("tree-kill")},function(t,e){t.exports=require("env-ci")},function(t,e){t.exports=require("uuid")},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return getStorybookInfo});var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),viewLayers=["react","angular","vue","polymer","mithril","marko","html","svelte","riot","ember"],require2=eval("require");function getStorybookInfo(){var t=process.env.CHROMATIC_STORYBOOK_VERSION;if(t){var e=t.split("@"),n=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(e,2),r=n[0],o=n[1];if(!r||!o)throw new Error('CHROMATIC_STORYBOOK_VERSION misspecified -- use "viewLayer@version"');return{viewLayer:r,storybookVersion:o}}for(;viewLayers.length>0;){var a=viewLayers.shift();try{return{viewLayer:a,storybookVersion:require2("@storybook/".concat(a,"/package.json")).version}}catch(t){}}throw new Error("Couldn't discover storybook version. Try upgrading the storybook-chromatic package?")}},function(t,e){t.exports=require("@chromaui/localtunnel")},function(t,e){t.exports=require("apollo-fetch")},function(t,e){t.exports=require("node-loggly-bulk")},function(t,e){t.exports=require("util")},function(t,e){t.exports=require("strip-color")},function(t,e,n){"use strict";n.r(e);var r=n(8),o=n.n(r),a=n(0),c=n.n(a),i=n(1),s=n.n(i),u=n(9),p=n.n(u),l=n(18),d=n(2),m=n.n(d),f=n(19),h=n.n(f),b=n(20),v=n.n(b),y=n(21),w=n(6),_=n(15),g=n.n(_),x=n(12),k=n.n(x),C=n(13),E=n.n(C),O=n(16);function T(t){Object.defineProperty(t.window,"matchMedia",{value:function(){return{matches:!0,addListener:function(){},removeListener:function(){}}},writable:!0});var e=function(){function t(){k()(this,t),this.store={}}return E()(t,[{key:"getItem",value:function(t){return this.store[t]}},{key:"removeItem",value:function(t){delete this.store[t]}},{key:"setItem",value:function(t,e){this.store[t]=e.toString()}},{key:"clear",value:function(){this.store={}}}]),t}();Object.defineProperty(t.window,"localStorage",{value:new e,writable:!0});var n=function(){function t(){k()(this,t)}return E()(t,[{key:"addEventListener",value:function(){}},{key:"removeEventLister",value:function(){}},{key:"postMessage",value:function(){}},{key:"terminate",value:function(){}}]),t}();Object.defineProperty(t.window,"Worker",{value:n,writable:!0}),Object.defineProperty(t.window,"crypto",{value:{getRandomValues:function(){return 0}},writable:!0}),Object.defineProperty(t.window.navigator,"mimeTypes",{value:function(){return[]},writable:!0}),Object.defineProperty(t.window.URL,"createObjectURL",{value:function(){}}),Object.defineProperty(t.window.URL,"revokeObjectURL",{value:function(){}});var r,o=function(){function t(){k()(this,t)}return E()(t,[{key:"observe",value:function(){return[]}},{key:"takeRecords",value:function(){return[]}},{key:"disconnect",value:function(){}}]),t}();Object.defineProperty(t.window,"MutationObserver",{value:o,writable:!0}),(r=t.window).HTMLCanvasElement.prototype.getContext=function(){return{fillRect:function(){return{}},clearRect:function(){return{}},getImageData:function(t,e,n,r){return{data:new Array(n*r*4)}},putImageData:function(){return{}},createImageData:function(){return[]},setTransform:function(){return{}},drawImage:function(){return{}},save:function(){return{}},fillText:function(){return{}},restore:function(){return{}},beginPath:function(){return{}},moveTo:function(){return{}},lineTo:function(){return{}},closePath:function(){return{}},stroke:function(){return{}},translate:function(){return{}},scale:function(){return{}},rotate:function(){return{}},arc:function(){return{}},fill:function(){return{}},measureText:function(){return{width:0}},transform:function(){return{}},rect:function(){return{}},clip:function(){return{}}}},r.HTMLCanvasElement.prototype.toDataURL=function(){return""}}function S(t){return A.apply(this,arguments)}function A(){return(A=s()(c.a.mark(function t(e){var n,r,o,a,i,s,u=arguments;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},r=n.verbose,o=void 0!==r&&r,a=[],i=new O.VirtualConsole,Object.keys(console).forEach(function(t){i.on(t,function(e){return a.push({logType:t,log:e})})}),i.on("jsdomError",function(t){return a.push({logType:"error",log:t})}),o&&i.sendTo(console),t.next=8,O.JSDOM.fromURL(e,{userAgent:"Chromatic",runScripts:"dangerously",resources:"usable",virtualConsole:i,pretendToBeVisual:!0});case 8:return T(s=t.sent),t.abrupt("return",new Promise(function(t,n){return s.window.document.addEventListener("DOMContentLoaded",function(){try{var r="=========================";if(!s.window.__chromaticRuntimeSpecs__&&!s.window.__STORYBOOK_CLIENT_API__)throw console.error("Didn't find 'window.__chromaticRuntimeSpecs__' at ".concat(e,".\n")+"Have you installed the Chromatic widget or addon correctly?\n"),!o&&a.length&&(console.error("Your app's output:\n".concat(r,"\n")),a.forEach(function(t){var e=t.logType,n=t.log;return console[e](n)}),console.error("\n".concat(r,"\n"))),new Error("Didn't find 'window.__chromaticRuntimeSpecs__' at ".concat(e,"."));if(a.find(function(t){return"error"===t.logType})&&(console.error("\nYour app logged the following to the error console:\n".concat(r)),a.filter(function(t){return"error"===t.logType}).forEach(function(t){var e=t.logType,n=t.log;return console[e](n)}),console.error("\n".concat(r,"\nThis may lead to some stories not working right or getting detected by Chromatic")+"\nWe suggest you fix the errors, but we will continue anyway..\n")),!s.window.__chromaticRuntimeSpecs__)throw new Error("Didn't find Chromatic addon in your storybook.\n        \nDid you add it with `import 'storybook-chromatic'` in your `.storybook/config.js`?\n\nRead more: http://docs.chromaticqa.com");var c=s.window.__chromaticRuntimeSpecs__();s.window.close(),t(c)}catch(t){s.window.close(),n(t)}})}));case 11:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var R=n(22),I=n(3),P=n.n(I),U=n(5),B=n(11),L=n.n(B),j=n(4),q=n.n(j),D=1e3,N=3e5;function M(t){return H.apply(this,arguments)}function H(){return(H=s()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L()(e);case 3:return t.abrupt("return",!0);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",!1);case 9:case"end":return t.stop()}},t,this,[[0,6]])}))).apply(this,arguments)}function W(t,e){return V.apply(this,arguments)}function V(){return(V=s()(c.a.mark(function t(e,n){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=Date.now()+N,t.abrupt("return",new Promise(function(t,o){var a=!1;function i(){return u.apply(this,arguments)}function u(){return(u=s()(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Date.now()>r)){e.next=4;break}return a=!0,o(new Error("No server responding at ".concat(n," within ").concat(N/1e3," seconds."))),e.abrupt("return");case 4:return e.next=6,M(n);case 6:if(!e.sent){e.next=10;break}return a=!0,t(),e.abrupt("return");case 10:setTimeout(i,D);case 11:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}if(i(),e){var p="";e.stderr.on("data",function(t){p+=t.toString()}),e.stdout.on("data",function(t){p+=t.toString()}),e.on("close",function(){a||o(new Error("Script failed to start: ".concat(p,"\n")))})}}));case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function G(t){return Q.apply(this,arguments)}function Q(){return(Q=s()(c.a.mark(function t(e){var n,r,a,i,s,u,p,l;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.scriptName,r=e.commandName,a=e.url,i=o()({},process.env,{NODE_ENV:"development",BROWSER:"none"}),!n){t.next=13;break}return t.next=5,M(a);case 5:if(!t.sent){t.next=7;break}throw new Error("Detected process already running at ".concat(a)+"\nIf you are sure this is your server, pass `--do-not-start` to skip this step.");case 7:u=process.env.npm_execpath,p="string"==typeof u&&/\.m?js/.test(q.a.extname(u)),l=p?process.execPath:u||"npm",s=Object(U.spawn)(l,[].concat(P()(p?[u]:[]),["run",n]),{env:i}),t.next=16;break;case 13:if(r){t.next=15;break}throw new Error("You must pass commandName or scriptName");case 15:s=Object(U.spawn)(r,{env:i,shell:!0});case 16:return t.next=18,W(s,a);case 18:return t.abrupt("return",s);case 19:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var $=n(23),Y=n.n($),F=m()("storybook-chromatic:tester:tunnel");function K(t){return J.apply(this,arguments)}function J(){return(J=s()(c.a.mark(function t(e){var n,r,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.tunnelUrl,r=e.port){t.next=3;break}throw new Error("Need to pass a port into `openTunnel`");case 3:return t.next=5,p()(Y.a)(r,{local_host:"localhost",host:n});case 5:return(o=t.sent).on("url",function(t){return F("Got tunnel url: %s",t)}),o.on("request",function(t){return F("Got request: %O",t)}),o.tunnel_cluster.on("error",function(t){return F("Got tunnel cluster error: %O",t)}),t.abrupt("return",o);case 10:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var z=n(14);function X(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).appDir,e=void 0===t?process.cwd():t,n=Object(z.readFileSync)(q.a.resolve(e,"./package.json"));return Object.values(n.scripts||{}).find(function(t){return t.match("chromatic test")})}function Z(t,e){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).appDir,r=void 0===n?process.cwd():n,o=q.a.resolve(r,"./package.json"),a=Object(z.readFileSync)(o);if(a[t])throw new Error("Script named '".concat(t,"' already exists in package.json"));a.scripts||(a.scripts={}),a.scripts[t]=e,Object(z.writeFileSync)(o,a,{spaces:2})}var tt=n(24);class et{constructor({uri:t,jwtToken:e,headers:n}){this.apolloFetch=Object(tt.createApolloFetch)({uri:t}),this.headers=n,e&&this.setJwtToken(e)}setJwtToken(t){this.apolloFetch.use(({options:e},n)=>{t&&(e.headers={...e.headers,...this.headers,authorization:`bearer ${t}`}),n()})}async runQuery(t,e){const{data:n,errors:r}=await this.apolloFetch({query:t,variables:e});if(r)throw r;return n}static async runQuery(t,e,n){return new et(t).runQuery(e,n)}}var nt=n(10),rt=n.n(nt),ot=m()("storybook-chromatic:tester:git");function at(t){return ct.apply(this,arguments)}function ct(){return(ct=s()(c.a.mark(function t(e){var n,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",Object(U.execSync)("".concat(e," 2>&1")).toString().trim());case 4:if(t.prev=4,t.t0=t.catch(0),n=t.t0.message,!(r=void 0===n?"":n).match("Not a git repository")){t.next=9;break}throw new Error("Unable to execute git command '".concat(e,"'.\n\nChromatic only works in git projects.\nContact us at support@hichroma.com if you need to use Chromatic outside of one.\n"));case 9:if(!r.match("does not have any commits yet")){t.next=11;break}throw new Error("Unable to execute git command '".concat(e,"'.\n\nChromatic requires that you have created a commit before it can be run.\n"));case 11:throw t.t0;case 12:case"end":return t.stop()}},t,this,[[0,4]])}))).apply(this,arguments)}var it=20,st="\n  query TesterFirstCommittedAtQuery($branch: String!) {\n    app {\n      firstBuild(sortByCommittedAt: true) {\n        committedAt\n      }\n      lastBuild(branch: $branch, sortByCommittedAt: true) {\n        commit\n        committedAt\n      }\n    }\n  }\n",ut="\n  query TesterHasBuildsWithCommitsQuery($commits: [String!]!) {\n    app {\n      hasBuildsWithCommits(commits: $commits)\n    }\n  }\n";function pt(){return lt.apply(this,arguments)}function lt(){return(lt=s()(c.a.mark(function t(){var e,n,r,o,a,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,at('git log -n 1 --format="%H,%ct,%ce,%cn"');case 2:return e=t.sent.split(","),n=rt()(e,4),r=n[0],o=n[1],a=n[2],i=n[3],t.abrupt("return",{commit:r,committedAt:1e3*o,committerEmail:a,committerName:i});case 9:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function dt(){return mt.apply(this,arguments)}function mt(){return(mt=s()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",at("git rev-parse --abbrev-ref HEAD"));case 1:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function ft(t){return ht.apply(this,arguments)}function ht(){return(ht=s()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,at('git cat-file -e "'.concat(e,'^{commit}"'));case 3:return t.abrupt("return",!0);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",!1);case 9:case"end":return t.stop()}},t,this,[[0,6]])}))).apply(this,arguments)}function bt(t){return t.map(function(t){return t.trim()}).join(" ")}function vt(t,e){return yt.apply(this,arguments)}function yt(){return(yt=s()(c.a.mark(function t(e,n){var r,o,a,i,s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.firstCommittedAtSeconds,o=n.commitsWithBuilds,a=n.commitsWithoutBuilds,i="git rev-list HEAD       ".concat(r?"--since ".concat(r):"","       -n ").concat(e+a.length," --not ").concat(bt(o)),ot("running ".concat(i)),t.next=5,at(i);case 5:return t.t0=function(t){return!!t},s=t.sent.split("\n").filter(t.t0),ot("command output: ".concat(s)),t.abrupt("return",s.filter(function(t){return!o.includes(t)}).filter(function(t){return!a.includes(t)}).slice(0,e));case 9:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function wt(t){return _t.apply(this,arguments)}function _t(){return(_t=s()(c.a.mark(function t(e){var n,r,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.length){t.next=2;break}return t.abrupt("return",e);case 2:return n=e.map(function(t){return'"'.concat(t,'^@"')}),r="git rev-list ".concat(bt(e)," --not ").concat(bt(n)),ot("running ".concat(r)),t.next=7,at(r);case 7:return t.t0=function(t){return!!t},o=t.sent.split("\n").filter(t.t0),ot("command output: ".concat(o)),t.abrupt("return",o);case 11:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function gt(t,e,n){return xt.apply(this,arguments)}function xt(){return(xt=s()(c.a.mark(function t(e,n,r){var o,a,i,s,u,p,l;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.firstCommittedAtSeconds,a=r.commitsWithBuilds,i=r.commitsWithoutBuilds,ot("step: checking ".concat(n," up to ").concat(o)),ot("step: commitsWithBuilds: ".concat(a)),ot("step: commitsWithoutBuilds: ".concat(i)),t.next=6,vt(n,{firstCommittedAtSeconds:o,commitsWithBuilds:a,commitsWithoutBuilds:i});case 6:if(s=t.sent,ot("step: candidateCommits: ".concat(s)),0!==s.length){t.next=11;break}return ot("step: no candidateCommits; we are done"),t.abrupt("return",a);case 11:return t.next=13,e.runQuery(ut,{commits:s});case 13:return u=t.sent,p=u.app.hasBuildsWithCommits,ot("step: newCommitsWithBuilds: ".concat(p)),l=s.filter(function(t){return!p.find(function(e){return e===t})}),t.abrupt("return",gt(e,2*n,{firstCommittedAtSeconds:o,commitsWithBuilds:[].concat(P()(a),P()(p)),commitsWithoutBuilds:[].concat(P()(i),P()(l))}));case 18:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function kt(t){return Ct.apply(this,arguments)}function Ct(){return(Ct=s()(c.a.mark(function t(e){var n,r,o,a,i,s,u,p,l,d,m,f,h,b=arguments;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=b.length>1&&void 0!==b[1]?b[1]:{},r=n.ignoreLastBuildOnBranch,o=void 0!==r&&r,t.next=3,dt();case 3:return a=t.sent,t.next=6,pt();case 6:return i=t.sent,s=i.committedAt,t.next=10,e.runQuery(st,{branch:a});case 10:if(u=t.sent,p=u.app,l=p.firstBuild,d=p.lastBuild,ot("App firstBuild: ".concat(l,", lastBuild: ").concat(d)),l){t.next=18;break}return ot("App has no builds, returning []"),t.abrupt("return",[]);case 18:if(m=[],f=[],!("HEAD"!==a&&!o&&d&&d.committedAt<=s)){t.next=29;break}return t.next=23,ft(d.commit);case 23:if(!t.sent){t.next=27;break}m.push(d.commit),t.next=29;break;case 27:ot("Last build commit not in index, blindly appending to baselines"),f.push(d.commit);case 29:return t.next=31,gt(e,it,{firstCommittedAtSeconds:l.committedAt&&l.committedAt/1e3,commitsWithBuilds:m,commitsWithoutBuilds:[]});case 31:return h=t.sent,ot("Final commitsWithBuilds: ".concat(h)),t.t0=[],t.t1=f,t.t2=P.a,t.next=38,wt(h);case 38:return t.t3=t.sent,t.t4=(0,t.t2)(t.t3),t.abrupt("return",t.t0.concat.call(t.t0,t.t1,t.t4));case 41:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var Et=n(17),Ot=process.env,Tt=(Ot.CHROMATIC_SERVER_PORT,Ot.CHROMATIC_INDEX_URL),St=void 0===Tt?"https://index.chromaticqa.com":Tt,At=Ot.CHROMATIC_TUNNEL_URL,Rt=void 0===At?"https://tunnel.chromaticqa.com":At,It=(Ot.CHROMATIC_CREATE_TUNNEL,Ot.CHROMATIC_APP_CODE,Ot.LOGGLY_CUSTOMER_TOKEN),Pt=void 0===It?"b5e26204-cdc5-4c78-a9cc-c69eb7fabad3":It,Ut=n(25),Bt=n.n(Ut),Lt=n(26),jt=n(27),qt=n.n(jt);function Dt(t){var e=t.sessionId;if(!process.env.DISABLE_LOGGING){var n=Bt.a.createClient({token:Pt,subdomain:"hichroma",tags:["storybook-chromatic"],json:!0}),r=!!process.env.DEBUG;m.a.enable("*,-babel"),m.a.log=function(){var t=Lt.format.apply(void 0,arguments);n.log({sessionId:e,msg:qt()(t)}),r&&process.stderr.write("".concat(t,"\n"))}}}var Nt=n(7),Mt=m()("storybook-chromatic:tester:upload"),Ht="\n  mutation TesterGetUploadUrlsMutation($paths: [String!]!) {\n    getUploadUrls(paths: $paths) {\n      domain\n      urls {\n        path\n        url\n        contentType\n      }\n    }\n  }\n";function Wt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".";return Object(Nt.readdirSync)(Object(j.join)(t,e)).map(function(t){return Object(j.join)(e,t)}).map(function(e){return Object(Nt.statSync)(Object(j.join)(t,e)).isDirectory()?Wt(t,e):[e]}).reduce(function(t,e){return[].concat(P()(t),P()(e))},[])}function Vt(t){return Gt.apply(this,arguments)}function Gt(){return(Gt=s()(c.a.mark(function t(e){var n,r,o,a,i,u,p,l;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.client,r=e.dirname,Mt("uploading '".concat(r,"' to s3")),o=Wt(r),t.next=5,n.runQuery(Ht,{paths:o});case 5:return a=t.sent,i=a.getUploadUrls,u=i.domain,p=i.urls,l=[],p.forEach(function(t){var e=t.path,n=t.url,o=t.contentType,a=Object(j.join)(r,e);Mt("uploading '".concat(a,"' to '").concat(n,"' with content type '").concat(o,"'")),l.push(s()(c.a.mark(function t(){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L()(n,{method:"PUT",body:Object(Nt.createReadStream)(a),headers:{"content-type":o,"content-length":Object(Nt.statSync)(a).size}});case 2:if((r=t.sent).ok){t.next=6;break}throw Mt("Uploading '".concat(e,"' failed: %O"),r),new Error("Failed to upload ".concat(e));case 6:case"end":return t.stop()}},t,this)}))())}),t.next=13,Promise.all(l);case 13:return t.abrupt("return","".concat(u,"/iframe.html"));case 14:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}n.d(e,"default",function(){return ne});var Qt,$t=1e3,Yt=[/^GERRIT/,/^TRAVIS/],Ft="\n  mutation TesterCreateAppTokenMutation($appCode: String!) {\n    createAppToken(code: $appCode)\n  }\n",Kt="\n  mutation TesterCreateBuildMutation($input: CreateBuildInput!, $isolatorUrl: String!) {\n    createBuild(input: $input, isolatorUrl: $isolatorUrl) {\n      id\n      number\n      specCount\n      snapshotCount\n      componentCount\n      webUrl\n    }\n  }\n",Jt="\n  query TesterBuildQuery($buildNumber: Int!) {\n    app {\n      build(number: $buildNumber) {\n        id\n        status\n        autoAcceptChanges\n        inProgressCount: snapshotCount(statuses: [SNAPSHOT_IN_PROGRESS])\n        snapshotCount\n        changeCount\n        errorCount: snapshotCount(statuses: [SNAPSHOT_CAPTURE_ERROR])\n      }\n    }\n  }\n",zt=m()("storybook-chromatic:tester");function Xt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.noPrefix,r=void 0!==n&&n,o=e.level,a=void 0===o?"log":o;process.env.DISABLE_LOGGING||(r?console[a](t):console[a]("Chromatic Tester: ".concat(t)))}function Zt(t,e,n){var r=1===t?e:"".concat(e,"s");return r.endsWith("ys")&&(r=r.replace(/ys$/,"ies")),n?r:"".concat(t," ").concat(r)}function te(t,e){return ee.apply(this,arguments)}function ee(){return(ee=s()(c.a.mark(function t(e,n){var r,o,a,i,s,u,p;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.runQuery(Jt,n);case 2:if(r=t.sent,o=r.app.build,zt("build:".concat(JSON.stringify(o))),a=o.status,i=o.inProgressCount,s=o.snapshotCount,u=o.changeCount,p=o.errorCount,"BUILD_IN_PROGRESS"!==a){t.next=11;break}return i!==Qt&&(Qt=i,Xt("".concat(i,"/").concat(Zt(s,"snapshot")," remain to test. ")+"(".concat(Zt(u,"change"),", ").concat(Zt(p,"error"),")"))),t.next=10,new Promise(function(t){return setTimeout(t,$t)});case 10:return t.abrupt("return",te(e,n));case 11:return t.abrupt("return",o);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function ne(t){return re.apply(this,arguments)}function re(){return(re=s()(c.a.mark(function t(e){var n,r,a,i,s,u,d,m,f,b,_,x,k,C,E,O,T,A,I,P,U,B,L,j,q,D,N,H,W,V,Q,$,Y,F,J,z,tt,nt,rt,ot,at,ct,it,st,ut,lt,mt,ft,ht,bt,vt,yt,wt,_t,gt,xt,Ct,Ot,Tt,At,It,Pt,Ut,Bt,Lt,jt,qt,Nt,Mt,Ht,Wt,Gt,Qt,$t,Jt,ee,ne,re,oe,ae,ce,ie,se,ue,pe,le,de,me;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.appCode,r=e.scriptName,a=e.commandName,i=e.noStart,s=void 0!==i&&i,u=e.url,d=e.dirname,m=e.only,f=e.list,b=e.fromCI,_=void 0!==b&&b,x=e.autoAcceptChanges,k=void 0!==x&&x,C=e.exitZeroOnChanges,E=void 0!==C&&C,O=e.ignoreLastBuildOnBranch,T=void 0!==O&&O,A=e.preserveMissingSpecs,I=void 0!==A&&A,P=e.verbose,U=void 0!==P&&P,B=e.interactive,L=void 0===B||B,j=e.indexUrl,q=void 0===j?St:j,D=e.tunnelUrl,N=void 0===D?Rt:D,H=e.createTunnel,W=void 0===H||H,V=e.originalArgv,Q=void 0!==V&&V,$=e.sessionId,Dt({sessionId:Y=void 0===$?Object(y.v4)():$}),zt("Creating build with session id: ".concat(Y)),zt("Connecting to index:".concat(q," and ").concat(W?"using tunnel:".concat(N):"not creating a tunnel")),F=new et({uri:"".concat(q,"/graphql"),headers:{"x-chromatic-session-id":Y}}),J=process.env,z=J.TRAVIS_EVENT_TYPE,tt=J.TRAVIS_PULL_REQUEST_SLUG,nt=J.TRAVIS_REPO_SLUG,"pull_request"===z&&tt===nt&&Xt("WARNING: Running Chromatic on a Travis PR build from an internal branch.\n\nIt is recommended to run Chromatic on the push builds from Travis where possible.\nWe advise turning on push builds and disabling Chromatic for internal PR builds.\nRead more: http://docs.chromaticqa.com/setup_ci#travis\n",{noPrefix:!0,level:"warn"}),n){t.next=9;break}throw new Error("You must provide an app code  -- visit https://www.chromaticqa.com to get your code.\nPass your app code with the `CHROMATIC_APP_CODE` environment variable or the `--app-code` flag.");case 9:if(r||a||s){t.next=11;break}throw new Error("Either scriptName, commandName or noStart is required");case 11:return t.prev=11,t.next=14,F.runQuery(Ft,{appCode:n});case 14:rt=t.sent,ot=rt.createAppToken,F.setJwtToken(ot),t.next=24;break;case 19:if(t.prev=19,t.t0=t.catch(11),!(t.t0[0]&&t.t0[0].message&&t.t0[0].message.match("No app with code"))){t.next=23;break}throw new Error("Incorrect app code '".concat(n,"' -- visit https://www.chromaticqa.com to get your code"));case 23:throw t.t0;case 24:return t.next=26,pt();case 26:return at=t.sent,ct=at.commit,it=at.committedAt,st=at.committerEmail,ut=at.committerName,t.next=33,dt();case 33:if(lt=t.sent,!(mt="pull_request"===process.env.TRAVIS_EVENT_TYPE)){t.next=40;break}if(ct=process.env.TRAVIS_PULL_REQUEST_SHA,lt=process.env.TRAVIS_PULL_REQUEST_BRANCH,ct&&lt){t.next=40;break}throw new Error("`TRAVIS_EVENT_TYPE` environment variable set to 'pull_request', \nbut `TRAVIS_PULL_REQUEST_SHA` and `TRAVIS_PULL_REQUEST_BRANCH` are not both set.\n\nRead more here: https://docs.chromaticqa.com/setup_ci#travis");case 40:return"HEAD"!==lt&&lt||(ft=v()(),"HEAD"!==(lt=ft.branch)&&lt||(lt=process.env.HEAD||process.env.GERRIT_BRANCH||process.env.CI_BRANCH||lt||"HEAD")),zt("git info: ".concat(JSON.stringify({commit:ct,committedAt:it,branch:lt}))),ht="string"==typeof k?k===lt:k,bt="string"==typeof E?E===lt:E,vt="string"==typeof T?T===lt:T,t.next=47,kt(F,{ignoreLastBuildOnBranch:vt});case 47:if(yt=t.sent,zt("Found baselineCommits: ".concat(yt)),xt=5,t.prev=50,!d){t.next=60;break}return Xt("Uploading your built storybook..."),t.next=55,Vt({client:F,dirname:d});case 55:Ct=t.sent,zt("uploading to s3, got ".concat(Ct)),Xt("Uploaded your build, verifying"),t.next=90;break;case 60:if(s){t.next=68;break}return Xt("Starting storybook"),t.next=64,G({scriptName:r,commandName:a,url:u});case 64:wt=t.sent,Xt("Started storybook at ".concat(u)),t.next=74;break;case 68:if(!u){t.next=74;break}return t.next=71,M(u);case 71:if(t.sent){t.next=73;break}throw new Error("No server responding at ".concat(u," -- make sure you've started it."));case 73:Xt("Detected storybook at ".concat(u));case 74:if(Tt=Object(w.parse)(u,!0),At=Tt.port,It=Tt.pathname,Pt=Tt.query,Ut=Tt.hash,Ct=u,!W){t.next=88;break}return Xt("Opening tunnel to Chromatic capture servers"),t.next=80,K({tunnelUrl:N,port:At});case 80:_t=t.sent,zt("Opened tunnel to ".concat(_t.url)),(Bt=Object(w.parse)(_t.cachedUrl||_t.url)).pathname=It,Bt.query=Pt,Bt.hash=Ut,Ot=Bt.format(),_t.cachedUrl?((Lt=Object(w.parse)(_t.url,!0)).query=o()({},Lt.query,{path:Object(w.format)({pathname:It,query:Pt})}),Lt.hash=Ut,Lt.search=null,Ct=Lt.format()):Ct=Ot;case 88:zt("Connecting to ".concat(Ct," (cachedUrl ").concat(Ot,")")),Xt("Uploading and verifying build (this may take a few minutes depending on your connection)");case 90:if(jt=function(){return!0},!m){t.next=97;break}if(qt=m.match(/(.*):([^:]*)/)){t.next=95;break}throw new Error('--only argument must provided in the form "componentName:storyName"');case 95:Xt("Running only story '".concat(qt[2],"' of component '").concat(qt[1],"'")),jt=function(t){var e=t.name,n=t.component.name;return g()(e,qt[2])&&g()(n,qt[1])};case 97:return Nt=function(t){return t},f&&(Xt("Listing available stories:"),Nt=function(t){var e=t.name,n=t.component.name;return Xt("".concat(n,":").concat(e)),t}),t.next=101,S(Ct,{verbose:U});case 101:if(t.t1=Nt,t.t2=jt,0!==(Mt=t.sent.map(t.t1).filter(t.t2)).length){t.next=106;break}throw new Error("Cannot run a build with no stories. Please add some stories!");case 106:return Xt("Found ".concat(Zt(Mt.length,"story"))),gt=_||!!process.env.CI||!!process.env.REPOSITORY_URL,Ht=Object(R.a)(),Wt=Ht.storybookVersion,Gt=Ht.viewLayer,zt("Detected build fromCI:".concat(gt)),zt("Detected package version:".concat(Et.a,", storybook version:").concat(Wt,", view layer: ").concat(Gt)),Qt={},Object.keys(process.env).forEach(function(t){Yt.find(function(e){return t.match(e)})&&(Qt[t]=process.env[t])}),$t=JSON.stringify(Qt),zt("Got environment %s",$t),t.next=117,F.runQuery(Kt,{input:{cachedUrl:Ot,autoAcceptChanges:ht,preserveMissingSpecs:I,branch:lt,commit:ct,committedAt:it,baselineCommits:yt,runtimeSpecs:Mt,fromCI:gt,isTravisPrBuild:mt,packageVersion:Et.a,storybookVersion:Wt,viewLayer:Gt,committerEmail:st,committerName:ut,environment:$t},isolatorUrl:Ct});case 117:return Jt=t.sent,ee=Jt.createBuild,ne=ee.number,re=ee.snapshotCount,oe=ee.specCount,ae=ee.componentCount,ce=ee.webUrl,ie="View it online at ".concat(ce),Xt("Started Build ".concat(ne," ")+"(".concat(Zt(ae,"component"),", ").concat(Zt(oe,"story"),", ").concat(Zt(re,"snapshot"),").\n\n").concat(ie,".")),t.next=128,te(F,{buildNumber:ne});case 128:se=t.sent,ue=se.status,pe=se.autoAcceptChanges,le=se.changeCount,de=se.errorCount,t.t3=ue,t.next="BUILD_PASSED"===t.t3?136:"BUILD_ACCEPTED"===t.t3?139:"BUILD_PENDING"===t.t3?139:"BUILD_DENIED"===t.t3?139:"BUILD_FAILED"===t.t3?143:"BUILD_TIMED_OUT"===t.t3?146:"BUILD_ERROR"===t.t3?146:149;break;case 136:return Xt("Build ".concat(ne," passed! ").concat(ie,".")),xt=0,t.abrupt("break",150);case 139:return Xt("Build ".concat(ne," has ").concat(Zt(le,"change"),". ").concat(ie,".")),0!==(xt=bt||pe?0:1)&&Xt("Pass --exit-zero-on-changes if you want this command to exit successfully in this case.\n  Alternatively, pass --auto-accept-changes if you want changed builds to pass on this branch.\n  Read more: http://docs.chromaticqa.com/test"),t.abrupt("break",150);case 143:return Xt("Build ".concat(ne," has ").concat(Zt(de,"error"),". ").concat(ie,".")),xt=2,t.abrupt("break",150);case 146:return Xt("Build ".concat(ne," has failed to run. Our apologies. Please try again.")),xt=3,t.abrupt("break",150);case 149:throw new Error("Unexpected build status: ".concat(ue));case 150:t.next=161;break;case 152:if(t.prev=152,t.t4=t.catch(50),!(t.t4.length&&t.t4[0]&&t.t4[0].message&&t.t4[0].message.match(/Cannot run a build with no specs./))){t.next=159;break}Xt(t.t4[0].message),xt=255,t.next=161;break;case 159:throw zt("Got error %O",t.t4),t.t4;case 161:if(t.prev=161,_t&&_t.close(),!wt){t.next=166;break}return t.next=166,p()(h.a)(wt.pid,"SIGHUP");case 166:return t.finish(161);case 167:if(X()||!Q||gt||!L){t.next=173;break}return me="CHROMATIC_APP_CODE=".concat(n," chromatic test ").concat(Q.slice(2).join(" ")).replace(/--app-code[= ]\S+/,"").trim(),t.next=171,Object(l.confirm)("\nYou have not added Chromatic's test script to your `package.json`. Would you like me to do it for you?");case 171:t.sent?(Z("chromatic",me),Xt("\nAdded script `chromatic`. You can now run it here or in CI with `npm run chromatic` (or `yarn chromatic`)\n\nNOTE: I wrote your app code to the `CHROMATIC_APP_CODE` environment variable. The app code cannot be used to read snapshot data, it can only be used to create new builds. If you would still prefer not to check it into source control, you can remove it from `package.json` and set it via an environment variable instead.",{noPrefix:!0})):Xt('\nNo problem. You can add it later with:\n{\n  "scripts": {\n    "chromatic": "'.concat(me,'"\n  }\n}'),{noPrefix:!0});case 173:return t.abrupt("return",xt);case 174:case"end":return t.stop()}},t,this,[[11,19],[50,152,161,167]])}))).apply(this,arguments)}}]);
//# sourceMappingURL=tester.js.map