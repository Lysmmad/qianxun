$(function(){
	//背景音乐
	$(".musiclogo").click(function(event){
		var now = $(this).css("animationPlayState");
		console.log(now);
		if(now=="running"){
			$(".musiclogo").css('animationPlayState', 'paused');
			$("audio")[0].pause();
		}else{
			$(".musiclogo").css('animationPlayState', 'running');
			$("audio")[0].play();
		}
	});
	//侧导航栏
	$("aside ul li").click(function(event) {
		$(this).addClass('addear').siblings('li').removeClass('addear');
		var i = $(this).index();
		$("section").animate({"top":-100*i+"%"},500);
		$("section").children().children('.src').addClass('none');
		$("section").children().eq(i).children('.src').removeClass('none');
	});
	// 鼠标滚动
	var n = 0;
	var timer;
	$(".screen1").children('.src').removeClass('none');
	$(document).mousewheel(function(e,d){
		clearTimeout(timer);
		timer=setTimeout(function(){
			n = n-d;
			if (n>6) {n=6}
			if (n<0) {n=0}
			$("section").children().children('.src').addClass('none');
			$("section").children().eq(n).children('.src').removeClass('none');
			$("section").animate({"top":-100*n+"%"},250);
			$("aside ul li").eq(n).addClass('addear').siblings('li').removeClass('addear');
		},500)
	})
	//screen5的动画效果
	var s = 0;
	var timer5;
	clearInterval(timer5);
	timer5 = setInterval(function(){
		if(s>5){
			s=0;
			$(".Biglogo ul li").eq(s).css('opacity','1').siblings('li').css('opacity', '0');
		}
		$(".Biglogo ul li").eq(s).css('opacity','1').siblings('li').css('opacity', '0');
		s++;
	},1000);

})