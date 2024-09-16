<template>
  <main>
  <div class="content-container-propos">
    <section class="top-container"><img class="setting-icons-top" src="../assets/images/settingIcons.png"></section>
<p class="CV-title">A Propos De Moi</p>
<img class="Moi-2" src="../assets/images/Moi-2.png">
<p class="CV-text">Développeur web passionnée par la création d'application. Polyvalente, je maîtrise les différentes étapes de la création d’une application web, de la compréhension des besoins utilisateurs au développement, front-end et back-end.</p>
<br><br>
<div class="highlight-box">
  <p>Proactive<br>Organisée<br>Responsable<br>Creative<br>Travail en équipe<br>Autonome</p>
</div>
</div>
<div class="content-container-extra">
  <section class="top-container"><img class="setting-icons-langues" src="../assets/images/settingIcons.png"></section>
<p class="CV-title">Langues</p>
<br>
<div class="highlight-box-langues">Français - C1<br>
Anglais - C2<br>
Espagnol - Langue Maternelle</div>
<br>
</div>
<div class="content-container-competences">
  <section class="top-container"><img class="setting-icons-comp" src="../assets/images/settingIcons.png"></section>
<p class="CV-title">Competences</p>
<div class="CV-img-container">
  <img class="CV-img" src="../assets/images/HTML.png">
  <img class="CV-img" src="../assets/images/CSS.png">
  <img class="CV-img" src="../assets/images/JS.png">
  <img class="CV-img" src="../assets/images/Vue.png">
  <img class="CV-img" src="../assets/images/PS.png">
  <img class="CV-img" src="../assets/images/AI.png">
  <img class="CV-img" src="../assets/images/ID.png">
  <img class="CV-img" src="../assets/images/Figma.png">
</div>
</div>
<div class="content-container-formation">
  <section class="top-container"><img class="setting-icons-form" src="../assets/images/settingIcons.png"></section>
<p class="CV-title">Formation</p>
<p class="CV-text">
  <span>Titre professionnel Développeur Web et Web Mobile</span><br>
  AFPA - Territoire Digital (France)<br>
  2024-2025
  <br>
  <span>CAP Pâtisserie-Boulangerie</span><br>
  FEGREPPA (46035 València-Espagne)<br>
  2016-2018
  <br>
  <span>Master Design Graphique</span><br>
  EASD Valencia (46001 València - Espagne)<br>
  2011-2015
</p>
</div>
<div class="content-container-experience">
  <section class="top-container"><img class="setting-icons-exp" src="../assets/images/settingIcons.png"></section>
    <p class="CV-title">Experience Professionnelle</p>
    <p class="CV-text">
      <span>> Demi-Chef de Partie Pâtisserie</span><br>
      Restaurant “Patern", 54000 Nancy / Nov. 2023 - Dec. 2023<br>
      Restaurant “Excelsior”, 54000 Nancy / Juin 2021 - Nov. 2023<br>
      Cuisine Centrale “Venatici Cuisine”, 46980 Paterna - Espagne / Août 2019 - Fév. 2020<br>
      Création et préparation de desserts. Service déjeuner-dîner. Gestion des commandes.
<br><br>
<span>> Commise Cuisine / Pâtissière</span><br>
Restaurant “Voltereta”, 46005 València - Espagne / Mars 2019 - Juillet 2019<br>
The Merchant Hotel 5*, BT12DZ Belfast - Royaume-Uni / Avril 2018 - Juin 2018<br>
Pâtisserie “Granja San Andrés”, 46007 València - Espagne / Nov. 2017 - Mars 2018<br>
<br>
<span>> Graphiste et Vendeuse</span><br>
Magasin “CityCash”, 46014 València - Espagne / Nov. 2015 - Nov.2017<br>
Service client et vente au détail. Commandes auprès des fournisseurs et contrôle des stocks.
Maintenance de la boutique physique et en ligne. Réalisation d’affiches et flyers.
<br><br>
<span>> Graphiste</span><br>
Studio “DobleVia Comunicación Creativa”, València - Espagne / Fév. 2015 - Avril 2015<br>
Mise en œuvre de campagnes publicitaires. Modification et création d'affiches, flyers et marques.</p>
</div>

</main>
  </template>

<script>
export default {
name: 'CVComponent',
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
    background-color: #7668ae;
  }

  .content-container-propos {
    display: inline-block;
    margin-top: -180px;
    margin-left: 4%; 
    margin-bottom: 35px;
    width: 20%;
    background-color: white;
    border-radius: 20px;
    border-color: black;
    border-width: 3px;
    border-style: solid;
    box-shadow: 20px 20px 2px 1px rgba(0, 0, 255, .2);
    color:black;
    padding-bottom: 10px;
}

.content-container-formation {
    margin-bottom: 35px;
    margin-top: -350px;
    margin-left: 65%;
    width: 22%;
    background-color: white;
    border-radius: 20px;
    border-color: black;
    border-width: 3px;
    border-style: solid;
    box-shadow: 20px 20px 2px 1px rgba(0, 0, 255, .2);
    color:black;
    padding-bottom: 10px;
}

