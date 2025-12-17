
import '@/styles/common.scss' // 全局样式
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('img-lazy',{
  mounted(el,biding){
    useIntersectionObserver(el,([{isIntersecting}]) => {
      if(isIntersecting)
      {
        el.src = biding.value
      } //当图片img元素进入视口区域,通过biding.value指令值获取图片链接加载图片
    }) //该工具函数用来判断,监听的元素是否进入视口区域,如果进入isIntersecting的值会变为true
  }
})
app.mount('#app')
