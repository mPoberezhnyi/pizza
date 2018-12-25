<template>
    <nav id="navigation" class="nav">
        <a v-for="item in navigation" :key="item.title" :href="item.link" class="nav-item">{{item.title}}</a>
    </nav>
</template>

<script>
export default {
    name: "navigation",
    data() {
        return {
            navigation: [
                { title: 'Pizza', link: '' },
                { title: 'Delivery', link: '/delivery' },
                { title: 'About Us', link: '/about-us' },
            ]
        }
    }
}
</script>
