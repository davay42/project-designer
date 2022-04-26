import fs from 'vite-plugin-fs/browser';
import slugify from 'slugify'
import { formatDate } from './utils';


export function useDir(path) {
  const dir = ref()
  async function load() {
    dir.value = await fs.readdir(path)
  }
  onMounted(async () => {
    load()
  })
  async function createIndex(title) {
    if (!title) return
    await fs.writeFile(
      `${path}${slugify(title).toLowerCase()}/index.md`,
      `---
title: ${title}
createdAt: ${formatDate().datetime}
---`
    )
    load()
  }

  return { dir, load, createIndex }
}
