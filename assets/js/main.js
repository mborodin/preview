;
(function ($) {
    "use strict";
    jQuery(document).ready(function () {

        // == AOS Init== //
        AOS.init({
            disable: 'mobile'
        });

        // == Clouds Parallax== //
        if ($('#clouds').length) {
            var scene = document.getElementById('clouds');
            var parallax = new Parallax(scene);
        }

        // == Particle JS== //
        if ($('#particles-js').length) {
            particlesJS.load('particles-js', 'assets/js/particles.json', function () { });
        }
        // == Search Bar== //
        if ($('.search-icon').length) {
            $('.search-icon').on('click', function () {
                $('.search-form').toggleClass('show');
            });
        }

        // == Hero Slider== //
        if ($('.hero-slider').length) {
            var swiper = new Swiper('.hero-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
                speed: 900,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.arr-right',
                    prevEl: '.arr-left',
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $('.slide-content h4, .slide-content h3, .slide-content a').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function () {
                        AOS.init();
                    },
                },
            });

            $(".hero-slider").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        }
        // == Consult Slider== //
        if ($('.hero-slider').length) {
            var swiper2 = new Swiper('.consult-slider', {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
                slidesPerView: 4,
                breakpoints: {
                    1599: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1
                    }
                }
            });
        }
        // == Consult Slider== //
        if ($('header').length && $('.height-ctrl').length) {
            function heightCalc() {
                var x = $('header').height();
                $('.height-ctrl').css({
                    'margin-top': x,
                    'min-height': 'calc(100vh - ' + x + 'px)'
                });
            };
            heightCalc();
            $(window).resize(heightCalc);
        }
        // == Consult Slider== //
        if ($('.grid').length) {
            // init Isotope
            var $grid = $('.grid').isotope({
                // options
                itemSelector: '.grid-item',
                masonry: {}
            });
            // layout Isotope after each image loads
            $grid.imagesLoaded().progress(function () {
                $grid.isotope('layout');
            });

            // filter items on button click
            $('.filter-nav li').on('click', function () {
                var filterValue = $(this).attr('data-filter');
                $('.filter-nav li.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                $grid.isotope({ filter: filterValue });
            });
        }
    });

    jQuery(window).on('load', function () {

        // == Animated Page Loader == //



    });
})(jQuery)