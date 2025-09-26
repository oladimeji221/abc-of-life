<template>
  <div class="page">
    <!-- preloader start -->
    <div id="preloader" v-if="showPreloader">
      <div id="status">&nbsp;</div>
    </div>
    <!-- preloader end -->

    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const showPreloader = ref(false);
const route = useRoute();

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const loadScripts = async () => {
  try {
    await loadScript('/src/assets/js/jquery-3.7.1.min.js');
    await loadScript('/src/assets/js/jquery-migrate-3.4.1.min.js');
    await loadScript('/src/assets/js/tether.min.js');
    await loadScript('/src/assets/js/bootstrap.min.js');
    await loadScript('/src/assets/js/jquery.easing.js');
    await loadScript('/src/assets/js/jquery-waypoints.js');
    await loadScript('/src/assets/js/jquery-validate.js');
    await loadScript('/src/assets/js/owl.carousel.js');
    await loadScript('/src/assets/js/jquery.prettyPhoto.js');
    await loadScript('/src/assets/js/numinate.min.js');
    await loadScript('/src/assets/js/jquery.event.move.js');
    await loadScript('/src/assets/js/jquery.twentytwenty.js');
    await loadScript('/src/assets/js/booked-calendar.js');
    await loadScript('/src/assets/revolution/js/jquery.themepunch.tools.min.js');
    await loadScript('/src/assets/revolution/js/jquery.themepunch.revolution.min.js');
    await loadScript('/src/assets/revolution/js/slider.js');
    await loadScript('/src/assets/revolution/js/extensions/revolution.extension.actions.min.js');
    await loadScript('/src/assets/revolution/js/extensions/revolution.extension.carousel.min.js');
    await loadScript('/src/assets/revolution/js/extensions/revolution.extension.kenburn.min.js');
    await loadScript('/src/assets/revolution/js/extensions/revolution.extension.layeranimation.min.js');
    await loadScript('/src/assets/revolution/js/extensions/revolution.extension.migration.min.js');
    await loadScript('/src/assets/revolution/js/extensions/revolution.extension.navigation.min.js');
    await loadScript('/src/assets/revolution/js/extensions/revolution.extension.parallax.min.js');
    await loadScript('/src/assets/revolution/js/extensions/revolution.extension.slideanims.min.js');
    await loadScript('/src/assets/js/main.js');
  } catch (e) {
    console.error(e);
  }
};

onMounted(async () => {
  if (!sessionStorage.getItem('isLoaded')) {
    showPreloader.value = true;
    await loadScripts();
    sessionStorage.setItem('isLoaded', 'true');
    showPreloader.value = false;
  } else {
    await loadScripts();
  }
});

watch(route, async () => {
  // Re-run main.js logic on route change
  if (window.main) {
    window.main();
  }
});
</script>