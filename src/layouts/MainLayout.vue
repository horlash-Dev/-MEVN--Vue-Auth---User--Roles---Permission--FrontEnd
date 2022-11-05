
<template>
<Header />
<Sidebar />
   <div class="content-wrapper">
	  <div class="container-full">
<slot />
	  </div>
  </div>
<Footer />
</template>
<script setup>
//import { computed, ref, watch, markRaw } from "vue";
//import { useRoute } from "vue-router";
import Header from "@/layouts/partials/Header.vue";
import Sidebar from "@/layouts/partials/Sidebar.vue";
import Footer from "@/layouts/partials/Footer.vue";

import { onBeforeMount } from 'vue'

onBeforeMount(() => {
//    const script = document.createElement("script")
//  script.setAttribute(
//    "src", "src/assets/back/js/vendors.min.js"
//  )

//  const script1 = document.createElement("script")
//  script1.setAttribute(
//   "src", "/src/assets/back/js/template.js"
// )
// const script2 = document.createElement("script")
// script2.setAttribute(
//   "src", "/src/assets/assets/icons/feather-icons/feather.min.js"
// )

//     document.head.appendChild(script)
//     document.head.appendChild(script1)
//     document.head.appendChild(script2)
    
document.body.classList.remove('bg-gradient-primary')
document.body.classList.add('hold-transition', 'theme-primary','sidebar-mini','fixed','light-skin')
})
</script>
<style lang="">
    
</style>