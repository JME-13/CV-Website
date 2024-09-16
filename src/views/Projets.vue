<template>
    <Menu />
    <MenuRight />
      <ProjetsMainComponent />
</template>
  
  <script>
  import ProjetsMainComponent from '../components/ProjetsMainComponent.vue';
  import Menu from '../components/Menu.vue'
  import MenuRight from '../components/MenuRight.vue'
  
  export default {
          name: 'Projets',
          components: {
              Menu,
              ProjetsMainComponent,
              MenuRight,
          },
};
</script>

<style scooped>




</style>