<template>
  <main>
    <div class="content-container">
      <section class="top-container"><img class="setting-icons" src="../assets/images/settingIcons.png"></section>
        <div class="projects-buttons">
  <div class="row">
    <div class="col-sm">
        <router-link class="rl" to="/DevWeb"><img class="projects-images" src="../assets/images/WebDev.png">
        <p>Web Developper</p></router-link>
    </div>
    <div class="col-sm">
        <router-link class="rl" to="/WebDesign"><img class="projects-images" src="../assets/images/WebDesign.png">
        <p>Web Design</p></router-link>
    </div>
    <div class="col-sm">
        <router-link class="rl" to="/Graphiste"><img class="projects-images" src="../assets/images/Graphiste.png">
        <p>Graphiste</p></router-link>
    </div>
</div>
  </div>
</div>
</main>
    </template>

<script>
export default {
  name: 'ProjetsMainComponent',
  data() {
    return {
      // Your data properties here
    };
  },
  created() {
    // Ensure no infinite loops or recursion
  },
  methods: {
    // Ensure proper handling of methods
  },
};
</script>
    
    <style scoped>

main {
      margin-top: 15%;
    }

    .top-container {
    background-color: #da3892;
    }

    .content-container {
    width: 70%;
    margin-top: -50px;
    }

    .projects-buttons {
        width: 80%;
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .projects-images {
        width: 250px;
    }
    
    .col-sm {
        text-align: center;
    }

    p {
        color: #352f6a;
        font-family: Big Pixel;
        font-size: 26px;
        font-weight: bold;
        text-align: center;
    }

    .rl {
        text-decoration: none;
    }
    </style>