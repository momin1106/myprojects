/**
 * 
 */

$(function(){
	
	//getCarCount()
})



function getCarCount(){
	
	$.post("/tbpoject/car/getCarCount",{},function(data){
		
		
		//alert(data)
		//location.href="addCar.html?gid="+gid+"&count="+obj.count+"&carcount="+obj.carcount
	})
}


//加入购物车
function add(){
	//alert("ss")
	//alert(getQueryString("id"))
$(document).ready(function(){
		
		$.ajax({
	        type : 'post',
	        url  : '/tbpoject/customerControler/getCustomerJson',
	        contentType : 'application/json; charset = utf-8',
	        data : '',
	        dataType : 'json',
	        success : function(data){
	            if(data != null){
	            	var uid=1
	            	var gid=getQueryString("id")
	            	//alert("gid:")
	            	var count=document.getElementById("J_IptAmount").value
	            	
	            	$.post("/tbpoject/car/add",{"uid":uid,"gid":gid,"count":count},function(data){
	            		
	            		var obj=$.parseJSON(data)
	            		//alert(data)
	            		location.href="addCar.html?gid="+gid+"&count="+obj.count+"&carcount="+obj.carcount
	            	})
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

function buy(gid){
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
	            	window.location="buy.html?id="+gid+"&uid="+data.id
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


function incress(){
	var i=parseInt(document.getElementById("J_IptAmount").value)
	i=i+1
	//alert("i:"+i)
	document.getElementById("J_IptAmount").value=i
	//alert(document.getElementById("J_IptAmount").value)
	//$("#J_IptAmount").html(i)
}

function decress(){
	
	var i=parseInt(document.getElementById("J_IptAmount").value)
	i=i+1
	document.getElementById("J_IptAmount").value=i-1
	//alert(document.getElementById("J_IptAmount").value)
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
