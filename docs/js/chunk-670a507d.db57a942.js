(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-670a507d"],{"0678":function(t,e,i){"use strict";var n=i("6a47"),l=i.n(n);l.a},5365:function(t,e,i){t.exports=i.p+"img/vue-logo.bef60e29.svg"},"6a47":function(t,e,i){},"7f7f":function(t,e,i){var n=i("86cc").f,l=Function.prototype,a=/^\s*function ([^ (]*)/,s="name";s in l||i("9e1e")&&n(l,s,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},9224:function(t){t.exports=JSON.parse('{"name":"vue-d3-examples","version":"0.1.2","private":true,"author":"YuanWei GUO","email":"qingyi_w@outlook.com","scripts":{"dev":"npm run lint & vue-cli-service serve","serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","new:view":"node ./scripts/generateView/index","new:comp":"node ./scripts/generateComponent/index"},"dependencies":{"vue":"^2.6.6","vue-i18n":"^8.24.1","vue-router":"^3.0.2"},"devDependencies":{"@vue/cli-plugin-babel":"^3.4.0","@vue/cli-plugin-eslint":"^3.4.0","@vue/cli-service":"^4.2.3","@vue/eslint-config-standard":"^4.0.0","babel-eslint":"^10.0.1","babel-plugin-syntax-dynamic-import":"^6.18.0","cz-conventional-changelog":"^3.1.0","d3":"^5.12.0","eslint":"^5.8.0","eslint-plugin-vue":"^5.0.0","minimist":"^1.2.5","validate-commit-msg":"^2.14.0","vue-particles":"^1.0.9","vue-template-compiler":"^2.5.21","vuetify":"^2.4.5"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"rules":{},"parserOptions":{"parser":"babel-eslint"}},"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions","not ie <= 8"],"config":{"commitizen":{"path":"./node_modules/cz-conventional-changelog"}}}')},a451:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:"",width:"280"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("div",{staticClass:"img-container cursor-pointer"},[n("img",{staticClass:"logo-img",attrs:{src:i("5365")},on:{click:t.goHome}}),n("img",{staticClass:"logo-img img-d3-padding",attrs:{src:i("c852")},on:{click:t.goHome}})]),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.items,(function(e,i){return n("v-list-group",{key:i,attrs:{"append-icon":e.appendIcon},on:{click:function(n){return t.itemClick(e,i)}},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item.active"}},[e.children?n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.subItemActive,callback:function(e){t.subItemActive=e},expression:"subItemActive"}},t._l(e.children,(function(e,i){return n("v-list-item",{key:i,on:{click:function(n){return t.subItemClick(e,i)}}},[n("v-list-item-icon"),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1):t._e()],1)})),1)],1),n("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"primary",dark:"",dense:t.denseFlag}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[n("span",{staticClass:"hidden-sm-and-down"},[t._v("Vue D3 Examples")])]),n("v-spacer"),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",small:""}},"v-btn",l,!1),i),[n("v-icon",[t._v("mdi-translate")]),n("v-icon",{attrs:{small:""}},[t._v(" mdi-chevron-down ")])],1)]}}])},[n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[n("v-subheader",[t._v("TRANSLATIONS")]),n("v-list-item",[n("v-list-item-title",{on:{click:function(e){return t.changeLang("en")}}},[t._v("English")])],1),n("v-list-item",[n("v-list-item-title",{on:{click:function(e){return t.changeLang("zh")}}},[t._v("简体中文")])],1)],1)],1)],1),t.fullScreen?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.exitFullScreen}},"v-btn",l,!1),i),[n("v-icon",[t._v("mdi-fullscreen-exit")])],1)]}}])},[n("span",[t._v("Exit Full Screen")])]):n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.requestFullscreen}},"v-btn",l,!1),i),[n("v-icon",[t._v("mdi-fullscreen")])],1)]}}],null,!1,312992049)},[n("span",[t._v("Full Screen")])]),t.dark?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.changeTheme}},"v-btn",l,!1),i),[n("v-icon",[t._v("mdi-brightness-4")])],1)]}}])},[n("span",[t._v("Dark")])]):n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.changeTheme}},"v-btn",l,!1),i),[n("v-icon",[t._v("mdi-brightness-7")])],1)]}}],null,!1,2503250276)},[n("span",[t._v("Light")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.openTab}},"v-btn",l,!1),i),[n("v-icon",{attrs:{size:"28"}},[t._v("mdi-github")])],1)]}}])},[n("span",[t._v("GitHub")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){t.dialog=!0}}},"v-btn",l,!1),i),[n("v-icon",{attrs:{size:"28"}},[t._v("mdi-information-outline")])],1)]}}])},[n("span",[t._v("About")])])],1),n("v-main",[n("v-container",[n("router-view")],1)],1),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[t._v("Vue D3 Examples")]),n("v-card-text",[t._v("Version: v"+t._s(t.version))]),n("v-card-text",[t._v("Author: YuanWei Guo")]),n("v-card-text",[t._v("Email: qingyi_w@outlook.com")])],1)],1),n("v-fab-transition",[t.hidden?t._e():n("v-btn",{attrs:{color:"primary",dark:"",fixed:"",bottom:"",right:"",fab:""},on:{click:t.scrollTop}},[n("v-icon",[t._v("mdi-chevron-up")])],1)],1)],1)},l=[],a=(i("7f7f"),i("c5f6"),i("ac6a"),i("9224")),s={data:function(){return{version:"",fullScreen:!1,hidden:!0,dialog:!1,dark:!1,drawer:null,itemActive:0,subItemActive:0,selectedItem:0,denseFlag:!0}},computed:{items:function(){return[{icon:"mdi-alpha-i-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.titleIntroduction.value"),path:"/examples/introduction",appendIcon:null,active:!0},{icon:"mdi-alpha-b-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title1.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title1.children.title1.value"),path:"/examples/helloworld"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title1.children.title2.value"),path:"/examples/updateenterexit"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title1.children.title3.value"),path:"/examples/generalupdatepattern"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title1.children.title4.value"),path:"/examples/selectelementbinddata"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title1.children.title5.value"),path:"/examples/selectinsertremove"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-t-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title2.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title1.value"),path:"/examples/treeI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title2.value"),path:"/examples/treeII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title3.value"),path:"/examples/treeIII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title4.value"),path:"/examples/treeIV"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title5.value"),path:"/examples/treeV"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title6.value"),path:"/examples/treeVI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title7.value"),path:"/examples/treeVII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title2.children.title8.value"),path:"/examples/treeVIII"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-b-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title3.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title3.children.title1.value"),path:"/examples/barchartI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title3.children.title2.value"),path:"/examples/barchartII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title3.children.title3.value"),path:"/examples/axis"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title3.children.title4.value"),path:"/examples/simplebarchart"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title3.children.title5.value"),path:"/examples/scale"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-z-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title4.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title4.children.title1.value"),path:"/examples/zoomable"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title4.children.title2.value"),path:"/examples/zoomabletext"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-f-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title5.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title1.value"),path:"/examples/forcebasedI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title2.value"),path:"/examples/forcebasedII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title3.value"),path:"/examples/forcebasedIII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title4.value"),path:"/examples/forcedirected"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title5.value"),path:"/examples/forcelayoutI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title6.value"),path:"/examples/forcelayoutII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title5.children.title7.value"),path:"/examples/forcelayoutIII"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-h-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title6.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title6.children.title1.value"),path:"/examples/histogramI"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title6.children.title2.value"),path:"/examples/histogramII"},{title:this.$vuetify.lang.t("$vuetify.sidebar.title6.children.title3.value"),path:"/examples/histogramIII"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-l-box-outline",title:this.$vuetify.lang.t("$vuetify.sidebar.title7.value"),children:[{title:this.$vuetify.lang.t("$vuetify.sidebar.title7.children.title1.value"),path:"/examples/lines/line-chart-I"}],appendIcon:"mdi-chevron-down"}]}},created:function(){var t=this;if(this.version=a.version,localStorage.getItem("themeDark")&&"true"===localStorage.getItem("themeDark")&&(this.$vuetify.theme.dark=!0,this.dark=!0),"/examples"===this.$route.path)this.$router.push("/examples/introduction").catch((function(t){}));else{this.$router.push(this.$route.path).catch((function(t){}));var e=this.$route.path;this.items.forEach((function(i,n){i.path===e?t.itemActive=n:i.children&&i.children.length>0&&i.children.forEach((function(t,i){t.path===e&&(sessionStorage.setItem("itemActive",n),sessionStorage.setItem("subItemActive",i))}))})),sessionStorage.getItem("itemActive")&&(this.items[0].active=!1,this.items[Number(sessionStorage.getItem("itemActive"))]["active"]=!0),sessionStorage.getItem("subItemActive")&&(this.subItemActive=Number(sessionStorage.getItem("subItemActive")))}},mounted:function(){var t=this;sessionStorage.getItem("i18nLocale")&&"zh"===sessionStorage.getItem("i18nLocale")&&(this.selectedItem=1),document.addEventListener("fullscreenchange",(function(){console.log("fullscreenchange")})),window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;t.hidden=!(e>100)}));var e=this;"xl"===e.$vuetify.breakpoint.name&&(e.denseFlag=!1),this.$watch((function(){return e.$vuetify.breakpoint.name}),(function(t,i){e.denseFlag="xl"!==t}))},beforeDestroy:function(){sessionStorage.removeItem("subItemActive"),sessionStorage.removeItem("itemActive")},methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})},requestFullscreen:function(){this.fullScreen=!0;var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.msRequestFullscreen?t.msRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen&&t.webkitRequestFullScreen()},exitFullScreen:function(){this.fullScreen=!1,document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()},changeLang:function(t){this.$i18n.locale=t,sessionStorage.setItem("i18nLocale",t),sessionStorage.getItem("itemActive")&&(this.items[0].active=!1,this.items[Number(sessionStorage.getItem("itemActive"))]["active"]=!0,sessionStorage.getItem("subItemActive")&&(this.subItemActive=Number(sessionStorage.getItem("subItemActive"))))},openTab:function(){window.open("https://github.com/gywgithub/vue-d3-examples","_blank")},itemClick:function(t,e){this.subItemActive=null,sessionStorage.setItem("itemActive",e),console.dir(t),t.children||this.$router.push(t.path).catch((function(t){}))},subItemClick:function(t,e){sessionStorage.setItem("subItemActive",e),this.$router.push(t.path).catch((function(t){}))},goHome:function(){this.$router.push("/Home").catch((function(t){}))},changeTheme:function(){this.dark=!this.dark,localStorage.setItem("themeDark",String(this.dark)),this.$vuetify.theme.dark=this.dark}}},r=s,o=(i("0678"),i("2877")),c=Object(o["a"])(r,n,l,!1,null,"6d384482",null);e["default"]=c.exports},ac6a:function(t,e,i){for(var n=i("cadf"),l=i("0d58"),a=i("2aba"),s=i("7726"),r=i("32e9"),o=i("84f2"),c=i("2b4c"),u=c("iterator"),v=c("toStringTag"),d=o.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=l(m),p=0;p<h.length;p++){var f,g=h[p],b=m[g],y=s[g],$=y&&y.prototype;if($&&($[u]||r($,u,d),$[v]||r($,v,g),o[g]=d,b))for(f in n)$[f]||a($,f,n[f],!0)}},c852:function(t,e,i){t.exports=i.p+"img/d3.ffc6dddb.svg"}}]);
//# sourceMappingURL=chunk-670a507d.db57a942.js.map