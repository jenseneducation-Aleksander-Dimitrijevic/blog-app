(function(e){function t(t){for(var r,a,s=t[0],i=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d63f1":"a6ee69bc","chunk-2d0e95df":"2fc240d0","chunk-571627d7":"6473b48e","chunk-b9cfc122":"0e2a8f03","chunk-0a0209cc":"84194e1f","chunk-0fa6af12":"7e1ee981","chunk-2d0d6d35":"cd8c320f","chunk-2d2086b7":"9a6944eb"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-571627d7":1,"chunk-b9cfc122":1,"chunk-0a0209cc":1,"chunk-0fa6af12":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d63f1":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-571627d7":"fba5bb1e","chunk-b9cfc122":"7638bb48","chunk-0a0209cc":"9d21c0d7","chunk-0fa6af12":"9d21c0d7","chunk-2d0d6d35":"31d6cfe0","chunk-2d2086b7":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"teal",dark:""}},[e.loggedIn?n("v-toolbar-title",[n("v-btn",{attrs:{text:"",rounded:"",to:"/dashboard"}},[n("h1",{staticClass:"text-capitalize"},[e._v("Dashboard")])])],1):n("v-toolbar-title",[n("v-btn",{attrs:{text:"",rounded:"",to:"/"}},[n("h1",{staticClass:"text-capitalize"},[e._v("BlogSite")])])],1),n("v-spacer"),n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}})],1),n("v-card",{staticClass:"text-center"},[n("v-navigation-drawer",{attrs:{temporary:"",app:"",color:"white"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-container",{attrs:{"fill-height":""}},[n("v-list",{staticClass:"mx-auto",attrs:{dense:"",nav:"","text-center":""}},[n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:!e.loggedIn,expression:"!loggedIn"}],attrs:{link:""}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:e.loggedIn,expression:"loggedIn"}],attrs:{link:""}},[n("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")])],1),n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:e.loggedIn,expression:"loggedIn"}],attrs:{link:""}},[n("router-link",{attrs:{to:"/blogs"}},[e._v("My blogs")])],1),n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:!e.loggedIn,expression:"!loggedIn"}],attrs:{link:""}},[n("router-link",{attrs:{to:"/register"}},[e._v("Sign up")])],1),n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:!e.loggedIn,expression:"!loggedIn"}],attrs:{link:""}},[n("router-link",{attrs:{to:"/login"}},[e._v("Sign in")])],1),n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:e.loggedIn,expression:"loggedIn"}],attrs:{link:""}},[n("v-btn",{attrs:{color:"red darken-2",dark:""},on:{click:e.logout}},[e._v("Logout")])],1)],1)],1)],1)],1),n("v-main",[n("router-view")],1),n("v-footer",{staticClass:"font-weight-small",attrs:{absolute:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),n("strong",[e._v("BlogSite")])])],1)],1)},o=[],c=n("5530"),s=n("2f62"),i={name:"App",data:function(){return{drawer:!1,links:[{label:"Home",url:"/"},{label:"Sign In",url:"/login"},{label:"Sign Up",url:"/register"},{label:"Dashboard",url:"/dashboard"},{label:"Blogs",url:"/blogs"}]}},computed:Object(c["a"])({},Object(s["b"])(["loggedIn"])),methods:{logout:function(){localStorage.removeItem("user"),location.reload()}}},l=i,u=n("2877"),d=n("6544"),h=n.n(d),f=n("7496"),p=n("40dc"),g=n("5bc1"),m=n("8336"),v=n("b0af"),b=n("62ad"),k=n("a523"),w=n("553a"),_=n("8860"),S=n("da13"),y=n("f6c4"),x=n("f774"),A=n("2fa4"),C=n("2a7f"),E=Object(u["a"])(l,a,o,!1,null,null,null),I=E.exports;h()(E,{VApp:f["a"],VAppBar:p["a"],VAppBarNavIcon:g["a"],VBtn:m["a"],VCard:v["a"],VCol:b["a"],VContainer:k["a"],VFooter:w["a"],VList:_["a"],VListItem:S["a"],VMain:y["a"],VNavigationDrawer:x["a"],VSpacer:A["a"],VToolbarTitle:C["a"]});n("45fc"),n("d3b7");var O=n("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"fill-height"},[n("v-row",{staticClass:"m-auto"},[n("v-col",{staticClass:"text-center"},[n("h1",{staticClass:"display-3 mb-4 "},[e._v("BlogSite")]),n("p",[e._v("The place to share your thoughts!")])])],1),n("v-row",{staticClass:"text-center"},[n("v-col",[n("v-btn",{attrs:{to:"/register",color:"teal",dark:"",large:""}},[e._v("Register")])],1)],1)],1)},B=[],V={name:"home"},N=V,j=n("0fd9"),P=Object(u["a"])(N,T,B,!1,null,"dfab82a4",null),D=P.exports;h()(P,{VBtn:m["a"],VCol:b["a"],VContainer:k["a"],VRow:j["a"]}),r["a"].use(O["a"]);var L=[{path:"/",name:"Home",component:D},{path:"/register",name:"register",component:function(){return Promise.all([n.e("chunk-b9cfc122"),n.e("chunk-2d0d6d35")]).then(n.bind(null,"73cf"))}},{path:"/dashboard",name:"dashboard",component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))},meta:{requiresAuth:!0}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-b9cfc122"),n.e("chunk-2d2086b7")]).then(n.bind(null,"a55b"))}},{path:"/create",name:"create",component:function(){return Promise.all([n.e("chunk-b9cfc122"),n.e("chunk-0a0209cc")]).then(n.bind(null,"d879"))},meta:{requiresAuth:!0}},{path:"/blogs",name:"blogs",component:function(){return n.e("chunk-571627d7").then(n.bind(null,"8cf7"))},meta:{requiresAuth:!0}},{path:"/blogs/edit/:id",name:"edit",props:!0,component:function(){return Promise.all([n.e("chunk-b9cfc122"),n.e("chunk-0fa6af12")]).then(n.bind(null,"1071"))},meta:{requiresAuth:!0}},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],U=new O["a"]({mode:"history",base:"/",routes:L});U.beforeEach((function(e,t,n){var r=JSON.parse(localStorage.getItem("user"));e.matched.some((function(e){return e.meta.requiresAuth&&!r}))?n("/"):n()}));var q=U,M=n("bc3a"),R=n.n(M);r["a"].use(s["a"]);var J=new s["a"].Store({state:{user:null,createdBlogs:[]},mutations:{SET_USER_DATA:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t)),R.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.token)},SET_BLOG:function(e,t){e.createdBlogs.push(t)}},actions:{registerUser:function(e,t){var n=e.commit;return R.a.post("https://blogsite-demo.herokuapp.com/api/users/register",t).then((function(e){var t=e.data;n("SET_USER_DATA",t)}))},loginUser:function(e,t){var n=e.commit;return R.a.post("https://blogsite-demo.herokuapp.com/api/users/login",t).then((function(e){var t=e.data;n("SET_USER_DATA",t)}))},createBlog:function(e,t){var n=e.commit;R.a.post("https://blogsite-demo.herokuapp.com/api/blogs",t).then((function(e){var t=e.data;n("SET_BLOG",t)}))},updateBlog:function(e,t){var n=e.commit;return R.a.post("https://blogsite-demo.herokuapp.com/api/blogs/update",t).then((function(e){var t=e.data;n("SET_BLOG",t)}))}},getters:{loggedIn:function(e){return!!e.user},isBlogCreated:function(e){return e.createdBlogs.length>0}}}),H=n("f309");r["a"].use(H["a"]);var z=new H["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:q,store:J,created:function(){var e=JSON.parse(localStorage.getItem("user"));e&&J.commit("SET_USER_DATA",e)},vuetify:z,render:function(e){return e(I)}}).$mount("#app")}});
//# sourceMappingURL=app.0138c8fd.js.map