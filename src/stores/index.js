import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategory} from '@/api/api'
export const useRabbitStore = defineStore('rabbit', () => {
  const navList = ref([]) // 导航标签数组
  const getNavList = async () => {
   const {result} = await getCategory()
    navList.value = result
  } //定义action获取标签数组
  return {
    navList,
    getNavList
  }
})
