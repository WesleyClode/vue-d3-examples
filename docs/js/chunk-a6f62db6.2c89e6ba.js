(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6f62db6"],{"17c1":function(t,e,n){},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,s,"next",t)}function s(t){r(a,i,o,c,s,"throw",t)}c(void 0)}))}}n.d(e,"a",(function(){return i}))},"3c0c":function(t,e,n){},"6a94":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"card-container"},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:"",disabled:t.buttonDisabled},on:{click:t.addNode}},r),[n("v-icon",[t._v("mdi-playlist-plus")])],1)]}}])},[n("span",[t._v("新增节点")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:"",disabled:t.buttonDisabled},on:{click:t.deleteNode}},r),[n("v-icon",[t._v("mdi-delete-outline")])],1)]}}])},[n("span",[t._v("删除节点")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:"",disabled:t.buttonDisabled},on:{click:t.editNode}},r),[n("v-icon",[t._v("mdi-square-edit-outline")])],1)]}}])},[n("span",[t._v("编辑节点")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.showDetails=!t.showDetails}}},r),[n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"showDetails"}]},[t._v("mdi-eye-outline")]),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:!t.showDetails,expression:"!showDetails"}]},[t._v("mdi-eye-off-outline")])],1)]}}])},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.showDetails,expression:"!showDetails"}]},[t._v("显示详情")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"showDetails"}]},[t._v("关闭详情")])])],1),n("svg",{staticClass:"d3-tree width-100-percent"},[n("g",{staticClass:"container"})]),n("v-card",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"showDetails"}],staticClass:"drawer-container"},[n("div",{staticClass:"text-align-left margin-top-10"},[t._v(" 节点ID: "+t._s(t.nodeId)+" 节点名称: "+t._s(t.nodeName)+" ")]),n("div",[n("v-text-field",{staticClass:"text-height",attrs:{label:"新增(编辑)节点名称",outlined:"",maxlength:"50",dense:""},model:{value:t.newNodeName,callback:function(e){t.newNodeName=e},expression:"newNodeName"}})],1)]),n("v-dialog",{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("提示")]),n("v-card-text",{staticClass:"subtitle-1 text-align-left"},[t._v("确定要删除节点吗? ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("取消")]),n("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){return t.deleteNodeData()}}},[t._v("确定")])],1)],1)],1)],1)},i=[],o=(n("ac6a"),n("7f7f"),n("96cf"),n("1da1")),a=n("5698"),c={name:"TreeVIII",data:function(){return{showDetails:!1,nodeId:"1",nodeName:"flare",zoom:null,index:0,duration:750,root:null,nodes:[],links:[],dTreeData:null,margin:{top:20,right:90,bottom:30,left:90},currentNode:null,svg:null,container:null,NodeObj:null,newNodeName:"",rootNodeId:null,buttonDisabled:!1,dialog:!1}},mounted:function(){var t={name:"flare",value:1,children:[{name:"util",value:23,children:[{name:"ssdf",value:104993},{name:"Geometry",value:13033},{name:"heap",value:24,children:[{name:"FibonacciHeap",value:9354}]},{name:"math",value:49}]},{name:"vis",value:38,children:[{name:"Visualization",value:16540}]}]};this.rootNodeId=t.value,this.initSvg(t)},computed:{treemap:function(){return a["z"]().nodeSize([26,240])}},methods:{initSvg:function(t){var e=document.body.clientWidth,n=document.body.clientHeight;this.width=Math.floor(.6*e),this.height=n-72;var r={top:10,right:120,bottom:10,left:40},i=this.width,o=30;this.NodeObj=a["k"].prototype.constructor,this.svg=a["w"]("svg.d3-tree").attr("viewBox",[-r.left,-r.top,i,o]);var c=a["B"].translate(this.margin.left,this.margin.top).scale(1);this.container=this.svg.select("g.container"),this.zoom=a["A"]().scaleExtent([1/4,4]).on("zoom",(function(){a["w"]("g.container").attr("transform",a["d"].transform)})),this.container.transition().duration(750).call(this.zoom.transform,c),this.svg.call(this.zoom).on("dblclick.zoom",null),this.root=this.getRoot(t),this.update(this.root)},initDrawer:function(){console.log("init drawer"),this.newNodeName="",this.nodeId="",this.nodeName="",this.currentNode=null},addNode:function(){if(!this.newNodeName)return console.warn("新增节点名称不能为空"),!1;if(!this.currentNode)return console.warn("请先选择一个节点"),!1;var t=this.currentNode,e=Object.assign(new this.NodeObj,{parent:t,depth:t.depth+1}),n=parseInt(9999*Math.random(),10)+1;e.value=n,e.data={name:this.newNodeName,value:n},t.children?t.children.push(e):t.children=[e],this.nodes.push(e),this.links.push({source:t,target:e}),this.update(t),console.info("新增成功")},deleteNodeData:function(){var t=this;this.dialog=!1,this.currentNode.parent&&this.currentNode.parent.children.length>0&&this.currentNode.parent.children.filter((function(e,n){e.data&&e.data.value===t.currentNode.data.value&&(t.currentNode.parent.children.splice(n,1),0===t.currentNode.parent.children.length&&delete t.currentNode.parent.children,t.update(t.currentNode),t.initDrawer())}))},deleteNode:function(){return this.currentNode?this.currentNode.data.value===this.rootNodeId?(console.warn("不能删除根节点"),!1):void(this.dialog=!0):(console.warn("请选择要删除的节点"),!1)},editNode:function(){if(!this.currentNode)return console.warn("请选择要编辑的节点"),!1;this.currentNode.data.name=this.newNodeName;var t=this.currentNode.parent;this.update(t)},handleDrop:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.preventDefault(),e.dataTransfer.files&&e.dataTransfer.files.length&&(n=e.dataTransfer.files[0],console.log("file: ",n));case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),goBack:function(){this.$route.params.data?"keyword"===this.$route.params.data.searchType?this.$router.push({name:"Search",params:{data:this.$route.params.data}}).catch((function(t){})):"title"===this.$route.params.data.searchType&&this.$router.push({name:"ArticleDetail",params:{data:this.$route.params.data}}).catch((function(t){})):this.$router.push({name:"ArticleDetail"}).catch((function(t){}))},getRoot:function(t){var e=a["k"](t,(function(t){return t.children}));return e.x0=this.height/2,e.y0=0,e},dblclickNode:function(t){var e=this;t.children?(this.$set(t,"_children",t.children),t.children=null):(this.$set(t,"children",t._children),t._children=null),this.$nextTick((function(){e.update(t)}))},clickNode:function(t){var e=this;this.currentNode=t,this.nodeId=t.data.value,this.nodeName=t.data.name,t.children?(this.$set(t,"_children",t.children),t.children=null):(this.$set(t,"children",t._children),t._children=null),this.$nextTick((function(){e.update(t)}))},diagonal:function(t,e){return"M ".concat(t.y," ").concat(t.x,"\n              C ").concat((t.y+e.y)/2," ").concat(t.x,",\n              ").concat((t.y+e.y)/2," ").concat(e.x,",\n              ").concat(e.y," ").concat(e.x)},getNodesAndLinks:function(){this.dTreeData=this.treemap(this.root),this.nodes=this.dTreeData.descendants(),this.links=this.dTreeData.descendants().slice(1)},update:function(t){var e=this;console.log("update"),this.getNodesAndLinks();var n=this.container.selectAll("g.node").data(this.nodes,(function(t){return t.id||(t.id=++e.index)})),r=n.enter().append("g").attr("class","node").attr("transform",(function(e){return"translate("+t.y0+","+t.x0+")"})).on("click",this.clickNode);console.log("---: ",n.enter().selectAll("circle")),r.append("circle").attr("class","node").attr("r",1e-6).style("fill",(function(t){return t._children?"#c9e4ff":"#fff"})).append("title").text((function(t){return t.value})).on("click",(function(){var t=this;setTimeout((function(){a["w"](t).transition().delay(1).style("fill",(function(){return"#54a8ff"})).style("stroke-width",(function(){return"3px"}))}),100)})),r.append("text").attr("dy",".35em").attr("x",(function(t){return t.children||t._children?-14:14})).attr("text-anchor",(function(t){return t.children||t._children?"end":"start"})).text((function(t){return t.data.name.length>20?t.data.name.substring(0,20)+"...":t.data.name})).attr("class","update");var i=r.merge(n).transition().duration(this.duration).attr("transform",(function(t){return"translate("+t.y+","+t.x+")"}));i.select("circle.node").attr("r",10).style("fill",(function(t){return t._children?"lightsteelblue":"#fff"})).style("stroke-width",(function(){return"2px"})).attr("cursor","pointer"),i.select("text").style("fill-opacity",1),console.log("node: ",n),n.select("text").attr("dy",".35em").attr("x",(function(t){return t.children||t._children?-14:14})).attr("text-anchor",(function(t){return t.children||t._children?"end":"start"})).text((function(t){return t.data.name.length>20?t.data.name.substring(0,20)+"...":t.data.name}));var o=n.exit().transition().duration(this.duration).attr("transform",(function(e){return"translate("+t.y+","+t.x+")"})).remove();o.select("circle").attr("r",1e-6),o.select("text").style("fill-opacity",1e-6);var c=this.container.selectAll("path.link").data(this.links,(function(t){return t.id})),s=c.enter().insert("path","g").attr("class","link").attr("d",(function(n){var r={x:t.x0,y:t.y0};return e.diagonal(r,r)})).attr("fill","none").attr("stroke-width",1).attr("stroke","#ccc"),l=s.merge(c);l.transition().duration(this.duration).attr("d",(function(t){return e.diagonal(t,t.parent)})),c.exit().transition().duration(this.duration).attr("d",(function(n){var r={x:t.x,y:t.y};return e.diagonal(r,r)})).remove(),this.nodes.forEach((function(t){t.x0=t.x,t.y0=t.y}))}}},s=c,l=(n("a5eb"),n("c98a"),n("2877")),u=Object(l["a"])(s,r,i,!1,null,"5a5be222",null);e["default"]=u.exports},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in i||n("9e1e")&&r(i,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(C){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new E(r||[]);return o._invoke=k(t,n,a),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var h="suspendedStart",d="suspendedYield",f="executing",v="completed",p={};function m(){}function g(){}function y(){}var w={};w[o]=function(){return this};var x=Object.getPrototypeOf,N=x&&x(x(O([])));N&&N!==n&&r.call(N,o)&&(w=N);var b=y.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(i,o,a,c){var s=u(t[i],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function k(t,e,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return j()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=D(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?v:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}function D(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,D(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=u(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=b.constructor=y,y.constructor=g,g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new _(l(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),s(b,c,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},a5eb:function(t,e,n){"use strict";n("17c1")},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),o=n("2aba"),a=n("7726"),c=n("32e9"),s=n("84f2"),l=n("2b4c"),u=l("iterator"),h=l("toStringTag"),d=s.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(f),p=0;p<v.length;p++){var m,g=v[p],y=f[g],w=a[g],x=w&&w.prototype;if(x&&(x[u]||c(x,u,d),x[h]||c(x,h,g),s[g]=d,y))for(m in r)x[m]||o(x,m,r[m],!0)}},c98a:function(t,e,n){"use strict";n("3c0c")}}]);
//# sourceMappingURL=chunk-a6f62db6.2c89e6ba.js.map