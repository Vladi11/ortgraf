import Swiper from 'swiper/bundle';
import AOS from 'aos';

$(document).ready(function () {

    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom'
    });

    let sliderSolution = new Swiper('.solutions-slider>.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            nextEl: '.solutions-slider__next',
            prevEl: '.solutions-slider__prev',
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
        scrollbar: {
            el: '.solutions-slider__scrollbar',
            hide: false,
            draggable: true
        }
    });

    let sliderLamps = new Swiper('.lamps-slider>.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 8,
        navigation: {
            nextEl: '.lamps-slider__next',
            prevEl: '.lamps-slider__prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 6,
            }
        },
    });

    let sliderReviews = new Swiper('.reviews-slider>.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 9,
        scrollbar: {
            el: '.reviews-slider__scrollbar',
            hide: false,
            draggable: true
        },
        breakpoints: {
            650: {
                slidesPerView: 3,
            }
        }
    });

    let sliderProjects = new Swiper('.projects-slider>.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.projects-slider__next',
            prevEl: '.projects-slider__prev',
        },
        scrollbar: {
            el: '.projects-slider__scrollbar',
            hide: false,
            draggable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            }
        }
    });

    let sliderInformation = new Swiper('.information-slider>.swiper-container', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.information-slider__pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
        },
    });

    let sliderNews = new Swiper('.news-slider>.swiper-container', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.news-slider__pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
        },
    });

    $('.burger').on('click', function () {
        $('.main-menu').toggleClass('open');
        $(this).toggleClass('active');
        $('.main-menu__submenu').removeClass('open');
    });

    $('.main-menu__title_open').on('click', function () {
        $(this).parents('.main-menu__col').children('.main-menu__submenu').addClass('open');
    });

    $('.main-menu__title_close').on('click', function () {
        $(this).parents('.main-menu__col').children('.main-menu__submenu').removeClass('open');
    });
});