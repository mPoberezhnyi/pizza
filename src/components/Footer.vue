<template>
    <footer id="bottom" class="footer">
        <router-link :to="{ path: '/' }" class="logo">
            <picture>
                <source media="(min-width: 1224px)" srcset="../assets/img/logo-pizza@2x.png" />
                <source media="(min-width: 1920px)" srcset="../assets/img/logo-pizza@3x.png" />
                <img src="../assets/img/logo-pizza.png" />
            </picture>
        </router-link>
        <navigation></navigation>
    </footer>
</template>

<script>
import Vue from 'vue'
import Navigation from './Navigation'

export default {
    name: "bottom",
    components: {
        Navigation
    },
    data() {
        return {

        }
    }
}
</script>