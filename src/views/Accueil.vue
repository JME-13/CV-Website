<template>
    <div class="Accueil">
      <Menu/>
      <MenuRight/>
      <Accueil />
    </div>
  </template>
  
  <script>
    import Accueil from '../components/Accueil.vue';
  import Menu from '../components/Menu.vue'
  import MenuRight from '../components/MenuRight.vue'
  
  export default {
          name: 'AccueilComponent',
          components: {
              Menu,
              Accueil,
              MenuRight,
          }
      };
  </script>