<script setup>
import fs from 'vite-plugin-fs/browser';
import { contents } from 'smart-matter'
import markdownIt from 'markdown-it'
import yaml from 'js-yaml'

const md = new markdownIt()

const props = defineProps({
  design: String
})

const content = ref()

async function loadIndex(dir) {
  let file = await fs.readFile(`/${props.design}/index.md`)
  content.value = contents(file)
}

onMounted(() => {
  loadIndex()
})

const yml = computed(() => yaml.load(content.value?.matter))

const newFile = computed(() => {
  let matter = yaml.dump(yml.value)
  return `---
${matter}---${content.value?.content}
`
})

</script>

<template lang='pug'>
.flex.flex-col.gap-4
  .text-4xl.font-bold {{ content?.title }}
  .text-sm Created at {{ content?.createdAt }}
  .text-md(v-html="md.render(content?.content || '')")
  .font-bold(v-html="JSON.stringify(yml)")
  .text-xs {{ content }}
  pre.font-mono.text-xs.bg-light-800.p-2.rounded-lg(v-html="newFile")
</template>