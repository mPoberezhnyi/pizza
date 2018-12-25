<template>
    <div id="product" class="products-item">
        <div class="product">
            <div class="product-category">
                <span v-for="c in product.category" :key="c">
                    <i :class="`icon-${c}`"></i>
                </span>
            </div>
            <picture class="product-image">
                <source media="(min-width: 1224px)" :srcset="`src/assets/img/${product.image}@2x.png`" />
                <source media="(min-width: 1920px)" :srcset="`src/assets/img/${product.image}@3x.png`" />
                <img :src="`src/assets/img/${product.image}.png`" />
            </picture>
            <div class="product-content">
                <div class="product-text">
                    <h3>{{ product.name }}</h3>
                    <p class="product-desc">{{ product.description }}</p>
                </div>
                <div class="product-bottom">
                    <div class="product-size">
                        <select name="" id="" v-model="product.size.value">
                            <option value="400mm">Small 400mm</option>
                            <option value="600mm">Medium 600mm</option>
                            <option value="800mm">Large 800mm</option>
                        </select>
                        <!-- <v-select v-model="product.size.value" :options="['Small 400mm','Medium 600mm', 'Large 800mm']"></v-select> -->
                    </div>
                    <span class="product-price">{{ product.price.currency }}{{ product.price.value }}</span>
                    <button class="btn product-order" @click.prevent="addToCart(product.id, product.size)">order<i class="icon-cart"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
export default {
    name: 'product',
    props: ['product'],
    data() {
        return {

        }
    },
    methods: {
        addToCart(id, size) {
            this.$store.dispatch('addToCart', {id, size})
        }
    }
}
</script>

<style lang="scss" scoped>
    // @import '../assets/scss/blocks/product';
</style>
