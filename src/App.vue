<script setup>
 import {getCategory} from '@/api/test'
 import {onMounted} from 'vue'
 onMounted(async () => {
  const res = await getCategory()
  console.log(res)
 })
</script>

<template>
<router-view> </router-view> <!--一级路由出口-->
</template>

<style scoped lang="scss">
</style>
