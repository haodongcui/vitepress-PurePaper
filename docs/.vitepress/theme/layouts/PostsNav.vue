<template>
    <h2 class="posts-by-xxx-page-title">Posts</h2>
    <div class="posts-by-xxx-container">
    <a class="posts-by-xxx" href="./posts">🗓Archive</a>
    <a class="posts-by-xxx" href="./categories">🌱Categories</a>
    <a class="posts-by-xxx" href="./tags">🏷Tags</a>
    </div>
</template>

<style scoped>

.posts-by-xxx-page-title {
    text-align: center;
    font-size: 2rem;
    margin: 2%;
    font-weight: bold;
}

.posts-by-xxx-container {
    display: flex;
    gap: 10px; /* 设置标签之间的间距 */
    justify-content: center; /* 让标签列表居中 */
    margin: auto auto ;
    max-width: 80ch;
    padding: 1%;
    border-radius: 10px;
    box-shadow: 0 5px 30px var(--vp-button-alt-bg);
}

.posts-by-xxx {
    padding: 5px 10px; /* 内边距 */
    align-items: center; /* 垂直居中对齐 */

    border: 1px solid var(--vp-button-sponsor-border); /* 添加边框 */
    border-radius: 5px; /* 圆角 */
}

</style>