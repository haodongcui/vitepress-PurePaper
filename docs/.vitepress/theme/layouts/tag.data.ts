import { createContentLoader } from 'vitepress'
// export default createContentLoader("blog-posts/**/*.md", /* options */ );

export default createContentLoader(['blog-posts/**/*.md', 'blog-essays/**/*.md'], {
  transform(raw): Data {
    const postMap: { [url: string]: Post } = {};
    const yearMap: { [year: number]: string[] } = {};
    const tagMap: { [tag: string]: string[] } = {};

    const posts = raw
      .map(({ url, frontmatter }) => {
        let tags = frontmatter?.tags || [];
        
        const result: Post = {
          title: frontmatter.title,
          url,
          date: formatDate(frontmatter.date),
          abstract: frontmatter.abstract,
          tags,
        };
        postMap[result.url] = result;
        return result;
      })
      .sort((a, b) => b.date.time - a.date.time);

    posts.forEach((item) => {
      const year = new Date(item.date.string).getFullYear();
      if (!yearMap[year]) {
        yearMap[year] = [];
      }
      yearMap[year].push(item.url);

      item.tags.forEach((tag) => {
        if (!tagMap[tag]) {
          tagMap[tag] = [];
        }
        tagMap[tag].push(item.url);
      });
    });

    return {
      yearMap,
      postMap,
      tagMap,
    };
  },
});





interface Post {
  title: string;
  url: string;
  date: { time: number, string: string };
  abstract: string;
  tags: string[];
}

interface Data {
  yearMap: { [year: number]: string[] };
  postMap: { [url: string]: Post };
  tagMap: { [tag: string]: string[] };
}

function formatDate(dateString: string): { time: number, string: string } {
  // Check if dateString is not provided or is invalid
  if (!dateString || isNaN(Date.parse(dateString))) {
    return {
      time: 0,
      string: '',
    };
  }

  const date = new Date(dateString);
  return {
    time: date.getTime(),
    string: date.toLocaleDateString('en-CA'), // 使用 ISO 8601 格式 (YYYY-MM-DD)
    // string: date.toISOString().split('T')[0],
  };
}