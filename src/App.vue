<script setup>
 import {getCategory} from '@/api/test'
 import {onMounted} from 'vue'
 onMounted(async () => {
  const res = await getCategory()
  console.log(res)
 })
 
</script>

<template>
 <div>Hello World</div>
 <el-button type="primary">click Me</el-button>
</template>

<style scoped>

</style>
