
<template>
  <!--client-section-->
  <div class="ttm-row client-section ttm-bgcolor-grey mt_70 res-991-mt-0 clearfix">
      <div class="container">
          <!-- ttm-client -->
          <div class="ttm-client clients-slide owl-carousel owl-theme owl-loaded" data-item="5" data-nav="false" data-dots="false" data-auto="false">
              <div class="client-box ttm-box-view-separator-logo">
                  <div class="ttm-client-logo-tooltip" data-tooltip="client-01">
                      <div class="client-thumbnail">
                          <img src="/assets/images/client/client-01.png" alt="image">
                      </div>
                  </div>
              </div>
              <div class="client-box ttm-box-view-separator-logo">
                  <div class="ttm-client-logo-tooltip" data-tooltip="client-02">
                      <div class="client-thumbnail">
                          <img src="/assets/images/client/client-02.png" alt="image">
                      </div>
                  </div>
              </div>
              <div class="client-box ttm-box-view-separator-logo">
                  <div class="ttm-client-logo-tooltip" data-tooltip="client-03">
                      <div class="client-thumbnail">
                          <img src="/assets/images/client/client-03.png" alt="image">
                      </div>
                  </div>
              </div>
              <div class="client-box ttm-box-view-separator-logo">
                  <div class="ttm-client-logo-tooltip" data-tooltip="client-01">
                      <div class="client-thumbnail">
                          <img src="/assets/images/client/client-01.png" alt="image">
                      </div>
                  </div>
              </div>
              <div class="client-box ttm-box-view-separator-logo">
                  <div class="ttm-client-logo-tooltip" data-tooltip="client-02">
                      <div class="client-thumbnail">
                          <img src="/assets/images/client/client-02.png" alt="image">
                      </div>
                  </div>
              </div>
              <div class="client-box ttm-box-view-separator-logo">
                  <div class="ttm-client-logo-tooltip" data-tooltip="client-03">
                      <div class="client-thumbnail">
                          <img src="/assets/images/client/client-03.png" alt="image">
                      </div>
                  </div>
              </div>
          </div><!-- ttm-client end -->
      </div>
  </div>
  <!--client-section end-->
</template>

<script>
export default {
  name: 'ClientSlider',
  mounted() {
    if (window.$) {
      window.$(".clients-slide").owlCarousel({
        loop: true,
        margin: 10,
        nav: window.$('.clients-slide').data('nav'),
        dots: window.$('.clients-slide').data('dots'),
        autoplay: window.$('.clients-slide').data('auto'),
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: window.$('.clients-slide').data('item')
            }
        }
      });
    }
  }
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
