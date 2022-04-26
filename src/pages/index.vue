<script setup>
import fs from 'vite-plugin-fs/browser';


const newProject = ref('')

async function createProject() {
  if (!newProject.value) return
  await fs.writeFile(newProject.value + '.md', 'content')
  loadProjects()
}

const projects = ref()

async function loadProjects() {
  projects.value = await fs.readdir('/')
}

onMounted(async () => {
  loadProjects()
})

</script>

<template lang='pug'>
.p-8
  .text-4xl Projects
  .p-4.rounded.bg-light-100.flex.gap-2
    input(v-model="newProject")
    button.bg-light-600(@click="createProject()") Create Project 
  router-link.p-4(v-for="project in projects" :key="project" :to="`/project/${project}`") {{ project }}
</template>