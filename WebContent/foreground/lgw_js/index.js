var webName = "/tbpoject";
var webFore = webName + "/foreground";
var loginPath = webFore + "/login.html";//登录
var indexPath = webFore + "/index.html";//首页
var registerPath = webFore + "/register.html";//注册页面
var accManage = webFore + "/zhanghao.html";//我的淘宝
var shopPath = webFore + "/myshoppingcar.html";//购物车
var goodsCollection = webFore + "/collection.html";//收藏宝贝
var storeCollection = webFore + "/storecollection.html";//收藏店铺

$(document).ready(function(){
	accountAJAX();
	searchAJAX();
	hotspotAJAX();
	imageAJXA()
	
});

//账户异步请求
function accountAJAX(){
	$.ajax({
        type : 'post',
        url  : '/tbpoject/customerControler/getCustomerJson',
        contentType : 'application/json; charset = utf-8',
        data : '',
        dataType : 'json',
        success : function(data){
            if(data != null){
            	//导航栏展示
            	$("#arrow1 > a").attr("href", accManage);
            	$("#arrow3 > a").attr("href", accManage);
            	$("#arrow4 > a").attr("href", shopPath);
            	$("#arrow5 > a").attr("href", goodsCollection);
            		$("#collectionRen").bind("click",function(){
            			location.href=goodsCollection;
            		})
            		$("#collectionStore").bind("click",function(){
            			location.href=storeCollection;
            		})
            	
            	//用户信息展示
                $(".inner-user > h3").text("Hi " + data.name);
            	$("#loginBox1 > a").remove();
            	$("#loginBox1").html("<a class='login-btn free' href='" + accManage + "'>我的淘宝</a>&nbsp; " +
            			"<a class='login-btn free' href='/tbpoject/customerControler/quitCustomer'>退出</a>");
            }else{
            	//导航栏展示
            	$("#arrow1").html("<a href = '"+loginPath+"' >请先登录</a>");
            	$("#nav-box1").remove();	
            	$("#arrow2").html("<a href = '"+registerPath+"' >免费注册</a>");
            	$("#nav-box2").remove();
            	$("#arrow3").remove();
            	$("#nav-box3").remove();
            	$("#arrow4").remove();
            	$("#nav-box4").remove();
            	$("#arrow5").remove();
            	$("#nav-box5").remove();
            	
            	//个人信息展示
                $(".inner-user > h3").text("Hi 你好!");
            }
        },
        error : function(){
            alert("请检查网络或联系管理员")
        }
    });
}



//搜索异步请求
function searchAJAX(){
	$(".search-but").click(function(){
		$.post(
				'/tbpoject/goodsControler/setSearch',
				{"searchValue" : $(".search-in").val() },
				function(data,status){
					window.location="/tbpoject/foreground/searchGoods.html";
				}
	)});	
}

//热点异步布局
function hotspotAJAX(){
	$.ajax({
        type : 'post',
        url  : '/tbpoject/hotSpotlgwControler/getAllHotSpot',
        contentType : 'application/json; charset = utf-8',
        data : '',
        dataType : 'json',
        success : function(data){
        	var txt = '';
            for(var i = 0; i < data.length; i++){
                data[i].mian
                txt += '<div class="sub-nav-cell" id = "hotSpot' + data[i].id + '">';
                txt += '<h3 class="green-sp">';
                txt += data[i].main;
                txt += '</h3>';
                txt += '<ul class="sub-nav-box" id = "hotSpotUl' + data[i].id + '">';
                for(var j=1; j < 17; j++){
                	txt += '<li><a href="#">';
                	txt += data[i]['message'+j];
                	txt += '</a></li>';
                }
                txt += '</ul></div>';
            }
            $("#hotSpotControler").append(txt);
            
        },
        error : function(){
            alert("请检查网络或联系管理员")
        }
    });
}

//轮转异步布局
function imageAJXA(){
	$.ajax({
        type : 'post',
        url  : '/tbpoject/picturelgwControler/getPictures',
        contentType : 'application/json; charset = utf-8',
        data : '',
        dataType : 'json',
        success : function(data){
        	var txt = '';
        	for(var i = 0; i < data.length; i++){
        		if(data[i].isNav != '1') {
        			continue;
        		}
        		txt += '<li><a href = ""><img src="img/' + data[i].url + '"></a><li>';

        	}
        	$(".imgBox").html(txt);
        	$(".imgBox1").html(txt);
        },
        error : function(){
            alert("请检查网络或联系管理员")
        }
    });
}







