<script setup lang="ts">
  import MainLayout from './MainLayout.vue'
  import { markRaw, ref, watch, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useLoading } from "vue-loading-overlay";

const loader = useLoading();
const sec = ref(true);
onMounted(() => {
  pageLoad();
});
const pageLoad = () => {
  const page = loader.show(
    {
      container: sec.value,
      loader: "dots",
      width: 80,
      height: 80,
      opacity: 1,
      backgroundColor: "#000",
      color: "#fff",
    },
    {}
  );

  setTimeout(() => {
    page.hide();
  }, 1500);
};

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
<div ref="sec">
  <component :is="layout"> <router-view /> </component>
  </div>
</template>