<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <Header></Header>
        <div class="main">
          <div class="main-content">
            <h1>MORE REASONS TO EAT PIZZA</h1>
            <p class="main-desc">Delivery of delicious pizza to your home</p>
            <button class="btn btn-order">Order</button>
          </div>
          <picture>
            <source media="(min-width: 1224px)" srcset="./assets/img/bitmap_4@2x.png" />
            <source media="(min-width: 1920px)" srcset="./assets/img/bitmap_4@3x.png" />
            <img src="./assets/img/bitmap_4.png" alt="pizza" />
          </picture>
        </div>
        <router-view></router-view>
        <Cart @close-cart="closeCart" v-show="showCart" :products="products" ></Cart>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'

export default {
  name: 'app',
  components: {
    Header, Footer, Cart
  },
  data () {
    return {
      showCart: false
    }
  },
  methods: {
    closeCart(value) {
      this.showCart = value
    },
    openCart() {
      this.showCart = true
    }
  },
  computed: {
      products() {
          return this.$store.getters.cart
      }
  },
  watch: {
    products() {
      this.openCart()
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main';
  
</style>
