<template>
    <div id="cart-product">
        <div class="cart-product">
            <div class="cart-product__content">
                <div class="cart-product__category">
                    <span v-for="c in product[0].category" :key="c">
                        <i :class="`icon-${c}`"></i>
                    </span>
                </div>
                <picture class="cart-product__image">
                    <source media="(min-width: 1224px)" :srcset="`src/assets/img/${product[0].image}@2x.png`" />
                    <source media="(min-width: 1920px)" :srcset="`src/assets/img/${product[0].image}@3x.png`" />
                    <img :src="`src/assets/img/${product[0].image}.png`" />
                </picture>
                <div class="cart-product__text">
                    <h4>{{ product[0].name }}</h4>
                    <p class="cart-product__desc">{{ product[0].description }}</p>
                </div>
            </div>
            <div class="cart-product__size">
                <select name="" id="" v-model="product.size.value">
                    <option value="400mm">Small 400mm</option>
                    <option value="600mm">Medium 600mm</option>
                    <option value="800mm">Large 800mm</option>
                </select>
            </div>
            <span class="cart-product__price">{{ product[0].price.currency }}{{ product[0].price.value }}</span>
            <button class="cart-product__remove" @click.prevent="removeCart(product.cID)">
                <i class="icon-remove"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "cart-product",
    props: ['product'],
    data() {
        return {

        }
    },
    methods: {
        removeCart(value) {
            this.$store.dispatch('removeCart', value)
        }
    }
}
</script>
