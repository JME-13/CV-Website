import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../views/Accueil.vue'
import Projets from '../views/Projets.vue';
import CV from '../views/CV.vue';
import Contact from '../views/Contact.vue';
import DevWeb from '../components/ProjetsWebDev.vue';
import WebDesign from '../components/ProjetsWebDesign.vue';
import Graphiste from '../components/ProjetsGraphiste.vue';

const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/Projets', name: 'Projets', component: Projets },
  { path: '/CV', name: 'CV', component: CV },
  { path: '/Contact', name: 'Contact', component: Contact },
  { path: '/DevWeb', name: 'DevWeb', component: DevWeb },
  { path: '/WebDesign', name: 'WebDesign', component: WebDesign },
  { path: '/Graphiste', name: 'Graphiste', component: Graphiste },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
