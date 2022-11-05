import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import  axios from "axios";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import { checkPermission } from '@/router/api/PermissionCheck'
const pinia = createPinia()
//add router to pinia

pinia.use(({store}) => {
   return store.$router = router;
})

//CSS



//  import "/src/assets/back/js/vendors.min.js"
// import "/src/assets/back/js/template.js"
// import "/src/assets/assets/icons/feather-icons/feather.min.js"

const app = createApp(App)
app.provide('permission', checkPermission)
app.use(pinia)
app.use(router)
app.mount('#app')
