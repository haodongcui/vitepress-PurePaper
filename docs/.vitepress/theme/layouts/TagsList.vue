<script setup>
import { computed, ref } from 'vue'
import { data as posts } from '../data/post.data'

// 获取 tags 列表
const allTags = posts.map(post => post.frontmatter.tags || []);
const flatTags = allTags.flat();
const uniqueTags = [...new Set(flatTags)];
const sortedTags = uniqueTags.sort((a, b) => a.localeCompare(b)); // 按字母顺序排序
const tags = sortedTags;

// 构造 tag-文章 字典
const MapPostsOfTag = {};
tags.forEach(tag => {
    MapPostsOfTag[tag] = posts.filter(post => post.frontmatter.tags.includes(tag));
});

const PostCountOfTag = {};
tags.forEach(tag => {
    PostCountOfTag[tag] = MapPostsOfTag[tag].length;
});

// 响应式的引用对象
const selectedTag = ref(null)

const postsOfSelectedTag = computed(() => {
    const tag=selectedTag.value
    console.log(tag)
  if (!tag) {
    return []
  }
  return MapPostsOfTag[tag] || []
})

const getSelectedTag = (tag) => {
    selectedTag.value = tag
}
</script>



<template>
    <div class="page-tags">

        <div class="tags-list-container">
            <span class="tags-list-item-container" v-for="tag in tags" :key="tag" @click="getSelectedTag(tag)">
                <span class="tags-list-item-tag">{{ tag }}</span>
                <span class="tags-list-item-tag-count">({{ PostCountOfTag[tag] }})</span>
            </span>
        </div>
        
        <div class="post-list-container">
            <div class="post-list-item-container" v-for="post in postsOfSelectedTag" :key="post.url">
                <a class="post-list-item-title">{{ post.frontmatter.title }}</a>
                <a class="post-list-item-date">{{ post.frontmatter.date }}</a>
            </div>
        </div>

    </div>
</template>




<style scoped>


.tags-list-container {
    display: flex;
    flex-wrap: wrap; /* 允许自动换行 */
    gap: 10px; /* 设置标签之间的间距 */
    justify-content: center; /* 让标签列表居中 */
    margin: 3% 10%;
    padding: 1%;
    border-radius: 10px;
    box-shadow: 0 2px 10px var(--vp-button-alt-bg);
}

.tags-list-item-container {
    cursor: pointer;
    padding: 5px 10px; /* 内边距 */
    background-color: var(--vp-button-sponsor-bg); /* 背景颜色 */
    border: 1px solid var(--vp-button-sponsor-border); /* 添加边框 */
    border-radius: 5px; /* 圆角 */
    display: flex;
    align-items: center; /* 垂直居中对齐 */
}

.tags-list-item-tag {
    color: var(--vp-c-brand); /* 文字颜色 */
}






/* 与 PostList 样式一样 */


.post-list-container {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 80ch;
}

/* 媒体查询：小屏幕设备 */
@media (max-width: 600px) {
  .post-list-container {
    margin: 2% auto; /* 在小屏幕上减少上下外边距 */
    padding: 0 10px; /* 增加左右内边距，避免内容紧贴屏幕边缘 */
  }
}

/* 媒体查询：中等屏幕设备 */
@media (min-width: 601px) and (max-width: 1024px) {
  .post-list-container {
    margin: 3% auto; /* 中等屏幕设备的上下外边距 */
    padding: 0 20px; /* 增加左右内边距 */
  }
}

/* 媒体查询：大屏幕设备 */
@media (min-width: 1025px) {
  .post-list-container {
    margin: 4% auto; /* 大屏幕设备的上下外边距 */
    padding: 0 30px; /* 增加左右内边距 */
  }
}

.post-list-item-container {
    padding: 0.5em 1em;
    /* 内边距 */
    border-radius: 0.5rem;
    /* 边框圆角 */
    border: 1px solid var(--my-border-color);
    /* 边框样式 */
    /* margin-bottom: 1rem; 容器之间的垂直间距 */

    padding: 0.5em 1em;
    border-radius: 0.5rem;
    /* display: flex; */
    flex-direction: row;
    gap: 0.25rem;
    justify-content: space-between;

    transition:
        background 0.3s ease,
        box-shadow 0.3s ease,
        border 0s linear;
}

.post-list-item-container:hover {
    background-color: var(--my-highlight-color-1);
    box-shadow:
        3px 2px 2em 0.5em var(--my-highlight-color-1),
        inset -2px -3px 2em 0.1em var(--my-highlight-color-1);
    border-left: 0.2em solid var(--my-highlight-color);

    transition:
        background 0.5s ease,
        box-shadow 0.3s ease,
        border 0.1s linear;
}

.post-list-item-info {
  margin: 8px 0;
}

.post-list-item-title {
    font-size: 1.2em;
    font-weight: bold;
    color: var(--my-highlight-color);
    text-decoration: none;
    display: block;
    margin-bottom: 0px;
}

.post-list-item-title:hover {
    text-decoration: underline;
}

.post-list-item-date {
    font-size: 0.9em;
    /* color: var(--my-font-color); */
    /* display: block; */
    margin-bottom: 10px;
}

.post-list-item-tags {
    display: inline-block;
    margin: auto 16px;
}

.post-list-item-tag {
    font-size: 0.9em;
    /* color: var(--my-font-color); */
    text-decoration: none;
    margin-right: 5px;

    border: 1px solid;
    /* background-color: var(--my-highlight-color-1); */
    padding: 2px 5px;
    border-radius: 3px;

    transition:
        box-shadow 0.2s ease,
        text-decoration 0.3s ease;
}

.post-list-item-tag:hover {
    /* text-decoration: underline; */
    box-shadow: 0 2px 4px;
}







</style>