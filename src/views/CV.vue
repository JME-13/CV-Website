<template>
    <Menu/>
    <MenuRight/>
    <CVComponent />
</template>

<script>
import CVComponent from '../components/CVComponent.vue'
import Menu from '../components/Menu.vue'
import MenuRight from '../components/MenuRight.vue'

export default {
        name: 'CV',
        components: {
            Menu,
            CVComponent,
            MenuRight,
        }
    };
</script>

<style scoped>
nav {
        margin-top: -49px;
        }

    .nav-right {
        margin-top: 16px;
        margin-right: 42px;
        }

</style>