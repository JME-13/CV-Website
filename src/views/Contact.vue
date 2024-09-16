<template>
      <Menu/>
      <MenuRight/>
        <ContactComponent />
  </template>
  
  <script>
  import ContactComponent from '../components/ContactComponent.vue';
  import Menu from '../components/Menu.vue'
  import MenuRight from '../components/MenuRight.vue'
  
  export default {
          name: 'Contact',
          components: {
              Menu,
              ContactComponent,
              MenuRight,
          }
      };
  </script>

<style scoped>

</style>