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
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 8,
            }
        },
        navigation: {
            nextEl: '.solutions-slider__next',
            prevEl: '.solutions-slider__prev',
        },
        autoplay: {
            delay: 5000,
        },
        scrollbar: {
            el: '.solutions-slider__scrollbar',
            hide: false,
            draggable: true
        }
    });

    let sliderLamps = new Swiper('.lamps-slider>.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 8,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
            }
        },
        navigation: {
            nextEl: '.lamps-slider__next',
            prevEl: '.lamps-slider__prev',
        }
    });

    let sliderReviews = new Swiper('.reviews-slider>.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 9,
        breakpoints: {
            650: {
                slidesPerView: 2,
            }
        },
        scrollbar: {
            el: '.reviews-slider__scrollbar',
            hide: false,
            draggable: true
        }
    });

    let sliderProjects = new Swiper('.projects-slider>.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 1,
            }
        },
        navigation: {
            nextEl: '.projects-slider__next',
            prevEl: '.projects-slider__prev',
        },
        scrollbar: {
            el: '.projects-slider__scrollbar',
            hide: false,
            draggable: true
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

    let sliderProjectsMaterials = new Swiper('.projects-materials__slider>.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        scrollbar: {
            el: '.projects-materials__scrollbar',
            hide: false,
            draggable: true,
        }
    });

    let sliderProjectsThumbs = new Swiper('.projects-gallery__thumbs>.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        scrollbar: {
            el: '.projects-gallery__scrollbar',
            hide: false,
            draggable: true,
        }
    });

    let sliderProjectsGalleryTop = new Swiper('.projects-gallery__top>.swiper-container', {
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: '.projects-gallery__next',
            prevEl: '.projects-gallery__prew',
        },
        thumbs: {
            swiper: sliderProjectsThumbs
        }
    });

    let sliderNewsMain = new Swiper('.news-main__slider>.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.news-main__slider>.swiper-pagination',
            clickable: true
        },
    });

    let sliderSolutionMain = new Swiper('.solution-main-slider>.swiper-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.solution-main-slider__next',
            prevEl: '.solution-main-slider__prev',
        },
        pagination: {
            el: '.solution-main-slider__pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000,
        }
    });

    let sliderContactsMain = new Swiper('.contacts-main__slider>.swiper-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.contacts-main__next',
            prevEl: '.contacts-main__prev',
        },
        pagination: {
            el: '.contacts-main__pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000,
        }
    });

    var cooperationMenu = ['Дилерам', 'Заказчикам', 'Архитекторам']

    let sliderCooperationMain = new Swiper('.cooperation-main-slider>.swiper-container', {
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 60,
        navigation: {
            nextEl: '.cooperation-main-slider__next',
            prevEl: '.cooperation-main-slider__prev',
        },
        pagination: {
            el: '.cooperation-main-slider__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="col-4 ' + className + '"><div class="cooperation-num"> <p class="cooperation-num__num">0' + (index + 1) + '</p><p class="cooperation-num__text">' + (cooperationMenu[index]) + '</p></div></div>';
            },
        }
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

    $('body').on('click', '[data-toglle="requisites"]', function () {
        $(this).next().slideToggle();
    });

    $('body').on('click', '[data-toglle="city"]', function () {
        let activeCity = $(this).data('city');
        $('.contacts-main__toggle').removeClass('active');
        $(this).addClass('active');
        $('.contacts-main__city').removeClass('active');
        $(`#${activeCity}`).addClass('active');
        $(`#${activeCity}`).addClass('opacity');
        setTimeout(function(){
            $(`#${activeCity}`).removeClass('opacity');
        }, 150);
    });
});