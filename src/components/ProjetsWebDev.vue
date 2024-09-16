<template>
    <main>
  <Menu />
  <MenuRight />
  <div class="content-container">
    <section class="top-container"><img class="setting-icons" src="../assets/images/settingIcons.png"></section>
          <div class="projects-box">
              <div class="row row-cols-1 row-cols-md-3">
                <div class="col">
                <PopupWrapper>
                    <template #header>
                        <div class="popover2">
                            <div class="img__wrap">
                                    <img src="../assets/images/Cards/MADB.png" class="img__img" alt="My Atiny Database">
                                        <div class="img__description_layer">
                                            <h5 class="img__description">My Atiny Database</h5>
                                        </div>
                            </div>
                        </div>
                    </template>
                    <template #content>
                        <div class="popover-content">
                            <section class="top-container"><img class="setting-icons-popover" src="../assets/images/settingIcons.png"></section>
                            Section à venir!</div>
                    </template>
                </PopupWrapper>
                  </div>
              <div class="col">
                <PopupWrapper>
                    <template #header>
                        <div class="popover2">
                            <div class="img__wrap">
                                    <img src="../assets/images/Cards/CV.png" class="img__img" alt="JulianaMuir.com">
                                        <div class="img__description_layer">
                                            <h5 class="img__description">JulianaMuir.com</h5>
                                        </div>
                            </div>
                        </div>
                    </template>
                    <template #content>
                        <div class="popover-content">
                            <section class="top-container"><img class="setting-icons-popover" src="../assets/images/settingIcons.png"></section>
                            Section à venir!</div>
                    </template>
                </PopupWrapper>
                  </div>
              <div class="col">
                <PopupWrapper>
                    <template #header>
                        <div class="popover3">
                            <div class="img__wrap">
                                    <img src="../assets/images/Cards/AdG.png" class="img__img" alt="L'Atelier des Dragons">
                                            <h5 class="img__description">L'Atelier des Dragons</h5>
                            </div>
                        </div>
                    </template>
                    <template #content>
                        <div class="popover-content">
                            <section class="top-container"><img class="setting-icons-popover" src="../assets/images/settingIcons.png"></section>
                            Section à venir!</div>
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

main {
  margin-top: 15%;
}

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

  .img__description {
    margin-top: 15px;
    text-align: center;
  }

.popover, .popover2, .popover3  {
    cursor: pointer;
}

.setting-icons-popover {
  margin-left: 64%;
  margin-top: 5%;
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
  text-align: center;
  width: 50%;
  height: 500px;
  z-index: 1;
}

@media screen and (max-width: 1550px){
 
  .img__img {
      height: 150px;
      width: 300px;
  }
  
  .img__description {
    width: 300px;
    margin-top: 15px;
    text-align: center;
  }

  .setting-icons-popover {
    width: 15%;
    margin-left: 80%;
    margin-top: 1%;
}

}

@media screen and (max-width: 428px) {

main {
    margin-top: 50%;
}

.content-container {
  width: 85%;
  margin-top: 20px;
}

.setting-icons {
  margin-left: 68%;
  margin-top: -1%;
}

nav {
    margin-top: -50px;
    }

.nav-right {
    margin-top: 15px;
    }

.img__img {
      height: 180px;
      width: 325px;
  }

.img__description {
    display: none;
  }

.setting-icons-popover {
    width: 30%;
    margin-left: 65%;
    margin-top: 2%;
}

 .popover-content {
  position: absolute;
  top: 250px;
  left: 3%;
  text-align: center;
  width: 95%;
  height: 80%;
  z-index: 1;
}

}
  </style>