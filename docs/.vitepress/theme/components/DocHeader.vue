<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
const { page } = useData()

// title
const title = computed(() => {
  return page.value.title || ''
})

// date
const formattedDate = computed(() => {
  const dateStr = page.value.frontmatter.date || ''
  if (!dateStr) return ''

  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // 月份从 0 开始，需要 +1 并补零
  const day = String(date.getDate()).padStart(2, '0') // 补零

  return `${year}-${month}-${day}`
})
const date = formattedDate

// categories
const categories = computed(() => {
  return page.value.frontmatter.categories || ''
})

// tags
const tags = computed(() => {
  return page.value.frontmatter.tags || []
})
</script>

<template>
  <div class="doc-header-container">
    <h1 class="doc-header-title">{{ title }}</h1>
    <div class="doc-header-info">
      <span class="doc-header-date" v-if="date">🕐{{ date }}</span>
      <span class="doc-header-categories" v-if="categories">🌱{{ categories.join(' / ') }}</span>
      <span class="doc-header-tags" v-for="tag in tags" :key="tag">🏷{{ tag }}</span>
    </div>
  </div>
</template>


<style scoped>
.doc-header-container {
  padding: 0;
  margin-bottom: 30px;
}

.doc-header-title {
  margin-bottom: 20px;
  background: -webkit-linear-gradient(10deg, #bd34fe 5%, #e43498 15%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.3; /* 调整行高 */
  font-size: 2em;
  margin: 0 10px 0 0;
}

/* .doc-header-title h1 {
  background: -webkit-linear-gradient(10deg, #bd34fe 5%, #e43498 15%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em;
  margin: 0 10px 0 0;
} */

/* .doc-header-title h1 {
  font-size: 2em;
  margin-bottom: 10px;
} */

.doc-header-info {
  color: var(--vp-c-text-2);
}

.doc-header-info span {
  margin-right: 10px;
}
</style>
