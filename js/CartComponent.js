Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `
        <div class="header__cart-block" v-show="visibility">
            <cart-item v-for="item of cartItems" :key="item.id" :img="item.image" :cart-item="item">
            </cart-item>
        </div>
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
    <div class="header__cart-item">
                    <div class="header__product-bio">
                        <img :src="cartItem.image" alt="Some img">
                        <div class="product-desc">
                            <div class="product-title">{{ cartItem.title }}</div>
                            <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
                            <div class="product-single-price">$ {{ cartItem.price }} each</div>
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
                        <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>
    `
})