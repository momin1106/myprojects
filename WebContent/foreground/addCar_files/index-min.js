KISSY.add("cart-result/utils/config/index",function(e,t,n,a){var i=(KISSY.getLogger("config"),window.g_config.cartResult);a.exports={get:function(t){t=t||"";var n=t.split("."),a="";return e.each(n,function(e,t){if(a=0===t?i[e]:a[e],"undefined"==typeof a)return!1}),a},getCurrentShopItemIds:function(){var t=this.get("items"),n=[];return e.each(t,function(e){n.push(e.itemId)}),n}}}),KISSY.add("cart-result/utils/event/index",["event"],function(e,t,n,a){var i=t("event"),r={},s=e.getLogger("event"),o=e.merge({},i.Target);a.exports={fire:function(e,t){return s.info("[global]:broadcast event:"+e),r[e]=t,o.fire(e,t)},on:function(t,n){o.on(t,n),r[t]&&n.call(this,e.mix(r[t],{target:this,type:t}))},detach:function(e,t){o.detach(e,t)}}}),KISSY.add("cart-result/utils/log/make-point",function(e,t,n,a){var i=function(t){t=t+(t.indexOf("?")===-1?"?":"&")+"cache="+e.now();var n=new Image;n.src=t};return{track:function r(t){if(!e.isUndefined(t)){if(e.isArray(t))return void e.each(t,function(e){r(e)});if(e.isString(t)&&(t={data:t}),!e.isObject(t)||t.data||t.url){var n=t.data?"//gm.mmstat.com/"+t.data:t.url;i(n)}}}}}),KISSY.add("cart-result/utils/utils",["node","./event/index","./log/make-point"],function(e,t,n,a){var i=t("node").all,r=(KISSY.getLogger("utils"),t("./event/index")),s=!!~location.hostname.indexOf(".daily."),o=!!~location.hostname.indexOf("unit."),c=s?".daily.taobao.net":".taobao.com",l=i("#server-num");a.exports={isDaily:s,isPre:l.hasClass("J_EnvPre")||/\.(unit)?pre\./.test(l.html()),isUnit:o,tbDomain:c,getToken:function(){return i("#_tb_token_").val()},toMoney:function(e){return parseFloat(e/100).toFixed(2)},toFen:function(e){return parseInt(100*parseFloat(e),10)},toFixed:function(e){return parseFloat(e).toFixed(2)},num2str:function(e){return e=parseInt(e,10),"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d".charAt(e-1)},parseDiscount:function(e){e=e||"";var t=e.match(/(\d)\.(\d)\u6298/);if(t&&t.length&&parseInt(t[1],10)>0){var n=this.num2str(t[1]);return parseInt(t[2],10)>0&&(n+=this.num2str(t[2])),n+="\u6298",e.replace(t[0],n)}return e},async:function(t,n){var a=t.length;e.each(t,function(e){e&&e(function(){a--,0===a&&n&&n()})})},watingForEvent:function(t,n){function a(){0===i&&n&&n(s,o)}var i=t.length,s=0,o={};e.each(t,function(e){r.on(e,function(t){t.err&&s++,i--,o[e]=t,a()})})},removePicSuffix:function(e){return e.replace(/_(sum|\d{2,5}x\d{2,5})\.jpg$/,"")},getRandomInt:function(e,t){return Math.floor(Math.random()*(t-e))+e},track:t("./log/make-point").track}}),KISSY.add("cart-result/mods/item-info/selector-xtpl",function(e,t,n,a){return function(e,t,n){var i,r="",s=this.config,o=s.utils;"undefined"!=typeof a&&a.kissy&&(i=a);o.runBlockCommand,o.renderOutput,o.getProperty,o.runInlineCommand,o.getPropertyOrRunCommand;return r+='<div class="item-sku-select J_ItemSkuSelect" data-spm="1998474903">\n    <div class="tbc-add2cart J_TbcAdd2Cart"></div>\n    <div class="item-sku-mask J_SkuMask">\n        <div class="item-sku-expand J_ExpandSku"><em>\u5c55\u5f00\u5168\u90e8\u5c5e\u6027</em><span>&#xe604;</span></div>\n    </div>\n    <a href="javascript:void(0);" class="tbc-add2cart-close J_TbcAdd2CartClose"><span class="origin">\u5173\u95ed</span><span class="icon-close">&#xe602;</span></a>\n</div>\n'}}),KISSY.add("cart-result/mods/item-info/selector",["node","../../utils/utils","xtemplate/runtime","./selector-xtpl"],function(e,t,n,a){function i(e){var t=this;t.$container=e.$container,t.itemId=e.itemId,t.add2cart=e.add2cart,t.$skuSelect=t.render(),t.initSku(e.SkuModule).bindEvents()}var r=(e.getLogger("selector"),t("node").all),s=t("../../utils/utils"),o="item-sku-status-fold",c="item-sku-status-expand";i.prototype.render=function(e){var n=t("xtemplate/runtime"),a=t("./selector-xtpl"),i=new n(a).render();return r(i).appendTo(e||this.$container)},i.prototype.initSku=function(e){var t=this,n=r(".J_TbcAdd2Cart",t.$skuSelect);return t.sku=new e({$container:n,itemId:t.itemId,btnTpl:'<dl class="tbc-sku-line tbc-sku-operate"><dd><a href="javascript:void(0);" class="add-cart J_AddCart" data-spm-click="gostr=/tbcart;locaid=d4920383"><span class="icon-cart">&#xe606;</span><span>\u52a0\u5165\u8d2d\u7269\u8f66</span></a><div class="J_Add2CartMsg add-cart-msg"></div></dd></dl>',_confirm:t.add2cart,_rendered:function(){t.renderMask(),t.listenEvents()}}),t},i.prototype.bindEvents=function(){var e=this;return e.$close=r(".J_TbcAdd2CartClose",e.$skuSelect),r(document).delegate("click",".J_ItemSkuSelect",function(t){e.$skuSelect.hasClass(o)&&(t.stopPropagation(),e.expand())}).on("click",function(t){var n=r(t.target);e.$skuSelect.contains(n)&&!e.$close.contains(n)||e.$skuSelect.hasClass(c)&&e.fold()}),e},i.prototype.renderMask=function(){var e=this.$skuSelect,t=this.$container.offset(),n=e.offset(),a=n.top-t.top,i=r(".J_SkuMask",e);i.css({width:e.width(),height:200-a}),e.removeClass(c).addClass(o).css("height",200-a)},i.prototype.listenEvents=function(){var e=this;e.sku.ec.on("skuChange",function(){e.msg("")})},i.prototype.fold=function(e){e?this.renderMask():this.$skuSelect.replaceClass(c,o),s.track(["tbcart.9.2","a1z0d.7625083.1998474903.d4920395"])},i.prototype.expand=function(e){var t=this.$skuSelect;t.replaceClass(o,c);var n=r(".J_SkuMask",t).width();r(".J_TbcAdd2Cart",t).css("width",n-22),t.width(n),s.track(["tbcart.9.1","a1z0d.7625083.1998474903.d4920394"])},i.prototype.msg=function(e,t){var n=this;if(n.$msgbox||(n.$msgbox=r(".J_Add2CartMsg",n.$skuSelect)),n.message=t,t){var a="error"===e?"&#xe603;":"&#xe604;";n.$msgbox.html('<span class="tbc-cart-icon-'+e+' J_Add2CartMsgContent">'+a+"</span>"+t)}else n.$msgbox.html("")},i.prototype.error=function(e){return this.msg("error",e)},i.prototype.success=function(e){return this.msg("success",e)},a.exports=i}),KISSY.add("cart-result/mods/item-info/update-xtpl",function(e,t,n,a){return function(e,t,n){var i,r="",s=this.config,o=this,c=s.utils;"undefined"!=typeof a&&a.kissy&&(i=a);var l=c.runBlockCommand,d=c.renderOutput,u=c.getProperty;c.runInlineCommand,c.getPropertyOrRunCommand;r+="\u5df2\u6dfb\u52a0\u5546\u54c1\uff1a\n";var m={},p=[],f=u(o,e,"sku",0,2);return p.push(f),m.params=p,m.fn=function(e){var t="";t+='\n<p>\n    <span class="sku-key">';var n=u(o,e,"this.key",0,4);t+=d(n,!0),t+='</span>\n    <span class="sku-value">';var a=u(o,e,"this.value",0,5);return t+=d(a,!0),t+="</span>\n</p>\n"},r+=l(o,e,m,"each",2),r+="\n"}}),KISSY.add("cart-result/mods/item-info/update",["node","../../utils/utils","xtemplate/runtime","./update-xtpl","io","json"],function(e,t,n,a){function i(e){var n=c("#J_ResultMain");if(e.sku&&e.sku.length){var a=t("xtemplate/runtime"),i=t("./update-xtpl"),r=new a(i).render(e);c(".sku-info",n).html(r)}c(".quantity-info",n).html("\u6570\u91cf\uff1a"+e.quantity)}function r(t){var n=[];return e.each(t,function(e,t){e=c(e),n.push({key:e.attr("data-prop"),value:e.attr("title")})}),n}function s(e){if(e){var t=c("#J_ResultMain"),n=c(".cart-summary em",t);n.html(e+"\u4ef6")}}function o(){var e=c("#J_ResultMain"),t=c(".J_TbcAdd2Cart",e),n=c(".J_ItemPic",t),a=l.removePicSuffix(n.attr("src"));c(".J_CurItemPic",e).attr("src",a)}var c=t("node").all,l=(e.getLogger("update"),t("../../utils/utils"));a.exports={dispatch:function(e){var t=r(e.props);i({sku:t,quantity:e.quantity}),s(e.totalQuantity),o()}}}),KISSY.add("cart-result/mods/add-to-cart/index",["node"],function(e,t,n,a){var i=e.getLogger("add2cart"),r=t("node").all;a.exports={init:function(t){var n=r("#J_ResultMain");t=t||"1.2.5",n&&n.length&&e.use("tbc/add-to-cart/"+t+"/",function(e,t){t.init(n),i.info("inited.")})}}}),KISSY.add("cart-result/mods/item-info/index",["node","../../utils/config/index","./selector","./update","../add-to-cart/index"],function(e,t,n,a){function i(t){e.use(d+"add2cart",function(e,n){e.use(d+"mods/sku/sku",function(e,n){t(n)})})}function r(t,n,a,i){e.use(d+"mods/add",function(e,r){r.add({itemId:t,quantity:n,skuId:a||null},i)})}function s(t){var n=e.isString(t)?t:t.message;return"not login"===n&&(n="\u8bf7\u5148\u767b\u5f55\u624d\u80fd\u52a0\u5165\u8d2d\u7269\u8f66"),n}var o=(e.getLogger("item-info"),t("node").all),c=t("../../utils/config/index"),l="1.3.9",d="tbc/add-to-cart/"+l+"/plugin/";a.exports={init:function(){var n=o("#J_ResultMain"),a=o(".item-info",n);a&&a.length&&(i(function(n){var i=t("./selector"),o=c.get("itemId"),l=new i({$container:a,itemId:o,SkuModule:n,add2cart:function(n){n.error?l.error(n.error):r(o,n.quantity,n.skuId,function(a,i){if(a)l.error(s(a));else{l.success("\u6dfb\u52a0\u6210\u529f\uff01");var r=t("./update");r.dispatch(e.mix({itemId:o,totalQuantity:i.result.cartQuantity},e.clone(n)))}})}})}),t("../add-to-cart/index").init(l))}}}),KISSY.add("cart-result/utils/cache/index",function(e,t,n,a){var i=(KISSY.getLogger("index"),{});a.exports={get:function(e){return i[e]},set:function(e,t){i[e]=t}}}),KISSY.add("cart-result/mods/matching-combo/index-xtpl",function(e,t,n,a){return function(e,t,n){var i,r="",s=this.config,o=this,c=s.utils;"undefined"!=typeof a&&a.kissy&&(i=a);var l=c.runBlockCommand,d=c.renderOutput,u=c.getProperty,m=c.runInlineCommand,p=c.getPropertyOrRunCommand;r+='<div class="matching-combo" data-spm="1998302279">\n    <div class="tb-bundle">\n        <div id="J_BundleData" class="tb-bundle-data">\n            <ul class="tb-bundle-list">\n                ';var f={},g=[],v=u(o,e,"mealItems",0,5);g.push(v),f.params=g,f.fn=function(e){var t="";t+="\n                    ";var n={},a=[],i=u(o,e,"this.itemId",0,6);return a.push(0!==i),n.params=a,n.fn=function(e){var t="";t+="\n                        ";var n={},a=[],i=u(o,e,"xindex",0,7);a.push(0===i),n.params=a,n.fn=function(e){var t="";t+="\n                            ";var n={},a={};a.className="current-item",n.hash=a;var i=m(o,e,n,"set",8);return t+=d(i,!0),t+="\n                        "},t+=l(o,e,n,"if",7),t+='\n                        <li class="';var r=p(o,e,{},"className",0,10);t+=d(r,!0),t+='">\n                            <div class="cart-pic s120">\n                                <a href="';var s=u(o,e,"this.itemUrl",0,12);t+=d(s,!0),t+='" target="_blank"><img src="';var c=u(o,e,"this.picImgUrl",0,12);t+=d(c,!0),t+='_120x120.jpg" alt="';var f=u(o,e,"this.itemTitle",0,12);t+=d(f,!0),t+='" /></a>\n                                ';var g={},v=[],h=u(o,e,"xindex",0,13);v.push(0===h),g.params=v,g.fn=function(e){var t="";return t+='\n                                <div class="current-flag">\u5df2\u52a0\u5165\u8d2d\u7269\u8f66</div>\n                                '},t+=l(o,e,g,"if",13),t+='\n                            </div>\n                            <a href="';var x=u(o,e,"this.itemUrl",0,17);t+=d(x,!0),t+='" target="_blank" class="item-title" title="';var I=u(o,e,"this.itemTitle",0,17);t+=d(I,!0),t+='">';var y=u(o,e,"this.itemTitle",0,17);t+=d(y,!0),t+='</a>\n                            <p class="item-price">\u539f\u4ef7\uff1a<span class="price">&yen;<em>';var b=u(o,e,"this.reservePrice",0,18);t+=d(b,!0),t+="</em></span></p>\n                            ";var S={},k=[],_=u(o,e,"xindex",0,19);return k.push(0!==_),S.params=k,S.fn=function(e){var t="";return t+='<i class="icon-plus"></i>'},t+=l(o,e,S,"if",19),t+="\n                        </li>\n                    "},t+=l(o,e,n,"if",6),t+="\n                "},r+=l(o,e,f,"each",5),r+='\n            </ul>\n            <div class="tb-bundle-info" data-spm="1000371">\n                <div class="tb-bundle-content">\n                    <div class="tb-total">\n                        <span>\u5957\u9910\u4ef7</span>\n                        <span class="price">&yen;<em>';var h=p(o,e,{},"mealPriceMoney",0,28);r+=d(h,!0),r+='</em></span>\n                    </div>\n                    <div class="tb-save">\n                        <p>\n                            <span>\u7701</span>\n                            <span class="price">&yen;<em>';var x=p(o,e,{},"saveMoney",0,33);r+=d(x,!0),r+='</em></span>\n                        </p>\n                    </div>\n                    <a class="tb-view" data-spm="d9" href="';var I=p(o,e,{},"mealUrl",0,36);r+=d(I,!0),r+='" target="_blank">\u67e5\u770b\u5957\u9910</a>\n                    ';var y={},b=[],S=u(o,e,"meals",0,37);return b.push(S),y.params=b,y.fn=function(e){var t="";t+='\n                    <div class="tb-pagination" id="J_BundlePage" data-max-page="';var n=p(o,e,{},"meals.length",0,38);t+=d(n,!0),t+='">\n                        <a href="#" class="J_Prev tb-prev J_Pager" title="\u4e0a\u4e00\u9875"><span>\u4e0a\u4e00\u9875</span></a>\n                        <span class="tb-page-indicator">\n                            <span class="tb-current">';var a=p(o,e,{},"curPage",0,41);t+=d(a,!0),t+="</span>/";var i=p(o,e,{},"meals.length",0,41);return t+=d(i,!0),t+='\n                        </span>\n                        <a href="#" class="J_Next tb-next J_Pager" title="\u4e0b\u4e00\u9875"><span>\u4e0b\u4e00\u9875</span></a>\n                    </div>\n                    '},r+=l(o,e,y,"if",37),r+='\n                </div>\n                <i class="icon-equal"></i>\n            </div>\n        </div>\n    </div>\n</div>\n'}}),KISSY.add("cart-result/utils/wrapper/index-xtpl",function(e,t,n,a){return function(e,t,n){var i,r="",s=this.config,o=this,c=s.utils;"undefined"!=typeof a&&a.kissy&&(i=a);var l=c.runBlockCommand,d=c.renderOutput,u=c.getProperty,m=(c.runInlineCommand,c.getPropertyOrRunCommand);r+='<div class="recommend-';var p={},f=[],g=u(o,e,"isSimple",0,1);f.push(g),p.params=f,p.fn=function(e){var t="";return t+="simple"},p.inverse=function(e){var t="";return t+="main"},r+=l(o,e,p,"if",1),r+=" recommend-type-";var v=m(o,e,{},"type",0,1);r+=d(v,!0),r+=' clearfix" ';var h={},x=[],I=u(o,e,"spm",0,1);x.push(I),h.params=x,h.fn=function(e){var t="";t+='data-spm="';var n=m(o,e,{},"spm",0,1);return t+=d(n,!0),t+='"'},r+=l(o,e,h,"if",1),r+='>\n    <div class="recommend-hd">\n        <div class="recommend-title">';var y=m(o,e,{},"promoMemo",0,3);r+=d(y,!1),r+="</div>\n        ";var b={},S=[],k=u(o,e,"hasSwitch",0,4);S.push(k),b.params=S,b.fn=function(e){var t="";return t+='<a href="javascript:void(0);" class="recommend-switch J_RecSwitchBtn" data-spm-click="gostr=/tbcart;locaid=d10">\u6362\u4e00\u6279</a>'},r+=l(o,e,b,"if",4),r+='\n    </div>\n    <div class="recommend-bd">';var _=m(o,e,{},"content",0,6);return r+=d(_,!1),r+='</div>\n    <ul class="recommend-tab-nav"></ul>\n</div>\n'}}),KISSY.add("cart-result/utils/wrapper/index",["node","xtemplate/runtime","./index-xtpl"],function(e,t,n,a){var i,r,s=t("node").all;KISSY.getLogger("index");a.exports={get:function(){if(!i){var e=t("xtemplate/runtime"),n=t("./index-xtpl");i=new e(n)}return i},generate:function(e){var t=this.get();return e=e||{},t.render(e)},render:function(e,t){},slide:function(t){e.use("kg/slide/2.0.2/",function(e,n){var a=new n(t,{eventType:"click",navClass:"recommend-tab-nav",contentClass:"recommend-list",pannelClass:"recommend-panel",selectedClass:"current",triggerSelector:"a",effect:"fade",autoSlide:!1}),i=s(".J_RecSwitchBtn",s(t));i.on("click",function(e){e.preventDefault(),r&&clearTimeout(r),r=setTimeout(function(){a.next()},200)})})}}}),KISSY.add("cart-result/mods/matching-combo/index",["node","../../utils/config/index","../../utils/cache/index","../../utils/event/index","io","xtemplate/runtime","./index-xtpl","../../utils/wrapper/index"],function(e,t,n,a){function i(n,a){var i=t("io"),r=c.get("sellerId"),s=c.get("itemId");n=n||{};var o="//tds.alicdn.com/json/MMComponent.htm?meal=1&userId="+r+"&itemId="+s;e.each(n,function(e,t){o+="&"+t+"="+e}),new i({url:o,type:"get",dataType:"jsonp",success:function(t){if(e.isPlainObject(t)&&t.data&&t.data.mealComponentBO){var n=t.data.mealComponentBO;n.meals||(n.meals=l.get("meals")),a(null,n)}else a(new Error("data error"))},error:function(){a(new Error("load data error"))},jsonpCallback:"fromCdn",cache:!0})}function r(e,n){var a=t("xtemplate/runtime"),i=t("./index-xtpl");n.curPage=u+1;var r=new a(i).render(n),s=t("../../utils/wrapper/index").get();r=s.render({type:"combo-meal",promoMemo:"\u642d\u914d\u5957\u9910 \u8282\u7701\u66f4\u591a",content:r}),e.html(r)}function s(e){e.delegate("click",".J_Pager",function(t){t.preventDefault();var n,a=o(t.currentTarget),s=a.parent(),c=parseInt(s.attr("data-max-page"),10);n=a.hasClass("J_Prev")?u-1:u+1,n>=c?n=0:n<0&&(n=c-1),i({page:n,mealdata:l.get("meals")[n]},function(t,a){t||(u=n,l.set("comboPage"+u,a),r(e,a))})})}var o=t("node").all,c=(KISSY.getLogger("matching-combo"),t("../../utils/config/index")),l=t("../../utils/cache/index"),d=t("../../utils/event/index"),u=0;a.exports={init:function(e){i(null,function(t,n){var a=o("#J_MatchingCombo");t?a.remove():(u=0,r(a,n),n.meals&&(s(a),l.set("comboPage0",n),l.set("meals",n.meals))),d.fire("comboInited",{err:t}),e&&e(t)})}}}),KISSY.add("cart-result/utils/tui/recommend-xtpl",function(e,t,n,a){return function(e,t,n){var i,r="",s=this.config,o=this,c=s.utils;"undefined"!=typeof a&&a.kissy&&(i=a);var l=c.runBlockCommand,d=c.renderOutput,u=c.getProperty,m=(c.runInlineCommand,c.getPropertyOrRunCommand);r+='<div class="recommend-list recommend-lines-';var p=m(o,e,{},"lines",0,1);r+=d(p,!0),r+=' clearfix">\n    ';var f={},g=[],v=u(o,e,"data",0,2);return g.push(v),f.params=g,f.fn=function(e){var t="";t+='\n    <div class="recommend-panel">\n        ';var n={},a=[],i=u(o,e,"this",0,4);return a.push(i),n.params=a,n.fn=function(e){var t="";t+='\n        <div class="recommend-item">\n            <div class="item-pic cart-pic s180">\n                <a href="';var n=u(o,e,"this.url",0,7);t+=d(n,!0),t+='" target="_blank"><img src="';var a=u(o,e,"this.pic",0,7);t+=d(a,!0),t+='_180x180.jpg" alt="';var i=u(o,e,"this.itemName",0,7);t+=d(i,!0),t+='" /></a>\n            </div>\n            <div class="item-info">\n                <div class="item-title">\n                    <a href="';var r=u(o,e,"this.url",0,11);t+=d(r,!0),t+='" target="_blank">\n                        ';var s={},c=[],m=u(o,e,"this.extMap.icon2015",0,12);c.push("tb"===m),s.params=c,s.fn=function(e){var t="";return t+='\n                            <span class="icon-double11-taobao"></span>\n                        '},t+=l(o,e,s,"if",12),t+="\n                        ";var p={},f=[],g=u(o,e,"this.extMap.icon2015",0,15);f.push("jingxuan"===g),p.params=f,p.fn=function(e){var t="";return t+='\n                            <span class="icon-double11-taobaojx"></span>\n                        '},t+=l(o,e,p,"if",15),t+="\n                        ";var v={},h=[],x=u(o,e,"this.extMap.icon2015",0,18);h.push("tmall"===x),v.params=h,v.fn=function(e){var t="";return t+='\n                            <span class="icon-double11-tmall"></span>\n                        '},t+=l(o,e,v,"if",18),t+="\n                        ";var I={},y=[],b=u(o,e,"this.extMap.icon2015",0,21);y.push("alitrip"===b),I.params=y,I.fn=function(e){var t="";return t+='\n                            <span class="icon-double11-alitrip"></span>\n                        '},t+=l(o,e,I,"if",21),t+="\n                        ";var S={},k=[],_=u(o,e,"this.extMap.icon2015",0,24);k.push("yushou"===_),S.params=k,S.fn=function(e){var t="";return t+='\n                            <span class="icon-double11-yushou"></span>\n                        '},t+=l(o,e,S,"if",24),t+="\n                        ";var P=u(o,e,"this.itemName",0,27);t+=d(P,!0),t+='\n                    </a>\n                </div>\n                <div class="item-price ';var w={},C=[],T=u(o,e,"this.promotionPrice",0,30);C.push(T>0),w.params=C,w.fn=function(e){var t="";return t+="item-has-promo"},t+=l(o,e,w,"if",30),t+='">\n                    ';var J={},M=[],R=u(o,e,"this.promotionPrice",0,31);M.push(R>0),J.params=M,J.fn=function(e){var t="";t+='<span class="price promo-price">&yen;<em>';var n=u(o,e,"this.promotionPrice",0,31);return t+=d(n,!0),t+="</em></span>"},t+=l(o,e,J,"if",31),t+='\n                    <span class="price original-price">&yen;<em>';var O=u(o,e,"this.price",0,32);t+=d(O,!0),t+='</em></span>\n                </div>\n                <div class="item-icon-wrap">\n                    ';var K={},Y=[],E=u(o,e,"this.extMap.manfan2015",0,35);Y.push("gouwuquan"===E),K.params=Y,K.fn=function(e){var t="";return t+='\n                        <span class="icon-double11-manfan"></span>\n                    '},t+=l(o,e,K,"if",35),t+="\n                    ";var L={},$=[],j=u(o,e,"this.extMap.hongbao2015",0,38);$.push("on"===j),L.params=$,L.fn=function(e){var t="";return t+='\n                        <span class="icon-double11-hongbao"></span>\n                    '},t+=l(o,e,L,"if",38),t+="\n                    ";var D={},A=[],F=u(o,e,"this.extMap.dacuIcon",0,41);A.push("tmall"===F),D.params=A,D.fn=function(e){var t="";return t+='\n                        <span class="icon-double11-tmall"></span>\n                    '},t+=l(o,e,D,"if",41),t+="\n                    ";var B={},q=[],G=u(o,e,"this.extMap.dacuIcon",0,44);q.push("hanglv"===G),B.params=q,B.fn=function(e){var t="";return t+='\n                        <span class="icon-double11-tmall"></span>\n                    '},t+=l(o,e,B,"if",44),t+="\n                    ";var N={},U=[],H=u(o,e,"this.extMap.dacuIcon",0,47);return U.push("taobao"===H),N.params=U,N.fn=function(e){var t="";return t+='\n                        <span class="icon-double11-taobao"></span>\n                    '},t+=l(o,e,N,"if",47),t+="\n                </div>\n            </div>\n        </div>\n        "},t+=l(o,e,n,"each",4),t+="\n    </div>\n    "},r+=l(o,e,f,"each",2),r+="\n</div>\n"}}),KISSY.add("cart-result/utils/tui/framework",["../utils","io","../config/index","io","../config/index","xtemplate/runtime","./recommend-xtpl"],function(e,t,n,a){function i(e){e=e||{},this.appId=e.appId,this.sellerId=e.sellerId,this.categoryId=e.categoryId,this.cartItems=e.cartItems,this.excludeItems=e.excludeItems&&e.excludeItems.length?e.excludeItems:null,this.maxItems=e.maxItems||10,this.sid=e.sid,this.itemId=e.itemId,this.itemsPerPage=e.itemsPerPage,this.isP4P=e.p4p&&Math.random()<.5,this.p4pPid=e.p4p,this.isCombined=e.isCombined}function r(e){if(e.rec_item_num)for(var t=0;t<e.rec_item_num;t++)e.result[t].isRec=!0;return e}var s=e.getLogger("RecFramework"),o=t("../utils");i.prototype._getP4P=function(t,n){var a=this,i="p4pjsondata"+e.now()+e.guid();e.getScript("//tns.simba.taobao.com/?name=tcmad&pid="+a.p4pPid+"&count="+t.count+"&itemid="+t.itemid+"&p4p="+i,{success:function(){var t=window[i],a=[];t&&t.length?(e.each(t,function(e){a.push({pic:o.removePicSuffix(e.TBGOODSLINK),url:e.EURL,itemName:e.TITLE,price:o.toMoney(e.GOODSPRICE||e.PRICE)})}),n(null,a)):n(new Error("no items"))},error:function(){n(new Error("no items"))}})},i.prototype._getTui=function(n,a){var i=t("io"),s=this,o=t("../config/index");n.appid=s.appId||8,new i({type:"get",url:o.get("api.recommend")||"//tui.taobao.com/recommend",data:n,success:function(t){if(t&&t.result&&t.result.length){var n=[];r(t),s.excludeItems?e.each(t.result,function(t){e.inArray(t.itemId,s.excludeItems)||n.push(t)}):n=t.result,a(null,n)}else a(new Error("no items"))},timeout:5,error:function(){a(new Error("load error"))},dataType:"jsonp"})},i.prototype._getCombineTui=function(n,a){var i=t("io"),r=this,s=t("../config/index");n.appid=r.appId||8,o.isDaily&&(e.mix(n,{debug:!0,_sid_:r.sid,itemid:r.itemId}),delete n.appid),new i({type:"get",url:s.get("api.recommend")||"//tui.taobao.com/recommend",data:n,success:function(e){e&&e.result&&e.result.length?a(null,e.result):a(new Error("no items"))},timeout:5,error:function(){a(new Error("load error"))},dataType:"jsonp"})},i.prototype.get=function(t,n){var a=this,i={count:t||5};a.sellerId&&(i.sellerid=a.sellerId),a.cartItems&&(i.cart_items=a.cartItems),a.itemId&&(i.itemid=a.itemId),a.categoryId&&(i.categoryid=a.categoryId);var r=function(e,t){!e&&t&&t.length?(a.maxItems>0&&t.length>a.maxItems&&(t=t.slice(0,a.maxItems)),n(null,t)):n(new Error("no items"))},o=function(t,a){!t&&a&&a.length>0?e.each(a,function(e){n(null,e)}):n(new Error("no items"))};a.isP4P?(s.info("get p4p data"),a._getP4P(i,r)):a.isCombined?a._getCombineTui(i,o):a._getTui(i,r)},i.prototype.generateTPL=function(e){},i.prototype.generate=function(n){var a=this,i=t("xtemplate/runtime"),r=t("./recommend-xtpl");if(n){var s={},o=a.isCombined?n.itemsPerPage:a.itemsPerPage;return o?e.each(n.data,function(e,t){var n=parseInt(t/o);s[n]=s[n]||[],s[n].push(e)}):s[0]=n.data,n.data=s,n.lines=n.lines||1,new i(r).render(n)}return""},i.prototype.render=function(t,n){var a=e.isString(n)?n:this.generate(n);a?t.html(a):t.hide()},a.exports=i}),KISSY.add("cart-result/mods/recommend/index",["node","../../utils/tui/framework","../../utils/wrapper/index","../../utils/config/index","../../utils/event/index","../../utils/cache/index","../../utils/utils"],function(e,t,n,a){function i(e,t){e=e||{},e.count=e.count||10,e.type=e.type||"",e.itemId=e.itemId||u.get("itemId"),e.itemsPerPage=5,e.maxLines=e.maxLines||1;var n=new l(e);n.get(e.count,function(a,i){var r=o(e.container);if(a)r.remove();else{var c=1;i.length>e.itemsPerPage&&e.maxLines>1&&(e.itemsPerPage=e.itemsPerPage*e.maxLines,c=e.maxLines,n.itemsPerPage=e.itemsPerPage);var l=n.generate({data:i,lines:c}),u=e.title;e.checkRec&&0===s(i)&&(u=e.checkRec);var p={type:e.type,isSimple:"rec-shop"!==e.type,hasSwitch:i.length>e.itemsPerPage,content:l,promoMemo:u,spm:e.spm},f=d.generate(p);r.html(f),p.hasSwitch&&d.slide(e.container)}m.fire(e.type+"-inited",{err:a,data:i}),t&&t(a,i)})}function r(e,t){e=e||{};var n=new l(e);n.get(0,function(t,a){if(!t&&a&&a.items.length>=5){var i=o(e.type[a.rectype].container),r=a.items,s=Math.floor(r.length/5);linesPerPage=Math.floor(s/a.pages);var c=a.pages;linesPerPage<1&&(linesPerPage=1,c=s);var l=5*linesPerPage*c;r=r.slice(0,l);var u=n.generate({data:r,lines:linesPerPage,itemsPerPage:5*linesPerPage}),m={type:e.type[a.rectype].type,isSimple:!1,hasSwitch:c>1,content:u,promoMemo:a.title,spm:e.type[a.rectype].spm},p=d.generate(m);i.html(p),m.hasSwitch&&d.slide(e.type[a.rectype].container)}})}function s(t){var n=0;return e.each(t,function(e){e&&e.isRec&&n++}),n}var o=t("node").all,c=KISSY.getLogger("recommend"),l=t("../../utils/tui/framework"),d=t("../../utils/wrapper/index"),u=t("../../utils/config/index"),m=t("../../utils/event/index"),p=t("../../utils/cache/index"),f=t("../../utils/utils");a.exports={init:function(t){var n=this;f.async([e.bind(n.initCombineRec,n)],t)},initCombineRec:function(t){f.watingForEvent(["comboInited"],function(n,a){c.info("promotion loaded, start to load shop rec.");var i=(u.get("items")||[]).slice(0,20),s=[];return e.each(i,function(e){s.push(e.itemId)}),r({appId:u.get("recAppId.combine")||2897,sid:21536,isCombined:!0,type:{INSHOP_I2I:{type:"rec-shop",container:"#J_RecommendShop",spm:"1998302281"},OTHERSHOP_I2I:{type:"rec-similar",container:"#J_RecommendSimilar",spm:"1998302282"},OTHERSHOP_COL:{type:"rec-match",container:"#J_RecommendMatch",spm:"1998302283"}},excludeItems:p.get("excludeItemIds"),sellerId:f.isDaily?"33331":u.get("sellerId"),itemId:f.isDaily?"520630788358":u.get("itemId"),categoryId:u.get("categoryId"),cartItems:s.join(",")},t)})},initShopRec:function(t){f.watingForEvent(["comboInited"],function(n,a){c.info("promotion loaded, start to load shop rec.");var r=(u.get("items")||[]).slice(0,20),s=[];return e.each(r,function(e){s.push(e.itemId)}),i({appId:u.get("recAppId.shop")||1073,sid:21536,title:"\u4e0e\u8be5\u5b9d\u8d1d\u540c\u65f6\u8d2d\u4e70\u7684",checkRec:"\u5e97\u5185\u70ed\u5356\u5b9d\u8d1d",type:"rec-shop",container:"#J_RecommendShop",excludeItems:p.get("excludeItemIds"),sellerId:f.isDaily?"33331":u.get("sellerId"),itemId:f.isDaily?"2100526009231":"",categoryId:u.get("categoryId"),cartItems:s.join(","),maxLines:1===n?2:1,spm:"1998302281",maxItems:1===n?20:10,count:30},t)})},initGlobalRec:function(t){var n=this,a=["comboInited","rec-shop-inited"];f.watingForEvent(a,function(i,r){i<a.length?f.async([e.bind(n.initSimilarRec,n),e.bind(n.initMatchRec,n)],t):o(".recommend-area").remove()})},initSimilarRec:function(t){var n=(u.get("items")||[]).slice(0,20),a=[];return e.each(n,function(e){a.push(e.itemId)}),i({appId:u.get("recAppId.similar")||1074,sid:21531,title:"\u4e70\u4e86\u8be5\u5b9d\u8d1d\u7684\u4eba\u8fd8\u770b\u4e86",type:"rec-similar",sellerId:f.isDaily?"33331":u.get("sellerId"),itemId:f.isDaily?"2100526009231":"",cartItems:a.join(","),categoryId:u.get("categoryId"),container:"#J_RecommendSimilar",spm:"1998302282"},t)},initMatchRec:function(t){var n=(u.get("items")||[]).slice(0,20),a=[];return e.each(n,function(e){a.push(e.itemId)}),i({appId:u.get("recAppId.match")||1075,sid:21538,title:"\u4e70\u4e86\u8be5\u5b9d\u8d1d\u7684\u4eba\u8fd8\u4e70\u4e86",type:"rec-match",sellerId:f.isDaily?"33331":u.get("sellerId"),itemId:f.isDaily?"2100526009231":"",cartItems:a.join(","),categoryId:u.get("categoryId"),container:"#J_RecommendMatch",spm:"1998302283"},t)}}}),KISSY.add("cart-result/utils/feedback/index-xtpl",function(e,t,n,a){return function(e,t,n){var i,r="",s=this.config,o=s.utils;"undefined"!=typeof a&&a.kissy&&(i=a);o.runBlockCommand,o.renderOutput,o.getProperty,o.runInlineCommand,o.getPropertyOrRunCommand;return r+='<div id="J_SideFloat" class="side-float">\n    <a class="toggle-version J_MakePoint" data-point="tbcart.8.30" href=""><span class="icon"></span><span class="txt">\u8fd4\u56de\u65e7\u7248</span></a>\n    <a id="J_GoToTop" class="go-to-top J_GoToTop J_MakePoint" data-point="tbcart.8.28"><span class="iconfont">&#61534</span><em>\u56de\u5230\u9876\u90e8</em></a>\n    <a class="suggestion J_Suggestion J_MakePoint" data-point="tbcart.8.29" target="_blank" href="//survey.taobao.com/survey/QwE0mTiCx?type=3"><span class="iconfont">&#61535</span><em>\u6211\u8981\u53cd\u9988</em></a>\n</div>\n'}}),KISSY.add("cart-result/utils/feedback/index",["node","anim","ua","xtemplate/runtime","./index-xtpl"],function(e,t,n,a){var i,r,s=t("node"),o=s.all,c=t("anim"),l=t("ua"),d=(e.getLogger("feedback"),t("xtemplate/runtime")),u=new d(t("./index-xtpl")).render(),m=o(window),p=function(t){var n=t&&t.offset()?t.offset().top:0,a=t.height(),i=500,r=e.later(function(){},0);t.css("top",n+m.scrollTop()),m.on("scroll resize",function(s){var o=m.scrollTop();n=(m.height()-a)/3*2,r.cancel(),r=e.later(function(){m.scrollTop()===o&&t.css("top",n+m.scrollTop())},i)})};a.exports={init:function(){function e(){if(m.width()<1060){var e=o("#J_OrderList"),t=e.offset();t&&i.css({left:t.left+e.width()-20,right:"auto"})}else i.css({left:"auto",right:"6px"})}var t=this;i=o(u).appendTo("body").delegate("click",".J_GoToTop",function(e){e.preventDefault(),c(window,{scrollTop:0},.5,"easeOutStrong").run()}),r=o("#J_GoToTop"),t.toggleGoToTop(),m.on("scroll",t.toggleGoToTop,t),e(),m.on("resize",e),6===l.ie&&p(i)},toggleGoToTop:function(){r.css("visibility",m.scrollTop()?"visible":"hidden")}}}),KISSY.add("cart-result/mods/layout/search",["node"],function(e,t,n,a){t("node").all;a.exports={init:function(){var t="1.4.5/",n=",tbc/search-suggest/"+t,a=["dom","index","plugin/history","plugin/cloud","plugin/tab","new_suggest.css"];e.use(a.join(n),function(e,t,n,a,i,r){var s=["history","dapei_top","cat","global","list","shop","scene","dapei_bottom","tmall","cloud"],o=[new a,new r({activeCls:"selected",node:"#J_Search li.J_SearchTab"}),new i],c="//suggest.taobao.com/sug?area=c2c&k=1",l="";location.href.indexOf("debug=test")>-1&&(c="//suggest.proxy.taobao.org/sug?area=c2c&k=1");var d=new n({plugins:o,sugConfig:{sourceUrl:c,node:"#q",resultFormat:l,focused:!0,placeholderEl:"#J_TSearchForm label"},mods:{sort:s,tmall:{tmpl:'<div class="{prefixCls}menu-extras-cate extras-mall" data-key="q={tmall}&suggest=tmall_{$index}&tab=mall"><span class="{prefixCls}menu-key">{tmall}</span><b>\u5929\u732b\u76f8\u5173</b></div>'}}});d.on("beforeFocus",function(){var e=d.get("input"),n=t.parent(e,"form"),a=t.parent(e,2),i=t.prev(a,"label"),r=t.next(a,"i");i&&t.css(i,{color:"#ccc"}),r&&t.hide(r),n.className="search-panel-focused"}),d.on("afterQueryChange",function(e){var n=e.query,a=d.get("input"),i=t.parent(a,2),r=t.prev(i,"label");""!==n&&t.hide(r);
}),d.on("beforeBlur",function(){var n=d.get("input"),a=t.parent(n,"form"),i=t.parent(n,2),r=t.prev(i,"label"),s=t.next(i,"i");""===e.trim(n.val())&&(r&&(t.show([r]),t.css(r,{color:"#999"})),s&&t.show(s)),a.className=""}),e.one(".search-triggers").on("mouseenter mouseleave",function(e){var n,a=this,i="add";"mouseleave"===e.type&&(i="remove",n=t.query("li",a),t[i+"Class"].call(a,n,"selected"),t.addClass.call(a,n[0],"selected")),t[i+"Class"].call(a,".search-triggers","triggers-hover")});var u=e.all(".J_SearchTab");u.on("mouseenter",function(e){var n=this,a=t.siblings(n);t.addClass(n,"selected"),t.removeClass(a,"selected")}),u.on("click",function(e){var n=this,a=t.parent(n),i=t.children(a)[0];n!==i&&(t.insertBefore(n,i),t.removeClass.call(n,".search-triggers","triggers-hover"),t.addClass.call(n,"#J_TSearchForm","search-panel-focused"),e.halt())})})}}}),KISSY.add("cart-result/utils/logger/performance",["../utils","../config/index"],function(e,t,n,a){var i=(e.getLogger("performance"),window);a.exports={send:function(){var n=t("../utils");if(66===n.getRandomInt(1,100)){var a=t("../config/index"),r=a.get("from"),s=a.get("sourceTime");i.goldlog&&i.goldlog.record&&r&&s&&i.goldlog.record("/xn.10.10","","name="+r+"_cart&st="+s+"&lt="+window.g_config.startTime+"&ft="+e.now(),"H1733390")}}}}),KISSY.add("cart-result/index",["./mods/item-info/index","./mods/matching-combo/index","./mods/recommend/index","./utils/feedback/index","./mods/layout/search","./utils/logger/performance"],function(e,t,n,a){e.getLogger("main");a.exports={init:function(){e.each([t("./mods/item-info/index"),t("./mods/matching-combo/index"),t("./mods/recommend/index"),t("./utils/feedback/index"),t("./mods/layout/search")],function(e){e&&e.init&&e.init()}),t("./utils/logger/performance").send()}}});