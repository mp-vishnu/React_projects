(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1804:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(57),o=n.n(r);function a(e){return"".concat(window.location.origin).concat(e.fullPath)}function i(e,t,n,r,o){var a="function"==typeof t?t.call(e):t,i="function"==typeof n?n.call(e):n,s="function"==typeof r?r.call(e):r,c="function"==typeof o?o.call(e):o;return{name:a,complement:i,fullName:"".concat(i," ").concat(a).trim(),description:s,image:c}}var s={5:["Font Awesome","https://fontawesome.com/images/open-graph.png"],6:["Font Awesome v6 Beta","https://img.fortawesome.com/1ce05b4b/beta-open-graph.png"]};function c(e){var t=e.majorVersion,n=void 0===t?5:t,r=o()(s[n],2),c=r[0],u=r[1],l=e.name,p=void 0===l?"":l,m=e.complement,h=void 0===m?c:m,f=e.description,d=e.image,v=void 0===d?u:d;return{title:function(){var e=i(this,p,h,f,v),t=e.name,n={inner:t,complement:e.complement};return 0!==t.length&&n},meta:function(){var e=i(this,p,h,f,v),t=e.fullName,n=e.description,r=e.image;return n?[{id:"meta-application-name",name:"application-name",content:t},{id:"meta-description",name:"description",content:n},{id:"meta-keywords",name:"keywords",content:"icons, vector icons, svg icons, free icons, icon font, webfont, desktop icons, svg, font awesome, font awesome free, font awesome pro"},{id:"meta-item-name",itemprop:"name",content:t},{id:"meta-item-description",itemprop:"description",content:n},{id:"twt-title",name:"twitter:title",content:t},{id:"twt-description",name:"twitter:description",content:n},{id:"twt-card",name:"twitter:card",content:"summary"},{id:"twt-site",name:"twitter:site",content:"@fontawesome"},{id:"og-url",property:"og:url",content:a(this.$route)},{id:"og-title",property:"og:title",content:t},{id:"og-type",property:"og:type",content:"website"},{id:"og-description",property:"og:description",content:n},{id:"og-image",property:"og:image",content:r}]:[]},link:function(){return[{rel:"canonical",href:a(this.$route)}]}}}},1811:function(e,t,n){"use strict";n.d(t,"c",(function(){return w})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(10),o=n.n(r),a=n(7),i=n.n(a),s=n(8),c=n.n(s),u=n(9),l=n.n(u),p=n(11),m=n.n(p),h=n(16),f=n(18);function d(e,t){var n=o()(e);if(i.a){var r=i()(e);t&&(r=r.filter((function(t){return c()(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):l.a?Object.defineProperties(e,l()(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,c()(n,t))}))}return e}var w={provide:function(){return{version:this.version,urlPrefix:this.urlPrefix}},computed:{version:function(){return this.$route.meta.version},urlPrefix:function(){return"/".concat(Object(f.m)(this.$releases.active.version))}}},b={computed:v(v({},Object(h.d)("permits",["adFreeDocumentationVersions"])),{},{adFreeDocumentationPermitted:function(){var e=this;return!!this.adFreeDocumentationVersions.find((function(t){var n=t.major,r=t.minor,o=t.patch,a=t.pre;return"".concat(n,".").concat(r,".").concat(o).concat(1===a.length?"-"+a[0]:"")===e.$releases.active.version}))}})},g={computed:v(v({},Object(h.d)("permits",["accessToProVersions"])),{},{hasAccessToProForActiveVersion:function(){var e=this;return!!this.accessToProVersions.find((function(t){var n=t.major,r=t.minor,o=t.patch,a=t.pre;return"".concat(n,".").concat(r,".").concat(o).concat(1===(a||[]).length?"-"+a[0]:"")===e.$releases.active.version}))}})}},2244:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r),a=n(7),i=n.n(a),s=n(8),c=n.n(s),u=n(9),l=n.n(u),p=n(3),m=n.n(p),h=n(11),f=n.n(h),d=n(0),v=n.n(d),w=n(1),b=n.n(w),g=n(23),x=n.n(g),y=n(16),_=n(1804),j=n(1811),C=n(18),O=n(120),$=n(20),k=n.n($),P=n(19),D=n.n(P),F=n(346),I={"with-the-api":"The JavaScript API","javascript-api":"The JavaScript API","graphql-api":"The GraphQL API","conflict-detection-api":"Conflict Detection API","customizing-wordpress":"Customizing WordPress"},A={name:"WhereNav",components:{VersionSelector:F.a},computed:{releases:function(){var e=(this.$permits.has("betaFeatures")?O.a:O.d).map((function(e){return e.version}));return k()(C.e.v5).reverse().filter((function(t){return D()(e,t.version)}))},hasTitleInstead:function(){return!!this.title},title:function(){return b()(I,[this.$route.params.where])}},methods:{navClass:function(e){var t=e.where,n=this.$route.params.where===t;return["link db fw6 pv5 ph4 bb bw3 color-inherit",{"b--blue6":n},{"b--transparent o-60 hover-b--blue4 glow":!n}]},changeVersion:function(e){Object(O.b)(e.version,this.$route.params)?window.location.replace(this.$router.resolve({name:"".concat(Object(C.m)(e.version),".how-to-use.document"),params:this.$route.params}).href):window.location.replace(this.$router.resolve({name:"".concat(Object(C.m)(e.version),".how-to-use")}).href)}}},E=n(2),T=Object(E.a)(A,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mw9 center flex flex-row flex-nowrap items-stretch justify-between"},[n("nav",{staticClass:"w-75 w-80-2x flex flex-row flex-nowrap items-center justify-between pr6"},[e.hasTitleInstead?n("div",{staticClass:"flex flex-row flex-nowrap items-center pr6"},[n("h2",{staticClass:"mv0 fw6 f3 pv5"},[e._v(e._s(e.title))])]):n("div",{staticClass:"flex flex-row flex-nowrap items-center pr6"},[n("a",{class:e.navClass({where:"on-the-web"}),attrs:{href:e.$router.resolve({name:"start"}).href}},[n("span",{staticClass:"sr-only"},[e._v("How to Use")]),e._v(" On the Web")]),e._v(" "),n("a",{class:e.navClass({where:"on-the-desktop"}),attrs:{href:e.$howto({params:{where:"on-the-desktop"}})}},[n("span",{staticClass:"sr-only"},[e._v("How to Use")]),e._v(" On the Desktop")])])]),e._v(" "),n("div",{staticClass:"w-25 w-20-2x flex flex-column items-center justify-center bg-gray9 ph5"},[n("div",{staticClass:"w-100 relative"},[n("version-selector",{attrs:{value:e.$releases.active,releases:e.releases,dark:""},on:{input:e.changeVersion}})],1)])])}),[],!1,null,null,null).exports,V={name:"Outline",mixins:[j.a],props:{where:{type:String,required:!0},groups:{type:Array,required:!0},version:{type:String,required:!0}},computed:{lastGroupIndex:function(){return this.groups.length-1}},methods:{isNewStart:function(e,t){return"on-the-web"===e&&"getting-started"===t.name},classFor:function(e){var t=e.where,n=e.group,r=e.name,o=this.$route.params,a=o.where,i=o.group,s=o.name;return t===a&&n===i&&r===s?"db link color-inherit pv2":"db link color-inherit o-60 glow pv2 hover-blue5"},conditionIsMet:function(e){return!e.condition||new Function(e.condition).call(this)}}},N=Object(E.a)(V,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"how-to-nav w-25 w-20-2x pv6 dn flex-l flex-column bg-gray1"},[e.adFreeDocumentationPermitted?e._e():n("div",{staticClass:"relative ph4 ph5-l pv4 nt6-l mb4 f2"},[n("span",{staticClass:"absolute absolute--fill bg-striped-black o-0125 z-0"}),e._v(" "),n("div",{staticClass:"relative z-1"},[n("carbon-ad")],1)]),e._v(" "),e._l(e.groups,(function(t,r){return n("div",{key:t.directory,staticClass:"ph5"},[n("h3",{staticClass:"mv0 pb2 f3 fw6"},[e._v(e._s(t.label))]),e._v(" "),n("ul",{staticClass:"list ma0 pa0"},e._l(t.children,(function(r){return n("li",{key:t.directory+"-"+r.filename,staticClass:"ma0 pa0"},[e.conditionIsMet(r)?[e.isNewStart(e.where,r)?n("a",{class:e.classFor({where:e.where,group:t.directory,name:r.name}),attrs:{href:e.$router.resolve({name:"start"}).href}},[e._v(e._s(r.label))]):n("a",{class:e.classFor({where:e.where,group:t.directory,name:r.name}),attrs:{href:e.$howto({params:{where:e.where,group:t.directory,name:r.name}})}},[e._v(e._s(r.label))])]:e._e()],2)})),0),e._v(" "),r<e.lastGroupIndex?n("hr",{staticClass:"db mv3 bn bb bw1 b--transparent nr4 nl4"}):e._e()])}))],2)}),[],!1,null,null,null).exports,W=n(424),S=n.n(W),z=n(47),L=n.n(z),R={name:"DocumentNav",props:{activeDocument:{type:Object,required:!0},outline:{type:Object,required:!0}},computed:{flattenedWhere:function(){var e=this.activeDocument.where,t=b()(this.outline,[e]);return L()(t,(function(t,n){return n.children.map((function(r){t.push({routeParams:{where:e,group:n.directory,name:r.name},label:r.label})})),t}),[])},activeDocumentIndex:function(){var e=this.activeDocument,t=e.where,n=e.group,r=e.name;return S()(this.flattenedWhere,(function(e){var o=e.routeParams;return o.where===t&&o.group===n&&o.name===r}))},previous:function(){return b()(this.flattenedWhere,[this.activeDocumentIndex-1])},next:function(){return b()(this.flattenedWhere,[this.activeDocumentIndex+1])}}},q=Object(E.a)(R,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"flex flex-row flex-nowrap items-center justify-between mt4"},[e.previous?n("a",{staticClass:"link blue4 hover-blue6 pa4 pl0",attrs:{href:e.$howto({params:e.previous.routeParams})}},[n("font-awesome-icon",{staticClass:"mr1",attrs:{icon:["fas","arrow-left"]}}),e._v("\n    "+e._s(e.previous.label)+"\n  ")],1):n("span"),e._v(" "),e.next?n("a",{staticClass:"link blue4 hover-blue6 pa4 pr0",attrs:{href:e.$howto({params:e.next.routeParams})}},[e._v("\n    "+e._s(e.next.label)+"\n    "),n("font-awesome-icon",{staticClass:"ml1",attrs:{icon:["fas","arrow-right"]}})],1):n("span")])}),[],!1,null,null,null).exports;function H(e,t){var n=o()(e);if(i.a){var r=i()(e);t&&(r=r.filter((function(t){return c()(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):l.a?Object.defineProperties(e,l()(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,c()(n,t))}))}return e}function U(e){var t=e.html,n=e.version,r=e.router.resolve({name:"".concat(Object(C.m)(n),".how-to-use")}).href,o=Object(C.l)({version:n});return t.replace(/href="([a-z0-9\-\\]+)(\/[a-z0-9\-\\]+)?(\/[#a-z0-9\-\\]+)?"/g,'href="'.concat(r,'/$1$2$3"')).replace(/VERSION/g,o)}function G(e){return e.replace(/<table>/g,'<div class="table-wrap"><table>').replace(/<\/table>/g,"</table></div>")}function M(e,t){var n=o()(e);if(i.a){var r=i()(e);t&&(r=r.filter((function(t){return c()(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):l.a?Object.defineProperties(e,l()(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,c()(n,t))}))}return e}var Q={name:"HowToUseView",components:{WhereNav:T,Outline:N,DocumentNav:q},mixins:[j.c],data:function(){return{title:"How to Use",failedLoadingDocument:!1,notFound:!1}},head:B({},Object(_.a)({name:function(){return this.title},description:"Learn how to use Font Awesome 5 to add vector icons and social logos to your website, desktop design, or project."})),computed:B(B({},Object(y.d)("docs",["document"])),{},{outline:function(){var e=this,t=x()(O.a,(function(t){var n=t.version;t.outline;return e.$releases.active.version==n}));return b()(t,["outline"])},where:function(){return this.$route.params.where},group:function(){return this.$route.params.group},name:function(){return this.$route.params.name},groups:function(){return b()(this.outline,[this.where])},pathOk:function(){return this.where&&this.group&&this.name},isReady:function(){return this.outline&&this.document&&this.pathOk},documentComponent:function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.version,r=void 0===n?"latest":n,o=t.router,a=G(U({html:e,version:r,router:o}));return{name:"Document",template:'<main class="docs-generated">'.concat(a,"</main>"),mixins:[j.a],provide:function(){return{token:this.token,subscriptionCanceled:this.subscriptionCanceled}},computed:J(J({},Object(y.d)("tokens",["npmToken"])),{},{token:function(){return b()(this,["npmToken","token"],null)},showAd:function(){return!this.adFreeDocumentationPermitted},subscriptionCanceled:function(){return this.$dt.ended}})}}(this.document.html,{version:this.version,router:this.$router})}}),created:function(){var e=this;return m()(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.init();case 2:if(!e.isReady){t.next=4;break}return t.abrupt("return");case 4:e.outline&&!e.pathOk&&e.failedLoadingDocument?window.location.replace(e.$router.resolve({name:"".concat(Object(C.m)(e.version),".how-to-use.document"),params:e.normalRouteParams({outline:e.outline,route:e.$route})}).href):e.outline&&e.document&&!e.pathOk?e.$router.replace({name:"".concat(Object(C.m)(e.version),".how-to-use.document"),params:e.normalRouteParams({outline:e.outline,route:e.$route})}):e.notFound=!0;case 5:case"end":return t.stop()}}),t)})))()},methods:B(B({},Object(y.c)("docs",["fetchDocument"])),{},{init:function(){var e=this;return m()(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.where&&e.group&&e.name){t.next=3;break}return e.failedLoadingDocument=!0,t.abrupt("return");case 3:return t.prev=3,t.next=6,e.fetchDocument({version:e.version,where:e.where,group:e.group,name:e.name});case 6:e.title=e.document.label,e.$emit("updateHead"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),e.failedLoadingDocument=!0;case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()},normalRouteParams:function(e){var t=e.outline,n=e.route.params,r=B({},n);if(n.where&&n.where in t||(r.where="on-the-web"),n.group||(r.group=b()(t,[r.where,0,"directory"])),!n.name){var o=b()(x()(b()(t,[r.where]),(function(e){return e.directory==r.group})),["children",0,"filename"]);r.name=o?o.split(".").slice(0,1)[0]:null}return r}})},K=Object(E.a)(Q,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.notFound?n("bad-situation",[n("div",{attrs:{slot:"situation"},slot:"situation"},[n("h1",{staticClass:"mt0 mb3 tc-l"},[n("span",{staticClass:"db f3 danger6 fw6 ttu tracked1 mb2"},[e._v("What's up, Doc?")]),e._v(" "),n("span",{staticClass:"f7 f8-ns db fw6"},[e._v("Documentation Not Found")])]),e._v(" "),n("p",{staticClass:"mt0 mb5 lh-copy f4 mh6-l tc-l"},[n("a",{staticClass:"link link-underline-dark primary6",attrs:{href:e.$howto({params:{where:"on-the-web"}})}},[e._v("Let's just start over, shall we?")])])])]):e.isReady?n("page",[n("div",{staticClass:"dn db-l bg-gray8 white ph4 ph6-ns",attrs:{slot:"subnav"},slot:"subnav"},[n("where-nav")],1),e._v(" "),n("div",{staticClass:"ph4 ph6-ns",attrs:{slot:"content"},slot:"content"},[n("main",{staticClass:"main-view mw9 center flex flex-row-l flex-nowrap-l items-stretch justify-between-l",attrs:{role:"main"}},[n("section",{staticClass:"w-100 w-75-l w-80-2x pv6 pr6-l br-l bw1-l b--black-025"},[n(e.documentComponent,{tag:"component"}),e._v(" "),n("document-nav",{attrs:{"active-document":e.$route.params,outline:e.outline}})],1),e._v(" "),n("outline",{attrs:{where:e.where,groups:e.groups,version:e.version}})],1)])]):e._e()}),[],!1,null,null,null);t.default=K.exports}}]);
//# sourceMappingURL=11.9cde7d74cbabfdae9cf0.js.map