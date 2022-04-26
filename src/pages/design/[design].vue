<script setup>

const props = defineProps({
  design: String
})


</script>

<template lang='pug'>
.flex.flex-col.gap-4
  .inline-flex.text-4xl
    router-link.p-0(to="/") Designs/
    .font-bold {{ design }}
  router-view(v-slot="{ Component }")
    transition(name="fade" mode="out-in")
      component.flex-auto.overflow-y-scroll(:is="Component")
</template>