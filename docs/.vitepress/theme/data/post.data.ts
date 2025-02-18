import { createContentLoader } from 'vitepress'

// export default createContentLoader( postsList, options(可选) );
export default createContentLoader(['blog-posts/**/*.md', 'blog-essays/**/*.md'], {
    transform(rawData) {

        // 格式化日期, 排序
        const result = rawData
        .map(
            ({ url, frontmatter }) => {
                if (frontmatter.date) {
                    frontmatter.date = formatDate(frontmatter.date)
                }
                // 扁平化 url
                // const slug = frontmatter.slug || frontmatter.title
                // url = `posts/${slug}`
                // url = `posts/${frontmatter.title}`

                return { url, frontmatter }
            }
        )
        .sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        });
        // console.log(result)
        return result
    }
});





// 日期格式化
function formatDate(dateString: string) {
    // Check if dateString is not provided or is invalid
    if (!dateString || isNaN(Date.parse(dateString))) {
        return '';
    }

    const date = new Date(dateString);
    return date.toLocaleDateString('en-CA') // 使用 ISO 8601 格式 (YYYY-MM-DD)

}
