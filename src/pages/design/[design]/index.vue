<script setup>
import fs from 'vite-plugin-fs/browser';
const props = defineProps({
  design: String
})

const projects = ref()

onMounted(() => {

})
</script>

<template lang='pug'>
p In design {{ design }}
</template>