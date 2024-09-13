<template>
  <main>
    <div class="content-container">
      <section class="top-container"><img class="setting-icons" src="../assets/images/settingIcons.png"></section>
          <section class="get-in-touch">
   <h1 class="title">Une question? Une idée de projet ? Contactez moi!</h1>
   <form class="contact-form row">
      <div class="form-field col-lg-6">
         <input id="name" class="input-text js-input" type="text" required>
         <label class="label" for="name">Prénom</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="email" class="input-text js-input" type="email" required>
         <label class="label" for="email">E-mail</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="company" class="input-text js-input" type="text" required>
         <label class="label" for="portable">Número de Portable</label>
      </div>
       <div class="form-field col-lg-6 ">
         <input id="phone" class="input-text js-input" type="text" required>
         <label class="label" for="sujet">Sujet</label>
      </div>
      <div class="form-field col-lg-12">
         <input id="message" class="input-text js-input" type="text" required>
         <label class="label" for="message">Message</label>
      </div>
      <div class="form-field col-lg-12">
         <input class="submit-btn" type="submit" value="Envoyer!">
      </div>
   </form>
</section>
  </div>
  </main>
    </template>

<script>

export default {
  name: 'ContactComponent',
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

.content-container {
    margin-top: -180px;
    }

.top-container {
        background-color: #a76cad;
  }

.get-in-touch {
  max-width: 800px;
  margin: 50px auto;
  position: relative;

}
.get-in-touch .title {
  font-family: Big Pixel;
  text-align: center;
  font-size: 2.5em;
  line-height: 48px;
  padding-bottom: 48px;
     color: #a76cad;
    background: #a76cad;
    background: -moz-linear-gradient(left,#7668ae  0%,#a76cad 100%) !important;
    background: -webkit-linear-gradient(left,#7668ae  0%,#a76cad 100%) !important;
    background: linear-gradient(to right,#7668ae  0%,#a76cad  100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
}

.contact-form .form-field {
  position: relative;
  margin: 32px 0;
}
.contact-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #a76cad;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}
.contact-form .input-text:focus {
  outline: none;
}
.contact-form .input-text:focus + .label,
.contact-form .input-text.not-empty + .label {
  -webkit-transform: translateY(-24px);
          transform: translateY(-24px);
}
.contact-form .label {
  position: absolute;
  left: 20px;
  bottom: 11px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: #a76cad;
  cursor: text;
  transition: -webkit-transform .2s ease-in-out;
  transition: transform .2s ease-in-out;
  transition: transform .2s ease-in-out, 
  -webkit-transform .2s ease-in-out;
}
.contact-form .submit-btn {
  background-color: #000;
   background-image: linear-gradient(125deg,#a76cad,#7668ae);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  width:200px;
  cursor: pointer;
  margin-left: 38%;
}

    </style>