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
