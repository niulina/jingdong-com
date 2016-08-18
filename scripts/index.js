// 左侧导航栏
$(function(){
	$(".dd-inner").children(".item").hover(function(){
		$(this).addClass("hover").siblings(".item").removeClass("hover");
		var index = $(this).index();
		$(".dorpdown").children(".item-sub").hide();
		$(".dorpdown").children(".item-sub").eq(index).show();
	});
	$(".dd-inner").hover(function(){
		$("#index_menus_sub").show();
	},function(){
		$("#index_menus_sub").hide();
		$(".item").removeClass("hover");
	});
	$("#index_menus_sub").children(".item-sub").hover(function(){
		var index = $(this).index();
		$(".dd-inner").children(".item").eq(index).addClass("hover");
		$("#index_menus_sub").show();
	},function(){
		$("#index_menus_sub").hide();
		$(".dd-inner").children(".item").removeClass("hover");
	});
});
//中心图片轮播
$(function(){
	var i = 0;
	var t = setInterval(move,4000);
	function sliderMainOperate(n){
		$(".slider-main li").eq(n%6).css("z-index","1").animate({opacity:"1"},500)
		.siblings().css("z-index","0").animate({opacity:"0"},500);
		$(".slider-extra li").eq(n%6).addClass("slider-selected").siblings().removeClass("slider-selected");
	}
	function move(){
		i++;
		sliderMainOperate(i);
	}
	$(".slider-extra li").hover(function(){
		var index = $(this).index();
		i = index;
		sliderMainOperate(index);
		clearInterval(t);
	},function(){
		t = setInterval(move,4000);
	});
	$("#focus .slider-panel a,#focus .slider-page a").hover(function(){
		clearInterval(t);
		$(".slider-extra .slider-page").show();
	},function(){
		t = setInterval(move,4000);
		$(".slider-extra .slider-page").hide();
	});
	$(".slider-extra .slider-prev").click(function(){
		i--;
		if(i <0) i=5;
		sliderMainOperate(i);
	});
	$(".slider-extra .slider-next").click(function(){
		i++;
		sliderMainOperate(i);
	});
});
//今日推荐
$("#todays").ready(function(){
	var date = new Date();
	var hours = date.getHours();
	hours = hours>12?hours-12:hours;
	$("#todays .jd-clock-h").css("transform","rotate("+30*hours+"deg)");
	var time = setInterval(clock,3600000);
	function clock(){
		hours++;
		if(hours > 12) hours = 1;
		$("#todays .jd-clock-h").css("transform","rotate("+30*hours+"deg)");
	}
	$("#todays .mc").hover(function(){
		$("#todays .slider-page").show();
	},function(){
		$("#todays .slider-page").hide();
	});
	var $todays_slider_main = $("#todays .slider-main");
	var panel_left = $todays_slider_main.position().left;
	$("#todays .slider-prev").click(function(){
		panel_left = panel_left-1000;
		$todays_slider_main.animate({left:panel_left},700);
		if(panel_left == -5000) {
			panel_left = -1000;
			$todays_slider_main.animate({left:panel_left},0);
		}
	});
	$("#todays .slider-next").click(function(){
		panel_left = panel_left+1000;
		$todays_slider_main.animate({left:panel_left},700);
		if(panel_left == 0) {
			panel_left = -4000;
			$todays_slider_main.animate({left:panel_left},0);
		}
	});
});
//clothes
$("#clothes").ready(function(){
	var $clothes_slider_main = $("#clothes .slider-main");
	var slider_left = $clothes_slider_main.position().left;
	var $clothes_slider_nav = $("#clothes .slider-nav li");
	var $clothes_slider_page = $("#clothes .slider-page");
	var clothes_now = 0;
	var clothes_slider = setInterval(slider_next,3000);

	function slider_next(){
		clothes_now = (++clothes_now)%4;
		slider_left = slider_left-439; 
		$clothes_slider_main.animate({left:slider_left},700);
		if(slider_left <= -2195){
			slider_left = -439;
			clothes_now = 0;
			$clothes_slider_main.animate({left:slider_left},0);
		}
		$clothes_slider_nav.eq(clothes_now).addClass("slider-selected").siblings().removeClass("slider-selected");
	}
	function slider_prev(){
		clothes_now = (--clothes_now)%4;
		slider_left = slider_left+439; 
		$clothes_slider_main.animate({left:slider_left},700);
		if(slider_left >= 0){
			slider_left = -1756;
			clothes_now = 3;
			$clothes_slider_main.animate({left:slider_left},0);
		}
		$clothes_slider_nav.eq(clothes_now).addClass("slider-selected").siblings().removeClass("slider-selected");
	}
	$("#clothes .slider a").hover(function(){
		$clothes_slider_page.show();
		clearInterval(clothes_slider);
	},function(){
		$clothes_slider_page.hide();
		clothes_slider = setInterval(slider_next,3000);
	});
	$clothes_slider_nav.hover(function(){
		var index = $(this).index();
		clothes_now = index;
		clearInterval(clothes_slider);
		slider_left = (clothes_now+1)*(-439);
		$clothes_slider_main.animate({left:slider_left},400);
		$(this).addClass("slider-selected").siblings().removeClass("slider-selected");
	},function(){
		clothes_slider = setInterval(slider_next,3000);
	});
	$clothes_slider_page.find(".slider-prev").click(function(){
		slider_prev();
	});
	$clothes_slider_page.find(".slider-next").click(function(){
		slider_next();
	});
	$("#clothes .tab li").click(function(){
		var index = $(this).index();
		if (index!=0){
			clearInterval(clothes_slider);
		}
		else{
			clothes_slider = setInterval(slider_next,3000);
		}
		$("#clothes .tab li").eq(index).addClass("tab-selected").siblings().removeClass("tab-selected");
		$("#clothes .mc .main").eq(index).addClass("main-selected").siblings().removeClass("main-selected");
	});
});
//cosmetics
$("#cosmetics").ready(function(){
	var $cosmetics_slider_main = $("#cosmetics .slider-main");
	var slider_left = $cosmetics_slider_main.position().left;
	var $cosmetics_slider_nav = $("#cosmetics .slider-nav li");
	var $cosmetics_slider_page = $("#cosmetics .slider-page");
	var cosmetics_now = 0;
	var cosmetics_slider = setInterval(slider_next,3000);

	function slider_next(){
		cosmetics_now = (++cosmetics_now)%4;
		slider_left = slider_left-339; 
		$cosmetics_slider_main.animate({left:slider_left},700);
		if(slider_left <= -1695){
			slider_left = -339;
			cosmetics_now = 0;
			$cosmetics_slider_main.animate({left:slider_left},0);
		}
		$cosmetics_slider_nav.eq(cosmetics_now).addClass("slider-selected").siblings().removeClass("slider-selected");
	}
	function slider_prev(){
		cosmetics_now = (--cosmetics_now)%4;
		slider_left = slider_left+339; 
		$cosmetics_slider_main.animate({left:slider_left},700);
		if(slider_left >= 0){
			slider_left = -1356;
			cosmetics_now = 3;
			$cosmetics_slider_main.animate({left:slider_left},0);
		}
		$cosmetics_slider_nav.eq(cosmetics_now).addClass("slider-selected").siblings().removeClass("slider-selected");
	}
	$("#cosmetics .slider a").hover(function(){
		$cosmetics_slider_page.show();
		clearInterval(cosmetics_slider);
	},function(){
		$cosmetics_slider_page.hide();
		cosmetics_slider = setInterval(slider_next,3000);
	});
	$cosmetics_slider_nav.hover(function(){
		var index = $(this).index();
		cosmetics_now = index;
		slider_left = (cosmetics_now+1)*(-339);
		$cosmetics_slider_main.animate({left:slider_left},400);
		clearInterval(cosmetics_slider);
		$(this).addClass("slider-selected").siblings().removeClass("slider-selected");
	},function(){
		cosmetics_slider = setInterval(slider_next,3000);
	});
	$cosmetics_slider_page.find(".slider-prev").click(function(){
		slider_prev();
	});
	$cosmetics_slider_page.find(".slider-next").click(function(){
		slider_next();
	});
	$("#cosmetics .tab li").click(function(){
		var index = $(this).index();
		if (index!=0){
			clearInterval(cosmetics_slider);
		}
		else{
			cosmetics_slider = setInterval(slider_next,3000);
		}
		$("#cosmetics .tab li").eq(index).addClass("tab-selected").siblings().removeClass("tab-selected");
		$("#cosmetics .mc .main").eq(index).addClass("main-selected").siblings().removeClass("main-selected");
	});
});
//mobiles
$("#mobiles").ready(function(){
	var $mobiles_slider_main = $("#mobiles .slider-main");
	var slider_left = $mobiles_slider_main.position().left;
	var $mobiles_slider_nav = $("#mobiles .slider-nav li");
	var $mobiles_slider_page = $("#mobiles .slider-page");
	var mobiles_now = 0;
	var mobiles_slider = setInterval(slider_next,3000);

	function slider_next(){
		mobiles_now = (++mobiles_now)%4;
		slider_left = slider_left-439; 
		$mobiles_slider_main.animate({left:slider_left},700);
		if(slider_left <= -2195){
			slider_left = -439;
			mobiles_now = 0;
			$mobiles_slider_main.animate({left:slider_left},0);
		}
		$mobiles_slider_nav.eq(mobiles_now).addClass("slider-selected").siblings().removeClass("slider-selected");
	}
	function slider_prev(){
		mobiles_now = (--mobiles_now)%4;
		slider_left = slider_left+439; 
		$mobiles_slider_main.animate({left:slider_left},700);
		if(slider_left >= 0){
			slider_left = -1756;
			mobiles_now = 3;
			$mobiles_slider_main.animate({left:slider_left},0);
		}
		$mobiles_slider_nav.eq(mobiles_now).addClass("slider-selected").siblings().removeClass("slider-selected");
	}
	$("#mobiles .slider a").hover(function(){
		$mobiles_slider_page.show();
		clearInterval(mobiles_slider);
	},function(){
		$mobiles_slider_page.hide();
		mobiles_slider = setInterval(slider_next,3000);
	});
	$mobiles_slider_nav.hover(function(){
		var index = $(this).index();
		mobiles_now = index;
		clearInterval(mobiles_slider);
		slider_left = (mobiles_now+1)*(-439);
		$mobiles_slider_main.animate({left:slider_left},400);
		$(this).addClass("slider-selected").siblings().removeClass("slider-selected");
	},function(){
		mobiles_slider = setInterval(slider_next,3000);
	});
	$mobiles_slider_page.find(".slider-prev").click(function(){
		slider_prev();
	});
	$mobiles_slider_page.find(".slider-next").click(function(){
		slider_next();
	});
	$("#mobiles .tab li").click(function(){
		var index = $(this).index();
		if (index!=0){
			clearInterval(mobiles_slider);
		}
		else{
			mobiles_slider = setInterval(slider_next,3000);
		}
		$("#mobiles .tab li").eq(index).addClass("tab-selected").siblings().removeClass("tab-selected");
		$("#mobiles .mc .main").eq(index).addClass("main-selected").siblings().removeClass("main-selected");
	});
});
$("#electronics").ready(function(){
	var $electronics_slider_main = $("#electronics .slider-main");
	var slider_left = $electronics_slider_main.position().left;
	var $electronics_slider_nav = $("#electronics .slider-nav li");
	var $electronics_slider_page = $("#electronics .slider-page");
	var electronics_now = 0;
	var electronics_slider = setInterval(slider_next,3000);

	function slider_next(){
		electronics_now = (++electronics_now)%4;
		slider_left = slider_left-439; 
		$electronics_slider_main.animate({left:slider_left},700);
		if(slider_left <= -2195){
			slider_left = -439;
			electronics_now = 0;
			$electronics_slider_main.animate({left:slider_left},0);
		}
		$electronics_slider_nav.eq(electronics_now).addClass("slider-selected").siblings().removeClass("slider-selected");
	}
	function slider_prev(){
		electronics_now = (--electronics_now)%4;
		slider_left = slider_left+439; 
		$electronics_slider_main.animate({left:slider_left},700);
		if(slider_left >= 0){
			slider_left = -1756;
			electronics_now = 3;
			$electronics_slider_main.animate({left:slider_left},0);
		}
		$electronics_slider_nav.eq(electronics_now).addClass("slider-selected").siblings().removeClass("slider-selected");
	}
	$("#electronics .slider a").hover(function(){
		$electronics_slider_page.show();
		clearInterval(electronics_slider);
	},function(){
		$electronics_slider_page.hide();
		electronics_slider = setInterval(slider_next,3000);
	});
	$electronics_slider_nav.hover(function(){
		var index = $(this).index();
		electronics_now = index;
		clearInterval(electronics_slider);
		slider_left = (electronics_now+1)*(-439);
		$electronics_slider_main.animate({left:slider_left},400);
		$(this).addClass("slider-selected").siblings().removeClass("slider-selected");
	},function(){
		electronics_slider = setInterval(slider_next,3000);
	});
	$electronics_slider_page.find(".slider-prev").click(function(){
		slider_prev();
	});
	$electronics_slider_page.find(".slider-next").click(function(){
		slider_next();
	});
	$("#electronics .tab li").click(function(){
		var index = $(this).index();
		if (index!=0){
			clearInterval(electronics_slider);
		}
		else{
			electronics_slider = setInterval(slider_next,3000);
		}
		$("#electronics .tab li").eq(index).addClass("tab-selected").siblings().removeClass("tab-selected");
		$("#electronics .mc .main").eq(index).addClass("main-selected").siblings().removeClass("main-selected");
	});
});
//share
$("#share").ready(function(){
	var $share_slider_main = $("#share .sw ul");
	var share_now = 0;
	var slider_top = $share_slider_main.position().top;
	var share_slider = setInterval(slider_next,3000);
	function slider_next(){
		share_now = (++share_now)%3;
		slider_top = slider_top+120; 
		$share_slider_main.animate({top:slider_top},700);
		if(slider_top >= 0){
			slider_top = -360;
			share_now = 2;
			$share_slider_main.animate({top:slider_top},0);
		}
	}
});
// elevator
$(function(){
	var $elevator = $("#elevator");
	var $elevatorLi = $("#elevator li");
	$elevatorLi.hover(function(){
		$(this).find(".num").hide();
		$(this).addClass("hover").siblings().removeClass("hover");
	},function(){
		$(this).find(".num").show();
		$(this).removeClass("hover");
	});
	$elevatorLi.click(function(){
		var id = $(this).attr("data-id");
        var h = $(id).offset().top;
        $('body,html').animate({ scrollTop: h }, 200);
	})
	$(window).scroll(function(){
		var ling = $(document).scrollTop()+$(window).height();
		var floor1 = $("#clothes").offset().top;
		var floor2 = $("#cosmetics").offset().top;
		var floor3 = $("#mobiles").offset().top;
		var floor4 = $("#electronics").offset().top;

		if (ling < floor1){
            $elevator.hide();
        }else if (ling >= floor1 && ling <= floor2){
            $elevator.show();
            $elevatorLi.eq(0).addClass("current").siblings().removeClass("current");
        }else if (ling >= floor2 && ling <= floor3){
            $elevator.show();
            $elevatorLi.eq(1).addClass("current").siblings().removeClass("current");
        }else if (ling >= floor3 && ling <= floor4){
            $elevator.show();
            $elevatorLi.eq(2).addClass("current").siblings().removeClass("current");
        }else if (ling >= floor4){
            $elevator.show();
            $elevatorLi.eq(3).addClass("current").siblings().removeClass("current");
        }
	});
});
//右侧工具栏
$(function(){
	$("#J-global-toolbar .jdm-toolbar  .tab").hover(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	$("#J-global-toolbar .jdm-toolbar-tabs div.fore1").click(function(){
		$("#J-global-toolbar div.jdm-toolbar").css("right","270px");
		$("#J-global-toolbar .jdm-toolbar-panels").show();
	});
	$("#J-global-toolbar .jdm-toolbar-panels-header").click(function(){	
		$("#J-global-toolbar .jdm-toolbar-panels").hide(800);
		$("#J-global-toolbar div.jdm-toolbar").css("right","0");
	});
	$("#J-global-toolbar .jdm-toolbar-footer .fore1").click(function(){	
		$('body,html').animate({ scrollTop: 0 }, 200);
	});
});