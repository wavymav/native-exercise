import { delay, posts } from '@/lib/posts-data'

export const resolvers = {
  Query: {
    posts: async (
      _: any,
      { offset = 0, limit = 20 }: { offset?: number; limit?: number }
    ) => {
      // Simulate network latency
      // Initial load or refetch: 4-6 seconds (VERY obvious loading state)
      // Pagination: 2-3 seconds (clearly noticeable)
      const isInitialLoad = offset === 0
      const delayTime = isInitialLoad
        ? 4000 + Math.random() * 2000 // 4-6 seconds for initial/refetch
        : 2000 + Math.random() * 1000 // 2-3 seconds for pagination

      await delay(delayTime)

      // Simulate pagination
      return posts.slice(offset, offset + limit)
    }
  },
  Mutation: {
    likePost: async (_: any, { id }: { id: string }) => {
      // Simulate a network request (1-1.5 seconds)
      // Long enough to clearly see optimistic update advantage
      await delay(1000 + Math.random() * 500)

      const post = posts.find((p: (typeof posts)[0]) => p.id === id)
      if (post && !post.isLiked) {
        post.likes += 1
        post.isLiked = true
      }
      return post
    },
    unlikePost: async (_: any, { id }: { id: string }) => {
      // Simulate a network request (1-1.5 seconds)
      // Long enough to clearly see optimistic update advantage
      await delay(1000 + Math.random() * 500)

      const post = posts.find((p: (typeof posts)[0]) => p.id === id)
      if (post && post.isLiked) {
        post.likes -= 1
        post.isLiked = false
      }
      return post
    }
  }
}
