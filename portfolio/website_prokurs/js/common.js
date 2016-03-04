$(document).ready(function() {

	// parallax effect
	$.stellar({
		responsive: true,
		horizontalOffset: 40
  		// verticalOffset: 150
	});


	//carousel
	$(".owl-carousel").owlCarousel({
		loop: true,
		responsiveClass: true,
		autoWidth: false,
		navText:"",
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive : {
			0 : {
				items : 1,
				nav:true
			},
			// breakpoint from 480 up
			480 : {
				items : 1,
				nav:true
			},
			// breakpoint from 768 up
			768 : {
				items : 1,
				nav:true
			}
		}
	});

	//popup
	$('.popup').magnificPopup({type:'image'});
	$('.popup_content').magnificPopup(); 

	// подгонка бэкграунда под размер окна
	function windowResize(){
		$("header").css("min-height", $(window).height());
	};
	windowResize();

	$(window).resize(function(){
		windowResize();
	});

	//переключение для табов .top_phone
	$('.top_phone .wrapper .tab').click(function() {
		$('.top_phone .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.top_phone .tab_item').hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass('active');

	//переключение для табов .tabs_header
	$('.tabs_header .wrapper .tab').click(function() {
		$('.tabs_header .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.tabs_header .tab_item').hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass('active');

	//переключение для табов .contacts_top
	$('.contacts_top .tab').click(function() {
		$('.contacts_top .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.section_contacts .tab_item').hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass('active');

	//переключение для табов .footer_phone
	$('.footer_phone .tab').click(function() {
		$('.footer_phone .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.footer_phone .tab_item').hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass('active');
	

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

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {

		var ths= $(this);

		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// $.fancybox.close();
				var magnificPopup = $.magnificPopup.instance; 
				// save instance in magnificPopup variable
				magnificPopup.close(); 
				// Close popup that is currently opened
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});

$(window).load(function() {

	// animate
	$(".top_header h1").animated("fadeInDown", "fadeOut");
	$(".top_header h2").animated("fadeInUp", "fadeOut");

	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");

	$(".profi_item").animated("fadeInRight", "fadeOut");
	$("form").animated("zoomInRight", "zoomInRight");

	$(".section_feedback h3").animated("fadeInUp", "fadeOut");

	$("footer").animated("fadeInUp", "fadeOut");

});