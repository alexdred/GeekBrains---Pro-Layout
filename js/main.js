'use strict';

// menu show
$('.header__menu-button').click(function () {
    $('.header__navigation').css('display', 'block');
});

$('.header__navigation-close').click(function () {
    $('.header__navigation').css('display', 'none');
});

// filter hover shadow
$('.products__filters-filter-title').mouseover(function () {
    $('.products__filters-filter').addClass('products__filters_shadow');
    $('.products__filters-filter-list').css('display', 'block');
});

$('.products__filters-filter').mouseleave(function () {
    $('.products__filters-filter').removeClass('products__filters_shadow');
    $('.products__filters-filter-list').css('display', 'none');
});

// products
const products = [
    { id: 1, title: "ellery x m'o capsule", price: 52, image: "product-1.jpg", description: "Known for her sculptural takes on traditional tailoring Australian arbiter of cool Kym Ellery teams up with Moda Operandi." },
    { id: 2, title: "ellery x m'o capsule", price: 52, image: "product-2.jpg", description: "Known for her sculptural takes on traditional tailoring Australian arbiter of cool Kym Ellery teams up with Moda Operandi." },
    { id: 3, title: "ellery x m'o capsule", price: 52, image: "product-3.jpg", description: "Known for her sculptural takes on traditional tailoring Australian arbiter of cool Kym Ellery teams up with Moda Operandi." },
    { id: 4, title: "ellery x m'o capsule", price: 52, image: "product-4.jpg", description: "Known for her sculptural takes on traditional tailoring Australian arbiter of cool Kym Ellery teams up with Moda Operandi." },
    { id: 5, title: "ellery x m'o capsule", price: 52, image: "product-5.jpg", description: "Known for her sculptural takes on traditional tailoring Australian arbiter of cool Kym Ellery teams up with Moda Operandi." },
    { id: 6, title: "ellery x m'o capsule", price: 52, image: "product-6.jpg", description: "Known for her sculptural takes on traditional tailoring Australian arbiter of cool Kym Ellery teams up with Moda Operandi." },
    { id: 7, title: "ellery x m'o capsule", price: 52, image: "product-7.jpg", description: "Known for her sculptural takes on traditional tailoring Australian arbiter of cool Kym Ellery teams up with Moda Operandi." },
    { id: 8, title: "ellery x m'o capsule", price: 52, image: "product-8.jpg", description: "Known for her sculptural takes on traditional tailoring Australian arbiter of cool Kym Ellery teams up with Moda Operandi." },
    { id: 9, title: "ellery x m'o capsule", price: 52, image: "product-9.jpg", description: "Known for her sculptural takes on traditional tailoring Australian arbiter of cool Kym Ellery teams up with Moda Operandi." },
];

const renderProduct = (product) => {
    return `<li class="products__item">
                <div class="products__item-wrap">
                    <img class="products__item-image" src="./img/products/${product.image}" alt="${product.title}" width="360"
                        height="420">
                    <button class="products__item-button" type="button">
                        <img class="products__item-button-img" src="./img/main/cart.svg" alt="cart" width="26"
                            height="24">Add to Cart</button>
                </div>
                <h3 class="products__item-heading"><a href="product.html">${product.title}</a></h3>
                <p class="products__item-text">${product.description}</p>
                <p class="products__item-price">$${product.price}</p>
            </li>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    // home page - 6 products
    if (document.querySelector('.products__list').classList.contains('products__list-home')) {
        for (let i = 0; i < 6; i++) {
            document.querySelector('.products__list-home').innerHTML += productsList[i];
        }
    }
    // catalog page - 9 products
    if (document.querySelector('.products__list').classList.contains('products__list-catalog')) {
        for (let i = 0; i < 9; i++) {
            document.querySelector('.products__list-catalog').innerHTML += productsList[i];
        }
    }
    // product page - 3 products
    if (document.querySelector('.products__list').classList.contains('products__list-product')) {
        for (let i = 0; i < 3; i++) {
            document.querySelector('.products__list-product').innerHTML += productsList[i];
        }
    }
};

renderPage(products);
