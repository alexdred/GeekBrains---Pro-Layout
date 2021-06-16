Vue.component('products', {
    props: ['products', 'img'],
    template: `<ul class="products__list products__list-home">
                <product v-for="item of products" 
                :key="item.id_product" 
                :img="img"
                :product="item"></product>
                </ul>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<li class="products__item">
            <div class="products__item-wrap">
                <img class="products__item-image" :src="product.image" :alt="product.title" width="360"
                    height="420">
                <button class="products__item-button" type="button" @click="$parent.$emit('add-product', product)">
                    <img class="products__item-button-img" src="./img/main/cart.svg" alt="cart" width="26"
                        height="24">Add to Cart</button>
            </div>
            <h3 class="products__item-heading"><a href="product.html">{{product.title}}</a></h3>
            <p class="products__item-text">{{product.description}}</p>
            <p class="products__item-price">{{product.price}}</p>
        </li>`
})