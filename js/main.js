

$(function () {

	$('.header__container-slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		fade: true,
		cssEase: 'linear',
		adaptiveHeight: true,
		prevArrow: '<svg class="slider-arrows slider-arrows__right" width="45" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0.999998L2.49433 20.2655C1.16332 21.4579 1.16333 23.5421 2.49433 24.7345L24 44" stroke="#8F8F8F" stroke-width="4"/></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__left" width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.999998L22.5057 20.2655C23.8367 21.4579 23.8367 23.5421 22.5057 24.7345L0.999998 44" stroke="#D4D4D4" stroke-width="4"/></svg>',
	});

	$('.goods__box-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		dotsClass: 'slick-dots slider__dots goods-dots',
		prevArrow: '<svg class="slider-arrows slider-arrows__right slider-arrows__right--goods" width="45" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0.999998L2.49433 20.2655C1.16332 21.4579 1.16333 23.5421 2.49433 24.7345L24 44" stroke="#8F8F8F" stroke-width="4"/></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__left slider-arrows__left--goods" width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.999998L22.5057 20.2655C23.8367 21.4579 23.8367 23.5421 22.5057 24.7345L0.999998 44" stroke="#D4D4D4" stroke-width="4"/></svg>',
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				 slidesToShow: 3,
				 slidesToScroll: 3,
				 infinite: true,
				 dots: false,
				 arrows: false
			  }
			},
			{
				breakpoint: 777,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 3,
				  infinite: true,
				  dots: false,
				  arrows: false
				}
			 },
			 {
				breakpoint: 500,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 3,
				  infinite: true,
				  dots: false,
				  arrows: false
				}
			 },
		]
	});

	var btnb = $('.btnb');

	btnb.on('click', function () {
		$(this).toggleClass('active');
		$(this).toggleClass('not-active');
	});

	$('.box-menu').on('click', function () {
		$('.page__menu-box').toggleClass('page__menu-list--active');
	});


	$('.catalog__content-icon--up').on('click', function () {
		$('.catalog__content-icon--up').css('display', 'none');
		$('.catalog__content-icon--down, .catalog__content-box--guitar').css('display', 'block');
	});
	$('.catalog__content-icon--down').on('click', function () {
		$('.catalog__content-icon--up').css('display', 'block');
		$('.catalog__content-icon--down, .catalog__content-box--guitar').css('display', 'none');
	});

	$('.catalog__content-sidebar--up').on('click', function () {
		$('.catalog__content-sidebar--up').css('display', 'none');
		$('.catalog__content-sidebar--down, .catalog__content-box--ukulele').css('display', 'block');
	});
	$('.catalog__content-sidebar--down').on('click', function () {
		$('.catalog__content-sidebar--up').css('display', 'block');
		$('.catalog__content-sidebar--down, .catalog__content-box--ukulele').css('display', 'none');
	});

	$('.catalog__content-accessories--up').on('click', function () {
		$('.catalog__content-accessories--up').css('display', 'none');
		$('.catalog__content-accessories--down, .catalog__content-box--accessories').css('display', 'block');
	});
	$('.catalog__content-accessories--down').on('click', function () {
		$('.catalog__content-accessories--up').css('display', 'block');
		$('.catalog__content-accessories--down, .catalog__content-box--accessories').css('display', 'none');
	});

	$('.catalog__content-strings--up').on('click', function () {
		$('.catalog__content-strings--up').css('display', 'none');
		$('.catalog__content-strings--down, .catalog__content-box--strings').css('display', 'block');
	});
	$('.catalog__content-strings--down').on('click', function () {
		$('.catalog__content-strings--up').css('display', 'block');
		$('.catalog__content-strings--down, .catalog__content-box--strings').css('display', 'none');
	});


	$(".media__content-btn").click(function () {
		if ($(".media__content-text--two").is(":hidden")) {
			$(".media__content-text--two").show("slow");
		} else {
			$(".media__content-text--two").hide("slow");
		}
		return false;
	});


});

