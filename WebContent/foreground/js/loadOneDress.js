/**
 * 
 */

$(function(){
	
	loadOne()
	isLogin()
	
})

function loadOne(){
	var i=parseInt(getQueryString("id"))
	$.post("/tbpoject/goods/getById",{"id":i},function(data){
		var goods=$.parseJSON(data)
		var title=goods.name
		var str1='<div class="tb-item-info-l"><div class="tb-gallery"><div class="tb-booth tb-pic tb-main-pic"><a href="https://www.taobao.com/view_image.php?pic=HEYVDlhCEghRV1dcWwocCUQFGxVdQUZBVRdaW11bU15EVQoDAARCRicmWVQYM1ZRSmtYSEYvGDkYHBs8YFZ5fS0xEjtKTUdKCg4DAQMLBV5cABsL&amp;title=zsTS1cPx1%2BW358Gs0sLIudbQ0OQyMDE30MK%2F7rS6z8S%2F7cvJtPPC68DZy7%2BzpMi5vPS7qM%2FJxvjF29fT&amp;version=2&amp;c=MTgyNzEyNzM2Nw%3D%3D&amp;sellerRate=68500&amp;itemId=546629500525&amp;fv=9&amp;shopId=106609707" rel="nofollow" target="_blank"><span class="ks-imagezoom-wrap"><img id="J_ImgBooth" src="dress_detail_files/TB28nAnhxXlpuFjSsphXXbJOXXa_1827127367_003.jpg" data-haszoom="700" data-size="400x400"><span class="ks-imagezoom-icon" style=""></span><span style="position: absolute; top: 0px; left: 200px; width: 200px; height: 200px; display: none;" class="ks-imagezoom-lens"></span></span></a><div class="zoom-icon tb-iconfont" id="J_ZoomIcon">&#337;</div></div><ul id="J_UlThumb" class="tb-thumb tb-clearfix"><li class="tb-selected" data-index="0"><div class="tb-pic tb-s50"><a href="#"><img data-src="//gd3.alicdn.com/imgextra/i2/1827127367/TB28nAnhxXlpuFjSsphXXbJOXXa_!!1827127367.jpg_50x50.jpg" src="dress_detail_files/TB28nAnhxXlpuFjSsphXXbJOXXa_1827127367_006.jpg"></a></div></li><li data-index="1"><div class="tb-pic tb-s50"><a href="#"><img data-src="//gd4.alicdn.com/imgextra/i4/1827127367/TB2EN.Phr8kpuFjy0FcXXaUhpXa_!!1827127367.jpg_50x50.jpg" src="dress_detail_files/TB2EN.jpg"></a></div></li><li data-index="2"><div class="tb-pic tb-s50"><a href="#"><img data-src="//gd2.alicdn.com/imgextra/i2/1827127367/TB2W33MhB8lpuFjSspaXXXJKpXa_!!1827127367.jpg_50x50.jpg" src="dress_detail_files/TB2W33MhB8lpuFjSspaXXXJKpXa_1827127367.jpg"></a></div></li><li data-index="3"><div class="tb-pic tb-s50"><a href="#"><img data-src="//gd3.alicdn.com/imgextra/i3/1827127367/TB2gscAhrJkpuFjy1zcXXa5FFXa_!!1827127367.jpg_50x50.jpg" src="dress_detail_files/TB2gscAhrJkpuFjy1zcXXa5FFXa_1827127367.jpg"></a></div></li><li data-index="4"><div class="tb-pic tb-s50"><a href="#"><img data-src="//gd1.alicdn.com/imgextra/i1/1827127367/TB26KgvhuJ8puFjy1XbXXagqVXa_!!1827127367.jpg_50x50.jpg" src="dress_detail_files/TB26KgvhuJ8puFjy1XbXXagqVXa_1827127367.jpg"></a></div></li><li data-index="5"><div class="tb-pic tb-s50"><a href="#"><img data-src="//gd1.alicdn.com/imgextra/i1/TB1eVXrQXXXXXc2XpXXXXXXXXXX_!!0-item_pic.jpg_50x50.jpg" src="dress_detail_files/TB1eVXrQXXXXXc2XpXXXXXXXXXX_0-item_pic.jpg"></a></div></li></ul><script>(function () {if (this.WebP)return;this.WebP = {}, WebP._cb = function (e, t) {this.isSupport = function (t) {t(e)}, t(e), (window.chrome || window.opera && window.localStorage) && window.localStorage.setItem("webpsupport", e)}, WebP.isSupport = function (e) {if (!e)return;if (!window.chrome && !window.opera)return WebP._cb(!1, e);if (window.localStorage && window.localStorage.getItem("webpsupport") !== null) {var t = window.localStorage.getItem("webpsupport");WebP._cb(t === "true", e);return}var n = new Image;n.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA", n.onload = n.onerror = function () {WebP._cb(n.width === 2 && n.height === 2, e)}}, WebP.run = function (e) {this.isSupport(function (t) {t && e()})}})();(function (e, f) {var d, c = function (g) {return document.getElementById(g)}, a = function (g) {var h = g.getAttribute("data-src");if (!h) {return}if (d && e) {h += "_.webp";f = true}g.src = f ? h.replace(/img0(\d)\.taobaocdn\.com/, "gd$1.alicdn.com") : h}, b = function (h) {if (h) {for (var g = 0; g < h.length; g++) {a(h[g])}}};WebP.isSupport(function (g) {d = g;a(c("J_ImgBooth"));b(c("J_UlThumb").getElementsByTagName("img"));if (d) {g_config.beacon.webp = 1}})})(true, true);</script></div><div id="J_Social" data-spm="20140010" class="tb-social tb-clearfix"><ul><li class="tb-social-fav"><a data-spm-click="gostr=/tbdetail;locaid=d1" class="J_TDialogTrigger" href="javascript:collect()" data-height="260" data-width="440" data-spm-protocol="" shortcut-key="c" shortcut-label="收藏宝贝" shortcut-effect="click"><i class="tb-icon"></i> 收藏宝贝<em class="J_FavCount"> (3623人气)</em></a></li><li class="tb-social-split"></li><!--TODO:<li class="tb-social-like"><a data-spm-click="gostr=/tbdetail;locaid=d1"href="javascript:;"shortcut-key="x"shortcut-label="喜欢宝贝"shortcut-effect="click"><i class="tb-icon"></i> 喜欢宝贝</a></li> --><li class="tb-social-share"><a data-spm-click="gostr=/tbdetail;locaid=d2" class="J_Share" href="javascript:;" data-init="false" shortcut-key="f" shortcut-label="分享宝贝" shortcut-effect="click"><i class="tb-icon"></i> 分享</a></li></ul></div></div>'
		var str='<div class="tb-item-info-r" data-spm="iteminfo"> <div class="tb-property tb-property-x"><div class="tb-wrap tb-wrap-newshop"><div id="J_Title" class="tb-title" shortcut-key="t" shortcut-label="查看宝贝标题" shortcut-effect="focus"><h3 class="tb-main-title" data-title="'+goods.name+'">'+goods.name+'</h3><p class="tb-subtitle">包邮，赠送运费险，购物无忧。实物拍摄，有模特。新品上市，5折优惠。可用信用卡、花呗支付。拥有一件涤棉剪花连衣裙，做优雅传统知性 女人。【忆布衣】您的衣橱！</p><div id="J_TEditItem" class="tb-editor-menu"><div id="J_Report" class="tb-report"><p class="tb-report-hd">举报</p><ul class="tb-report-bd"><li><a id="J_isuit" href="https://jubao.taobao.com/index.htm?&amp;spm=a1z6q.7847058&amp;itemId=546629500525" target="_blank">举报此商品</a></li>                    <li><a href="https://bbs.taobao.com/catalog/thread/154504-977100.htm?spm=2013.1.1000373.2" target="_blank">商品举报演示</a></li>                    <li><a href="https://bbs.taobao.com/catalog/424023.htm?spm=2013.1.1000373.3" target="_blank">购物安全防骗</a></li>                    <li><a href="https://315.taobao.com/?spm=2013.1.1000373.4" target="_blank">消费质量曝光</a></li></ul></div></div></div><div id="J_Banner" class="tb-banner"></div><ul class="tb-meta tb-promo-meta"><li id="J_StrPriceModBox" class="tb-detail-price tb-clear J_PriceItem" shortcut-key="p" shortcut-label="查看价格" shortcut-effect="focus" data-price-wight="0"><span class="tb-property-type">价格</span><div class="tb-property-cont"><strong id="J_StrPrice" style="font-size: 14px; color: rgb(60, 60, 60); font-weight: 400; text-decoration: line-through;"><em class="tb-rmb">&#165;</em><em class="tb-rmb-num">372.00</em></strong></div></li><li id="J_PromoPrice" class="tb-detail-price tb-promo-price tb-clear"><span class="tb-property-type">淘宝价</span><div class="tb-property-cont"><div id="J_Promo" class="tb-promo-mod"><div id="J_PromoHd" class="tb-promo-hd tb-promo-item"><div class="tb-promo-item-bd"><strong class="tb-promo-price"><em class="tb-rmb">&#165;</em><em id="J_PromoPriceNum" class="tb-rmb-num">'+goods.price+'</em></strong><span id="J_PromoType" class="tb-promo-type">淘宝女装价</span><span id="J_PromoTips" class="tb-promo-tips"></span></div><div class="tb-promo-item-ft"></div></div><div id="J_PromoBd" class="tb-promo-bd"></div></div></div></li><li id="J_Duty"></li><li id="J_ActivityPrice"></li><li id="J_OtherDiscount" class="tb-clear"><span class="tb-property-type">优惠</span><div class="tb-other-discount"><div class="tb-other-discount-content"><div class="J_coin"><i class="tb-icon-coin"></i>淘金币可抵<strong>3.72</strong>元</div></div><div class="tb-other-discount-content tb-other-discount-split"><div class="tb-coupon">    <img class="tb-coupon-icon" src="dress_detail_files/TB1xlnONpXXXXa9aXXXXXXXXXXX-80-16.png" srcset="//img.alicdn.com/tps/TB1xlnONpXXXXa9aXXXXXXXXXXX-80-16.png 1x, //img.alicdn.com/tps/TB1HZofNpXXXXacXpXXXXXXXXXX-155-32.png 2x">100元店铺优惠券，满999元可用<a class="J_coupon" href="#" data-type="shopcoupon" data-activityid="ff92b11be79940a4890a77a29560b7bb" data-spm-click="gostr=/tbdetail;locaid=coupon">领取</a></div><div class="tb-coupon"><img class="tb-coupon-icon" src="dress_detail_files/TB1xlnONpXXXXa9aXXXXXXXXXXX-80-16.png" srcset="//img.alicdn.com/tps/TB1xlnONpXXXXa9aXXXXXXXXXXX-80-16.png 1x, //img.alicdn.com/tps/TB1HZofNpXXXXacXpXXXXXXXXXX-155-32.png 2x">50元店铺优惠券，满599元可用<a class="J_coupon" href="#" data-type="shopcoupon" data-activityid="24e7509613da4473975daf326e1b1b90" data-spm-click="gostr=/tbdetail;locaid=coupon">领取</a></div></div></div></li><li id="J_Counter" class="tb-counter"><span class="tb-property-type">销量</span><div class="tb-counter-bd"><div class="tb-rate-counter"><a id="J_ReviewTabTrigger" href="javascript:;"><strong id="J_RateCounter">1409</strong><span>累计评论</span></a></div><div class="tb-sell-counter"><a href="javascript:;" title="30天内已售出173件，其中交易成功127件"><strong id="J_SellCounter">127</strong><span>交易成功</span></a></div></div></li><li id="J_MorePromoSlider" class="tb-more-promo-slider tb-clearfix" style="display: none"><ul id="J_MorePromoList"></ul><div class="post-script">以上价格可在付款时选择享用</div></li></ul><div id="J_StepPrice"></div><div id="J_logistic"><div class="tb-logistic tb-clearfix"><span class="tb-name tb-property-type">配送</span><div id="J_LogisticInfo" class="tb-logistic-info"><div class="wl-areainfo clearfix"><span id="J_WlAreaInfo" class="wl-areacon"><span id="J-From">上海</span> 至 <span id="J-To"><span class="wl-addressinfo" id="J_WlAddressInfo" title="北京昌平区">北京昌平区 <s></s></span></span></span><span class="loading" id="J-Loading"></span></div><div id="J_WlServiceInfo" class="wl-serviceinfo"><span class="wl-servicetitle" id="J_WlServiceTitle">快递 免运费 <s></s></span></div><div id="serviceFeeListInfo" class="wl-serviceinfo"></div><div id="J_WlServiceTitleMark" class="wl-serviceinfo"><span class="wl-servicemarkinfo" id="J_ServiceMarkInfo">48小时内发货</span></div></div></div></div><div id="J_SepLine" class="sep-line"></div><div id="J_isku" class="tb-key tb-key-sku" shortcut-key="i" shortcut-label="挑选宝贝" shortcut-effect="focus"><div class="tb-skin"><dl class="J_Prop J_TMySizeProp tb-prop tb-clear  J_Prop_measurement "><dt class="tb-property-type">尺码</dt><dd><ul data-property="尺码" class="J_TSaleProp tb-clearfix"><li data-value="20509:28383" class="tb-selected"><a href="javascript:void(0);"><span>均码</span></a><i>已选中</i></li></ul></dd></dl><span id="J_TMySize" class="size-btn" data-template-id="" data-value-type="1" data-value="50010850" data-value-rt="" data-spm-click="gostr=/tbdetail;locaid=d3">&#8250; 尺码助手</span><dl class="J_Prop tb-prop tb-clear  J_Prop_Color "><dt class="tb-property-type">颜色分类</dt><dd><ul data-property="颜色分类" class="J_TSaleProp tb-img tb-clearfix"><li data-value="1627207:28326"><a href="javascript:;" style="background:url(//gd2.alicdn.com/imgextra/i2/1827127367/TB28nAnhxXlpuFjSsphXXbJOXXa_!!1827127367.jpg_30x30.jpg) center no-repeat;"><span>红色</span></a><i>已选中</i></li><li data-value="1627207:28320"><a href="javascript:;" style="background:url(//gd4.alicdn.com/imgextra/i4/1827127367/TB2EN.Phr8kpuFjy0FcXXaUhpXa_!!1827127367.jpg_30x30.jpg) center no-repeat;"><span>白色</span></a><i>已选中</i></li><li data-value="1627207:28341"><a href="javascript:;" style="background:url(//gd1.alicdn.com/imgextra/i3/1827127367/TB2dbOFXXgkyKJjSspiXXcwBpXa_!!1827127367.jpg_30x30.jpg) center no-repeat;"><span>黑色</span></a><i>已选中</i></li><li data-value="1627207:520120346"><a href="javascript:;" style="background:url(//gd4.alicdn.com/imgextra/i3/1827127367/TB2bRU5XeYCK1JjSZFmXXbCyVXa_!!1827127367.jpg_30x30.jpg) center no-repeat;"><span>红色（无袖）</span></a><i>已选中</i></li><li data-value="1627207:384506443"><a href="javascript:;" style="background:url(//gd3.alicdn.com/imgextra/i1/1827127367/TB218U5XeYCK1JjSZFmXXbCyVXa_!!1827127367.jpg_30x30.jpg) center no-repeat;"><span>白色（无袖）</span></a><i>已选中</i></li></ul></dd></dl><dl class="tb-amount tb-clear"><dt class="tb-property-type">数量</dt><dd> <span class="tb-stock" id="J_Stock"><a href="javascript:decress();" title="减1" hidefocus="" class="tb-reduce J_Reduce tb-iconfont tb-disable-reduce">&#411;</a><input id="J_IptAmount" class="tb-text" value="1" maxlength="8" title="请输入购买量" type="text"><a href="javascript:incress();" hidefocus="" class="tb-increase J_Increase tb-iconfont" title="加1" >&#410;</a>件</span><em>(库存<span id="J_SpanStock" class="tb-count">'+goods.count+'</span>件)</em></dd></dl><dl id="J_DlChoice" class="tb-choice tb-clear"><dt>请选择：</dt><dd><em>尺码</em><em>颜色分类</em></dd></dl><div id="J_SureSKU" class="tb-sure"><p class="tb-choice">请勾选您要的商品信息</p><p class="tb-sure-continue"><a id="J_SureContinue" href="javascript:;">确定</a></p><span class="close J_Close tb-iconfont">&#223;</span></div><div class="tb-msg tb-hidden" style="display: none;"><p class="tb-stop">发生错误</p></div><div id="J_juValid" class="tb-action tb-clearfix "><div class="tb-btn-buy"><a href="javascript:buy('+goods.id+')" title="点击此按钮，到下一步确认购买信息" class="J_LinkBuy" shortcut-key="b" shortcut-label="立即购买" shortcut-effect="click" data-addfastbuy="true" data-spm-click="gostr=/tbdetail;locaid=d1">立即购买</a></div><div class="tb-btn-add"><a href="javascript:add()" title="加入购物车" class="J_LinkAdd" shortcut-key="a" shortcut-label="加入购物车" shortcut-effect="click" data-spm-click="gostr=/tbdetail;locaid=d2" ><i class="tb-iconfont">&#365;</i>加入购物车</a></div></div></div></div><div class="tb-extra" id="J_tbExtra"><dl><dt>承诺</dt><dd><a class="J_Cont" title="8天退货，退货邮费卖家承担" href="#" target="_blank"><img src="dress_detail_files/TB1XY_zGpXXXXbeXXXXAz6UFXXX-16-16.png">8天退货</a><a href="https://service.taobao.com/support/knowledge-1117985.htm?spm=0.0.0.0.bOwpfZ&amp;dkey=searchview" target="_blank"><img src="dress_detail_files/TB1wj5PQFXXXXX8apXXXXXXXXXX-16-16.png" srcset="//img.alicdn.com/tfs/TB13FrcQFXXXXaKXVXXXXXXXXXX-32-32.png 2x">公益宝贝</a></dd></dl><dl><dt>支付</dt><dd><a href="https://payservice.alipay.com/intro/index.htm?c=hb" target="_blank"><img src="dress_detail_files/TB1KTHfQFXXXXbnXFXXXXXXXXXX-16-16.png" srcset="//img.alicdn.com/tfs/TB1XeDvQFXXXXc5XXXXXXXXXXXX-32-32.png 2x">蚂蚁花呗</a><a href="https://payservice.alipay.com/intro/index.htm?c=xyk" target="_blank"><img src="dress_detail_files/TB1w6O3QFXXXXX4aXXXXXXXXXXX-16-16.png" srcset="//img.alicdn.com/tfs/TB1c7HAQFXXXXakXXXXXXXXXXXX-32-32.png 2x">信用卡支付</a><a href="https://jf.alipay.com/" target="_blank"><img src="dress_detail_files/TB1dvGWQFXXXXcFaXXXXXXXXXXX-16-16.png" srcset="//img.alicdn.com/tfs/TB1FdDlQFXXXXa5XpXXXXXXXXXX-32-32.png 2x">集分宝</a></dd></dl></div></div></div></div>'
		$("#mytitle").html(title)
		$("#sitem").html(str1+str)
	})
}

function getQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}


function isLogin(){
	
	$(document).ready(function(){
		
		$.ajax({
	        type : 'post',
	        url  : '/tbpoject/customerControler/getCustomerJson',
	        contentType : 'application/json; charset = utf-8',
	        data : '',
	        dataType : 'json',
	        success : function(data){
	            if(data != null){
	                $(".login-info-nick").text(data.name);
	            	
	            }else{
	            	//导航栏展示
	            }
	        },
	        error : function(){
	            alert("请检查网络或联系管理员")
	        }
	    });
	});
	
}


function carinvalid(){
	
$(document).ready(function(){
		
		$.ajax({
	        type : 'post',
	        url  : '/tbpoject/customerControler/getCustomerJson',
	        contentType : 'application/json; charset = utf-8',
	        data : '',
	        dataType : 'json',
	        success : function(data){
	            if(data != null){
	            	window.location="myshoppingcar.html?uid="+data.id
	            }else{
	            	
	            	alert("请先登录！")
	            	
	            }
	        },
	        error : function(){
	            alert("请检查网络或联系管理员")
	        }
	    });
	});
	
	
}

function collect(){
	var i=parseInt(getQueryString("id"))
	
	$.post("/tbpoject/good/insertgoodsbyid",{"id":i},function(data){
		//alert("11")
		//alert(data)
		alert("收藏成功！")
	})
	
}
