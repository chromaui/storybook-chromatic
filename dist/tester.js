module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist",r(r.s=13)}([function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("babel-runtime/core-js/promise")},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("babel-runtime/helpers/classCallCheck")},function(e,t){e.exports=require("babel-runtime/helpers/createClass")},function(e,t){e.exports=require("babel-runtime/helpers/slicedToArray")},function(e,t){e.exports=require("babel-runtime/helpers/toConsumableArray")},function(e,t){e.exports=require("babel-runtime/helpers/extends")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("path")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=process.env,o=n.CHROMATIC_SERVER_PORT,a=void 0===o?3004:o,i=n.CHROMATIC_INDEX_URL,u=void 0===i?"https://index.chromaticqa.com":i,s=n.CHROMATIC_TUNNEL_URL,c=void 0===s?"https://tunnel.chromaticqa.com":s,l=n.CHROMATIC_CREATE_TUNNEL,d=void 0===l?"true":l,p=n.CHROMATIC_APP_CODE,f=n.LOGGLY_CUSTOMER_TOKEN,m=void 0===f?"b5e26204-cdc5-4c78-a9cc-c69eb7fabad3":f;t.CHROMATIC_SERVER_PORT=a,t.CHROMATIC_INDEX_URL=u,t.CHROMATIC_TUNNEL_URL=c,t.CHROMATIC_CREATE_TUNNEL=d,t.CHROMATIC_APP_CODE=p,t.LOGGLY_CUSTOMER_TOKEN=m},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=R(r(0)),a=R(r(3)),i=R(r(14)),u=R(r(1)),s=(n=(0,u.default)(o.default.mark(function e(t,r){var n,u,c,l,d,p,f;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.runQuery(O,r);case 2:if(n=e.sent,u=n.app.build,S("build:"+(0,i.default)(u)),c=u.status,l=u.inProgressCount,d=u.snapshotCount,p=u.changeCount,f=u.errorCount,"BUILD_IN_PROGRESS"!==c){e.next=11;break}return l!==N&&(N=l,I(l+"/"+P(d,"snapshot")+" remain to test. ("+P(p,"change")+", "+P(f,"error")+")")),e.next=10,new a.default(function(e){return setTimeout(e,A)});case 10:return e.abrupt("return",s(t,r));case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}},e,this)})),function(e,t){return n.apply(this,arguments)}),c=r(4),l=r(15),d=R(r(2)),p=R(r(16)),f=R(r(17)),m=r(18),h=r(19),v=R(r(20)),b=R(r(23)),y=r(24),_=R(y),w=R(r(26)),g=r(28),x=R(r(31)),k=r(33),C=r(34),T=r(12),E=R(r(35));function R(e){return e&&e.__esModule?e:{default:e}}var A=1e3,O="\n  query TesterBuildQuery($buildNumber: Int!) {\n    app {\n      build(number: $buildNumber) {\n        id\n        status\n        autoAcceptChanges\n        inProgressCount: snapshotCount(statuses: [SNAPSHOT_IN_PROGRESS])\n        snapshotCount\n        changeCount\n        errorCount: snapshotCount(statuses: [SNAPSHOT_CAPTURE_ERROR])\n      }\n    }\n  }\n",S=(0,d.default)("storybook-chromatic:tester");function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.noPrefix,n=void 0!==r&&r,o=t.level,a=void 0===o?"log":o;process.env.DISABLE_LOGGING||(n?console[a](e):console[a]("Chromatic Tester: "+e))}function P(e,t,r){var n=1===e?t:t+"s";return n.endsWith("ys")&&(n=n.replace(/ys$/,"ies")),r?n:e+" "+n}var N=void 0;t.default=function(){var e=(0,u.default)(o.default.mark(function e(t){var r,n,a,u,d,R,A,O,N,L,B,U,q,D,M,j,H,V,W,G,Y,Q,F,$,J,K,X,z,Z,ee,te,re,ne,oe,ae,ie,ue,se,ce,le,de,pe,fe,me,he,ve,be=t.appCode,ye=t.scriptName,_e=t.commandName,we=t.noStart,ge=void 0!==we&&we,xe=t.url,ke=t.only,Ce=t.fromCI,Te=void 0!==Ce&&Ce,Ee=t.autoAcceptChanges,Re=void 0!==Ee&&Ee,Ae=t.exitZeroOnChanges,Oe=void 0!==Ae&&Ae,Se=t.verbose,Ie=void 0!==Se&&Se,Pe=t.interactive,Ne=void 0===Pe||Pe,Le=t.indexUrl,Be=void 0===Le?T.CHROMATIC_INDEX_URL:Le,Ue=t.tunnelUrl,qe=void 0===Ue?T.CHROMATIC_TUNNEL_URL:Ue,De=t.createTunnel,Me=void 0===De||De,je=t.originalArgv,He=void 0!==je&&je,Ve=t.sessionId,We=void 0===Ve?(0,h.v4)():Ve;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((0,E.default)({sessionId:We}),S("Creating build with session id: "+We),S("Connecting to index:"+Be+" and "+(Me?"using tunnel:"+qe:"not creating a tunnel")),r=new x.default({uri:Be+"/graphql",headers:{"x-chromatic-session-id":We}}),n=process.env,a=n.TRAVIS_EVENT_TYPE,u=n.TRAVIS_PULL_REQUEST_SLUG,d=n.TRAVIS_REPO_SLUG,"pull_request"===a&&u===d&&I("WARNING: Running Chromatic on a Travis PR build from an internal branch.\n\nIt is recommended to run Chromatic on the push builds from Travis where possible.\nWe advise turning on push builds and disabling Chromatic for internal PR builds.\nRead more: http://docs.chromaticqa.com/setup_ci#travis\n",{noPrefix:!0,level:"warn"}),be){e.next=8;break}throw new Error("You must provide an app code  -- visit https://www.chromaticqa.com to get your code.\nPass your app code with the `CHROMATIC_APP_CODE` environment variable or the `--app-code` flag.");case 8:if(ye||_e||ge){e.next=10;break}throw new Error("Either scriptName, commandName or noStart is required");case 10:return e.prev=10,e.next=13,r.runQuery("\n  mutation TesterCreateAppTokenMutation($appCode: String!) {\n    createAppToken(code: $appCode)\n  }\n",{appCode:be});case 13:R=e.sent,A=R.createAppToken,r.setJwtToken(A),e.next=23;break;case 18:if(e.prev=18,e.t0=e.catch(10),!(e.t0[0]&&e.t0[0].message&&e.t0[0].message.match("No app with code"))){e.next=22;break}throw new Error("Incorrect app code '"+be+"' -- visit https://www.chromaticqa.com to get your code");case 22:throw e.t0;case 23:return e.next=25,(0,k.getCommit)();case 25:return O=e.sent,N=O.commit,L=O.committedAt,B=O.committerEmail,U=O.committerName,e.next=32,(0,k.getBranch)();case 32:if(q=e.sent,!(D="pull_request"===process.env.TRAVIS_EVENT_TYPE)){e.next=39;break}if(N=process.env.TRAVIS_PULL_REQUEST_SHA,q=process.env.TRAVIS_PULL_REQUEST_BRANCH,N&&q){e.next=39;break}throw new Error("`TRAVIS_EVENT_TYPE` environment variable set to 'pull_request', \nbut `TRAVIS_PULL_REQUEST_SHA` and `TRAVIS_PULL_REQUEST_BRANCH` are not both set.\n\nRead more here: https://docs.chromaticqa.com/setup_ci#travis");case 39:return"HEAD"!==q&&q||"HEAD"!==(q=(0,f.default)().branch)&&q||(q=process.env.HEAD||process.env.GERRIT_BRANCH||process.env.CI_BRANCH||q||"HEAD"),S("git info: "+(0,i.default)({commit:N,committedAt:L,branch:q})),e.next=43,(0,k.getBaselineCommits)(r);case 43:if(M=e.sent,S("Found baselineCommits: "+M),j=void 0,H=void 0,V=void 0,W=5,e.prev=49,ge){e.next=58;break}return I("Starting storybook"),e.next=54,(0,_.default)({scriptName:ye,commandName:_e,url:xe});case 54:j=e.sent,I("Started storybook at "+xe),e.next=63;break;case 58:return e.next=60,(0,y.checkResponse)(xe);case 60:if(e.sent){e.next=62;break}throw new Error("No server responding at "+xe+" -- make sure you've started it.");case 62:I("Detected storybook at "+xe);case 63:if(G=new m.URL(xe),Y=G.port,Q=G.pathname,F=G.query,$=G.hash,J=xe,!Me){e.next=76;break}return I("Opening tunnel to Chromatic capture servers"),e.next=69,(0,w.default)({tunnelUrl:qe,port:Y});case 69:H=e.sent,S("Opened tunnel to "+H.url),(K=new m.URL(H.url)).pathname=Q,K.query=F,K.hash=$,J=K.toString();case 76:if(S("Connecting to "+J),I("Uploading and verifying build (this may take a few minutes depending on your connection)"),X=function(){return!0},!ke){e.next=85;break}if(z=ke.match(/(.*):([^:]*)/)){e.next=83;break}throw new Error('--only argument must provided in the from "componentName:storyName"');case 83:I("Running only story '"+z[2]+"' of component '"+z[1]+"'"),X=function(e){var t=e.name,r=e.componentName,n=e.component.name;return t===z[2]&&(r||n)===z[1]};case 85:return e.next=87,(0,v.default)(J,{verbose:Ie});case 87:if(e.t1=X,0!==(Z=e.sent.filter(e.t1)).length){e.next=91;break}throw new Error("Cannot run a build with no stories. Please add some stories!");case 91:return I("Found "+P(Z.length,"story")),V=Te||!!process.env.CI||!!process.env.REPOSITORY_URL,ee=(0,b.default)(),te=ee.storybookVersion,re=ee.viewLayer,S("Detected build fromCI:"+V),S("Detected package version:"+C.version+", storybook version:"+te+", view layer: "+re),e.next=98,r.runQuery("\n  mutation TesterCreateBuildMutation($input: CreateBuildInput!, $isolatorUrl: String!) {\n    createBuild(input: $input, isolatorUrl: $isolatorUrl) {\n      id\n      number\n      specCount\n      snapshotCount\n      componentCount\n      webUrl\n    }\n  }\n",{input:{autoAcceptChanges:Re,branch:q,commit:N,committedAt:L,baselineCommits:M,runtimeSpecs:Z,fromCI:V,isTravisPrBuild:D,packageVersion:C.version,storybookVersion:te,viewLayer:re,committerEmail:B,committerName:U},isolatorUrl:J});case 98:return ne=e.sent,oe=ne.createBuild,ae=oe.number,ie=oe.snapshotCount,ue=oe.specCount,se=oe.componentCount,ce=oe.webUrl,le="View it online at "+ce,I("Started Build "+ae+" ("+P(se,"component")+", "+P(ue,"story")+", "+P(ie,"snapshot")+").\n\n"+le+"."),e.next=109,s(r,{buildNumber:ae});case 109:de=e.sent,pe=de.status,fe=de.autoAcceptChanges,me=de.changeCount,he=de.errorCount,e.t2=pe,e.next="BUILD_PASSED"===e.t2?117:"BUILD_ACCEPTED"===e.t2?120:"BUILD_PENDING"===e.t2?120:"BUILD_DENIED"===e.t2?120:"BUILD_FAILED"===e.t2?124:"BUILD_TIMED_OUT"===e.t2?127:"BUILD_ERROR"===e.t2?127:130;break;case 117:return I("Build "+ae+" passed! "+le+"."),W=0,e.abrupt("break",131);case 120:return I("Build "+ae+" has "+P(me,"change")+". "+le+"."),0!==(W=Oe||fe?0:1)&&I("Pass --exit-zero-on-changes if you want this command to exit successfully in this case.\n  Alternatively, pass --auto-accept-changes if you want changed builds to pass on this branch.\n  Read more: http://docs.chromaticqa.com/test"),e.abrupt("break",131);case 124:return I("Build "+ae+" has "+P(he,"error")+". "+le+"."),W=2,e.abrupt("break",131);case 127:return I("Build "+ae+" has failed to run. Our apologies. Please try again."),W=3,e.abrupt("break",131);case 130:throw new Error("Unexpected build status: "+pe);case 131:e.next=141;break;case 133:if(e.prev=133,e.t3=e.catch(49),!(e.t3.length&&e.t3[0]&&e.t3[0].message&&e.t3[0].message.match(/Cannot run a build with no specs./))){e.next=140;break}I(e.t3[0].message),W=255,e.next=141;break;case 140:throw e.t3;case 141:if(e.prev=141,H&&H.close(),!j){e.next=146;break}return e.next=146,(0,c.promisify)(p.default)(j.pid,"SIGHUP");case 146:return e.finish(141);case 147:if((0,g.checkPackageJson)()||!He||V||!Ne){e.next=153;break}return ve=("CHROMATIC_APP_CODE="+be+" chromatic test "+He.slice(2).join(" ")).replace(/--app-code[= ]\S+/,"").trim(),e.next=151,(0,l.confirm)("\nYou have not added Chromatic's test script to your `package.json`. Would you like me to do it for you?");case 151:e.sent?((0,g.addScriptToPackageJson)("chromatic",ve),I("\nAdded script `chromatic`. You can now run it here or in CI with `npm run chromatic` (or `yarn chromatic`)\n\nNOTE: I wrote your app code to the `CHROMATIC_APP_CODE` environment variable. The app code cannot be used to read snapshot data, it can only be used to create new builds. If you would still prefer not to check it into source control, you can remove it from `package.json` and set it via an environment variable instead.",{noPrefix:!0})):I('\nNo problem. You can add it later with:\n{\n  "scripts": {\n    "chromatic": "'+ve+'"\n  }\n}',{noPrefix:!0});case 153:return e.abrupt("return",W);case 154:case"end":return e.stop()}},e,this,[[10,18],[49,133,141,147]])}));return function(t){return e.apply(this,arguments)}}()},function(e,t){e.exports=require("babel-runtime/core-js/json/stringify")},function(e,t){e.exports=require("node-ask")},function(e,t){e.exports=require("tree-kill")},function(e,t){e.exports=require("env-ci")},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("uuid")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(0)),o=l(r(3)),a=l(r(21)),i=l(r(1)),u=l(r(5)),s=l(r(6)),c=r(22);function l(e){return e&&e.__esModule?e:{default:e}}function d(e){Object.defineProperty(e.window,"matchMedia",{value:function(){return{matches:!0,addListener:function(){},removeListener:function(){}}}});var t=function(){function e(){(0,u.default)(this,e),this.store={}}return(0,s.default)(e,[{key:"getItem",value:function(e){return this.store[e]}},{key:"removeItem",value:function(e){delete this.store[e]}},{key:"setItem",value:function(e,t){this.store[e]=t.toString()}},{key:"clear",value:function(){this.store={}}}]),e}();Object.defineProperty(e.window,"localStorage",{value:new t});var r=function(){function e(){(0,u.default)(this,e)}return(0,s.default)(e,[{key:"addEventListener",value:function(){}},{key:"removeEventLister",value:function(){}},{key:"postMessage",value:function(){}},{key:"terminate",value:function(){}}]),e}();Object.defineProperty(e.window,"Worker",r),Object.defineProperty(e.window,"crypto",{value:{getRandomValues:function(){return 0}}}),Object.defineProperty(e.window.navigator,"mimeTypes",{value:function(){return[]}})}t.default=function(){var e=(0,i.default)(n.default.mark(function e(t){var r,i,u,s=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).verbose,l=void 0!==s&&s;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],i=new c.VirtualConsole,(0,a.default)(console).forEach(function(e){i.on(e,function(t){return r.push({logType:e,log:t})})}),i.on("jsdomError",function(e){return r.push({logType:"error",log:e})}),l&&i.sendTo(console),e.next=7,c.JSDOM.fromURL(t,{userAgent:"Chromatic",runScripts:"dangerously",resources:"usable",virtualConsole:i,pretendToBeVisual:!0});case 7:return d(u=e.sent),e.abrupt("return",new o.default(function(e,n){return u.window.document.addEventListener("DOMContentLoaded",function(){try{var o="=========================";if(!u.window.__chromaticRuntimeSpecs__&&!u.window.__STORYBOOK_CLIENT_API__)throw console.error("Didn't find 'window.__chromaticRuntimeSpecs__' at "+t+".\nHave you installed the Chromatic widget or addon correctly?\n"),!l&&r.length&&(console.error("Your app's output:\n"+o+"\n"),r.forEach(function(e){var t=e.logType,r=e.log;return console[t](r)}),console.error("\n"+o+"\n")),new Error("Didn't find 'window.__chromaticRuntimeSpecs__' at "+t+".");if(r.find(function(e){return"error"===e.logType})&&(console.error("\nYour app logged the following to the error console:\n"+o),r.filter(function(e){return"error"===e.logType}).forEach(function(e){var t=e.logType,r=e.log;return console[t](r)}),console.error("\n"+o+"\nThis may lead to some stories not working right or getting detected by Chromatic\nWe suggest you fix the errors, but we will continue anyway..\n")),!u.window.__chromaticRuntimeSpecs__)throw new Error("Didn't find Chromatic addon in your storybook.\n        \nDid you add it with `import 'storybook-chromatic'` in your `.storybook/config.js`?\n\nRead more: http://docs.chromaticqa.com");var a=u.window.__chromaticRuntimeSpecs__();u.window.close(),e(a)}catch(e){u.window.close(),n(e)}})}));case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},function(e,t){e.exports=require("babel-runtime/core-js/object/keys")},function(e,t){e.exports=require("jsdom")},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray2=__webpack_require__(7),_slicedToArray3=_interopRequireDefault(_slicedToArray2);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.default=getStorybookInfo;var viewLayers=["react","angular","vue","polymer","mithril","marko","html"],require2=eval("require");function getStorybookInfo(){var e=process.env.CHROMATIC_STORYBOOK_VERSION;if(e){var t=e.split("@"),r=(0,_slicedToArray3.default)(t,2),n=r[0],o=r[1];if(!n||!o)throw new Error('CHROMATIC_STORYBOOK_VERSION misspecified -- use "viewLayer@version"');return{viewLayer:n,storybookVersion:o}}for(;viewLayers.length>0;){var a=viewLayers.shift();try{return{viewLayer:a,storybookVersion:require2("@storybook/"+a+"/package.json").version}}catch(e){}}throw new Error("Couldn't discover storybook version. Try upgrading the storybook-chromatic package?")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkResponse=void 0;var n,o,a=h(r(8)),i=h(r(9)),u=h(r(3)),s=h(r(0)),c=h(r(1)),l=t.checkResponse=(n=(0,c.default)(s.default.mark(function e(t){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.default)(t);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,this,[[0,6]])})),function(e){return n.apply(this,arguments)}),d=(o=(0,c.default)(s.default.mark(function e(t,r){var n;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Date.now()+b,e.abrupt("return",new u.default(function(e,o){var a,i=(a=(0,c.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Date.now()>n)){t.next=4;break}return u=!0,o(new Error("No server responding at "+r+" within "+b/1e3+" seconds.")),t.abrupt("return");case 4:return t.next=6,l(r);case 6:if(!t.sent){t.next=10;break}return u=!0,e(),t.abrupt("return");case 10:setTimeout(i,v);case 11:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)}),u=!1;if(i(),t){var d="";t.stderr.on("data",function(e){d+=e.toString()}),t.stdout.on("data",function(e){d+=e.toString()}),t.on("close",function(){u||o(new Error("Script failed to start: "+d+"\n"))})}}));case 2:case"end":return e.stop()}},e,this)})),function(e,t){return o.apply(this,arguments)}),p=r(10),f=h(r(25)),m=h(r(11));function h(e){return e&&e.__esModule?e:{default:e}}var v=1e3,b=3e5;t.default=function(){var e=(0,c.default)(s.default.mark(function e(t){var r,n,o,u,c,f=t.scriptName,h=t.commandName,v=t.url;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(0,i.default)({},process.env,{NODE_ENV:"development",BROWSER:"none"}),n=void 0,!f){e.next=13;break}return e.next=5,l(v);case 5:if(!e.sent){e.next=7;break}throw new Error("Detected process already running at "+v+"\nIf you are sure this is your server, pass `--do-not-start` to skip this step.");case 7:o=process.env.npm_execpath,u="string"==typeof o&&/\.m?js/.test(m.default.extname(o)),c=u?process.execPath:o||"npm",n=(0,p.spawn)(c,[].concat((0,a.default)(u?[o]:[]),["run",f]),{env:r}),e.next=16;break;case 13:if(h){e.next=15;break}throw new Error("You must pass commandName or scriptName");case 15:n=(0,p.spawn)(h,{env:r,shell:!0});case 16:return e.next=18,d(n,v);case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(0)),o=s(r(1)),a=s(r(27)),i=s(r(2)),u=r(4);function s(e){return e&&e.__esModule?e:{default:e}}var c=(0,i.default)("storybook-chromatic:tester:tunnel");t.default=function(){var e=(0,o.default)(n.default.mark(function e(t){var r,o=t.tunnelUrl,i=t.port;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}throw new Error("Need to pass a port into `openTunnel`");case 2:return e.next=4,(0,u.promisify)(a.default)(i,{local_host:"localhost",host:o});case 4:return(r=e.sent).on("url",function(e){return c("Got tunnel url: %s",e)}),r.on("request",function(e){return c("Got request: %O",e)}),r.tunnel_cluster.on("error",function(e){return c("Got tunnel cluster error: %O",e)}),e.abrupt("return",r);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},function(e,t){e.exports=require("@chromaui/localtunnel")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(29));t.checkPackageJson=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).appDir,t=void 0===e?process.cwd():e,r=(0,a.readFileSync)(o.default.resolve(t,"./package.json"));return(0,n.default)(r.scripts||{}).find(function(e){return e.match("chromatic test")})},t.addScriptToPackageJson=function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).appDir,n=void 0===r?process.cwd():r,i=o.default.resolve(n,"./package.json"),u=(0,a.readFileSync)(i);if(u[e])throw new Error("Script named '"+e+"' already exists in package.json");u.scripts||(u.scripts={});u.scripts[e]=t,(0,a.writeFileSync)(i,u,{spaces:2})};var o=i(r(11)),a=r(30);function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=require("babel-runtime/core-js/object/values")},function(e,t){e.exports=require("jsonfile")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(0)),o=c(r(1)),a=c(r(9)),i=c(r(5)),u=c(r(6)),s=r(32);function c(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){var r=t.uri,n=t.jwtToken,o=t.headers;(0,i.default)(this,e),this.apolloFetch=(0,s.createApolloFetch)({uri:r}),this.headers=o,n&&this.setJwtToken(n)}return(0,u.default)(e,[{key:"setJwtToken",value:function(e){var t=this;this.apolloFetch.use(function(r,n){var o=r.options;e&&(o.headers=(0,a.default)({},o.headers,t.headers,{authorization:"bearer "+e})),n()})}},{key:"runQuery",value:function(){var e=(0,o.default)(n.default.mark(function e(t,r){var o,a,i;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apolloFetch({query:t,variables:r});case 2:if(o=e.sent,a=o.data,!(i=o.errors)){e.next=7;break}throw i;case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}],[{key:"runQuery",value:function(){var t=(0,o.default)(n.default.mark(function t(r,o,a){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new e(r).runQuery(o,a));case 1:case"end":return t.stop()}},t,this)}));return function(e,r,n){return t.apply(this,arguments)}}()}]),e}();t.default=l},function(e,t){e.exports=require("apollo-fetch")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBaselineCommits=t.getBranch=t.getCommit=t.FETCH_N_INITIAL_BUILD_COMMITS=void 0;var n,o,a,i,u,s,c,l,d=k(r(8)),p=k(r(7)),f=k(r(0)),m=k(r(1)),h=(n=(0,m.default)(f.default.mark(function e(t){var r,n;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",(0,x.execSync)(t).toString().trim());case 4:if(e.prev=4,e.t0=e.catch(0),r=e.t0.message,!(n=void 0===r?"":r).match("Not a git repository")){e.next=9;break}throw new Error("Unable to execute git command '"+t+"'.\n\nChromatic only works in git projects.\nContact us at support@hichroma.com if you need to use Chromatic outside of one.\n");case 9:if(!n.match("does not have any commits yet")){e.next=11;break}throw new Error("Unable to execute git command '"+t+"'.\n\nChromatic requires that you have created a commit before it can be run.\n");case 11:throw e.t0;case 12:case"end":return e.stop()}},e,this,[[0,4]])})),function(e){return n.apply(this,arguments)}),v=t.getCommit=(o=(0,m.default)(f.default.mark(function e(){var t,r,n,o,a,i;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h('git log -n 1 --format="%H,%ct,%ce,%cn"');case 2:return t=e.sent.split(","),r=(0,p.default)(t,4),n=r[0],o=r[1],a=r[2],i=r[3],e.abrupt("return",{commit:n,committedAt:1e3*o,committerEmail:a,committerName:i});case 9:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)}),b=t.getBranch=(a=(0,m.default)(f.default.mark(function e(){return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h("git rev-parse --abbrev-ref HEAD"));case 1:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)}),y=(i=(0,m.default)(f.default.mark(function e(t){return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("git cat-file -e "+t+"^{commit}");case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,this,[[0,6]])})),function(e){return i.apply(this,arguments)}),_=(u=(0,m.default)(f.default.mark(function e(t,r){var n,o,a=r.firstCommittedAtSeconds,i=r.commitsWithBuilds,u=r.commitsWithoutBuilds;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="git rev-list HEAD       "+(a?"--since "+a:"")+"       -n "+(t+u.length)+" --not "+A(i),C("running "+n),e.next=4,h(n);case 4:return e.t0=function(e){return!!e},o=e.sent.split("\n").filter(e.t0),C("command output: "+o),e.abrupt("return",o.filter(function(e){return!i.includes(e)}).filter(function(e){return!u.includes(e)}).slice(0,t));case 8:case"end":return e.stop()}},e,this)})),function(e,t){return u.apply(this,arguments)}),w=(s=(0,m.default)(f.default.mark(function e(t){var r,n,o;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return",t);case 2:return r=t.map(function(e){return e+"^@"}),n="git rev-list "+A(t)+" --not "+A(r),C("running "+n),e.next=7,h(n);case 7:return e.t0=function(e){return!!e},o=e.sent.split("\n").filter(e.t0),C("command output: "+o),e.abrupt("return",o);case 11:case"end":return e.stop()}},e,this)})),function(e){return s.apply(this,arguments)}),g=(c=(0,m.default)(f.default.mark(function e(t,r,n){var o,a,i,u,s=n.firstCommittedAtSeconds,c=n.commitsWithBuilds,l=n.commitsWithoutBuilds;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return C("step: checking "+r+" up to "+s),C("step: commitsWithBuilds: "+c),C("step: commitsWithoutBuilds: "+l),e.next=5,_(r,{firstCommittedAtSeconds:s,commitsWithBuilds:c,commitsWithoutBuilds:l});case 5:if(o=e.sent,C("step: candidateCommits: "+o),0!==o.length){e.next=10;break}return C("step: no candidateCommits; we are done"),e.abrupt("return",c);case 10:return e.next=12,t.runQuery(R,{commits:o});case 12:return a=e.sent,i=a.app.hasBuildsWithCommits,C("step: newCommitsWithBuilds: "+i),u=o.filter(function(e){return!i.find(function(t){return t===e})}),e.abrupt("return",g(t,2*r,{firstCommittedAtSeconds:s,commitsWithBuilds:[].concat((0,d.default)(c),(0,d.default)(i)),commitsWithoutBuilds:[].concat((0,d.default)(l),(0,d.default)(u))}));case 17:case"end":return e.stop()}},e,this)})),function(e,t,r){return c.apply(this,arguments)}),x=(t.getBaselineCommits=(l=(0,m.default)(f.default.mark(function e(t){var r,n,o,a,i,u,s,c,l,p;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return r=e.sent,e.next=5,v();case 5:return n=e.sent,o=n.committedAt,e.next=9,t.runQuery(E,{branch:r});case 9:if(a=e.sent,i=a.app,u=i.firstBuild,s=i.lastBuild,C("App firstBuild: "+u+", lastBuild: "+s),u){e.next=17;break}return C("App has no builds, returning []"),e.abrupt("return",[]);case 17:if(c=[],l=[],!("HEAD"!==r&&s&&s.committedAt<=o)){e.next=28;break}return e.next=22,y(s.commit);case 22:if(!e.sent){e.next=26;break}c.push(s.commit),e.next=28;break;case 26:C("Last build commit not in index, blindly appending to baselines"),l.push(s.commit);case 28:return e.next=30,g(t,T,{firstCommittedAtSeconds:u.committedAt&&u.committedAt/1e3,commitsWithBuilds:c,commitsWithoutBuilds:[]});case 30:return p=e.sent,C("Final commitsWithBuilds: "+p),e.t0=[],e.t1=l,e.t2=d.default,e.next=37,w(p);case 37:return e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.abrupt("return",e.t0.concat.call(e.t0,e.t1,e.t4));case 40:case"end":return e.stop()}},e,this)})),function(e){return l.apply(this,arguments)}),r(10));function k(e){return e&&e.__esModule?e:{default:e}}var C=(0,k(r(2)).default)("storybook-chromatic:tester:git"),T=t.FETCH_N_INITIAL_BUILD_COMMITS=20,E="\n  query TesterFirstCommittedAtQuery($branch: String!) {\n    app {\n      firstBuild(sortByCommittedAt: true) {\n        committedAt\n      }\n      lastBuild(branch: $branch, sortByCommittedAt: true) {\n        commit\n        committedAt\n      }\n    }\n  }\n",R="\n  query TesterHasBuildsWithCommitsQuery($commits: [String!]!) {\n    app {\n      hasBuildsWithCommits(commits: $commits)\n    }\n  }\n";function A(e){return e.map(function(e){return e.trim()}).join(" ")}},function(e){e.exports={name:"storybook-chromatic",version:"1.0.3-dev",description:"Visual Testing for Storybook",browser:"./dist/assets/storybook-addon.js",main:"./dist/assets/null-server.js",scripts:{prebuild:"rm -rf ./dist","build:bin":"../../node_modules/.bin/babel -s -d ./dist ./src -D --only 'assets,bin'","build:webpack":"../../node_modules/.bin/webpack",build:"../../node_modules/.bin/npm-run-all --serial -l build:**",prepare:"npm run build",dev:"../../node_modules/.bin/npm-run-all --parallel -l 'build:** -- --watch'"},bin:{chromatic:"./dist/bin/chromatic.js"},dependencies:{"apollo-fetch":"^0.6.0","babel-runtime":"^6.26.0",commander:"^2.9.0",debug:"^3.0.1","env-ci":"^2.1.0","isomorphic-fetch":"^2.2.1",jsdom:"^11.5.1",jsonfile:"^4.0.0","@chromaui/localtunnel":"1.9.1-chromatic.2",loggly:"^1.1.1","node-ask":"^1.0.1","strip-color":"^0.1.0","tree-kill":"^1.1.0",uuid:"^3.3.2"},peerDependencies:{"@storybook/addons":"3.* || 4.*","@storybook/core":"3.* || 4.*"},devDependencies:{"babel-cli":"^6.26.0","npm-run-all":"^4.0.2","prettier-eslint":"^7.1.0",tmp:"^0.0.33",webpack:"^3.10.0","webpack-cli":"^3.1.0","webpack-node-externals":"^1.6.0"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.sessionId,r=o.default.createClient({token:u.LOGGLY_CUSTOMER_TOKEN,subdomain:"hichroma",tags:["storybook-chromatic"],json:!0}),s=!!process.env.DEBUG;n.default.enable("*,-babel"),n.default.log=function(){var e=a.format.apply(void 0,arguments);r.log({sessionId:t,msg:(0,i.default)(e)}),s&&process.stderr.write(e+"\n")}};var n=s(r(2)),o=s(r(36)),a=r(4),i=s(r(37)),u=r(12);function s(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=require("loggly")},function(e,t){e.exports=require("strip-color")}]);
//# sourceMappingURL=tester.js.map