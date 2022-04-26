<script setup>
const props = defineProps({
  file: String
})
</script>

<template lang='pug'>
p {{ file }}
</template>