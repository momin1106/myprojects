define("kg/item-guess-u-like/2.0.6/index",["kg/xtemplate/4.4.0/runtime","base","node","dom","io","kg/item-guess-u-like/2.0.6/index.css"],function(a,e,t){var n,r,l=a("kg/xtemplate/4.4.0/runtime"),i=a("base"),o=a("node"),s=a("dom"),p=a("io");a("kg/item-guess-u-like/2.0.6/index.css");n=function(a){"use strict";var e=l;return a=function(){var a=new e(function(a){function e(a,e,t){a.data,a.affix;return e.data+='\n<div class="head">\n    <div class="title">\n        <div class="i-title">\u731c\u4f60\u559c\u6b22</div>\n        <div class="i-title2">\u6dd8\u5b9d\u53d1\u73b0</div>\n        <div class="txt">\u6839\u636e\u4f60\u6700\u8fd1\u6d4f\u89c8\u63a8\u8350</div>\n    </div>\n    <div class="line"></div>\n</div>\n',e}function t(a,e,t){var n=a.data,r=a.affix;e.data+='<span class="old_price">&yen;';var l=(L=r.price)!==t?L:(L=n.price)!==t?L:a.resolveLooseUp(["price"]);return e=e.writeEscaped(l),e.data+="</span>",e}function n(a,e,t){a.data,a.affix;return e.data+='\n                        <span class="icon-2015 hongbao2015"></span>\n                    ',e}function r(a,e,t){a.data,a.affix;return e.data+='\n                        <span class="icon-2015 icon-tb"></span>\n                    ',e}function l(a,e,t){a.data,a.affix;return e.data+='\n                        <span class="icon-2015 icon-xinshili"></span>\n                    ',e}function i(a,e,t){a.data,a.affix;return e.data+='\n                        <span class="icon-2015 icon-tb"></span>\n                    ',e}function o(a,e,t){a.data,a.affix;return e.data+='\n                        <span class="icon-2015 icon-alitrip"></span>\n                    ',e}function s(a,e,t){a.data,a.affix;return e.data+='\n                        <span class="icon-2015 icon-tmall"></span>\n                    ',e}function p(a,e,t){a.data,a.affix;return e.data+='\n                        <span class="icon-2015 icon-manfan"></span>\n                    ',e}function c(a,e,t){a.data,a.affix;return e.data+='\n                        <span class="icon-2015 icon-yushou"></span>\n                    ',e}function d(a,e,t){var d=a.data,u=a.affix;e.data+="\n                    ",y.line=34;var v=(L=u.extMap)!==t?null!=L?w=L.hongbao2015:L:(L=d.extMap)!==t?null!=L?w=L.hongbao2015:L:a.resolveLooseUp(["extMap","hongbao2015"]),f=v;f="on"===v,e=N.call(_,a,{params:[f],fn:n},e),e.data+="\n                    ",y.line=37;var x=(L=u.extMap)!==t?null!=L?w=L.dacuIcon:L:(L=d.extMap)!==t?null!=L?w=L.dacuIcon:L:a.resolveLooseUp(["extMap","dacuIcon"]),m=x;m="taobao_off"===x,e=N.call(_,a,{params:[m],fn:r},e),e.data+="\n                    ",y.line=40;var M=(L=u.extMap)!==t?null!=L?w=L.dacuIcon:L:(L=d.extMap)!==t?null!=L?w=L.dacuIcon:L:a.resolveLooseUp(["extMap","dacuIcon"]),h=M;h="xinshili"===M,e=N.call(_,a,{params:[h],fn:l},e),e.data+="\n                    ",y.line=43;var g=(L=u.extMap)!==t?null!=L?w=L.dacuIcon:L:(L=d.extMap)!==t?null!=L?w=L.dacuIcon:L:a.resolveLooseUp(["extMap","dacuIcon"]),U=g;U="jingxuan"===g,e=N.call(_,a,{params:[U],fn:i},e),e.data+="\n                    ",y.line=46;var b=(L=u.extMap)!==t?null!=L?w=L.dacuIcon:L:(L=d.extMap)!==t?null!=L?w=L.dacuIcon:L:a.resolveLooseUp(["extMap","dacuIcon"]),k=b;k="hanglv_off"===b,e=N.call(_,a,{params:[k],fn:o},e),e.data+="\n                    ",y.line=49;var I=(L=u.extMap)!==t?null!=L?w=L.dacuIcon:L:(L=d.extMap)!==t?null!=L?w=L.dacuIcon:L:a.resolveLooseUp(["extMap","dacuIcon"]),C=I;C="tmall_off"===I,e=N.call(_,a,{params:[C],fn:s},e),e.data+="\n                    ",y.line=52;var E=(L=u.extMap)!==t?null!=L?w=L.manfan2015:L:(L=d.extMap)!==t?null!=L?w=L.manfan2015:L:a.resolveLooseUp(["extMap","manfan2015"]),T=E;T="gouwuquan"===E,e=N.call(_,a,{params:[T],fn:p},e),e.data+="\n                    ",y.line=55;var J=(L=u.extMap)!==t?null!=L?w=L.dacuIcon:L:(L=d.extMap)!==t?null!=L?w=L.dacuIcon:L:a.resolveLooseUp(["extMap","dacuIcon"]),B=J;return B="yushou"===J,e=N.call(_,a,{params:[B],fn:c},e),e.data+="\n                <!-- 2015\u53cc\u5341\u4e00\u6253\u6807 -->\n                ",e}function u(a,e,t){var n=a.data,r=a.affix;e.data+='<a class="lx-icon icon-tmall" href="';var l=(L=r.url)!==t?L:(L=n.url)!==t?L:a.resolveLooseUp(["url"]);return e=e.writeEscaped(l),e.data+='" target="_blank"></a>',e}function v(a,e,t){a.data,a.affix;return e.data+=" tag2\n                      ",e}function f(a,e,t){a.data,a.affix;return e.data+=" tagJYJ\n                        ",e}function x(a,e,t){var n=a.data,r=a.affix;e.data+="\n                        ",y.line=64;var l=(L=r.extMap)!==t?null!=L?w=L.isJYJ:L:(L=n.extMap)!==t?null!=L?w=L.isJYJ:L:a.resolveLooseUp(["extMap","isJYJ"]),i=l;return i="1"===l,e=N.call(_,a,{params:[i],fn:f},e),e.data+="\n                    ",e}function m(a,e,t){var n=a.data,r=a.affix;e.data+='<a class="tag\n                      ',y.line=62,y.line=62;var l=(L=r.extMap)!==t?null!=L?w=L.isB2C:L:(L=n.extMap)!==t?null!=L?w=L.isB2C:L:a.resolveLooseUp(["extMap","isB2C"]),i=l;i="1"===l,e=N.call(_,a,{params:[i],fn:v,inverse:x},e),e.data+='" href="',y.line=66;var o=(L=r.url)!==t?L:(L=n.url)!==t?L:a.resolveLooseUp(["url"]);e=e.writeEscaped(o),e.data+='" target="_blank">';var s=(L=r.extMap)!==t?null!=L?w=L.promotionTag:L:(L=n.extMap)!==t?null!=L?w=L.promotionTag:L:a.resolveLooseUp(["extMap","promotionTag"]);return e=e.writeEscaped(s),e.data+="</a>",e}function M(a,e,t){var n=a.data,r=a.affix;e.data+="\n                    ",y.line=60;var l=(L=r.extMap)!==t?L:(L=n.extMap)!==t?L:a.resolveLooseUp(["extMap"]),i=l;if(i){var o=(L=r.extMap)!==t?null!=L?w=L.isB2C:L:(L=n.extMap)!==t?null!=L?w=L.isB2C:L:a.resolveLooseUp(["extMap","isB2C"]),s=o;s="1"===o;var p=s;if(!p){var c=(L=r.extMap)!==t?null!=L?w=L.isB2C:L:(L=n.extMap)!==t?null!=L?w=L.isB2C:L:a.resolveLooseUp(["extMap","isB2C"]),d=c;d=1===c,p=d}i=p}e=N.call(_,a,{params:[i],fn:u},e),e.data+="\n                    ",y.line=61,y.line=61;var v=(L=r.extMap)!==t?L:(L=n.extMap)!==t?L:a.resolveLooseUp(["extMap"]),f=v;if(f){var x=(L=r.extMap)!==t?null!=L?w=L.promotionTag:L:(L=n.extMap)!==t?null!=L?w=L.promotionTag:L:a.resolveLooseUp(["extMap","promotionTag"]);f=x}return e=N.call(_,a,{params:[f],fn:m},e),e.data+="\n                ",e}function h(a,e,t){var n=a.data,r=a.affix;e.data+='\n                <a class="recommend_by" href="',y.line=73;var l=(L=r.url)!==t?L:(L=n.url)!==t?L:a.resolveLooseUp(["url"]);e=e.writeEscaped(l),e.data+='" target="_blank" title="';var i=(L=r.extMap)!==t?null!=L?w=L.explanationbak:L:(L=n.extMap)!==t?null!=L?w=L.explanationbak:L:a.resolveLooseUp(["extMap","explanationbak"]);e=e.writeEscaped(i),e.data+='">';var o=(L=r.extMap)!==t?null!=L?w=L.explanation:L:(L=n.extMap)!==t?null!=L?w=L.explanation:L:a.resolveLooseUp(["extMap","explanation"]);return e=e.write(o),e.data+="</a>\n                ",e}function g(a,e,n){var r=a.data,l=a.affix;e.data+='\n            <div class="item" href="',y.line=16;var i=(L=l.url)!==n?L:(L=r.url)!==n?L:a.resolveLooseUp(["url"]);e=e.writeEscaped(i),e.data+='">\n                <a title="',y.line=17;var o=(L=l.itemName)!==n?L:(L=r.itemName)!==n?L:a.resolveLooseUp(["itemName"]);e=e.writeEscaped(o),e.data+='" class="shortcut" href="';var s=(L=l.url)!==n?L:(L=r.url)!==n?L:a.resolveLooseUp(["url"]);e=e.writeEscaped(s),e.data+='" target="_blank">\n                    <img src="',y.line=18;var p=(L=l.pic)!==n?L:(L=r.pic)!==n?L:a.resolveLooseUp(["pic"]);e=e.writeEscaped(p),e.data+='"><span></span>\n                    </a>\n                    <div class="price-wrap">\n                        <a class="c" href="',y.line=21;var c=(L=l.url)!==n?L:(L=r.url)!==n?L:a.resolveLooseUp(["url"]);e=e.writeEscaped(c),e.data+='" target="_blank">\n                            <span class="price">&yen;',y.line=22;var u=(L=l.promotionPrice)!==n?L:(L=r.promotionPrice)!==n?L:a.resolveLooseUp(["promotionPrice"]);e=e.writeEscaped(u),e.data+="</span>\n                    ",y.line=23;var v=(L=l.price)!==n?L:(L=r.price)!==n?L:a.resolveLooseUp(["price"]);e=N.call(_,a,{params:[v],fn:t},e),e.data+='\n                        </a>\n                        <div class="line"></div>\n                    </div>\n                    <div class="item-title">\n                        <a title="',y.line=28;var f=(L=l.itemName)!==n?L:(L=r.itemName)!==n?L:a.resolveLooseUp(["itemName"]);e=e.writeEscaped(f),e.data+='" href="';var x=(L=l.url)!==n?L:(L=r.url)!==n?L:a.resolveLooseUp(["url"]);e=e.writeEscaped(x),e.data+='" target="_blank">';var m=(L=l.itemName)!==n?L:(L=r.itemName)!==n?L:a.resolveLooseUp(["itemName"]);e=e.writeEscaped(m),e.data+='</a>\n                    </div>\n                    <div class="info-wrap">\n                        <div class="item-info">\n                            <!-- 2015\u53cc\u5341\u4e00\u6253\u6807 -->\n                ',y.line=33,y.line=33;var g=(L=l.extMap)!==n?L:(L=r.extMap)!==n?L:a.resolveLooseUp(["extMap"]),U=g;if(U){var b=(L=l.extMap)!==n?null!=L?w=L.dacuIcon:L:(L=r.extMap)!==n?null!=L?w=L.dacuIcon:L:a.resolveLooseUp(["extMap","dacuIcon"]),k=b;if(!k){var I=(L=l.extMap)!==n?null!=L?w=L.hongbao2015:L:(L=r.extMap)!==n?null!=L?w=L.hongbao2015:L:a.resolveLooseUp(["extMap","hongbao2015"]);k=I}var C=k;if(!C){var E=(L=l.extMap)!==n?null!=L?w=L.manfan2015:L:(L=r.extMap)!==n?null!=L?w=L.manfan2015:L:a.resolveLooseUp(["extMap","manfan2015"]);C=E}U=C}e=N.call(_,a,{params:[U],fn:d,inverse:M},e),e.data+='\n                    <a class="sold-wrap" href="',y.line=68;var T=(L=l.url)!==n?L:(L=r.url)!==n?L:a.resolveLooseUp(["url"]);e=e.writeEscaped(T),e.data+='" target="_blank">\n                        \u6708\u9500<span class="sold">',y.line=69;var J=(L=l.monthSellCount)!==n?L:(L=r.monthSellCount)!==n?L:a.resolveLooseUp(["monthSellCount"]);e=e.writeEscaped(J),e.data+="</span>\n                    </a>\n                </div>\n                ",y.line=72,y.line=72;var B=(L=l.extMap)!==n?L:(L=r.extMap)!==n?L:a.resolveLooseUp(["extMap"]),P=B;if(P){var j=(L=l.extMap)!==n?null!=L?w=L.explanation:L:(L=r.extMap)!==n?null!=L?w=L.explanation:L:a.resolveLooseUp(["extMap","explanation"]);P=j}return e=N.call(_,a,{params:[P],fn:h},e),e.data+="\n            </div>\n        </div>\n        ",e}function U(a,e,t){var n=a.data;a.affix;e.data+='\n    <div class="page">\n        <div class="c-adjust float-wrap">\n        ',y.line=15,y.line=15;var r=n;return e=B.call(_,a,{params:[r],fn:g},e),e.data+="\n    </div>\n</div>\n",e}var L,w,_=this,b=_.root,k=_.buffer,I=_.scope,y=(_.runtime,_.name,_.pos),C=I.data,E=I.affix,T=b.nativeCommands,J=b.utils,B=(J.callFn,J.callDataFn,J.callCommand,T.range,T["void"],T.foreach,T.forin,T.each),N=(T["with"],T["if"]);T.set,T.include,T.parse,T.extend,T.block,T.macro,T["debugger"];k.data+="";var P=(L=E.header)!==a?L:(L=C.header)!==a?L:I.resolveLooseUp(["header"]);k=N.call(_,I,{params:[P],fn:e},k),k.data+='\n<div class="content J_content">\n',y.line=12,y.line=12;var j=(L=E.pages)!==a?L:(L=C.pages)!==a?L:I.resolveLooseUp(["pages"]);return k=B.call(_,I,{params:[j],fn:U},k),k.data+="\n</div>\n",k});return a.render.apply(a,arguments)}}(),r=function(a){var e=i,t=n,r=o,l=s,c=p,d=e.extend({initializer:function(){var a=this,e=r.all(".J_guess-you-like");e.each(function(e,t){var n=r.all(e),l=setInterval(function(){a._isWithinViewport(n)&&(a.init(n),clearInterval(l))},200)})},init:function(a){var e=this,t={source:"https://tui.taobao.com/recommend",charset:document.charset||document.characterSet||"gbk",page:3,titltimg:a.attr("data-titltimg"),width:a.attr("data-width")||990,header:a.attr("data-header"),delay:a.attr("data-delay")||3e3,perpage:"scj"===a.attr("data-width")||"order"===a.attr("data-width")||"gwc"===a.attr("data-width")?5:a.attr("data-width")>950?5:4},n={count:t.page*t.perpage,_input_charset:t.charset,_output_charset:t.charset};a.attr("data-appid")&&(n.appid=a.attr("data-appid")),a.attr("data-orderid")&&(n.orderid=a.attr("data-orderid")),a.attr("data-itemids")&&(n.itemids=a.attr("data-itemids"));var r=e.getUrlParams(location.search);r.itemid&&(n.itemid=r.itemid),r._rec_sid_&&(n._sid_=r._rec_sid_||2297),new c({type:"get",url:t.source,data:n,success:function(n){if(!n.result||!n.result.length)return e.faultTolerant(a,t);n.result[0]&&n.result[0].extMap&&n.result[0].extMap.hasOwnProperty("explanation")||(t.reducedInfo=!0);for(var r=0,l=n.result.length;r<l;r++){n.result[r].extMap&&n.result[r].extMap.explanation&&(n.result[r].extMap.explanationbak=n.result[r].extMap.explanation,n.result[r].extMap.explanation=n.result[r].extMap.explanation.replace(/(['|"])[^'|"]*\1/gi,function(a){return"<span>"+a+"</span>"})),n.result[r].promotionPrice||(n.result[r].promotionPrice=n.result[r].price,delete n.result[r].price);var i=n.result[r].pic;try{n.result[r].pic.match(/\.([^\.]+)$/i)&&!n.result[r].pic.match(/_\d+x\d+\.([^\.]+)$/i)&&(n.result[r].pic+="_220x220.jpg")}catch(o){n.result[r].pic=i}}var s=[],p={pages:s};t.page=Math.ceil(n.result.length/t.perpage);for(var r=0;r<t.page;r++)s.push(n.result.splice(0,t.perpage));t.titltimg&&(p.titleimg=t.titltimg),p.header="false"!==t.header,e.create(t,p,a)},error:function(){e.aultTolerant(a,t)},dataType:"jsonp"})},faultTolerant:function(a,e){a.hide()},getUrlParams:function(a){for(var e={},t=(a||location.search).replace(/^\?/,"").split(/&/g),n=0;n<t.length;n++){var r=t[n].split(/=/);e[r[0]]=r[1]}return e},create:function(a,e,t){var n=this;n.fillContent(e,t),t.addClass("gul-w-"+a.width);var l=t.one(".J_content");t.all(".item").on("mouseenter mouseleave",function(a){r.one(this).toggleClass("item-hover")}),a.reducedInfo&&l.addClass("reducedInfo")},fillContent:function(a,e){var n=t(a);e.html(n)},_isWithinViewport:function(a){var e=a.offset().top,t=l.scrollTop(),n=l.viewportHeight()+t;return e>=t&&e<n+.5*l.viewportHeight()}},{ATTRS:{}});return a=d}(),t.exports=r});