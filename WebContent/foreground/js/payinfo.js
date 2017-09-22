/**
 * 
 */
$(function(){
	forward()
	isLogin()
	formorder()
})
function forward(){
	var i = 5;
	setTimeout(function(){
		$(".form-list").text(i+"秒后自动跳转首页");
		i--;
	},0);
	setTimeout(function(){
		$(".form-list").text(i+"秒后自动跳转首页");
		i--;
	},1000);
	setTimeout(function(){
		$(".form-list").text(i+"秒后自动跳转");
		i--;
	},2000);
    setTimeout(function(){
    	window.location="/tbpoject/foreground/index.html";
	},3000);
	
	
}
function formorder(){
	var bid=getQueryString("bid")
	var uid=getQueryString("uid")
	var aid=getQueryString("aid")
	
	
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
	                $(".h").text(data.name);
	            	
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
