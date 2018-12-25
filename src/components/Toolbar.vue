<template>
    <div id="toolbar" class="products-toolbar">
        <div style="display: none;">{{active_sort}}</div>
        <div class="sort">
            <span class="sort-title">Sort</span>
            <select name="" id="" v-model="sort">
                <option value="Popular" checked>Popular</option>
                <option value="Price to Low">Price to Low</option>
                <option value="Price to Hight">Price to Hight</option>
            </select>
        </div>
        <div class="combined">
            <div class="combined-item row">
                <input type="radio" v-model="grid" value="row" id="combined1">
                <label for="combined1"><i class="icon-combined-shape"></i></label>
            </div>
            <div class="combined-item grid">
                <input type="radio" v-model="grid" value="grid" id="combined2">
                <label for="combined2"><i class="icon-shape"></i></label>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'toolbar',
    props: ['active_sort'],
    data() {
        return {
            grid: 'grid',
            sort: 'Popular'
        }
    },
    watch: {
        grid(value) {
            this.$store.dispatch('changeCombined', value)
            this.$emit('change-combined', value)
        },
        sort(value) {
            this.$store.dispatch('sort', value)
            // this.$store.dispatch('sortProduts');
        }
    },
    created() {
        this.grid = this.$store.getters.combined
        this.sort = this.$store.getters.sort;
    },
    updated() {
        this.sort = this.active_sort
    }
}
</script>
