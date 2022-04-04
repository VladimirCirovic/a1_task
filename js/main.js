$(function () {

    // slick slider
    $('.slider-section__additions-wrap').slick({
        dots: false,
        arrows: true,
        prevArrow: '<span class="prev"></span>',
        nextArrow: '<span class="next"></span>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1
    });

    $('.benefits-section__additions-wrap').slick({
        dots: false,
        arrows: true,
        prevArrow: '.benefits-section__nav-prev',
        nextArrow: '.benefits-section__nav-next',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 2
    });

    // back to top btn
    $(window).on('scroll', () => {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').show();
        } else {
            $('.back-to-top').hide();
        }
    });
    $('.back-to-top').on('click', () => {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    // offers select
    function devicePrices() {
        $('.offers-section__card--1').find('.offers-section__old-price').html('2.899').next('.offers-section__new-price').html('2.399');
        $('.offers-section__card--2').find('.offers-section__new-price').html('2.099');
        $('.offers-section__card--3').find('.offers-section__new-price').html('1.799');
    }

    function noDevicePrices() {
        $('.offers-section__card--1').find('.offers-section__old-price').html('1.999').next('.offers-section__new-price').html('1.499');
        $('.offers-section__card--2').find('.offers-section__new-price').html('1.599');
        $('.offers-section__card--3').find('.offers-section__new-price').html('1.299');
    }

    $('.offers-section__item').on('click', e => {
        let $this = $(e.currentTarget);
        $('.offers-section__item').removeClass('offers-section__item--active');
        $this.addClass('offers-section__item--active');

        if ($this.attr('id') == 'device_true') {
            devicePrices();
        } else {
            noDevicePrices();
        }
    });

    // hamburger menu
    $('.menu-nav__item--hamburger').on('click', e => {
        let $this = $(e.currentTarget);

        if ($this.hasClass('menu-opened')) {
            $this.removeClass('menu-opened').find('img').attr('src', 'img/menu_ham.png');
            $('.menu-nav__menu-left').removeClass('menu-nav__menu-left--overlay');
        } else {
            $this.addClass('menu-opened').find('img').attr('src', 'img/close_menu.png');
            $('.menu-nav__menu-left').addClass('menu-nav__menu-left--overlay');
        }
    });
});