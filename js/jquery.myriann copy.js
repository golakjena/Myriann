;(function($){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function fixnav(){
		$(window).on("scroll", function(){
			var topScroll = $(this).scrollTop();
			if(topScroll >= 100){
				$(".header").addClass("fixHeader");
			}
			else{
				$(".header").removeClass("fixHeader");
			}
		});
	}

	function menuItem() {
        var winHeight = $(window).height();
        $(".nav").addClass("is-low");
        $(window).on("resize", function(){
        	winHeight = $(window).height();
        	if(winHeight < 860){
        		$(".nav").addClass("is-low");
        	}
        	else{
        		$(".nav").removeClass("is-low");	
        	}
        });
        
    }

	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			$(this).toggleClass("isActiveNav");
			var navPos = parseInt($(".navigationOuter").css("right"));
			
			if(navPos == -320){
				$(".navigationOuter, .btnMobileNavOuter").stop(true, true).animate({
					right:0
				}, 300);
				$(".bodyBg").stop(true, true).fadeIn(300);
				$("body").css({
					overflowY:"hidden"
				});
			}
			else{
				$(".navigationOuter, .btnMobileNavOuter").stop(true, true).animate({
					right:-320
				}, 300);
				$(".bodyBg").stop(true, true).fadeOut(300);
				$("body").css({
					overflowY:"auto"
				});
			}
		});
	}

	function midnavList(){
		$(".midnavList li a").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("href");
				$("html, body").animate({
	                scrollTop:$(target).offset().top
	            }, 1000);
	            return false;
			});
		});
	}

	function infoGraphics(){
		var height = $(".infographicsRight").height();
		$(".infographicsLeft").css({height:height});
		$(window).on("resize", function(){
			height = $(".infographicsRight").height();
			$(".infographicsLeft").css({height:height});
		});
	}
	
	function trustedLogo(){
		$(".trustedList li").css({opacity:0});
        $('.trustOuter .wrapper').waypoint(function() {
            $(".trustedList li").css({opacity:1});
            
            TweenMax.staggerFrom($(".trustedList li"), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '50%',
            triggerOnce: true
        });
	}
	function logoList(){
		$(".logoContainer ul li").css({opacity:0});
        $('.logoContainer').waypoint(function() {
            $(".logoContainer ul li").css({opacity:1});
            
            TweenMax.staggerFrom($(".logoContainer ul li"), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '50%',
            triggerOnce: true
        });
	}

	function appList(){
		$(".appList li").css({opacity:0});
        $('.appList').waypoint(function() {
            $(".appList li").css({opacity:1});
            
            TweenMax.staggerFrom($(".appList li"), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '85%',
            triggerOnce: true
        });
	}

	function textEffectZoom(){
		$(".zoom").css({opacity:0});
		$(".zoom").each(function(){
			$(this).waypoint(function() {
	            $(this).css({opacity:1});
	            
	            TweenMax.from($(this), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
	        },{
	            offset: '85%',
	            triggerOnce: true
	        });
		});
	}

	function textEffectRight(){
		$(".txtEffectRight").css({opacity:0});
		$(".txtEffectRight").each(function(){
			$(this).waypoint(function() {
	            $(this).css({opacity:1});
	            
	            TweenMax.from($(this), 1, {right:-300, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
	        },{
	            offset: '85%',
	            triggerOnce: true
	        });
		});
	}
	function textEffectLeft(){
		$(".txtEffectLeft").css({opacity:0});
		$(".txtEffectLeft").each(function(){
			$(this).waypoint(function() {
	            $(this).css({opacity:1});
	            
	            TweenMax.from($(this), 1, {left:-300, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
	        },{
	            offset: '85%',
	            triggerOnce: true
	        });
		});
	}

	function teamMember(){
		$(".teamMember").eq(2).fadeIn(300);
		$(".teamList li a").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("href");
				$(".teamMember").fadeOut(300);
				$(target).fadeIn(300);
				return false;
			});
		});
	}

	function progressBar(){
		$(".progressBar").css({opacity:0});
        $('.progressCont').waypoint(function() {
            $(".progressBar").css({opacity:1});
            
            TweenMax.staggerFrom($(".progressBar"), 3, {width:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '50%',
            triggerOnce: true
        });
	}

	function forms(){
		$(".frmRow").css({opacity:0});
        $(".frmRow").each(function(){
			$(this).waypoint(function() {
	            $(this).css({opacity:1});
	            
	            TweenMax.from($(this), 1, {bottom:-100, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
	        },{
	            offset: '85%',
	            triggerOnce: true
	        });
		});
	}

	function advisors(){
		$(".adviserCol").css({opacity:0});
        $(".adviserCont").waypoint(function() {
            $(".adviserCol").css({opacity:1});
            
            TweenMax.staggerFrom($(".adviserCol"), 2, {left:100, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '85%',
            triggerOnce: true
        });
	}


	$(function(){
		fixnav();
		menuItem();

		mobileNav();
		midnavList();
		infoGraphics();
		teamMember();
		if(!device){
			//trustedLogo();
			appList();
			textEffectLeft();
			textEffectRight();
			textEffectZoom();
			logoList();
			progressBar();
			forms();
			advisors();
		}
		
	});

})(jQuery);




