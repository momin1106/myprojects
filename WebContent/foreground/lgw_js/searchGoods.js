

$(function(){
	
	$("#searchId").click(function(){
		$.post(
				'/tbpoject/goodsControler/setSearch',
				{"searchValue" : $("#q").val() },
				function(data,status){
					window.location="/tbpoject/foreground/searchGoods.html";
				}
	)});
	$.ajax({
        type : 'post',
        url  : '/tbpoject/customerControler/getCustomerJson',
        contentType : 'application/json; charset = utf-8',
        data : '',
        dataType : 'json',
        success : function(data){
            if(data != null){
            	$(".site-nav-login-info-nick").text(data.name);
            }else{
            	$(".site-nav-login-info-nick").text("请登录");
            }
        },
        error : function(){
            alert("请检查网络或联系管理员")
        }
    });
	$.post("/tbpoject/goodsControler/getGoodsAllByName",{},function(data){
		var obj=$.parseJSON(data)
		//alert(obj.length)
		var str="<a></a>"
		for(var i=0;i<obj.length;i++){
			var msg='<div class="item J_MouserOnverReq  item-sku J_ItemListSKUItem" data-category="auctions" data-index="0"><div class="pic-box J_MouseEneterLeave J_PicBox"><div class="pic-box-inner"><div class="pic"><a id="J_Itemlist_PLink_539674200244" class="pic-link J_ClickStat J_ItemPicA" data-nid="539674200244" data-recommend-nav="" href="dress_detail.html?id='+obj[i].id+'" data-href="dress_detail.html?id='+obj[i].id+'" target="_blank" trace="lsrp_auction" traceidx="0" trace-index="0" trace-nid="539674200244" trace-num="60" trace-price="120.00" trace-recommend-nav="" trace-risk="" trace-pid="-1523173914"><img id="J_Itemlist_Pic_539674200244" class="J_ItemPic img" src="dress_files/TB2R.jpg" data-src="//g-search3.alicdn.com/img/bao/uploaded/i4/i1/90573905/TB2R.0gXYQc61BjSZFrXXcnOpXa_!!90573905.jpg" alt="'+obj[i].name+'"></a></div><div class="similars"><a class="btn disabled" target="_blank"><s class="shim"></s><s class="bar"></s><span class="text">找同款</span></a><a class="btn " target="_blank" href="https://s.taobao.com/list?type=similar&amp;app=i2i&amp;rec_type=1&amp;uniqpid=-1523173914&amp;nid=539674200244"><s class="shim"></s><span class="text">找相似</span></a></div><div class="report"><a href="https://jubao.taobao.com/index.htm?itemId=539674200244" target="_blank" title="举报该宝贝"><span class="icon-btn-report"></span></a></div></div></div><div class="row-0 J_SKURow ">						    <div class="sku-panel"><div class="sku-layer" id="J_Itemlist_SKUSlide_539674200244"><div class="sku-item J_MouseEneterLeave J_SKUItem " data-src="//g-search3.alicdn.com/img/bao/uploaded/i4/i1/90573905/TB2R.0gXYQc61BjSZFrXXcnOpXa_!!90573905.jpg" data-nid="539674200244" data-index="0" data-href="//item.taobao.com/item.htm?id=539674200244&amp;ns=1&amp;abbucket=18#detail&amp;">						          <a target="_blank" href="https://item.taobao.com/item.htm?id=539674200244&amp;ns=1&amp;abbucket=18#detail&amp;" trace="lsrp_auction" traceidx="0" trace-pid="-1523173914" class="pic-link">		            <img class="img" src="dress_files/TB2R_002.jpg" alt="sku"></a></div></div></div></div><div class="ctx-box J_MouseEneterLeave J_IconMoreNew"><div class="row row-1 g-clearfix"><div class="price g_price g_price-highlight"><span>¥</span><strong>'+obj[i].price+'</strong></div><div class="deal-cnt">'+4*obj[i].id人付款+'</div></div><div class="row row-2 title"><a id="J_Itemlist_TLink_539674200244" class="J_ClickStat" data-nid="539674200244" href="dress_detail.html?id='+obj[i].id+'" target="_blank" trace="lsrp_auction" traceidx="0" trace-index="0" trace-nid="539674200244" trace-num="60" trace-price="120.00" trace-pid="-1523173914">'+obj[i].name+'</a></div><div class="row row-3 g-clearfix"><div class="shop"><a class="shopname J_MouseEneterLeave J_ShopInfo" data-userid="90573905" data-nid="539674200244" href="https://store.taobao.com/shop/view_shop.htm?user_number_id=90573905" target="_blank"><span class="dsrs"><span class="dsr morethan"></span><span class="dsr morethan"></span><span class="dsr morethan"></span></span><span>圆圆吖头</span></a></div><div class="location">湖南 株洲</div></div><div class="row row-4 g-clearfix"><div class="feature-icons icon-has-more" id="J_Itemlist_Icons_539674200244"<ul class="icons"></ul></div><div class="wangwang"><span class="ww-light ww-small" data-nick="圆圆吖头" data-display="inline" data-item="539674200244" data-icon="small" data-encode="true"><a href="https://amos.alicdn.com/getcid.aw?v=3&amp;groupid=0&amp;s=1&amp;charset=utf-8&amp;uid=%E5%9C%86%E5%9C%86%E5%90%96%E5%A4%B4&amp;site=cntaobao&amp;groupid=0&amp;s=1&amp;fromid=cntaobao%E5%8F%B6%E4%B8%BA%E6%97%BB" target="_blank" class="ww-inline ww-online" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。"><span>旺旺在线</span></a></span></div></div></div></div></div><!-- 结束 --><div class="items" id="J_itemlistCont">'
			str=str+msg
		}
		//alert("str"+str)
		$("#gitems").html(str)
			
	});
})