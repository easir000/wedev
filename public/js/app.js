!function(t){var e=window.webpackJsonp;window.webpackJsonp=function(n,a,r){for(var o,u,c=0,s=[];c<n.length;c++)u=n[c],i[u]&&s.push(i[u][0]),i[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);for(e&&e(n,a,r);s.length;)s.shift()()};var n={},i={30:0};function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.e=function(t){var e=i[t];if(0===e)return new Promise(function(t){t()});if(e)return e[2];var n=new Promise(function(n,a){e=i[t]=[n,a]});e[2]=n;var r=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.timeout=12e4,a.nc&&o.setAttribute("nonce",a.nc),o.src=a.p+""+({}[t]||t)+".js";var u=setTimeout(c,12e4);function c(){o.onerror=o.onload=null,clearTimeout(u);var e=i[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),i[t]=void 0)}return o.onerror=o.onload=c,r.appendChild(o),n},a.m=t,a.c=n,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t},a(a.s=33)}([function(t,e){t.exports=function(t,e,n,i,a,r){var o,u=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,u=t.default);var s,d="function"==typeof u?u.options:u;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),a&&(d._scopeId=a),r?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=s):i&&(s=i),s){var l=d.functional,p=l?d.render:d.beforeCreate;l?(d._injectStyles=s,d.render=function(t,e){return s.call(e),p(t,e)}):d.beforeCreate=p?[].concat(p,s):[s]}return{esModule:o,exports:u,options:d}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var a=(o=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([a]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=n(16),r={},o=i&&(document.head||document.getElementsByTagName("head")[0]),u=null,c=0,s=!1,d=function(){},l=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],i=r[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(m(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(m(n.parts[a]));r[n.id]={id:n.id,refs:1,parts:o}}}}function v(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function m(t){var e,n,i=document.querySelector("style["+p+'~="'+t.id+'"]');if(i){if(s)return d;i.parentNode.removeChild(i)}if(f){var a=c++;i=u||(u=v()),e=y.bind(null,i,a,!1),n=y.bind(null,i,a,!0)}else i=v(),e=function(t,e){var n=e.css,i=e.media,a=e.sourceMap;i&&t.setAttribute("media",i);l.ssrId&&t.setAttribute(p,e.id);a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}t.exports=function(t,e,n,i){s=n,l=i||{};var o=a(t,e);return h(o),function(e){for(var n=[],i=0;i<o.length;i++){var u=o[i];(c=r[u.id]).refs--,n.push(c)}e?h(o=a(t,e)):o=[];for(i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete r[c.id]}}}};var g,_=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function y(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=_(e,a);else{var r=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}},function(t,e,n){Vue.component("modal",n(4)),Vue.component("modal-header",n(7)),Vue.component("modal-body",n(9)),Vue.component("modal-footer",n(11)),Vue.component("uploader",n(13)),Vue.component("order",n(19)),Vue.component("category-card",n(22)),Vue.component("product-card",n(25)),Vue.component("cart-card",n(28))},function(t,e,n){var i=n(0)(n(5),n(6),!1,null,null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["id"]}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal fade",attrs:{id:this.id,role:"dialog"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[this._t("default")],2)])])},staticRenderFns:[]}},function(t,e,n){var i=n(0)(null,n(8),!1,null,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")]),this._v(" "),e("h4",[this._t("default")],2)])},staticRenderFns:[]}},function(t,e,n){var i=n(0)(null,n(10),!1,null,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"modal-body"},[this._t("default")],2)},staticRenderFns:[]}},function(t,e,n){var i=n(0)(null,n(12),!1,null,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"modal-footer"},[this._t("default")],2)},staticRenderFns:[]}},function(t,e,n){var i=n(0)(n(17),n(18),!1,function(t){n(14)},null,null);t.exports=i.exports},function(t,e,n){var i=n(15);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("57d8d458",i,!0,{})},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".imgContainer{position:relative;height:200px;width:200px}.file{position:absolute;height:100%;width:100%;opacity:0}.imgUpload{background-color:#fff;border:2px solid #000}.imgText{position:absolute;left:0;top:45%;width:100%;text-align:center}",""])},function(t,e){t.exports=function(t,e){for(var n=[],i={},a=0;a<e.length;a++){var r=e[a],o=r[0],u={id:t+":"+a,css:r[1],media:r[2],sourceMap:r[3]};i[o]?i[o].parts.push(u):n.push(i[o]={id:o,parts:[u]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{fileId:{default:"fileId"},fileName:{default:"file_name"},imageId:{default:"imageId"},imageSrc:{default:"#"}},methods:{readFile:function(t,e){util.readFile("#"+t,"#"+e)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("center",[n("div",{staticClass:"imgContainer"},[n("input",{staticClass:"file",attrs:{type:"file",id:t.fileId,name:t.fileName},on:{change:function(e){return t.readFile(t.fileId,t.imageId)}}}),t._v(" "),n("img",{staticClass:"imgUpload img-rounded",attrs:{src:t.imageSrc,height:"100%",width:"100%",id:t.imageId}}),t._v(" "),n("span",{staticClass:"imgText"},[t._v("Select Image")])])])},staticRenderFns:[]}},function(t,e,n){var i=n(0)(n(20),n(21),!1,null,null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{name:{default:""},orders:{default:[]},detailLink:{default:"/order-details"}},methods:{toDate:function(t){return util.toDate(t)},toCurrency:function(t){return util.toCurrency(t)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.orders.length>0?n("div",{staticClass:"col-md-9"},[n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-body"},[n("h4",[t._v(t._s(t.name))]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),n("tbody",t._l(t.orders,function(e){return n("tr",[n("td",[t._v(t._s(t.toDate(e.created_at)))]),t._v(" "),n("td",[t._v(t._s(e.order_quantity))]),t._v(" "),n("td",[t._v(t._s(t.toCurrency(e.order_price)))]),t._v(" "),n("td",[n("span",{staticClass:"pull-right"},[n("router-link",{attrs:{to:{path:t.detailLink,query:{id:e.id}}}},[t._v("View")])],1)])])}),0)])])])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Order date")]),this._v(" "),e("th",[this._v("Items")]),this._v(" "),e("th",[this._v("Price")]),this._v(" "),e("th")])])}]}},function(t,e,n){var i=n(0)(n(23),n(24),!1,null,null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{src:{default:data.getStorageURL()+"images/category/default.jpg"},name:{default:"Unknown category"},id:{default:""}},created:function(){this.$nextTick(function(){var t=$("#"+this.id+" #description").text();$("#"+this.id).popover({title:"Category description",content:t,trigger:"hover"})})},computed:{defaultId:function(){return"cat"+Math.floor(1e4*Math.random())},minifyName:function(){return util.minify(util.unescapeHTML(this.name,16))}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card thumbnail",attrs:{id:t.id}},[n("img",{staticStyle:{width:"250px",height:"250px"},attrs:{src:t.src,width:"250px",height:"250px",alt:t.name}}),t._v(" "),n("div",{staticStyle:{"padding-left":"15px"}},[n("h3",{staticStyle:{overflow:"hidden"}},[n("b",[t._v(t._s(t.minifyName))])])]),t._v(" "),n("button",{staticClass:"btn btn-info card-btn",on:{click:function(e){return t.$router.push("/category/"+t.id)}}},[t._v("View Products")]),t._v(" "),n("div",{staticStyle:{display:"none"},attrs:{id:"description"}},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e,n){var i=n(0)(n(26),n(27),!1,null,null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){return{storageURL:data.getStorageURL(),time:0,lastClick:0}}),props:{value:{default:{id:"",product_name:"",product_image:"",product_price:"",product_description:"",product_quantity:0}}},methods:{addToCart:function(){this.checkLogin()&&(this.value.product_quantity<1||(this.value.product_quantity--,this.cart_quantity++,this.add()))},subtractToCart:function(){this.cart_quantity<0&&(this.cart_quantity=0),this.value.product_quantity++,this.cart_quantity--,this.add()},add:function(){var t=this;this.validate()||(this.lastClick=this.time,setTimeout(function(){t.time-t.lastClick==3&&t.updateCart(t.value.id,t.cart_quantity)},3e3))},validate:function(){return this.time-this.lastClick<3&&0!=this.lastClick},checkLogin:function(){return"IN"!=data.getStatus().LOG&&util.showModal("#loginModal"),"IN"==data.getStatus().LOG},updateCart:function(t,e){var n=data.getBaseURL()+"api/v1/user/cart/add",i="id="+t+"&quantity="+e;axios.post(n,i).then(function(t){}).catch(function(t){util.notify("An error occured","error"),util.log(t)})},toCurrency:function(t){return util.toCurrency(t)},minify:function(t){return util.minify(t,15)}},created:function(){this.$nextTick(function(){$("#"+this.value.id).popover({title:"Product description",content:this.value.product_description,trigger:"hover"})});var t=this;setInterval(function(){t.time++},1e3)},computed:{carts:function(){return data.getStatus().CARTS},cart:function(){for(var t in this.carts)if(this.value.id==this.carts[t].product_id)return this.carts[t];return{}},status:function(){return data.getStatus()},cart_quantity:{get:function(){return this.cart.cart_quantity?this.cart.cart_quantity:0},set:function(t){for(var e in this.carts)if(this.carts[e].product_id==this.value.id)return void(data.status.CARTS[e].cart_quantity=t);data.status.CARTS.push({product_id:this.value.id,customer_id:data.getStatus().USERID,cart_quantity:t,product:this.value})}}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",attrs:{id:t.value.id}},[n("img",{staticStyle:{height:"200px",width:"250px"},attrs:{src:t.storageURL+t.value.product_image,alt:t.value.product_name}}),t._v(" "),n("div",{staticStyle:{"padding-left":"15px"}},[n("h3",{staticStyle:{overflow:"hidden"}},[n("b",[t._v(t._s(t.minify(t.value.product_name)))])]),t._v(" "),n("h5",[t._v("Price : "),n("span",{staticStyle:{color:"lime"}},[t._v(t._s(t.toCurrency(t.value.product_price)))])]),t._v(" "),n("h5",[t._v("Stocks : "+t._s(t.value.product_quantity))])]),t._v(" "),0==t.cart_quantity?n("div",{staticClass:"input-group card-btn",on:{click:function(e){return t.addToCart()}}},[n("button",{staticClass:"btn btn-info card-btn"},[t._v("Add to Card")])]):t._e(),t._v(" "),t.cart_quantity>0?n("div",[n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-btn"},[n("span",{staticClass:"btn btn-info",on:{click:function(e){return t.subtractToCart()}}},[n("i",{staticClass:"fa fa-minus"})])]),t._v(" "),n("div",{staticClass:"form-control",staticStyle:{"text-align":"center"}},[n("b",[n("span",[t._v(t._s(t.cart_quantity))]),t._v(" in cart")])]),t._v(" "),n("div",{staticClass:"input-group-btn"},[n("span",{staticClass:"btn btn-info",class:{disabled:0==t.value.product_quantity},on:{click:function(e){return t.addToCart()}}},[n("i",{staticClass:"fa fa-plus"})])])])]):t._e()])},staticRenderFns:[]}},function(t,e,n){var i=n(0)(n(29),n(30),!1,null,null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["value","index"],data:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){return{storageURL:data.getStorageURL(),time:0,lastClick:0,quantity:this.value.cart_quantity}}),created:function(){var t=this;setInterval(function(){t.time++},1e3)},methods:{addToCart:function(t){var e=this.carts[t];if(e.product.product_quantity<1)util.notify("Out of stocks").update("type","warning");else{--e.product.product_quantity;var n=++e.cart_quantity;this.add(this.value.product_id,n)}},subtractToCart:function(t){var e=this.carts[t];++e.product.product_quantity;var n=--e.cart_quantity,i=this.value.product_id;n<1&&this.carts.splice(t,1),this.add(i,n)},add:function(t,e){var n=this;n.quantity=e,this.validate()||(this.lastClick=this.time,setTimeout(function(){n.time-n.lastClick==3&&n.updateCart(t,n.quantity)},3e3))},updateCart:function(t,e){var n=data.getBaseURL()+"api/v1/user/cart/add",i="id="+t+"&quantity="+e;axios.post(n,i).then(function(t){util.log(t)}).catch(function(t){util.notify("An error occured","error"),util.log(t)})},validate:function(){var t=!this.checkLogin(),e=this.time-this.lastClick<3&&0!=this.lastClick;return t||e},checkLogin:function(){return"IN"!=data.getStatus().LOG&&util.showModal("#loginModal"),"IN"==data.getStatus().LOG},toCurrency:function(t){return util.toCurrency(t)}},computed:{carts:{get:function(){return data.getStatus().CARTS},set:function(t){data.status.CARTS=t}}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[n("img",{staticClass:"thumbnail",attrs:{src:t.storageURL+t.value.product.product_image,alt:t.value.product.product_name,height:"60px",width:"60px"}})]),t._v(" "),n("td",[t._v(t._s(t.value.product.product_name))]),t._v(" "),n("td",[n("center",[n("div",{staticClass:"input-group",staticStyle:{"max-width":"200px"}},[n("div",{staticClass:"input-group-btn"},[n("span",{staticClass:"btn btn-info",on:{click:function(e){return t.subtractToCart(t.index)}}},[n("i",{staticClass:"fa fa-minus"})])]),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"6px 12px"}},[n("b",[n("span",[t._v(t._s(t.value.cart_quantity))]),t._v(" in cart")])]),t._v(" "),n("div",{staticClass:"input-group-btn"},[n("span",{staticClass:"btn btn-info",on:{click:function(e){return t.addToCart(t.index)}}},[n("i",{staticClass:"fa fa-plus"})])])])])],1),t._v(" "),n("td",[n("span",{staticClass:"pull-right"},[t._v(t._s(t.toCurrency(t.value.cart_quantity*t.value.product.product_price)))])])])},staticRenderFns:[]}},,,function(t,e,n){t.exports=n(34)},function(t,e,n){var i=function(t){return n.e(23).then(function(){var e=[n(52)];t.apply(null,e)}.bind(this)).catch(n.oe)};n(3);var a=new VueRouter({routes:[{path:"/",component:function(t){return n.e(25).then(function(){var e=[n(43)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/subcategory",redirect:{path:"/subcategory/0"}},{path:"/products/:category_id",component:i},{path:"/category",component:function(t){return n.e(27).then(function(){var e=[n(44)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"",component:function(t){return n.e(17).then(function(){var e=[n(45)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"add",component:function(t){return n.e(19).then(function(){var e=[n(46)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"edit/:category_id",component:function(t){return n.e(18).then(function(){var e=[n(47)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/subcategory/:category_id",component:function(t){return n.e(22).then(function(){var e=[n(48)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"",component:function(t){return n.e(6).then(function(){var e=[n(49)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"add",component:function(t){return n.e(8).then(function(){var e=[n(50)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"edit/:subcategory_id",component:function(t){return n.e(7).then(function(){var e=[n(51)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/products/:category_id/:subcategory_id",component:i,children:[{path:"",component:function(t){return n.e(9).then(function(){var e=[n(53)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"add",component:function(t){return n.e(11).then(function(){var e=[n(54)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"edit/:product_id",component:function(t){return n.e(10).then(function(){var e=[n(55)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/order/:type",component:function(t){return n.e(24).then(function(){var e=[n(56)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"",component:function(t){return n.e(12).then(function(){var e=[n(57)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"details/:order_id",component:function(t){return n.e(13).then(function(){var e=[n(58)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/customer",component:function(t){return n.e(26).then(function(){var e=[n(59)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"",component:function(t){return n.e(15).then(function(){var e=[n(60)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"orders/:customer_id",component:function(t){return n.e(14).then(function(){var e=[n(61)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"orders/:customer_id/details",component:function(t){return n.e(16).then(function(){var e=[n(62)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/admin",component:function(t){return n.e(28).then(function(){var e=[n(63)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"",component:function(t){return n.e(20).then(function(){var e=[n(64)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"add",component:function(t){return n.e(21).then(function(){var e=[n(65)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}]});new Vue({router:a,el:"#app",data:{baseURL:data.getBaseURL(),storageURL:data.getStorageURL(),adminId:data.getAdminId(),try:0,notif:""},created:function(){data.setAdmin({admin_name:"Loading...",admin_image:"storage/images/loading.jpg"}),this.notif=util.notify("Please wait","loading"),this.getAdmin(this.adminId)},methods:{getAdmin:function(t){var e=this;axios.get(this.baseURL+"api/v1/admin/"+t).then(function(t){e.try=0,t.data.admin_image=e.storageURL+t.data.admin_image,data.setAdmin(t.data),e.getCategories()}).catch(function(n){util.log(n),e.try<3?(e.try++,e.getAdmin(t)):util.notif("An error occured, try to refresh","error")})},getCategories:function(){var t=this;axios.get(this.baseURL+"api/v1/category").then(function(e){t.try=0,t.notif.close(),data.setCategories(e.data),t.getSubcategories()}).catch(function(e){util.log(e),t.try<3?(t.try++,t.getCategories()):util.notify("An error occured, try to refresh","error")})},getSubcategories:function(){var t=this;axios.get(this.baseURL+"api/v1/subcategory").then(function(e){t.try=0,t.notif.close(),data.setSubcategories(e.data)}).catch(function(e){util.log(e),t.try<3?(t.try++,t.getSubcategories()):util.showResult(e)})},logout:function(){var t=this;util.notify("Logging out","loading"),axios.get(this.baseURL+"api/v1/logout").then(function(e){location.href=t.baseURL+"admin/login"}).catch(function(t){util.log(t),util.notify("An error occured","error")})},minify:function(t){return util.minify(util.unescapeHTML(t),15)}},computed:{admin:function(){return data.admin},categories:function(){return data.categories}}})}]);