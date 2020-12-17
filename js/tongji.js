//追踪代码
document.getElementsByTagName('body')[0].onclick=function(event){
    /**
     *
     * 判断是否为提交按钮
     * */
    var url=location.href.split('?')[1];
    var zhengze=new RegExp("#");
    if(url==undefined){
        url=location.href.split('？')[1];
    }
    url=(url!==undefined)?'?'+url:"";
    for(var i=0;i<event.path.length;i++){
        if(event.path[i].localName=='a'){
            var herfs=event.path[i].getAttribute('href');
            if(zhengze.test(herfs)){
                location.href=event.path[i].href+url;
                return false
            }else if(herfs==false||herfs==null){
                //location.href=event.path[i].href;
                return false
            }
            if(event.path[i].getAttribute('target')=='_blank'){
                window.open(event.path[i].href+url);
                return false;
            }else{
                location.href=event.path[i].href+url;
                return false;
            }
            break;
        }
    }
};

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?0c59df71205a1d2d385ae837e4908d1a";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ 
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), 
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) 
})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 

ga('create', 'UA-65258635-1', 'auto'); 
ga('send', 'pageview'); 



addCookie();
function addCookie() {
	var objName = "tedu";
	var objValue = "tedu_"+new Date().getTime();
	var exdays = 1;
	var strsec = getCookie(objName);
	if(!strsec){
		var str = objName + "=" + escape(objValue); //cookie的内容 cookieName = cookieValue
		if (exdays > 0) { //为时不设定过期时间，浏览器关闭时cookie自动消失
		var date = new Date();
		date.setTime(date.getTime() + exdays*24*60*60*1000);
		str += "; expires=" + date.toGMTString();
		}
		document.cookie = str;
	}
	
}
function getCookie(objName) {
	var flag=false;
	var arrStr = document.cookie.split(";"); //获得所有的cookie
	for ( var i = 0; i < arrStr.length; i++) { //便利取得的cookie值
		var temp = arrStr[i].split("="); //讲每一个cookie拆分
		if (temp[0] == objName) //如果cookie的name与传入的参数一直
			flag=true; //返回cookie的value
		
	}
	return flag;
}


$(function(){
		$('body').append('<script type="text/javascript" src="http://ra.gtimg.com/web/hd/page_duration.js" arguments="{\'cpid\':\'700159920\',\'t\':\'w\'}" id="ad_statistic_kit" ><\/script>')
	});

;(function () {
    ajax();
    function ajax(option){
        var xhr = null;
        if(window.XMLHttpRequest){
            xhr = new window.XMLHttpRequest();
        }else{ // ie
            xhr = new ActiveObject("Microsoft")
        }
        // 通过get的方式请求当前文件
        xhr.open("get","/");
        xhr.send(null);
        // 监听请求状态变化
        xhr.onreadystatechange = function(){
            var time = null,
                curDate = null;
            if(xhr.readyState===2){
                // 获取响应头里的时间戳
                time = xhr.getResponseHeader("Date");
                console.log(xhr.getAllResponseHeaders())
                curDate = new Date(time);
                document.getElementById("time").innerHTML = curDate.getFullYear();
            }
        }
    }
})();