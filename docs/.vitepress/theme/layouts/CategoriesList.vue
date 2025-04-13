<script setup>
import { computed } from 'vue'
import { data as posts } from '../data/post.data'

// 获取 categories 列表
const allCategories = posts.map(post => post.frontmatter.categories || []);
const faltCategories = allCategories.flat();
const uniqueCategories = [...new Set(faltCategories)];
const sortedCategories = uniqueCategories.sort((a, b) => { return a - b })
const categories = sortedCategories
// console.log(categories.value)

// 构造 分类-页面 字典
// const MapPagesOfCategory = {}
// const PagesOfCategory = {}

// const MapPostsOfCategory = categories.map(category => {
//   const PostsOfCategory = posts.filter(post => post.frontmatter.categories.includes(category))
//   return {...{category: PostsOfCategory}}
// })


// 构造 分类-页面 字典
const MapPostsOfCategory = {};
categories.forEach(category => {
    MapPostsOfCategory[category] = posts.filter(post => post.frontmatter.categories.includes(category));
});



</script>

<template>
    <div class="categories-list-container">
        <div class="categories-list-item-container" v-for="category in categories" :key="category">
            <a class="categories-list-item-category">{{ category }}</a>
            <ul>
                <li class="categories-list-item-post" v-for="post in MapPostsOfCategory[category]" :key="post.url">
                    <a class="categories-list-item-post-title" :href="post.url">{{ post.frontmatter.title }}</a>
                </li>
            </ul>
        </div>
    </div>
    <BackToTop />
</template>


<style scoped>

/* 基础样式 */
.categories-list-container {
    margin: 3% auto;
    padding: 0 30px;
}




.categories-list-container {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    max-width: 90ch;
}

/* 媒体查询：小屏幕设备 */
@media (max-width: 600px) {
    .categories-list-container {
        margin: 2% auto;
        /* 在小屏幕上减少上下外边距 */
        padding: 0 10px;
        /* 增加左右内边距，避免内容紧贴屏幕边缘 */
    }
}

/* 媒体查询：中等屏幕设备 */
@media (min-width: 601px) and (max-width: 1024px) {
    .categories-list-container {
        margin: 3% auto;
        /* 中等屏幕设备的上下外边距 */
        padding: 0 20px;
        /* 增加左右内边距 */
    }
}

/* 媒体查询：大屏幕设备 */
@media (min-width: 1025px) {
    .categories-list-container {
        margin: 2% auto;
        /* 大屏幕设备的上下外边距 */
        padding: 0 30px;
        /* 增加左右内边距 */
    }
}



.categories-list-item-container {
    margin: 0.3rem 0;
    border: 1px solid var(--my-border-color);
    border-radius: 5px;
    padding: 0.5rem;
}

.categories-list-item-category {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--vp-c-brand);;
    display: block;
}

.categories-list-item-post {
    margin: 0.5rem 0;
    font-size: 1rem;
}

.categories-list-item-post a {
    /* color: #007bff; */
    text-decoration: none;
}

.categories-list-item-post-title {
    color: var(--my-highlight-color);;
}

.categories-list-item-post a:hover {
    text-decoration: underline;
}

</style>