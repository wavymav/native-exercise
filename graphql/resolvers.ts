import { delay, posts } from '@/lib/posts-data'

export const resolvers = {
  Query: {
    posts: async (
      _: any,
      { offset = 0, limit = 20 }: { offset?: number; limit?: number }
    ) => {
      const isInitialLoad = offset === 0
      const delayTime = isInitialLoad
        ? 4000 + Math.random() * 2000
        : 2000 + Math.random() * 1000

      await delay(delayTime)

      return posts.slice(offset, offset + limit)
    }
  },
  Mutation: {
    likePost: async (_: any, { id }: { id: string }) => {
      await delay(1000 + Math.random() * 500)

      const post = posts.find((p: (typeof posts)[0]) => p.id === id)
      if (post && !post.isLiked) {
        post.likes += 1
        post.isLiked = true
      }
      return post
    },
    unlikePost: async (_: any, { id }: { id: string }) => {
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
