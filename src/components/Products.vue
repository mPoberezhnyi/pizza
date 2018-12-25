<template>
    <div id="products" class="products-wrapper">
        <Toolbar @change-combined="changeCombined" :active_sort="sort"></Toolbar>
        <div class="products" :class="combined">
            <Product v-for="p in products" :key="p.id" :product="p"></Product>
        </div>
        <div v-if="!products">
            <h2>no items!!!</h2>
        </div>
        <Pagination :pagination="pagination" :page="page"></Pagination>
    </div>
</template>

<script>
import Vue from 'vue'
import Product from '../components/Product'
import Pagination from '../components/Pagination'
import Toolbar from '../components/Toolbar'

export default {
    name: 'products',
    props: ['products', 'sort', 'page'],
    components: {
        Product, Pagination, Toolbar
    },
    data() {
        return {
            combined: 'grid'
        }
    },
    methods: {
        changeCombined(c) {
            this.combined = c
        }
    },
    created() {
        this.combined = this.$store.getters.combined
    },
    computed: {
        pagination() {

        }
    }
}
</script>

