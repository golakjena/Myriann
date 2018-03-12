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

        winHeight = $(window).height();
    	if(winHeight < 860){
    		$(".nav").addClass("is-low");
    	}
    	else{
    		$(".nav").removeClass("is-low");	
    	}
    	
        $(window).on("resize", function(){
        	winHeight = $(window).height();
        	if(winHeight < 860){
        		$(".nav").addClass("is-low");
        	}
        	else{
        		$(".nav").removeClass("is-low");	
        	}
        });

        // Function for Calc
        /*if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    		$(".nav-menu li.m-our").css({
			    height: "-webkit-calc(100% / 6)"
    		});
    		$(".nav-menu li.m-your").css({
			    height: "-webkit-calc(100% / 6)"
    		});
    	}*/
        
    }

    function accordian(){
    	$(".mTeamList li").each(function(){
    		$(this).on("click", function(){
    			var display = $(this).find(".mTeamContent").css("display");
    			$(".mTeamContent").slideUp(300);
    			if(display == "none"){
    				$(this).find(".mTeamContent").slideDown(300);
    			}
    		});
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
		var height;
		$(window).on("load", function(){
			height = $(".infographicsRight").height();
			$(".infographicsLeft").css({height:height});
		});
		
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
		$("#app1 li").css({opacity:0});
        $('#app1').waypoint(function() {
            $("#app1 li").css({opacity:1});
            
            TweenMax.staggerFrom($("#app1 li"), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '85%',
            triggerOnce: true
        });

        $("#app2 li").css({opacity:0});
        $('#app2').waypoint(function() {
            $("#app2 li").css({opacity:1});
            
            TweenMax.staggerFrom($("#app2 li"), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
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
		$(".teamMember").eq(0).fadeIn(300);
		//$(".teamList li").eq(0).addClass("activeTeam");

		$(".teamList li").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("data-source");
				$(".teamMember").fadeOut(300);
				/*$(".activeTeam").removeClass("activeTeam");
				$(this).addClass("activeTeam");*/
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
		accordian();
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
			//logoList();
			progressBar();
			forms();
			advisors();
		}
		
	});

})(jQuery);




