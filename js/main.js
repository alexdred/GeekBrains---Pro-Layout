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

const API = '../';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showCart: false,
        catalogUrl: 'getProducts.json',
        cartUrl: 'addToBasket.json',
        cartItems: [],
        filtered: [],
        imgCart: 'https://placehold.it/50x100',
        products: [],
        imgProduct: 'https://placehold.it/200x150',
        error: false
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    error = true
                })
        },
        addProduct(item) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(el => el.id === item.id);
                        if (find) {
                            find.quantity++;
                        } else {
                            const prod = Object.assign({ quantity: 1 }, item);
                            this.cartItems.push(prod)
                        }
                    }
                })
        },
        remove(item) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }

                })
        },
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.title));
        }
    },
    mounted() {
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let item of data) {
                    this.$data.cartItems.push(item);
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    }

});

