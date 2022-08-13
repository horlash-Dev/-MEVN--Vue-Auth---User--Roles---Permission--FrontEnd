import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import  axios from "axios";
import { checkPermission } from '@/router/api/PermissionCheck'
const pinia = createPinia()
//add router to pinia

pinia.use(({store}) => {
   return store.$router = router;
})

//CSS
import "@/assets/back/css/vendors_css.css"
import "@/assets/back/css/style.css "
import "@/assets/back/css/skin_color.css"


// import "/src/assets/back/js/vendors.min.js"

const app = createApp(App)
app.provide('permission', checkPermission)
app.use(pinia)
app.use(router)
app.mount('#app')
