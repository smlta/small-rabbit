<script setup>
  import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
import HomeProduct from '@/views/Layout/children/RHome/components/HomeProduct.vue'
</script>


<template>
<div class="container">
  <HomeCategory></HomeCategory> <!--左侧分类-->
  <HomeBanner></HomeBanner> <!--轮播图-->
</div>
<HomeNew></HomeNew> <!--新鲜好物-->
<HomeHot></HomeHot> <!--产品列表-->
<HomeProduct></HomeProduct> <!--产品区域-->

</template>

<style scoped>

</style>