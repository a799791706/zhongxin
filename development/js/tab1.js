$(function(){
	$("#tab").roundabout({
		minOpacity:0.8,
		minScale:0.8,
		autoplay:true,
		autoplayDuration:5000,
		autoplayPauseOnHover:true,
		btnPrev:$("#next"),
		btnNext:$("#previous")
	});
	
	$('.span').each(function(i){
		var oSp=$('.span').eq(i).attr('date');
		localStorage.setItem("a"+i,oSp);
	});
	$('.span').each(function(i){
		var a;
		var oS=localStorage.getItem("a"+i);
		
		aa(oS,i)
		
	});
	function aa(oS,i){
		setInterval(function(){
			var sections=Math.floor(oS--),
				mins=Math.floor(sections/60),
				hour=Math.floor(mins/60),
				day=Math.floor(hour/24),
				input;
			mins=(mins%60) > 9 ? mins%60 : '0' +mins%60;
			sections=(sections%60) > 9 ? sections%60 : '0' +sections%60;
			hour=hour%24;
			a =hour+":"+mins +":"+sections;
			var oa=localStorage.setItem("a"+i,oS);
			$('.span').eq(i).text(a)
		},1000);
//		console.log(a)
	}
	
})
	

