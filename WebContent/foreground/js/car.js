/**
 * 
 */
$(function(){
	isLogin()
	var gid=parseInt(getQueryString("gid"))
	
	var count=parseInt(getQueryString("count"))
	var carcount=parseInt(getQueryString("carcount"))
	
	$.post("/tbpoject/goods/getById",{"id":gid},function(data){
		
		var obj=$.parseJSON(data)
		
		var str='<div class="item-info J_ItemInfo"><div class="item-title"><a href="dress_detail?id='+obj.id+'" target="_blank">'+obj.name+'</a></div><div class="shop-info J_ShopInfo"><a href="https://store.taobao.com/shop/view_shop.htm?shop_id=106609707" target="_blank">忆布衣</a><span class="ww-light ww-small" data-items="546629500525" data-icon="small" data-nick="1138618634wang" data-display="inline"><a href="https://amos.alicdn.com/getcid.aw?v=3&amp;groupid=0&amp;s=1&amp;charset=utf-8&amp;uid=1138618634wang&amp;site=cntaobao&amp;groupid=0&amp;s=1&amp;fromid=cntaobao%D2%B6%CE%AA%95F" target="_blank" class="ww-inline ww-online" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。"><span>旺旺在线</span></a></span></div><div class="icon-info J_IconInfo"></div><div class="sku-info J_SkuInfo">已添加商品：<p>颜色分类:红色</p><p>尺码:均码</p></div><div class="quantity-info">数量：'+count+'</div><div class="item-op"><a href="https://item.taobao.com/item.htm?id=546629500525" class="op-add J_CartPluginTrigger">继续添加其它属性：</a></div><div class="item-pic cart-pic s200"><a href="https://item.taobao.com/item.htm?id=546629500525" target="_blank"><img class="J_CurItemPic" src="addCar_files/TB28nAnhxXlpuFjSsphXXbJOXXa_1827127367_003.jpg" alt=""></a></div><div class="item-sku-select J_ItemSkuSelect item-sku-status-fold" data-spm="1998474903" style="height: 112px;"><div class="tbc-add2cart J_TbcAdd2Cart"><dl class="tbc-sku-line tbc-sku-prop clearfix J_Prop"><dt>尺　　码</dt><dd><ul class="clearfix"><li data-prop="尺　　码" data-pvid="20509:28383" class="prop-block J_PropBlock selected" title="均码"><a href="javascript:%20void(0)"><span>均码</span></a><i></i></li></ul></dd></dl><dl class="tbc-sku-line tbc-sku-prop clearfix J_Prop"><dt>颜色分类</dt><dd><ul class="clearfix"><li data-prop="颜色分类" data-pvid="1627207:28320" class="prop-block J_PropBlock img-mode" title="白色"><a href="javascript:%20void(0)" style="background:url(//img.alicdn.com/bao/uploaded/TB2EN.Phr8kpuFjy0FcXXaUhpXa_!!1827127367.jpg_30x30.jpg) 50% 50% no-repeat;"><span>白色</span></a><i></i></li><li data-prop="颜色分类" data-pvid="1627207:384506443" class="prop-block J_PropBlock img-mode" title="白色（无袖）"><a href="javascript:%20void(0)" style="background:url(//img.alicdn.com/bao/uploaded/TB218U5XeYCK1JjSZFmXXbCyVXa_!!1827127367.jpg_30x30.jpg) 50% 50% no-repeat;"><span>白色（无袖）</span></a><i></i></li><li data-prop="颜色分类" data-pvid="1627207:520120346" class="prop-block J_PropBlock img-mode" title="红色（无袖）"><a href="javascript:%20void(0)" style="background:url(//img.alicdn.com/bao/uploaded/TB2bRU5XeYCK1JjSZFmXXbCyVXa_!!1827127367.jpg_30x30.jpg) 50% 50% no-repeat;"><span>红色（无袖）</span></a><i></i></li><li data-prop="颜色分类" data-pvid="1627207:28326" class="prop-block J_PropBlock img-mode" title="红色"><a href="javascript:%20void(0)" style="background:url(//img.alicdn.com/bao/uploaded/TB28nAnhxXlpuFjSsphXXbJOXXa_!!1827127367.jpg_30x30.jpg) 50% 50% no-repeat;"><span>红色</span></a><i></i></li><li data-prop="颜色分类" data-pvid="1627207:28341" class="prop-block J_PropBlock img-mode" title="黑色"><a href="javascript:%20void(0)" style="background:url(//img.alicdn.com/bao/uploaded/TB2dbOFXXgkyKJjSspiXXcwBpXa_!!1827127367.jpg_30x30.jpg) 50% 50% no-repeat;"><span>黑色</span></a><i></i></li></ul></dd></dl><dl class="tbc-sku-line tbc-sku-amount clearfix"><dt>数量</dt><dd class="clearfix"><div class="amount-wp"><a href="#" class="J_AmountOp J_Minus tbc-amount-minus no-minus"><span class="tbc-cart-iconfont"></span><span class="origin">-</span></a><input value="1" class="J_AmountInput amount-input" type="text"><a href="#" class="J_AmountOp plus J_Plus  tbc-amount-plus"><span class="tbc-cart-iconfont"></span><span class="origin">+</span></a></div><span class="unit">件</span><span class="stock">（库存<em class="J_Stock" data-defstock="66">66</em>件）</span></dd></dl><dl class="tbc-sku-line tbc-sku-pic"><dt>宝贝图片</dt><dd><div class="tb-pic item-pic"><div class="wrapper"><img src="addCar_files/TB28nAnhxXlpuFjSsphXXbJOXXa_1827127367_002.jpg" class="J_ItemPic"></div></div></dd></dl><dl class="tbc-sku-line tbc-sku-operate"><dd><a href="javascript:void(0);" class="add-cart J_AddCart" data-spm-click="gostr=/tbcart;locaid=d4920383"><span class="icon-cart"></span><span>加入购物车</span></a><div class="J_Add2CartMsg add-cart-msg"></div></dd></dl></div><div class="item-sku-mask J_SkuMask" style="width: 340px; height: 112px;"><div class="item-sku-expand J_ExpandSku"><em>展开全部属性</em><span></span></div></div><a href="javascript:void(0);" class="tbc-add2cart-close J_TbcAdd2CartClose"><span class="origin">关闭</span><span class="icon-close"></span></a></div></div><div id="J_ResultSummary" class="result-summary"><div class="result-hint"><i class="cart-icon icon-success"></i>已成功加入购物车</div><div class="price-summary">小计：<span class="price">&#165;<em>'+obj.price*count+'</em></span></div><div class="cart-summary">购物车共有<em>'+carcount+'件</em>商品</div><div class="result-op"><a href="dress_detail.html?id='+obj.id+'" class="op-return"><i class="cart-icon icon-left"></i>返回商品详情</a><a href="myshoppingcar.html?uid='+1+'" class="op-cart">去购物车结算</a></div></div>'
		$("#J_ResultMain").html(str)
	})
	
	//alert("s")
})
function getCount(){
$.post("/tbpoject/car/getCount",{},function(data){
		
		var c=parseInt(data)
		alert(c)
	})
	
}

function getQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
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
	                $(".site-nav-login-info-nick ").text(data.name);
	            	
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

