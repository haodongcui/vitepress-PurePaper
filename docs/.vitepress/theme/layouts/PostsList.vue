<script setup>
import { ref, computed } from 'vue'
import { data as posts } from '../data/post.data.ts'
// console.log(posts)


// 当前页数
const currentPage = ref(1)
// 每页文章数
const postsPerPage = 15

// 排序文章，按照日期倒序排列
const sortedPosts = computed(() => {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime()
    const dateB = new Date(b.frontmatter.date).getTime()
    return dateB - dateA // 按照日期倒序排列
  })
})

// 计算当前页的文章
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = currentPage.value * postsPerPage
  return sortedPosts.value.slice(start, end)
})


// 总页数
const totalPages = computed(() => {
  return Math.ceil(sortedPosts.value.length / postsPerPage)
})

// 切换到下一页
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

// 切换到上一页
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

// 格式化日期
// const formattedDate = (date) => {
//   const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
//   return new Date(date).toLocaleDateString(undefined, options)
// }

// const formattedDate = (date) => {
  
//   return date
// }




</script>


<!-- ---------------------------------- -->
<!-- ------------ HTML 布局 ------------ -->
<!-- ---------------------------------- -->
<template>

<!-- <img src="./banner.png" alt="Description of the image" class="post-list-banner"> -->
<!-- <div class="post-list-banner">東の小屋</div> -->

<ul class="post-list-container">
  <li class="post-list-item-container" v-for="post in paginatedPosts" :key="post.url">
    <a class="post-list-item-title" :href="post.url">{{ post.frontmatter.title }}</a>

    <div class='post-list-item-info'>
        <a class="post-list-item-author">{{ post.frontmatter.author }}</a>
        <time class='post-list-item-date' v-if="post.frontmatter.date">{{ post.frontmatter.date }}</time>
        <!-- <span class='post-list-item-categories' v-if="post.frontmatter.categories && post.frontmatter.categories.length">
            <a class='post-list-item-category' v-for="item in post.frontmatter.category" :key="item" >{{ item }}</a>
        </span> -->
        <span class='post-list-item-tags' v-if="post.frontmatter.tags && post.frontmatter.tags.length">
            <a class='post-list-item-tag' v-for="item in post.frontmatter.tags" :key="item" >{{ item }}</a>
        </span>
    </div>
    
  </li>
</ul>

<!-- 分页控制按钮 -->
<div class="page-witch-container">
  <button @click="prevPage" :disabled="currentPage === 1" class='page-witch-prev'>Previous</button>
  <span class="page-witch-count">Page {{ currentPage }} of {{ totalPages }}</span>
  <button @click="nextPage" :disabled="currentPage === totalPages" class="page-witch-next">Next</button>
</div>

<!-- <BackToTop /> -->
</template>
  





<!-- ---------------------------------- -->
<!-- ------------ CSS 样式 ------------ -->
<!-- ---------------------------------- -->
<style scoped>

.post-list-container {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 90ch;
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


/* --------------- 分页控制按钮样式 --------------- */
/* 分页控制按钮容器样式 */
.page-witch-container {
  margin-top: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px; /* 增加按钮与页码之间的间距 */
}

/* 公共按钮样式 */
.page-witch-container button {
  padding: 10px 15px;
  border: none;
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px; /* 按钮圆角 */
  transition: all 0.3s ease; /* 动画效果 */
}

/* 按钮悬停样式 */
.page-witch-container button:hover:not(:disabled) {
  background-color: var(--vp-button-brand-active-bg); /* 更深的蓝色 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 增加悬停阴影 */
}

/* 禁用按钮样式 */
.page-witch-container button:disabled {
  background-color: var(--vp-button-alt-bg);
  color: var(--vp-button-alt-text);
  cursor: not-allowed;
  box-shadow: none;
}


/* 页码显示样式 */
.page-witch-count {
  color: var(--vp-button-alt-text);
  font-size: 1rem;
  font-weight: 600;
}





</style>
