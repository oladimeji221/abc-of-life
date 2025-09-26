<template>
  <!-- page-title -->
  <div class="ttm-page-title-row">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-box ttm-textcolor-white">
            <div class="page-title-heading">
              <h1 class="title">{{ title }}</h1>
              <h3 class="subtitle">{{ subtitle }}</h3>
            </div>
            <!-- /.page-title-captions -->
            <div class="breadcrumb-wrapper">
              <div class="container">
                <div class="breadcrumb-wrapper-inner">
                  <span>
                    <router-link title="Go to Delmont." to="/" class="home">
                      <i class="themifyicon ti-home"></i>&nbsp;&nbsp;Home
                    </router-link>
                  </span>
                  <span class="ttm-bread-sep">&nbsp; | &nbsp;</span>
                  <span>{{ title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.col-md-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
  <!-- page-title end-->
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>