<template>
    <nav class="nav-right">
      <ul class="list2">
        <a href="https://www.linkedin.com/in/juliana-muir-elesgaray/"><li>
           <img class="nav-icons" src="../assets/images/Linkedin.png">
        <br>
        </li>
        <li><p class="nav-text">LinkedIn</p></li></a>
        <a href="https://github.com/JME-13"><li>
            <img class="nav-icons" src="../assets/images/Github.png">
        </li>
        <li><p class="nav-text">GitHub</p></li></a>
        <a href="https://www.behance.net/Irey"><li>
            <img class="nav-icons" src="../assets/images/Behance.png">
        </li>
        <li><p class="nav-text">Behance</p></li></a>
      </ul>
    </nav>
    </template>

  <style scoped>
  
    a {
      text-decoration: none;
    }

    .nav-right {
      float: right;
      margin-right: 50px;
    }

    @media screen and (max-width: 428px) {

    .list2 {
      display: flex;
      gap: 10px;
      margin-top: -95px;
      margin-right: 40px;
    }
    
    .nav-right {
      margin-top: 3%;
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
