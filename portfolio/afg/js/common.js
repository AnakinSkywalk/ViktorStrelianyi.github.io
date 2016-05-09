$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	//scroll animate
	$(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});
	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(".arrow-bottom").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
		return false;
	});

	// make height by max
	$(".section_1 .section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".section3 .info-item").equalHeights();

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};	

	// form Popup after button click
	$(".homesect .section-bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms' //close form button
	});	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	// owlCarousel
	$(".slider").owlCarousel({
		items: 1,
		nav:true,
		navText:"",
		loop:true,
		responsiveClass:true,
		autoplay: true,
		autoplayHoverPause: true,
		fluidSpeed:600,
		autoplaySpeed: 600,
		navSpeed: 600,
		dotsSpeed: 600,
		dragEndSpeed: 600,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:1,
	            nav:true
	        },
	        1000:{
	            items:1,
	            nav:true
	        }
    	}
	});

	//Animations
	$(".section-head h2, .section-head p").animated("fadeIn");
	$(".info-item-wrap").animated("zoomIn");
	$(".slider .slide").animated("rollIn");
	$(".homesect.section8 .forms").animated("fadeInRight");
	$(".homesect.section8 .p").animated("fadeIn");

	$(".section2").waypoint(function() {
		$(".s2-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	// animaton in section4
	$(".section4").waypoint(function(){
			$(".section4 .card").each(function(index){
				var ths=$(this);
				setInterval(function(){
					ths.removeClass("card-off").addClass("card-on");
				},150*index);
			})			
		}
	);

	// animaton in section5
	$(".section5").waypoint(function(){
		$(".section5 .tc-item").each(function(index){
			var ths=$(this);
			setTimeout(function(){
				var myAnimation = new DrawFillSVG({
					elementId:"tc-svg" + index +""
				});
				ths.removeClass("").addClass("");
			},400*index);
		});	
		this.destroy();	
	});

	// animaton in section6
	$(".section6").waypoint(function() {
		$(".section6 .team").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-off").addClass("team-on");
			}, 200*index);
		});
	}, {
		offset : "35%"
	});

	// animaton in section8
	$(".section8").waypoint(function() {
		$(".s8-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize() //collects all forms to one send request to server
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset"); //clean all form fields
			}, 1000);
		});
		return false;
	});

	// prevent draging images
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
