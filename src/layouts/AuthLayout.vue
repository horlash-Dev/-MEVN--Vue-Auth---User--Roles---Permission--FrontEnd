<template>
<div>
  <slot />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
document.body.classList.remove('hold-transition', 'theme-primary','sidebar-mini','fixed','light-skin')
document.body.classList.add("hold-transition", 'bg-gradient-primary', "theme-primary")
})
</script>
