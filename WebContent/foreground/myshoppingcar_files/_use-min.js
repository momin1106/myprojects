define("kg/component-adapter/0.1.0/lib/_use",["util"],function(i,n,t){"use strict";var s=window.KISSY,u=i("util");t.exports=function(i,n,t,o){u.isFunction(i)&&(i=i()),s.use(i,function(i,s){u.isFunction(s)&&o(n,s,t)})}});