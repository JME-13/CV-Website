<template>
<nav>
  <ul class="list">
    <li>
        <router-link to="/"><img class="nav-icons" src="../assets/images/Home.png"></router-link>
    </li>
    <li><p class="nav-text">Accueil</p></li>
    <li>
        <router-link to="/Projets"><img class="nav-icons" src="../assets/images/Projects.png"></router-link>
    </li>
    <li><p class="nav-text">Projets</p></li>
    <li>
        <router-link to="/CV"><img class="nav-icons" src="../assets/images/CV.png"></router-link>
    </li>
    <li><p class="nav-text">CV</p></li>
    <li>
       <router-link to="/Contact"><img class="nav-icons" src="../assets/images/Contact.png"></router-link>
    </li>
    <li><p class="nav-text">Contact</p></li>
  </ul>
</nav>
</template>

<style scoped>
@media screen and (max-width: 428px) {

.list {
  display: flex;
  gap: 5px;
  margin-top: -105px;
  margin-left: -20px;
}

.nav-icons {
  width: 60px;
  height: 60px;
}

.nav-text {
  display: none;
}
}
</style>
