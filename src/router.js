
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Services from './pages/Services.vue';
import HelpAndFaqs from './pages/HelpAndFaqs.vue';
import ContactUs from './pages/ContactUs.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/help-and-faqs', component: HelpAndFaqs },
  { path: '/contact-us', component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