.content-container-experience {
    margin-top: 20px;
    margin-left: 37%; 
    margin-bottom: 35px;
    width: 50%;
    background-color: white;
    border-radius: 20px;
    border-color: black;
    border-width: 3px;
    border-style: solid;
    box-shadow: 20px 20px 2px 1px rgba(0, 0, 255, .2);
    color:black;
    padding-bottom: 10px;
}

.content-container-competences {
    margin-top: -875px;
    margin-left: 37%; 
    margin-bottom: 35px;
    width: 25%;
    background-color: white;
    border-radius: 20px;
    border-color: black;
    border-width: 3px;
    border-style: solid;
    box-shadow: 20px 20px 2px 1px rgba(0, 0, 255, .2);
    color:black;
    padding-bottom: 10px;
}

.content-container-extra {
    margin-bottom: 35px;
    margin-left: 14%; 
    width: 20%;
    background-color: white;
    border-radius: 20px;
    border-color: black;
    border-width: 3px;
    border-style: solid;
    box-shadow: 20px 20px 2px 1px rgba(0, 0, 255, .2);
    color:black;
    padding-bottom: 10px;
}

.Moi-2 {
  width: 180px;
  margin-left: 100px;
  margin-top: -15px;
  margin-bottom: 10px;
}

.CV-title {
  color: #352f6a;
  font-family: Big Pixel;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}

.CV-text {
  font-family: Roboto;
  font-size: 14px;
  padding-left: 20px;
  padding-right: 20px;
}

span {
  color: #7668ae;
  font-weight: bold;
}

.highlight-box {
  color: #da3892;
  font-family: Big Pixel;
  text-align: center;
  font-size: 14px;
  margin-top: -50px;
}

.highlight-box-langues {
  color: #da3892;
  font-family: Big Pixel;
  text-align: center;
  font-size: 14px;
  margin-top: -30px;
}

.CV-img-container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.CV-img {
  width: 70px;
  margin: 5px;
}

.setting-icons-langues {
  width: 30%;
  margin-left: 65%;
  margin-top: 2%;
}

.setting-icons-comp {
  width: 25%;
  margin-left: 72%;
  margin-top: 2%;
}

.setting-icons-top {
  width: 30%;
  margin-left: 65%;
  margin-top: 2%;
}

.setting-icons-form {
  width: 28%;
  margin-left: 70%;
  margin-top: 2%;
}

.setting-icons-exp {
  width: 13%;
  margin-left: 85%;
  margin-top: 1%;
}

@media screen and (max-width: 1550px){

main {
  margin-top: 15%;
}

.content-container-propos {
    display: inline-block;
    margin-top: -180px;
    margin-left: 4%; 
    margin-bottom: 35px;
    width: 20%;
}

.setting-icons {
  width: 30%;
  margin-left: 65%;
  margin-top: 2%;
}


.setting-icons-top {
  width: 35%;
  margin-left: 60%;
  margin-top: 2%;
}

.setting-icons-form {
  width: 35%;
  margin-left: 62%;
}

.setting-icons-exp {
  width: 15%;
  margin-left: 83%;
  margin-top: 1%;
}

.content-container-competences {
    margin-top: -895px;
    margin-left: 38%; 
    margin-bottom: 35px;
    width: 25%;
}

.content-container-extra {
    margin-bottom: 35px;
    margin-left: 15%; 
    width: 20%;
}
 
.content-container-formation {
    margin-bottom: 35px;
    margin-top: -350px;
    margin-left: 65%;
    width: 22%;
}

.content-container-experience {
    margin-top: 20px;
    margin-left: 38%; 
    margin-bottom: 35px;
    width: 50%;
}
}

@media screen and (max-width: 428px) {

main {
    margin-top: 45%;
}

.setting-icons-top {
  width: 35%;
  margin-left: 64%;
  margin-top: -2%;
}

.setting-icons {
  margin-left: 64%;
}
  
  .content-container-propos {
    display: block;
    margin-left: auto;
    margin-right:auto;
    margin-bottom: 35px;
    margin-top: 10%;
    width: 80%;
  }

  .content-container-extra {
    margin-left: auto;
    margin-right:auto;
    margin-bottom: 35px;
    margin-top: 5%;
    width: 80%;
}

.content-container-competences {
    margin-left: auto;
    margin-right:auto;
    margin-bottom: 35px;
    margin-top: 5%;
    width: 80%;
}

  .content-container-formation {
    margin-left: auto;
    margin-right:auto;
    margin-bottom: 35px;
    margin-top: 5%;
    width: 80%;
}

.content-container-experience {
    margin-left: auto;
    margin-right:auto;
    margin-bottom: 35px;
    margin-top: 5%;
    width: 80%;
}

.Moi-2 {
  width: 180px;
  margin-left: 75px;
  margin-top: -15px;
  margin-bottom: 10px;
}

}

  </style>
