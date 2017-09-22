
$(document).ready(function(){
	$("#J_BtnInfoForm").click(function(){
		var check;
	    check = /^[a-zA-Z0-9_-]{5,25}$/; //user
		if(!check.test($("#J_Nick").val())){
			return ;
		}
	    check = /^[a-zA-Z0-9_-]\w{6,20}$/; //pwd
		if(!check.test($("#J_Password").val())){
			return ;
		}
	    check = /^[a-zA-Z0-9_-]\w{6,20}$/; //pwd
		if(!check.test($("#J_RePassword").val())){
			return ;
		}

		$.post(
			'/tbpoject/customerControler/registerCustomer',
			{
				"name" : $("#J_Nick").val(),
				"pwd1" : $("#J_Password").val(),
				"pwd2" : $("#J_RePassword").val()
			},
	        function(data,status){
	        	if(data == "-1"){
	        		
	        	}else if(data == "0"){
	        		$(".active > .tsl").text("注册失败");
	        		$(".form-list").html("已存在相同的会员名，<a href = '/tbpoject/foreground/register.html'>请重新注册</a>");
	        	}else{
	        		$("#formId").remove();
	        		$(".msg-type-error").remove();
	        		$(".iconfont").remove();
	        		$(".active > .tsl").text("注册成功");
	        		var i = 3;
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
	        });
	});
});