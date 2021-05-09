'use strict';

$('.header__menu-button').click(function () {
    $('.header__navigation').css('display', 'block');
});

$('.header__navigation-close').click(function () {
    $('.header__navigation').css('display', 'none');
});

$('.products__filters-filter-title').mouseover(function () {
    $('.products__filters-filter').addClass('products__filters_shadow');
    $('.products__filters-filter-list').css('display', 'block');
});

$('.products__filters-filter').mouseleave(function () {
    $('.products__filters-filter').removeClass('products__filters_shadow');
    $('.products__filters-filter-list').css('display', 'none');
});
