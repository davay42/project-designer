<script setup>
import fs from 'vite-plugin-fs/browser';
import matter from 'front-matter'

const props = defineProps({
  slug: String
})

const content = ref()

async function loadIndex(dir) {
  let file = await fs.readFile(`/${props.slug}/index.md`)
  content.value = matter(file)
}

onMounted(() => {
  loadIndex()
})

</script>

<template lang='pug'>
.flex.flex-col.bg-light-200.rounded-xl.p-4
  .text-sm.opacity-50 {{ slug }}
  .text-3xl {{ content?.attributes?.title }}
</template>