$(function () {
	$('nav#menu').mmenu();
});

$(document).ready(function () {
	$('nav#menu').data('mmenu').bind('opened', function () {
		$('.hamburger').addClass('is-active');
	});
	$('nav#menu').data('mmenu').bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});
});
//*************************** BANNER-SLIDER **********************//
var swiper = new Swiper(".banner-area .swiper", {
    spaceBetween: 10,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

var swiper = new Swiper(".inner-banner-area .swiper", {
    spaceBetween: 10,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
//*************************** SLIDER **********************//
var swiper = new Swiper('.gallery-sec .swiper', {
    slidesPerView: 1,
    spaceBetween: 38,
    loop: true,
    speed: 1500,
    pagination: {
        el: ".gallery-sec .swiper-pagination",
      },
    autoplay: {
        enabled: false,
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".gallery-sec .swiper-button-next",
        prevEl: ".gallery-sec .swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var swiper = new Swiper('.inner-gallery-sec .swiper', {
    slidesPerView: 1,
    spaceBetween: 38,
    loop: true,
    speed: 1500,
    pagination: {
        el: ".inner-gallery-sec .swiper-pagination",
      },
    autoplay: {
        enabled: false,
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".inner-gallery-sec .swiper-button-next",
        prevEl: ".inner-gallery-sec .swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
//*************************** INNER-SLIDER **********************//
var swiper = new Swiper('.inner-service-sec .swiper', {
    slidesPerView: 1,
    spaceBetween: 38,
    loop: true,
    speed: 1500,
    autoplay: {
        enabled: false,
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".inner-service-sec .swiper-button-next",
        prevEl: ".inner-service-sec .swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

//************************** Button-hover ***********************//

$(".service-button").hover(function() {
    $(".long-text").addClass("show-long-text");
}, function () {
    $(".long-text").removeClass("show-long-text");
});