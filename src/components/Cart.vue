<template>
    <div id="cart" class="cart">
        <div class="cart-overlay"></div>
        <div class="cart-window">
            <div class="cart-header">
                <h2>Checkout</h2>
                <div class="cart-close" @click="closeCart">
                    <i class="icon-close"></i>
                </div>
            </div>
            <div class="cart-list">
                <CartProduct v-for="product in products" :product="product" :key="product.id"></CartProduct>
            </div>
            <div class="cart-footer">
                <button class="btn btn-gray">Add more Pizza</button>
                <span class="cart-total">
                    Total:
                    <span class="cart-total__value">${{total}}</span>
                </span>
            </div>
            <form action="/" class="cart-address">
                <h2>Address</h2>
                <div class="cart-address__fields">

                </div>
            </form>
        </div>
        
    </div>
</template>

<script>
import CartProduct from '../components/Cart-product'

export default {
    name: "cart",
    props: ['products'],
    components: {
        CartProduct
    },
    data() {
        return {
            total: 0
        }
    },
    methods: {
        closeCart() {
            this.$emit('close-cart', false)
        }
    },
    watch: {
        products() {
            let total = 0
            this.products.forEach(product => {
                total+=parseFloat(product[0].price.value)
            });
            this.total = total
        }

    }
}
</script>
