<script setup lang="ts">
  import MainLayout from './MainLayout.vue'
  import { markRaw, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const layout = ref()
  const route = useRoute()

  watch(
    () => route.meta?.layout as string | undefined,
    async (metaLayout) => {
      try {
        const component = metaLayout && await import(/* @vite-ignore */ `./${metaLayout}.vue`)
        layout.value = markRaw(component?.default || MainLayout)
      } catch (e) {
        layout.value = markRaw(MainLayout)
      }
    },
    { immediate: true }
  )
</script>

<template>
<div>
  <component :is="layout"> <router-view /> </component>
  </div>
</template>