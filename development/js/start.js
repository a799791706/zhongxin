$(function(){
	//
	var oWeixin=$('.weixin').eq(0),//第一个按钮
		oApp=$('.app'),
		oWeixin2=$('.weixin').eq(1),
		oCode=$('.mLayerQrcodew'); //二维码
	//
	oWeixin.mouseover(function(){
		oCode.eq(0).show();
	})
	oWeixin.mouseout(function(){
		oCode.eq(0).hide();
	})
	oApp.mouseover(function(){
		oCode.eq(1).show();
	})
	oApp.mouseout(function(){
		oCode.eq(1).hide();
	})
	oWeixin2.mouseover(function(){
		oCode.eq(2).show();
	})
	oWeixin2.mouseout(function(){
		oCode.eq(2).hide();
	})
function getTop(obj){
	var l=0;
	var t=0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {left:l,top:t};
}
window.onload=window.onscroll=function(){
		var oImg=document.getElementsByTagName('img');
		var oTop=document.documentElement.scrollTop || document.body.scrollTop;
		var oH=document.documentElement.clientHeight;
		var oLi=document.getElementById('lia');
		//图片懒加载
		for(var i=0;i<oImg.length;i++){
			if(oH+oTop > getTop(oImg[i]).top){
				oImg[i].src=oImg[i].getAttribute('_src');
			}
		}
		
		//返回顶部
		if(oTop>300){
			oLi.style.display="block";
		}else{
			oLi.style.display="none";
		}
		oLi.onclick=function(){
			clearInterval(a)
			var n=Math.floor(1000/30);
			var start=document.documentElement.scrollTop || document.body.scrollTop;
			var num=0;
			var dis=0-start;
			var a=setInterval(function(){ 
				num++;
				var s=1-num/n;
				var w=start+(1-Math.pow(s,3)) * dis;
				document.documentElement.scrollTop=document.body.scrollTop=w;
				if(num==n){
					clearInterval(a)
				}
			},30)
		}
	}
})
