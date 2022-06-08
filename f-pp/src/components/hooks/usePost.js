import { useMemo } from "react";

export const useSortetPosts = (posts, sort) => {
    const sortedPost = useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        };
        return posts;
      }, [sort, posts])
      
      return sortedPost;
}

export const usePosts = (posts, sort, query) => {
    const sortedPost = useSortetPosts(posts, sort)

    const sortedAndSearched = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPost])

    return sortedAndSearched;
}