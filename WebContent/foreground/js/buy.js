/**
 * 
 */
$(function(){
	//alert("asa")
	showAddresses()
	isLogin()
})
function showGoods(){
	
	
	
	
}


function showAddresses(){
	var gid=getQueryString("id")
	var uid=getQueryString("uid")
	//alert(gid)
	//alert(uid)
	var a=hello(gid)
	//alert(a)
	$.post("/tbpoject/address/get",{"gid":gid,"uid":uid},function(data){
		var addr=$.parseJSON(data)
		//alert(data)
		
		//alert(addr)
		var msg="";
		msg+='<h3 data-reactid=".0.$confirmOrder_1.$address_1.0.0">'
		msg+='<span data-reactid=".0.$confirmOrder_1.$address_1.0.0.0">确认收货地址</span><span'
		msg+='class="manage-address"'
		msg+='data-reactid=".0.$confirmOrder_1.$address_1.0.0.1"><a'
		msg+='href="https://member1.taobao.com/member/fresh/deliver_address.htm"'
		msg+='target="_blank" title=""'
		msg+='data-reactid=".0.$confirmOrder_1.$address_1.0.0.1.0"></a></span>'
		msg+='</h3>'
		msg+='<ul class="address-list"data-reactid=".0.$confirmOrder_1.$address_1.0.1">'
		
		//alert("length"+addr.length)
		for(var i=0;i<addr.length;i++){
			if(addr[i].isdefault==1){
				
				msg += '<li class="address-wrap default selected"'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0"><div'
				msg += 'class="addressBox"'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0">'
				msg += '<div'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.0">'
				msg += '<i class="marker"'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.0.0"></i><span'
				msg += ' class="marker-tip"'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.0.1">寄送至</span>'
				msg += '</div>'
				msg += '<label class="addressInfo" for="addressInput-7432379109"'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3"><input'
				msg += ' name="address" id="addressInput-7432379109"'
				msg += 'checked="checked" data-id="7432379109"'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.0"'
				msg += 'type="radio"><span class="user-address"'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.1"><span'
				msg += ' data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.1.0">'+addr[i].aname+'</span><span'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.1.1"></span>（<span'
				msg += ' data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.1.2">'+addr[i].uname+'</span><span'
				msg += ' data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.1.3">'
				msg += '	收）</span><em'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.1.4">'+addr[i].number+'</em></span>'
				msg+='</label>'
				msg += '</div></li>'
		

			} else {

				msg += '<li class="address-wrap "data-reactid=".0.$confirmOrder_1.$address_1.0.1.$'
						+ i + '"><div'
				msg += 'class="addressBox"'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$'
						+ i + '.0">'

				msg += '<label class="addressInfo" for="addressInput-7432119726"'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3"><input name="address" id="addressInput-7432119726" '
				msg += 'data-id="7432119726"'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.0"'

				msg += ' type="radio">'

				msg += '<span'
				msg += '	data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.1.0">'
						+ addr[i].aname + '</span><span'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.1.1">（</span><span'
				msg += ' data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.1.2">'
						+ addr[i].uname + '</span><span'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.1.3">'
				msg += '	收）</span><em'
				msg += 'data-reactid=".0.$confirmOrder_1.$address_1.0.1.$0.0.3.1.4">'
						+ addr[i].number + '</em></span>'
				msg+='</label>'
				msg += '</div></li>'

			}

		}

		
		
		
		msg+='</ul>'
		msg+='<div class="btn-bar"'
		msg+='data-reactid=".0.$confirmOrder_1.$address_1.0.3">'
		msg+='<a class="newAddrBtn" href="javascript:void(0);"'
		msg+='data-reactid=".0.$confirmOrder_1.$address_1.0.3.0">使用新地址</a>'
		msg+='</div>'
		//alert(msg)
		$(".order-address-wrap").html(msg)
	})
}
function hello(i){
	var a=$.post("/tbpoject/goods/getById",{},function(data){
		//alert("dsdsd")
		//alert(data)
		var goods=$.parseJSON(data)
		
	})
	return a
}
function getQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}



function carinvalid(){
	//alert(gid)
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
	            	//window.location="login.html"
	            	
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
	            	//alert("s")
	            	//alert(data.id)
	                $(".site-nav-login-info-nick ").text(data.name);
	            	
	            }else{
	            	//导航栏展示
	            	//alert("f")
	            }
	        },
	        error : function(){
	            alert("请检查网络或联系管理员")
	        }
	    });
	});
	
}
