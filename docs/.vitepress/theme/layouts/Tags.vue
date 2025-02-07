<script setup>
import { ref, computed } from 'vue'
import { data as posts } from './tag.data.ts'

// Reactive variable to track the selected tag
const selectedTag = ref(null)

// 获取所有标签
const allTags = computed(() => {
  const tagsSet = new Set()
  Object.values(posts.tagMap).forEach(postUrls => {
    postUrls.forEach(url => {
      const post = posts.postMap[url]
      if (post.tags) {
        post.tags.forEach(tag => tagsSet.add(tag))
      }
    })
  })
  return Array.from(tagsSet)
})

// 计算每个标签下有多少篇文章
const tagPostCounts = computed(() => {
  const counts = {}
  allTags.value.forEach(tag => {
    counts[tag] = (posts.tagMap[tag] || []).length
  })
  return counts
})

// 根据选中的标签过滤文章
const filteredPosts = computed(() => {
  if (!selectedTag.value) {
    return []
  }
  const postUrls = posts.tagMap[selectedTag.value] || []
  return postUrls.map(url => posts.postMap[url])
})

// 点击标签时设置选中的标签
const setSelectedTag = (tag) => {
  selectedTag.value = tag
}
</script>

<template>
  <!-- 标签列表 -->
  <div class="tags-container">
    <h2 style="text-align: center">Tags</h2>
    <div class="tags-list">
      <span
        v-for="tag in allTags"
        :key="tag"
        class="tag"
        @click="setSelectedTag(tag)"
      >
        {{ tag }}
        <span class="tag-count">({{ tagPostCounts[tag] }})</span> <!-- 显示每个标签下的文章数量 -->
      </span>
    </div>
  </div>

  <!-- 显示选中标签下的文章 -->
  <div v-if="selectedTag" class="posts-container">
    <h3>Posts under "{{ selectedTag }}"</h3>
    <ul class="tags-post-list">
      <li v-for="post in filteredPosts" :key="post.url" class="tags-post-item">
        <a :href="post.url">{{ post.title }}</a>
        <!-- <p>{{ post.date.string }} - {{ post.abstract }}</p> -->
        <p>{{ post.date.string }}
            <div v-for="item in post.tags" :key="item" class="post-list-tag">{{ item }} </div>
        </p> 
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* --------------- 标签容器样式 --------------- */

.post-list-tag {
  color: var(--vp-button-alt-text)
}

.tags-container {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.tags-container:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* 标签列表样式 */
.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: start;
}

.tag {
  display: inline-block;
  padding: 6px 14px;
  background-color: var(--vp-button-alt-bg);
  color: var(--vp-button-alt-text);
  font-size: 0.9rem;
  border-radius: 15px;
  border: 1px solid var(--vp-button-sponsor-border);
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag:hover {
  background-color: var(--vp-button-elv-hover-bg);
  border-color: var(--vp-button-sponsor-active-border);
  color: var(--vp-button-alt-active-text);
  box-shadow: var(--vp-shadow-3); /* 鼠标悬停时添加阴影 */

}

.tag-count {
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
  margin-left: 8px; /* 标签后面的文章数量与标签之间有间距 */
}

/* --------------- 选中标签下的文章显示样式 --------------- */
.posts-container {
  margin-top: 25px;
}

.tags-post-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.tags-post-item {
  margin-bottom: 15px;
  padding: 18px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.tags-post-item:hover {
  box-shadow: var(--vp-shadow-3);
}

.tags-post-item a {
  font-weight: bold;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;
}

.tags-post-item a:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.tags-post-item .post-info {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.tags-post-item .post-info .tag {
  font-size: 0.8rem;
  background-color: var(--vp-c-bg-1);
  color: var(--vp-c-text-2);
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid var(--vp-c-border);
}

.tags-post-item .post-info .date {
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
  margin-left: 8px;
}
</style>
