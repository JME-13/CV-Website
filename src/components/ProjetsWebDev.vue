<template>
    <main>
  <Menu />
  <MenuRight />
  <div class="content-container">
    <section class="top-container"><img class="setting-icons" src="../assets/images/settingIcons.png"></section>
          <div class="projects-box">
              <div class="row row-cols-1 row-cols-md-3">
              <div class="col">
                <img src="../assets/images/Cards/blank.png" class="img__img" alt="...">
                <PopupWrapper>
                    <template #header>
                        <div class="popover">
                            <div class="img__wrap">
                                    <img src="../assets/images/Cards/MADB.png" class="img__img" alt="...">
                                        <div class="img__description_layer">
                                            <h5 class="img__description">My Atiny DataBase</h5>
                                        </div>
                            </div>
                        </div>
                    </template>
                    <template #content>
                        <div class="popover-content">
                            <section class="top-container"><img class="setting-icons" src="../assets/images/settingIcons.png"></section>
                            This is a Popup Content</div>
                    </template>
                </PopupWrapper>
                </div>
              <div class="col">
                <img src="../assets/images/Cards/blank.png" class="img__img" alt="...">
                <PopupWrapper>
                    <template #header>
                        <div class="popover2">
                            <div class="img__wrap">
                                    <img src="../assets/images/Cards/CV.png" class="img__img" alt="...">
                                        <div class="img__description_layer">
                                            <h5 class="img__description">CV Web</h5>
                                        </div>
                            </div>
                        </div>
                    </template>
                    <template #content>
                        <div class="popover-content">
                            <section class="top-container"><img class="setting-icons" src="../assets/images/settingIcons.png"></section>
                            This is a Popup Content 2</div>
                    </template>
                </PopupWrapper>
                  </div>
              <div class="col">
                <img src="../assets/images/Cards/blank.png" class="img__img" alt="...">
                <PopupWrapper>
                    <template #header>
                        <div class="popover3">
                            <div class="img__wrap">
                                    <img src="../assets/images/Cards/AdG.png" class="img__img" alt="...">
                                        <div class="img__description_layer">
                                            <h5 class="img__description">L'Atelier des Dragons</h5>
                                        </div>
                            </div>
                        </div>
                    </template>
                    <template #content>
                        <div class="popover-content">
                            <section class="top-container"><img class="setting-icons" src="../assets/images/settingIcons.png"></section>
                            This is a Popup Content 3</div>
                    </template>
                </PopupWrapper>
                  </div>
              </div>
          </div>
  <p class="projects-btext"><span>Psst!</span> Trouve encore plus de mes projets sur <span>Behance</span>!</p>
  </div>
</main>
</template>

<script setup>
import Menu from '../components/Menu.vue'
import MenuRight from '../components/MenuRight.vue'
import PopupWrapper from '../components/Projets/PopupWrapper.vue';
</script>

<script>
export default {
name: 'ProjetsWebDev',
components: {
            Menu,
            MenuRight,
          },
data() {
  return {
    open: false
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

    nav {
        margin-top: 0px;
        }

    .nav-right {
        margin-top: 65px;
        }

    .content-container {
        margin-top: -50px;
    }

  .top-container {
    background-color: #a76cad;
  }

  .content-container {
    width: 70%;
    margin-bottom: 50px;
  }

  .projects-box {
      width: 95%;
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
  }
  
  span {
      color:#a76cad;
      font-weight: bold;
  }

  .projects-btext {
      color: #352f6a;
      font-family: Big Pixel;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin-top: 50px;
  }

  .img__wrap {
      position: relative;
      height: 200px;
      width: 400px;
  }

  .img__img {
      height: 200px;
      width: 400px;
  }

  .img__description_layer {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #a66cadaf;
      color: #fff;
      font-family: Big Pixel;
      font-weight: bold;
      visibility: hidden;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity .2s, visibility .2s;
  }

  .img__wrap:hover .img__description_layer {
      visibility: visible;
      opacity: 1;
  }

  .img__description {
      transition: .2s;
      transform: translateY(1em);
  }

  .img__wrap:hover .img__description {
      transform: translateY(0);
  }

  .popover {
    position: absolute;
    top: 330px;
    left: 310px;
    cursor: pointer;
    z-index: 1;
}

.popover2 {
    position: absolute;
    top: 330px;
    left: 730px;
    cursor: pointer;
}

.popover3 {
    position: absolute;
    top: 330px;
    left: 1150px;
    cursor: pointer;
}

.popover-content {
  position: absolute;
  top: 150px;
  left: 25%;
  background: #fff;
  border-radius: 20px;
  border-color: #333;
  border-width: 3px;
  border-style: solid;
  margin-top: 4px;
  color: #333;
  text-align: left;
  width: 50%;
  height: 500px;
  z-index: 1;
}

  </style>