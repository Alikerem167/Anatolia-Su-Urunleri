/*
Template Name: Corpboot
Description: Corporate HTML5 Template based on Twitter Bootstrap.
Version: 2.4
Author: Rafael Memmel
Author URI: https://themeforest.net/user/rafamem
*/

//===========================================================================================
//Functions
//===========================================================================================
//---------------------------------------------------------------------------------------
//Get IE Version Function
//---------------------------------------------------------------------------------------
function getInternetExplorerVersion() {
    var rv = -1;
    var ua = navigator.userAgent;
    var re = '';
    if (navigator.appName == 'Microsoft Internet Explorer') {
        re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
        if (re.exec(ua) !== null) {
            rv = parseFloat(RegExp.$1);
        }
    } else if (navigator.appName == 'Netscape') {
        re = new RegExp('Trident/.*rv:([0-9]{1,}[\.0-9]{0,})');
        if (re.exec(ua) !== null) {
            rv = parseFloat(RegExp.$1);
        }
    }
    return rv;
}
//---------------------------------------------------------------------------------------
//Fade In
//---------------------------------------------------------------------------------------
function fadeIn(element, duration = 6000) {
    element.style.display = 'inline';
    element.style.opacity = 0;
    var last = +new Date();
    var tick = function () {
        element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
        last = +new Date();
        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}
//---------------------------------------------------------------------------------------
//Fade Out
//---------------------------------------------------------------------------------------
function fadeOut(element, duration = 100) {
    element.style.display = 'inline';
    element.style.opacity = 1;
    var tick = function () {
        element.style.opacity = element.style.opacity - 0.1;
        if (+element.style.opacity > 0) {
            // requestAnimationFrame(tick)
            setTimeout(tick, duration);
        }
        else {
            element.style.display = 'none';
        }
    };
    tick();
}

//===========================================================================================
// jQuery
//===========================================================================================
jQuery(function ($) {
    //---------------------------------------------------------------------------------------
    //Placeholder for IE old versions
    //---------------------------------------------------------------------------------------
    var ie = getInternetExplorerVersion();
    if (ie == '8' || ie == '9' || ie == '10') {
        $('input, textarea').placeholder();
    }
    //---------------------------------------------------------------------------------------
    //Flexslider
    //---------------------------------------------------------------------------------------
    var $bgSlider = $('#bg-slider');
    if ($bgSlider.length) {
        /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */
        $bgSlider.flexslider({
            animation: "fade",
            slideshow: true,
            animationLoop: true,
            directionNav: false, //remove the default direction-nav
            controlNav: false, //remove the default control-nav
            slideshowSpeed: 6000
        });
    }
    var $mainSlider = $('#main-slider');
    if ($mainSlider.length) {
        /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */
        $mainSlider.flexslider({
            animation: "fade",
            slideshow: true,
            animationLoop: true,
            directionNav: true, //remove the default direction-nav
            controlNav: true, //remove the default control-nav
            slideshowSpeed: 6000
        });
    }
    //---------------------------------------------------------------------------------------
    //Slick Carousel
    //---------------------------------------------------------------------------------------
    var $news = $('#news');
    if ($news.length) {
        $news.not('.slick-initialized').not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            arrows: false,
            autoplaySpeed: 8000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    var $clients = $('#clients');
    if ($clients.length) {
        $clients.not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    var $team = $('#team');
    if ($team.length) {
        $team.not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            dots: true,
            arrows: false,
            pauseOnHover: true
        });
    }

    //Slick Carousel for RTL layouts
    var $newsRtl = $('#news-rtl');
    if ($newsRtl.length) {
        $newsRtl.not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            arrows: false,
            autoplaySpeed: 8000,
            pauseOnHover: true,
            rtl: true,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    var $clientsRtl = $('#clients-rtl');
    if ($clientsRtl.length) {
        $clientsRtl.not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            rtl: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    var $teamRtl = $('#team-rtl');
    if ($teamRtl.length) {
        $teamRtl.not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            dots: true,
            arrows: false,
            pauseOnHover: true,
            rtl: true
        });
    }
    //---------------------------------------------------------------------------------------
    //About Carousel
    //---------------------------------------------------------------------------------------
    var aboutCarouselClick = false;
    var $aboutCarousel = $('#aboutCarousel');
    var $navAboutCarouselA = $('#navAboutCarousel a');

    $aboutCarousel.not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        arrows: false,
        waitForAnimate: false,
        speed: 600,
        fade: true,
        centerPadding: 0
    }).on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        if (!aboutCarouselClick) {
            $navAboutCarouselA.eq(nextSlide).trigger('click.bs');
        }
        else {
            aboutCarouselClick = false;
        }
    });

    $navAboutCarouselA.on('click.slick', function (e) {
        aboutCarouselClick = true;
        var index = $(this).index('#navAboutCarousel a');
        $aboutCarousel.not('.slick-initialized').slick('slickGoTo', index);
        $(this).blur();
    });
    //---------------------------------------------------------------------------------------
    //Our history Carousel
    //---------------------------------------------------------------------------------------
    var historyCarouselClick = false;
    var $historyCarousel = $('#historyCarousel');
    var $navHistoryCarouselA = $('#navHistoryCarousel a');

    $historyCarousel.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        arrows: false,
        waitForAnimate: false,
        speed: 600,
        fade: true
    }).on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        if (!historyCarouselClick) {
            $navHistoryCarouselA.eq(nextSlide).trigger('click.bs');
        }
        else {
            historyCarouselClick = false;
        }
    });
    $navHistoryCarouselA.on('click.slick', function (e) {
        historyCarouselClick = true;
        var index = $(this).index('#navHistoryCarousel a');
        $historyCarousel.slick('slickGoTo', index);
        $(this).blur();
    });
    //---------------------------------------------------------------------------------------
    //About Carousel RTL
    //---------------------------------------------------------------------------------------
    var aboutCarouselClick = false;
    var $aboutCarouselRtl = $('#aboutCarousel-rtl');
    var $navAboutCarouselRtlA = $('#navAboutCarousel-rtl a');

    $aboutCarouselRtl.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        arrows: false,
        waitForAnimate: false,
        speed: 600,
        fade: true,
        rtl: true,
        centerPadding: 0
    }).on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        if (!aboutCarouselClick) {
            $navAboutCarouselRtlA.eq(nextSlide).trigger('click.bs');
        }
        else {
            aboutCarouselClick = false;
        }
    });

    $navAboutCarouselRtlA.on('click.slick', function (e) {
        aboutCarouselClick = true;
        var index = $(this).index('#navAboutCarousel-rtl a');
        $aboutCarouselRtl.slick('slickGoTo', index);
        $(this).blur();
    });
    //---------------------------------------------------------------------------------------
    //Our history Carousel RTL
    //---------------------------------------------------------------------------------------
    var historyCarouselClick = false;
    var $historyCarouselRtl = $('#historyCarousel-rtl');
    var $navHistoryCarouselRtlA = $('#navHistoryCarousel-rtl a');

    $historyCarouselRtl.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        arrows: false,
        waitForAnimate: false,
        speed: 600,
        fade: true,
        rtl: true
    }).on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        if (!historyCarouselClick) {
            $navHistoryCarouselRtlA.eq(nextSlide).trigger('click.bs');
        }
        else {
            historyCarouselClick = false;
        }
    });

    $navHistoryCarouselRtlA.on('click.slick', function (e) {
        historyCarouselClick = true;
        var index = $(this).index('#navHistoryCarousel-rtl a');
        $historyCarouselRtl.slick('slickGoTo', index);
        $(this).blur();
    });
    //---------------------------------------------------------------------------------------
    //Video
    //---------------------------------------------------------------------------------------
    var $iframe = document.querySelectorAll('iframe');
    if ($iframe.length) {
        $iframe.forEach(function (el, index, father) {
            var ifr_source = el.src;
            var wmode = '?wmode=transparent';
            el.src = ifr_source + wmode;
        });
    }
    //---------------------------------------------------------------------------------------
    //Counter Up
    //---------------------------------------------------------------------------------------
    var $count = $('.count');
    if ($count.length) {
        var countFlag = false;
        window.scroll(function () {
            var counterOffset = $('#counterUp').offset().top - 500;
            if ($(this).scrollTop() > counterOffset) {
                if (!countFlag) {
                    countFlag = true;
                    $count.each(function () {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 3000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                }
            }
        });
    }
    //---------------------------------------------------------------------------------------
    //Portfolio
    //---------------------------------------------------------------------------------------
    var $grid = $('#grid');
    if ($grid.length) {
        $grid.mixitup();
    }
    var $grid_video = $('#grid_video');
    if ($grid_video.length) {
        $grid_video.mixitup({
            selectors: {
                filter: '.filter_video'
            }
        });
    }
    var $grid_iframe = $('#grid_iframe');
    if ($grid_iframe.length) {
        $grid_iframe.mixitup({
            selectors: {
                filter: '.filter_iframe'
            }
        });
    }
    $(document).on("click", ".portfolio-filters li", function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    //---------------------------------------------------------------------------------------
    //Select
    //---------------------------------------------------------------------------------------
    var $selectpicker = $('.selectpicker');
    if ($selectpicker.length) {
        $selectpicker.selectpicker({
            style: 'selectcorp'
        });
    }
    //---------------------------------------------------------------------------------------
    //Contact Form
    //---------------------------------------------------------------------------------------
    $('#contactform').on('submit', function () {
        if (!$(this).validate($('#alertform'))) {
            return false;
        }
    });
    //---------------------------------------------------------------------------------------
    //Bootstrap Tooltip
    //---------------------------------------------------------------------------------------
    $('[data-toggle="tooltip"]').tooltip();
});

//===========================================================================================
//Vanilla Javascript
//===========================================================================================
document.addEventListener('DOMContentLoaded', function () {
    //---------------------------------------------------------------------------------------
    //CSS Animations
    //---------------------------------------------------------------------------------------
    ie = getInternetExplorerVersion();
    if (ie == '-1' || ie == '11') {
        var wow = new WOW({
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 100,         // distance to the element when triggering the animation (default is 0)
            mobile: false             // trigger animations on mobile devices (true is default)
        });
        wow.init();
    }
    //---------------------------------------------------------------------------------------
    //WhatsApp Button && Scroll to Top
    //---------------------------------------------------------------------------------------
    var $whatsappButton = document.getElementById('whatsappButton');
    var $scrollToTop = document.getElementById('scrollToTop');

    if ($whatsappButton) {
        //Check to see if the window is top if not then display button
        window.addEventListener('scroll', function () {

            if (window.scrollY > 800 && $whatsappButton.style.opacity < 1) {
                fadeIn($whatsappButton);
                fadeIn(document.getElementById("scrollToTop"));
            }

            if (window.scrollY < 800 && $whatsappButton.style.opacity > 0) {
                fadeOut($whatsappButton);
                fadeOut(document.getElementById("scrollToTop"));
            }
        });
    }

    if ($scrollToTop) {
        //Check to see if the window is top if not then display button
        window.addEventListener('scroll', function () {

            if (window.scrollY > 800 && $scrollToTop.style.opacity < 1) {
                fadeIn($scrollToTop);
                fadeIn(document.getElementById("scrollToTop"));
            }

            if (window.scrollY < 800 && $scrollToTop.style.opacity > 0) {
                fadeOut($scrollToTop);
                fadeOut(document.getElementById("scrollToTop"));
            }
        });
    }
    
    //---------------------------------------------------------------------------------------
    //Header Shrink
    //---------------------------------------------------------------------------------------
    window.addEventListener('scroll', function () {
        var navbar = document.querySelector(".navbar")
        navbar.classList.toggle("tiny", window.scrollY > 120);
    })
    //---------------------------------------------------------------------------------------
    //Nav Tabs
    //---------------------------------------------------------------------------------------
    document.addEventListener('click', function (event) {
        // If the clicked element does not have the .click-me class, ignore it
        if (event.target.matches('.nav-tabs li a')) {
            for (let sibling of event.target.parentNode.parentNode.children) {
                sibling.classList.remove('active');
            }
            event.target.parentNode.classList.add('active');
            event.target.classList.add('active');
        }
    });
    //---------------------------------------------------------------------------------------
    //Window Load Function
    //---------------------------------------------------------------------------------------
    window.addEventListener('load', function () {
        //---------------------------------------------------------------------------------------
        //Preloader
        //---------------------------------------------------------------------------------------
        fadeOut(document.getElementById("preloader"), 50);
    });
    //---------------------------------------------------------------------------------------
    //GLightbox
    //---------------------------------------------------------------------------------------
    var lightbox = GLightbox({
        selector: '.gallery'
    });
    var lightboxDescription = GLightbox({
        selector: '.lightbox'
    });
    var lightboxInlineIframe = GLightbox({
        selector: '.webpage',
        moreLength: 0
    });
});