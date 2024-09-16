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
                                    <img src="../assets/images/Cards/Bobsmade1.png" class="img__img" alt="...">
                                    <div class="img__description_layer">
                                            <h5 class="img__description">Bobsmade V1</h5>
                                        </div>
                            </div>
                        </div>
                    </template>
                    <template #content>
                        <div class="popover-content">
                            <section class="top-container"><img class="setting-icons-popover" src="../assets/images/settingIcons.png"></section>
                            <p class="project-title">Bobsmade V1</p>
                            <p class="project-text">
                                Projet réalisé en 2011. Sur Deviantart, les utilisateurs de Bobsmade ont organisé un concours de refonte de leur site internet, ouvert à tous. Il suffisait de réaliser la maquette, le gagnant se chargerait ensuite de la réaliser de manière dynamique. J'ai décidé de participer et c'était ma première participation.
                            </p>
                        <div class="img-container">
                        <img class="img-size" src="../assets/images/Projects/Bobs1.jpg">
                        </div>
                        </div>
                    </template>
                </PopupWrapper>
                    </div>
                <div class="col">
                    <PopupWrapper>
                    <template #header>
                        <div class="popover2">
                            <div class="img__wrap">
                                    <img src="../assets/images/Cards/Bobsmade2.png" class="img__img" alt="...">
                                    <div class="img__description_layer">
                                            <h5 class="img__description">Bobsmade V2</h5>
                                        </div>
                            </div>
                        </div>
                    </template>
                    <template #content>
                        <div class="popover-content">
                            <section class="top-container"><img class="setting-icons-popover" src="../assets/images/settingIcons.png"></section>
                            <p class="project-title">Bobsmade V2</p>
                            <p class="project-text">
                                Projet réalisé en 2011. Sur Deviantart, les utilisateurs de Bobsmade ont organisé un concours de refonte de leur site internet, ouvert à tous. Il suffisait de réaliser la maquette, le gagnant se chargerait ensuite de la réaliser de manière dynamique. J'ai décidé de participer et c'était ma deuxière participation.
                            </p>
                        <div class="img-container">
                        <img class="img-size" src="../assets/images/Projects/Bobs2.jpg">
                        </div>    
                        </div>
                    </template>
                </PopupWrapper>
                    </div>
                <div class="col">
                    <PopupWrapper>
                    <template #header>
                        <div class="popover3">
                            <div class="img__wrap">
                                    <img src="../assets/images/Cards/CCC.png" class="img__img" alt="...">
                                    <div class="img__description_layer">
                                            <h5 class="img__description">Central City Comics</h5>
                                        </div>
                            </div>
                        </div>
                    </template>
                    <template #content>
                        <div class="popover-content">
                            <section class="top-container"><img class="setting-icons-popover" src="../assets/images/settingIcons.png"></section>
                           <p class="project-title">Central City Comics</p>
                            <p class="project-text">
                                Ce site Web a été créé dans le cadre d'un projet dans le cours de design interactif en 2014. Il nous a été demandé de créer un site Web avec une boutique sur le thème que nous souhaitions. J'ai choisi de créer une boutique de BD car c'est un de mes hobbys. 
                                <br>
                                En plus d'être une boutique, le site Internet contient une section de type réseau social, dans laquelle les acheteurs peuvent interagir entre eux. Le magasin porte le nom de la ville de mon personnage de bande dessinée préféré, Flash. 
                                <br>
                                Pour le site Internet, nous avons dû réaliser à la fois une version standard et une version adaptée aux téléphones mobiles ou aux tablettes.
                            </p>
                        <div class="img-container">
                        <img class="img-size" src="../assets/images/Projects/CCC1.jpg">
                        </div>
                        <div class="img-container">
                        <img class="img-size" src="../assets/images/Projects/CCC2.jpg">
                        </div> 
                        <div class="img-container">
                        <img class="img-size" src="../assets/images/Projects/CCC3.jpg">
                        </div> 
                        <div class="img-container">
                        <img class="img-size" src="../assets/images/Projects/CCC4.jpg">
                        </div>  
                        </div>
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
      background-color: #ecb841;
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
        color:#ecb841;
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
  z-index: 1;
}

.project-title {
    margin-top: 20px;
    font-family: Big Pixel;
    font-size: 36px;
    color:#352f6a;
    text-align: center;
}

.project-text {
    margin: 20px;
    text-align: center;
}

.img-container {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
}

.img-size {
    width: 80%;
    margin: 5px;
    margin-bottom: 30px;
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

.img-size {
    width: 75%;
    margin: 5px;
    margin-bottom: 30px;
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
  z-index: 1;
}

}
    </style>