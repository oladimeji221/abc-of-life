
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Services from './pages/Services.vue';
import HelpAndFaqs from './pages/HelpAndFaqs.vue';
import ContactUs from './pages/ContactUs.vue';
import Blog from './pages/Blog.vue';
import PersonalCare from './pages/PersonalCare.vue';
import SkilledNursingCare from './pages/SkilledNursingCare.vue';
import PediatricHomeCare from './pages/PediatricHomeCare.vue';
import HospiceSupport from './pages/HospiceSupport.vue';
import PhysicalOccupationalTherapy from './pages/PhysicalOccupationalTherapy.vue';
import GeriatricCare from './pages/GeriatricCare.vue';
import SpeechTherapy from './pages/SpeechTherapy.vue';
import OccupationalTherapy from './pages/OccupationalTherapy.vue';
import RespiratoryTherapy from './pages/RespiratoryTherapy.vue';
import Jobs from './pages/Jobs.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/help-and-faqs', component: HelpAndFaqs },
  { path: '/contact-us', component: ContactUs },
  { path: '/blog', component: Blog },
  { path: '/personal-care', component: PersonalCare },
  { path: '/skilled-nursing-care', component: SkilledNursingCare },
  { path: '/pediatric-home-care', component: PediatricHomeCare },
  { path: '/hospice-support', component: HospiceSupport },
  { path: '/physical-occupational-therapy', component: PhysicalOccupationalTherapy },
  { path: '/geriatric-care', component: GeriatricCare },
  { path: '/speech-therapy', component: SpeechTherapy },
  { path: '/occupational-therapy', component: OccupationalTherapy },
  { path: '/respiratory-therapy', component: RespiratoryTherapy },
  { path: '/jobs', component: Jobs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
