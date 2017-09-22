
$(document).ready(function(){
	//alert("Ok");
	$.ajax({
        type : 'post',
        url  : '/tbpoject/commoditySortControler/getAllCommoditySortJson',
        contentType : 'application/json; charset = utf-8',
        data : '',
        dataType : 'json',
        success : function(data){
        	//alert(data[0].id)
        	var txt = "";
        	for(var i = 0; i < data.length; i++){
        		if(data[i].pid == 0){
            		txt += '<li class="s_' + data[i].id + '"><h3>' + data[i].name + '<span class="fa fa-angle-right fa-loc"></span></h3></li>';
            		
        		}
        	}
        	//$(".side-li").html(txt);
        	//alert(txt)
        	for(var i = 0; i < data.length; i++){
        		if(data[i].pid > 0 && data[i].pid < 17){
        			$("#hiden-" + data[i].pid + " > .hidden-title").remove(".hidden-title");
                	$("#hiden-" + data[i].pid + " > .sub-nav-right").empty();
                	$("#hiden-" + data[i].pid + " > .sub-nav-left").remove(".sub-nav-left");
        		}
        	}
        	for(var i = 0; i < data.length; i++){
        		if(data[i].pid > 0 && data[i].pid < 17){
        			txt = "";
        			txt += '<div class="cell-box" id = "liid_' + data[i].id + '"><h1>' + data[i].name + '</h1><div class="a-box">' 
        				+ '</div></div>';
            		$("#hiden-" + data[i].pid + " > .sub-nav-right").append(txt);
            		txt = "";
        		}
        	}
        	for(var i = 0; i < data.length; i++){
        		if(data[i].pid > 16){
        			txt = "";
        			txt += '<a href="' + data[i].address + '">' + data[i].name + '</a><span>&emsp;</span>';
        			$("#liid_" + data[i].pid + " > .a-box").append(txt);
        		}
        	}
        },
        error : function(){
            alert("请检查网络或联系管理员")
        }
    });
});