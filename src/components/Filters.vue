<template>
    <div id="filters" class="filters">
        <div style="display: none">
            {{active_category}}
            {{active_size}}
            {{price_from}}
            {{price_to}}
        </div>
        <div class="filter">
            <h2>Category</h2>
            <div class="checkbox">
                <input type="checkbox" id="filter_category1" value="meat" v-model="category" name="filter_category">
                <label for="filter_category1">
                    <i class="icon-meat"></i>Meat
                </label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="filter_category2" value="veggie" v-model="category" name="filter_category">
                <label for="filter_category2">
                    <i class="icon-veggie"></i>Veggie
                </label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="filter_category3" value="hot" v-model="category" name="filter_category">
                <label for="filter_category3">
                    <i class="icon-hot"></i>Hot
                </label>
            </div>
        </div>
        <div class="filter">
            <h2>Default Size</h2>
            <div class="checkbox">
                <input type="checkbox" id="filter_size1" value="400mm" v-model="size" name="filter_size">
                <label for="filter_size1">
                    400mm
                </label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="filter_size2" value="600mm" v-model="size" name="filter_size">
                <label for="filter_size2">
                    600mm
                </label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="filter_size3" value="800mm" v-model="size" name="filter_size">
                <label for="filter_size3">
                    800mm
                </label>
            </div>
        </div>
        <div class="filter">
            <h2>Price</h2>
            <vue-slider 
                :tooltip="false" 
                v-model="price" 
                :min="priceMinMax[0]" 
                :max="priceMinMax[1]"
                :processStyle="processStyle"
                :bgStyle="bgStyle"
            ></vue-slider>
            <div class="filter-row">
                <div class="input active">
                    <div class="input-label">From</div>
                    <input type="number" v-model="price[0]">
                </div>
                <div class="input active">
                    <div class="input-label">To</div>
                    <input type="number" v-model="price[1]">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vueSlider from 'vue-slider-component';
export default {
    name: 'filters',
    components: {
        vueSlider
    },
    props: ['active_category', 'active_size', 'price_from', 'price_to'],
    data() {
        return {
            category: [],
            size: [],
            price: [],
            priceMinMax: [],

            // style slider
            processStyle: {
                "backgroundColor": "#ff532d",
                "height": "4px",
                "border-radius": "4px"
                
            },
            bgStyle: {
                "backgroundColor": "#d0d0d0",
                "height": "4px",
                "border-radius": "4px"
            }
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
    watch: {
        category() {
            this.createFilter()
        },
        size() {
            this.createFilter()
        },
        price() {
            this.createFilter()
        }
    },
    updated() {
        this.category = this.active_category
        this.size = this.active_size
    },
    created() {
        this.priceMinMax[0] = parseInt(this.$store.getters.minPrice)
        this.priceMinMax[1] = parseInt(this.$store.getters.maxPrice)

        this.category = this.active_category
        this.size = this.active_size
        
        this.price_from != undefined ? this.price[0] = this.price_from : this.price[0] = this.priceMinMax[0]
        this.price_to != undefined ? this.price[1] = this.price_to : this.price[1] = this.priceMinMax[1]
    }
}
</script>
