var item;
var a=setTimeout(function(){
	clearTimeout(a)
	
	$('.span').each(function(i){
		var span=$('.span').eq(i).text();
		
		function timer(time){
			$('.span').eq(i).text(time);
		}
		item=setInterval(function(){ 
			clearInterval(item)
			var sections=Math.floor(span--),
				mins=Math.floor(sections/60),
				hour=Math.floor(mins/60),
				day=Math.floor(hour/24),
				input;
				mins=(mins%60) > 9 ? mins%60 : '0' +mins%60;
				sections=(sections%60) > 9 ? sections%60 : '0' +sections%60;
				hour=hour%24;
				input =hour+":"+mins +":"+sections;
				timer(input)
		},1000);
	});
},1000/60)
$('.uls>li').click(function(){
	clearInterval(item)
})

