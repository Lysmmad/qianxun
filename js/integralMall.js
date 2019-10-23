$(function(){
	// 头部导航栏
	$(window).scroll(function(event) {
		var h = $(window).scrollTop();
		if(h>400) {
			$("nav").addClass('posit');
		}else{
			$("nav").removeClass('posit');
		}
	});




	// 轮播图
	var n = 0;
	var i;
	var timer;
	go();
	$(".banner ul").hover(function(){
		clearInterval(timer);
	},function(){
		go();
	});
	var w;
	var v;
	$(".banL").click(function(){
		clearInterval(timer);
		w=parseInt($(".banner ul").css('margin-left'));
		v = w-860;
		if(v<-2580){
			$(".banner ul").css('margin-left', "0px");
		}else{
			$(".banner ul").css('margin-left', v+"px");
		}
	})
	$(".banR").click(function(){
		clearInterval(timer);
		w=parseInt($(".banner ul").css('margin-left'));
		v = w+860;
		if(v>0){
			$(".banner ul").css('margin-left', "-2580px");
		}else{
			$(".banner ul").css('margin-left', v+"px");
		}
	})
	function go(){
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			i=n*860;
			if (i>2580) {
				n=0;
				$(".banner ul").css('margin-left', "0px");
			}else{	
			$(".banner ul").css('margin-left', -i+"px");
			}
		},1500)
	}

	$(".bser ul li").click(function(event) {
		$(this).addClass('current').siblings('li').removeClass("current");
	});
})
