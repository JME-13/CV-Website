<template>
<main>
  <img class="Moi" src="../assets/images/Moi.png">
<div class="content-container">
  <section class="top-container"><img class="setting-icons" src="../assets/images/settingIcons.png"></section>
  <div class='content'>
  <p class="Welcome">Bienvenue!</p>
  <br>
 <p>Je m'appelle <span> Juliana Muir Elesgaray</span> !</p>
  <p>Je suis une <br><span class="career-text">Web Developper,Web Designer</span> et <span class="career-text">Graphiste</span><br> basé à Nancy.</p>
</div>
</div>
</main>
</template>

<script>
export default {
  name: 'Accueil'
}
</script>

<style scoped>
main {
  margin-top: 15%;
}

.Moi {
  position: absolute;
  margin-top: 6%;
  margin-left: 55%;
  width: 20%;
}

.Welcome {
  font-family: Big Pixel;
  font-size: 48px;
  margin-top: 50px;
}

span {
  color: #da3892;
  font-family: Big Pixel;
  font-size: 32px;
}

.content {
  width: 80%;
  text-align: center;
  font-size:20px;
  line-height:30px;
  color:rgb(173, 176, 230);
  margin-left: auto;
  margin-right: auto;
}

.career-text {
  color: #a76cad;
  font-family: Big Pixel;
  font-size: 30px;
  font-weight: bold;
}

@media screen and (max-width: 1280px){
  .Moi {
  width: 23%;
  margin-left: 50%;
  margin-top: 18%;
}

.setting-icons {
  margin-left: 83%;
}

}

@media screen and (max-width: 428px){
  main {
  margin-top: 50%;
}

.setting-icons {
  margin-left: 62%;
  margin-top: -2%;
}

.Moi {
  width: 60%;
  margin-left: 57%;
  margin-top: 120%;
}

.Welcome {
  font-size: 35px;
}

.career-text {
  font-size: 25px;
}
}
</style>