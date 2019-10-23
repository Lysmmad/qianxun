$(function(){
	$(window).scroll(function(event) {
		var h = $(window).scrollTop();
		if(h>100&&h<3000) {
			$(".slidet").css('display', 'block');
			$(".slidec").css('display', 'block');
			$(".slideb").css('display', 'block');
		}else if(h>3000&&h<5000){
			$(".slidet").css('display', 'block');
			$(".slidec").css('display', 'none');
			$(".slideb").css('display', 'block');
		}else if(h>5000&&h<6000){
			$(".slidet").css('display', 'block');
			$(".slidec").css('display', 'block');
			$(".slideb").css('display', 'block');
		}else if(h>6000){
			$(".slidet").css('display', 'block');
			$(".slidec").css('display', 'block');
			$(".slideb").css('display', 'none');
		}else{
			$(".slidet").css('display', 'none');
			$(".slidec").css('display', 'block');
			$(".slideb").css('display', 'block');
		}
	});
	$(".slidet").click(function(event) {
		$("html,body").animate({"scrollTop":0},500);
	});
	$(".slidec").click(function(event) {
		$("html,body").animate({"scrollTop":3669},500);
	});
	$(".slideb").click(function(event) {
		$("html,body").animate({"scrollTop":7338},500);
	});
})
