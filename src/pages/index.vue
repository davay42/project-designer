<script setup>
import { useDir } from '~/composables/fs.js'

const newProject = ref('')

const { dir, load, createIndex } = useDir('/')

</script>

<template lang='pug'>
.flex.flex-col.gap-4
  .flex
    .text-4xl Designs
    .flex-1
    button.btn(@click="load()")
      ion-reload
  .p-4.rounded-xl.bg-light-100.flex.flex-wrap.gap-2
    input.p-4(v-model="newProject")
    button.btn(@click="createIndex(newProject); newProject = ''") Add new design

  router-link(v-for="design in dir" :key="design" :to="`/design/${design}`")
    design-card(:slug="design")
</template>