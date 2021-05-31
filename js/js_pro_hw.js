'use strict';

class Product {
    constructor(id, title, price, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
    }

    renderProduct = product => {
        return `<li class="products__item">
                <div class="products__item-wrap">
                    <img class="products__item-image" src="./img/js_pro_hw/${product.image}" alt="${product.title}" width="360"
                        height="420">
                    <button class="products__item-button" type="button">
                        <img class="products__item-button-img" src="./img/main/cart.svg" alt="cart" width="26"
                            height="24">Add to Cart</button>
                </div>
                <h3 class="products__item-heading"><a href="product.html">${product.title}</a></h3>
                <p class="products__item-price">$${product.price}</p>
            </li>`
    };

    renderPage = list => {
        const productsList = list.map(item => this.renderProduct(item));
        document.querySelector('.products__list-home').innerHTML += productsList.join("");
    };

    totalPrice() {
        let total = 0;
        products.forEach(product => {
            total += product.price;
        });
        console.log(total);
        document.querySelector('.total-price').innerHTML = total;
    }
}

// products
const products = [
    new Product(1, "ellery x m'o capsule", 51, "product-1.jpeg"),
    new Product(2, "ellery x m'o capsule", 52, "product-1.jpeg"),
    new Product(3, "ellery x m'o capsule", 53, "product-1.jpeg"),
    new Product(4, "ellery x m'o capsule", 54, "product-1.jpeg"),
    new Product(5, "ellery x m'o capsule", 55, "product-1.jpeg"),
    new Product(6, "ellery x m'o capsule", 56, "product-1.jpeg"),
];

const food = new Product();
food.renderPage(products);
food.totalPrice();
