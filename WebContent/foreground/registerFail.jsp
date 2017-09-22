<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>body{ text-align:center} </style>
</head>
<body onload="shownum()" >
    <a id = "time" href = "/tbpoject/foreground/index.html">请重新注册</a>
    <meta http-equiv="refresh" content="3;url=/tbpoject/foreground/register.html"> 
</body>
</html>

<script type="text/javascript"> 
var i = 4; 
function shownum(){ 
    i=i-1; 
    document.getElementById("time").innerHTML="注册失败," + i + "秒后请重新注册...";
    setTimeout('shownum()',1000); 
} 
</script>