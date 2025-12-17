import {directivePlugin} from '@/directives' //导入图片懒加载插件
import '@/styles/common.scss' // 全局样式
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(directivePlugin) //注册图片懒加载插件
app.use(router)
app.mount('#app')
