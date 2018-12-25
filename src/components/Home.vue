<template>
    <div id="home" class="home">
        <div class="content">
          <Filters  :active_category="active_category" :active_size="active_size" :price_from="price_from" :price_to="price_to"></Filters>
          <Products :products="products" :sort="sort" :page="current_page"></Products>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Filters from '../components/Filters'
import Products from '../components/Products'
export default {
    name: 'home',
    props: ['category', 'size', 'price_from', 'price_to', 'sort', 'page'],
    components: {
        Filters, Products
    },
    data() {
        return {
            
        }
    },
    methods: {
        createFilter() {
            const filter = {
                category: this.category,
                size: this.size,
                price_from: this.price[0],
                price_to: this.price[1]
            }
            this.$store.dispatch('filter', filter);         
        }
    },
    computed: {
        products() {
            this.$store.dispatch('sortProduts');
            let products = this.$store.getters.productsForPage(this.$store.getters.curentPage)
            if (products.length <= this.$store.getters.countPages) {
                this.$store.dispatch('curentPage', 1);
            }
            return products
        },
        active_category() {
            if (this.category) {
                if (this.category.length != 0) {
                    return this.category.split(' ');
                }
            }
            return []
        },
        active_size() {
            if (this.size) {
                if (this.size.length != 0) {
                    return this.size.split(' ');
                }
            }
            return []
        }, 
        current_page() {
           if (this.page > 0)  
           return this.page 
           else return 1
        }
    }
}
</script>
