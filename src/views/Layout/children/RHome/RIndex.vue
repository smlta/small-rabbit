<script setup>
  import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomePannel from './components/HomePannel.vue'
</script>


<template>
<div class="container">
  <HomeCategory></HomeCategory>
  <HomeBanner></HomeBanner>
</div>
<HomePannel title="新鲜好物" subTitle="新鲜出炉 品质靠谱"></HomePannel>
<HomePannel title="人气推荐" subTitle="人气推荐 不容错过"></HomePannel>
</template>

<style scoped>

</style>