'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

class Products {
    constructor(container = '.products__list') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(goods => {
                this.goods = [...goods];
                this.render();
                this.totalPrice();
            });
    };

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(list => list.json())
    };

    renderProduct = product => {
        return `<li class="products__item">
                <div class="products__item-wrap">
                    <img class="products__item-image" src="./img/js_pro_hw/laptop.jpg" alt="${product.product_name}" width="360"
                        height="420">
                    <button class="products__item-button" type="button">
                        <img class="products__item-button-img" src="./img/main/cart.svg" alt="cart" width="26"
                            height="24">Add to Cart</button>
                </div>
                <h3 class="products__item-heading"><a href="product.html">${product.product_name}</a></h3>
                <p class="products__item-price">$${product.price}</p>
            </li>`
    }

    render() {
        for (let i = 0; i < this.goods.length; i++) {
            document.querySelector(this.container).insertAdjacentHTML('beforeend', this.renderProduct(this.goods[i]));
        }
    };

    totalPrice() {
        let total = 0;
        for (let i = 0; i < this.goods.length; i++) {
            total += this.goods[i].price;
            document.querySelector(".total-price").innerHTML = total;
        }
    }
}

let tech = new Products();
