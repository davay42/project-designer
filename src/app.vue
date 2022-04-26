<script setup>

</script>

<template lang="pug">
.p-0.flex.flex-col.h-100vh(style="flex: 1000 1 100%" )
  router-view(v-slot="{ Component }")
    transition(name="fade" mode="out-in")
      keep-alive
        component.flex-auto.overflow-y-scroll(:is="Component")

</template>

<style lang="postcss">
html {
  scroll-behavior: smooth;
  hyphens: auto;
  overscroll-behavior-y: none;
}

body {
  @apply bg-light-600 dark_bg-dark-200;
  overscroll-behavior-y: none;
}

#app {
  @apply min-h-100vh max-h-100vh flex flex-col;
}
</style>
