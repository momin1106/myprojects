/**
 * 
 */
$(function() {
	showcar()
	isLogin()
})
function showcar() {
	var uid = parseInt(getQueryString("uid"))
	$
			.post(
					"/tbpoject/car/getByUid",
					{
						"uid" : uid
					},
					function(data) {
						var car = $.parseJSON(data)

						var msg = '<script type="text/javascript" src="js/carts.js"></script>'
						var m = [ 'a', 'b', 'c' ]
						var shopname = [ "忆布衣", "小明家的", "用心良苦", "雨一直下", "哎呀哎呀" ]

						for (var i = 0; i < car.length; i++) {
							//alert(m[i])
							for (var j = 0; j < car[i].goods.length; j++) {
								var good = car[i].goods[j]

								msg += '<div class="cartBox">'
								msg += ' <div class="shop_info">'
								msg += '<div class="all_check">'

								msg += '<input type="checkbox" id="shop_'
										+ m[i] + '" class="shopChoice">'
								msg += '<label for="shop_' + m[i]
										+ '" class="shop"></label>'
								msg += ' </div>'
								msg += '<div class="shop_name">'
								msg += ' 店铺：<a href="javascript:;">'
										+ shopname[i] + '</a>'
								msg += '</div>'
								msg += '</div>'
								msg += '<div class="order_content">'
								msg += '<ul class="order_lists">'
								msg += '<li class="list_chk">'
								msg += '<input type="checkbox" id="checkbox_'
										+ m[i] + '" class="son_check">'
								msg += '<label for="checkbox_' + m[i]
										+ '"></label>'
								msg += '</li>'
								msg += '<li class="list_con">'
								msg += '<div class="list_img"><a href="javascript:;"><img src="./images/1.png" alt=""></a></div>'
								msg += '<div class="list_text"><a href="javascript:;">'
										+ good.name + '</a></div>'
								msg += '</li>'
								msg += '<li class="list_info">'
								msg += '<p>颜色分类：红</p>'
								msg += '<p>尺码：均码</p>'
								msg += '</li>'
								msg += '<li class="list_price">'
								msg += '<p class="price">￥' + good.price
										+ '</p>'
								msg += '</li>'
								msg += '<li class="list_amount">'
								msg += '<div class="amount_box">'
								msg += '<a href="javascript:;" class="reduce reSty">-</a>'
								msg += '<input type="text" value="'
										+ car[i].count + '" class="sum">'
								msg += '<a href="javascript:;" class="plus">+</a>'
								msg += '</div>'
								msg += '</li>'
								msg += '<li class="list_sum">'
								msg += '<p class="sum_price">￥' + good.price
										* +car[i].count + '</p>'
								msg += '</li>'
								msg += '<li class="list_op">'
								msg += '<p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>'
								msg += '</li>'
								msg += '</ul>'
								msg += '</div>'
								msg += '</div>'

							}

						}

						$(".J_OrderList").html(msg)

					})

}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

function isLogin() {

	$(document).ready(function() {

		$.ajax({
			type : 'post',
			url : '/tbpoject/customerControler/getCustomerJson',
			contentType : 'application/json; charset = utf-8',
			data : '',
			dataType : 'json',
			success : function(data) {
				if (data != null) {
					$(".site-nav-login-info-nick ").text(data.name);

				} else {
					//导航栏展示
				}
			},
			error : function() {
				alert("请检查网络或联系管理员")
			}
		});
	});

}
