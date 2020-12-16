import Swiper from 'swiper/bundle';

$(document).ready(function () {

    var swiper = new Swiper('.solutions-slider>.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            nextEl: '.solutions-slider__next',
            prevEl: '.solutions-slider__prev',
        },
        breakpoints: {
            '@0.8': {
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

    var swiper2 = new Swiper('.lamps-slider>.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 8,
        navigation: {
            nextEl: '.lamps-slider__next',
            prevEl: '.lamps-slider__prev',
        },
        breakpoints: {
            '@0.8': {
                slidesPerView: 6,
            }
        },
    });

    var swiper3 = new Swiper('.reviews-slider>.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 9,
        scrollbar: {
            el: '.reviews-slider__scrollbar',
            hide: false,
            draggable: true
        },
        breakpoints: {
            '@0.8': {
                slidesPerView: 3,
            }
        }
    });

    var swiper4 = new Swiper('.projects-slider>.swiper-container', {
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
            '@0.8': {
                slidesPerView: 4,
            }
        }
    });

    var swiper5 = new Swiper('.information-slider>.swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.information-slider__pagination',
            clickable: true
        }
    });

    var swiper6 = new Swiper('.news-slider>.swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.news-slider__pagination',
            clickable: true
        }
    });

    $('.burger').on('click', function () {
        $('.main-menu').toggleClass('open');
        $(this).toggleClass('active');
        $('.main-menu__list').removeClass('open');
    });

    $('.main-menu__title_open').on('click', function () {
        $(this).parents('.main-menu__col').children('.main-menu__submenu').addClass('open');
    });

    $('.main-menu__title_close').on('click', function () {
        $(this).parents('.main-menu__col').children('.main-menu__submenu').removeClass('open');
    });
});