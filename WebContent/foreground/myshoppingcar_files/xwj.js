/*2015-06-09 05:21:26*/!function(t){var e=13,n=window,o=document,i=0,r=1,a=document.documentElement.clientHeight,s=0,l=500,c=1;if(!(t._ap_xwj&&e<=t._ap_xwj.version)){var d,u,h={layout:0,watch:null,sample_rate:.01},m=function(t){return"number"==typeof t},g=function(t){return"[object Array]"===Object.prototype.toString.call(t)},f=function(t){for(var e=1,n=arguments.length;n>e;e++){var o=arguments[e];for(var i in o)o.hasOwnProperty(i)&&(t[i]=o[i])}return t},p=function(t){var e=n.KISSY;e?e.ready(t):n.jQuery?jQuery(o).ready(t):"complete"===o.readyState?t():addEventListener(n,"load",t)},v=function(t){var e,n=["5767.1462560","5767.1479463","5767.1475690","5767.1475759","5767.1475776","5767.1475756","5767.1475689","5767.1475754","5767.1475755","5767.1476020","5767.1475753","5767.1475770","5767.1476103","5767.1475769","5767.1475757","5767.1475788","5767.1475758","5767.1478897","5767.1475772","5767.1473447","5767.1454491","5767.1452181","5767.1455366"],o=n.length;for(e=0;o>e;e++)if(n[e]==t)return!0;return!1},y=function(){for(var t="",e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";t.length<16;)t+=e.substr(Math.floor(62*Math.random()),1);return t},w=function(t){var e,n,i,r,a,s,l=o.getElementsByTagName("*");for(e=[];t&&1==t.nodeType;t=t.parentNode)if(t.id){for(s=t.id,r=0,n=0;n<l.length;n++)if(a=l[n],a.id&&a.id==s){r++;break}if(e.unshift(t.tagName.toLowerCase()+'[@id="'+s+'"]'),1==r)return e.unshift("/"),e.join("/")}else{for(n=1,i=t.previousSibling;i;i=i.previousSibling)i.tagName==t.tagName&&n++;e.unshift(t.tagName.toLowerCase()+"["+n+"]")}return e.length?"/"+e.join("/"):null},x=function(t){var e,n=[];for(e in t)t.hasOwnProperty(e)&&n.push(e+"="+encodeURIComponent(t[e]));return n.join("&")},b=function(t,e,n){var o=Math.max(T.scrollWidth,T.clientWidth),i=T.scrollTop,r=T.scrollLeft,a=e.pageX,s=e.pageY;m(a)||(a=e.clientX+r,s=e.clientY+i);var l,c,d=-1;if(t&&t.getBoundingClientRect&&(c=t.getBoundingClientRect(),d=c.left+r,l=c.top+i),0==n){var u=o>>1;a-=u,d-=u}else 2==n&&(a-=o,d-=o);return{x:a,y:s,ex:d,ey:l}},_=y(),T="BackCompat"==o.compatMode?o.body:o.documentElement,E=navigator.userAgent,M=t.screen.width,j=t.screen.height,S=T.clientWidth,C=T.clientHeight,N=o.referrer,B=location,I=B.href,L=B.protocol,k="https:"==L,A=(new Date).getTime(),P=(new Date).getTime(),D=0,O=L+(k?"//log":"//gm")+".mmstat.com/ued.1.1.2?logtype=2&_gm:id=xwj&cache=",W="http://youshu.taobao.org",z=function(t,e){var n=o.createElement("script");n.type="text/javascript",n.async=!0,n.src=k?e:t,o.getElementsByTagName("head")[0].appendChild(n)},R=function(t){var e,n,o,i,r,a=document.getElementsByTagName("meta"),s="";if(a)for(var l=a.length-1;l>=0;l--)if(e=a.item(l),n=H(e,"name"),n==t){o=H(e,"content"),o.indexOf(":")>=0&&(i=o.split(":"),o=i[1]),r=0==o.indexOf("110"),s=r?"":o;break}return s},H=function(t,e){return t&&t.getAttribute?t.getAttribute(e)||"":""},F=function(){var t,e,o,i=n._SPM_a,r=n._SPM_b;if(d)return d;if(i&&r)return i=i.replace(/^{(\w+|-)}$/g,"$1"),r=r.replace(/^{(\w+|-)}$/g,"$1"),t=i+"."+r,("-"==i||"-"==r)&&(t="0.0"),d=t,t;if(e=R("data-spm")||R("spm-id"),!e)return"0.0";var a,s=document.getElementsByTagName("body");return o=e.split("."),s=s&&s.length?s[0]:null,s&&(a=H(s,"data-spm"),a&&(e=o[0]+"."+a)),2==e.split(".").length?(d=e,e):"0.0"},Y=function(t,e){this.id=t,this.config=e,this.initialized=!1,this.watchList=[];var n=this.config.watch;if(g(n)&&0!=n.length){for(var o=0,i=n.length;i>o;o++)this.watchList[n[o]]=1;this.hasWatch=!0}};Y.prototype={startup:function(){this["spm-cnt"]=F(),this.getFonts(),this.sendPV(),this.bindMonitor()},getFonts:function(){"a217f.7278617"==this["spm-cnt"]&&(n.FONT_SPMAB=this["spm-cnt"],p(function(){var t="/alilog/mlog/fontDetect.js";z("//g.alicdn.com"+t,"//g.alicdn.com"+t)}))},sendPV:function(){if(!this.initialized){var t={type:0,id:this.id,pvid:_,ua:E,sw:M,sh:j,vw:S,vh:C,ref:N,url:I};this["spm-cnt"]&&(t["spm-cnt"]=this["spm-cnt"]),this.initialized=!0,this.sendData(O+Math.random(),t)}},bindMonitor:function(){var e=this,n=!!o.attachEvent,i=n?"attachEvent":"addEventListener";o[i]((n?"on":"")+"mousedown",function(n){n=n||t.event;var o=n.target||n.srcElement;o&&e.mousedown(o,n)},!1)},initPostMessage:function(){function t(t){return"display:"+t+";pointer-events:none;position:absolute;width:1200px;top:0;left:50%;margin-left:-600px;z-index: 10000000;"}function e(t){return"display:"+t+";pointer-events:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;opacity:0.3;z-index: 1000000"}window.parent!=window&&(window.top.postMessage("ready:ready",W),window.addEventListener("message",function(n){if(n.origin==W){var i,r,a=n.data,s=a.split("="),l=s[0],c=decodeURIComponent(s[1]);if("showImg"==l)(i=document.getElementById("xwj_heat"))&&(r=document.getElementById("xwj_overlay"))?(i.src=c,i.style.cssText=t("block"),r.style.cssText=e("block")):(r=document.createElement("div"),r.id="xwj_overlay",r.style.cssText=e("block"),document.body.appendChild(r),i=document.createElement("img"),i.src=c,i.id="xwj_heat",i.style.cssText=t("block"),document.body.appendChild(i));else if("hideImg"==l)(i=document.getElementById("xwj_heat"))&&(r=document.getElementById("xwj_overlay"))&&(i.style.cssText=t("none"),r.style.cssText=e("none"));else if("getScrollTop"==l){var d=o.documentElement.scrollTop||o.body.scrollTop;n.source.postMessage("scrollTop:"+d,n.origin)}}}))},initScroll:function(){var t=this;return!n.goldlog&&l>s?(s++,setTimeout(function(){t.initScroll()},200),void 0):(n.goldlog&&(goldlog.on(n,"scroll",function(){t.getMaxScroll()}),goldlog.on(n,"beforeunload",function(){c=t.getCurrentScroll(),r=c>r?c:r,t.sendData(O+Math.random(),{type:2,scroll:1,g_max_view:r,g_exit_view:c,"spm-cnt":(goldlog.spm_ab||[]).join(".")})})),void 0)},getMaxScroll:function(){var t=o.documentElement.scrollTop||o.body.scrollTop;i=t>i?t:i,r=Math.ceil(i/a)+1},getCurrentScroll:function(){var t=o.documentElement.scrollTop||o.body.scrollTop;return Math.ceil(t/a)+1},mousedown:function(t,e){var n,o,i,r=this,a=t,s=t.tagName,l=!1,c={type:1,id:this.id,pvid:_};if(!s||"HTML"!=s){if(this.hasWatch)for(;a;){if(a.id&&(n=this.watchList[a.id])||!(o=a.parentNode)){o&&(l=!0);break}a=o}if(l||!this.hasWatch){("A"==s||"AREA"==s)&&(i=t.getAttribute("href",2)||"",c.href=i);var d=b(t,e,this.config.layout),u=(new Date).getTime();c.xpath=w(t),c.x=d.x,c.y=d.y,c.ex=d.ex,c.ey=d.ey,c.ew=t.offsetWidth,c.eh=t.offsetHeight,c.tagName=(s||"").toLowerCase(),c.t=u-A,c.t2=u-P,c.n=++D,c.screen=r.getCurrentScroll(),P=u,this["spm-cnt"]&&(c["spm-cnt"]=this["spm-cnt"]),this.sendData(O+Math.random(),c)}}},sendData:function(e,n){var o=new Image,i="_img_"+Math.random(),r=-1==e.indexOf("?")?"?":"&";t[i]=o,o.onload=o.onerror=function(){t[i]=null},o.src=e+r+x(n),o=null}},t._ap_xwj={version:e,monitor:function(t,e){if(t){u=f({},h,e);var n=new Y(t,u);n.initPostMessage();var o=Math.random(),i=location.search.indexOf("youshu=all")>=0;if(v(F())&&(u.sample_rate=.01),o<u.sample_rate||i){try{n.initScroll()}catch(r){}n.startup(),this.getId=function(){return t}}}}}}}(window);