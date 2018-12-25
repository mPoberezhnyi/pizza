<template>
    <div id="pagination" class="pagination">
        <div style="display: none;">{{page}}</div>
        <button 
            @click.prevent="choosePage(p)" 
            v-for="p in pages" 
            class="pagination-item"
            :class="{active: p == curentPage}"
            :key="p">
            {{p}}    
        </button>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    props: ['pagination', 'page'],
    data() {
        return {
            curentPage: 1,
            countPages: 1
        }
    },
    methods: {
        choosePage(value) {
            this.$store.dispatch('curentPage', value);            
        }
    },
    computed: {
        pages() {
            this.$store.dispatch('countPages');
            this.curentPage = this.$store.getters.curentPage
            this.countPages = this.$store.getters.countPages
            let p = []
            for (let i = 1; i <= this.countPages; i++) p.push(i)
            return p
        }
    },
    updated() {
        this.curentPage = this.page
    }
}
</script>
