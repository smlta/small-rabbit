//封装全局指令
import { useIntersectionObserver } from '@vueuse/core'
export const directivePlugin = {
  install(app){
   app.directive('img-lazy',{
   mounted(el,biding){
   const{stop} = useIntersectionObserver(el,([{isIntersecting}]) => {
      if(isIntersecting)
      {
        el.src = biding.value
        stop() //当图片加载出来后就停止对图片的监测,防止图片二次进入视口加载图片
      } //当图片img元素进入视口区域,通过biding.value指令值获取图片链接加载图片
    }) //该工具函数用来判断,监听的元素是否进入视口区域,如果进入isIntersecting的值会变为true
  } //通过插件注册全局指令
})
  } // 插件入口方法
}