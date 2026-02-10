import { ThemedText } from '@/components/themed-text'
import { Image, TouchableOpacity, View } from 'react-native'

export interface Post {
  id: string
  creatorName: string
  creatorAvatar: string
  content: string
  imageUrl: string | null
  likes: number
  timestamp: string
  isLiked: boolean
}

// ============================================================================
// CHOOSE YOUR APPROACH: Option A (GraphQL + Apollo) or Option B (REST + TanStack Query)
// ============================================================================

// OPTION A: GraphQL + Apollo Client
// TODO: Define GraphQL mutations to like and unlike posts
// import { gql, useMutation } from '@apollo/client'
// const LIKE_POST = gql`
//   mutation LikePost($id: ID!) {
//     likePost(id: $id) {
//       id
//       likes
//       isLiked
//     }
//   }
// `
// const UNLIKE_POST = gql`
//   mutation UnlikePost($id: ID!) {
//     unlikePost(id: $id) {
//       id
//       likes
//       isLiked
//     }
//   }
// `

// OPTION B: REST + TanStack Query
// TODO: Import useMutation from TanStack Query
// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { getApiBaseUrl } from '@/lib/query-client'

export const PostCard = ({ post }: { post: Post }) => {
  // ============================================================================
  // OPTION A: GraphQL + Apollo Client Implementation
  // ============================================================================
  // TODO: Set up mutation hooks for liking and unliking posts
  // const [likePost] = useMutation(LIKE_POST, {
  //   optimisticResponse: {
  //     likePost: {
  //       id: post.id,
  //       likes: post.isLiked ? post.likes : post.likes + 1,
  //       isLiked: true,
  //       __typename: 'Post',
  //     },
  //   },
  //   update: (cache, { data }) => {
  //     if (data?.likePost) {
  //       cache.modify({
  //         id: cache.identify({ __typename: 'Post', id: post.id }),
  //         fields: {
  //           likes: () => data.likePost.likes,
  //           isLiked: () => data.likePost.isLiked,
  //         },
  //       })
  //     }
  //   },
  // })
  // const [unlikePost] = useMutation(UNLIKE_POST, {
  //   optimisticResponse: {
  //     unlikePost: {
  //       id: post.id,
  //       likes: post.isLiked ? post.likes - 1 : post.likes,
  //       isLiked: false,
  //       __typename: 'Post',
  //     },
  //   },
  //   update: (cache, { data }) => {
  //     if (data?.unlikePost) {
  //       cache.modify({
  //         id: cache.identify({ __typename: 'Post', id: post.id }),
  //         fields: {
  //           likes: () => data.unlikePost.likes,
  //           isLiked: () => data.unlikePost.isLiked,
  //         },
  //       })
  //     }
  //   },
  // })

  // ============================================================================
  // OPTION B: REST + TanStack Query Implementation
  // ============================================================================
  // TODO: Set up mutation hooks for liking and unliking posts
  // const queryClient = useQueryClient()
  // const likeMutation = useMutation({
  //   mutationFn: async () => {
  //     const response = await fetch(`${getApiBaseUrl()}/api/posts/${post.id}/like`, {
  //       method: 'POST',
  //     })
  //     if (!response.ok) throw new Error('Failed to like post')
  //     return response.json()
  //   },
  //   onMutate: async () => {
  //     // Cancel outgoing refetches
  //     await queryClient.cancelQueries({ queryKey: ['posts'] })
  //     // Snapshot previous value
  //     const previousPosts = queryClient.getQueryData(['posts'])
  //     // Optimistically update cache
  //     queryClient.setQueryData(['posts'], (old: any) => {
  //       if (!old) return old
  //       return {
  //         ...old,
  //         pages: old.pages.map((page: Post[]) =>
  //           page.map((p) =>
  //             p.id === post.id
  //               ? { ...p, likes: p.likes + 1, isLiked: true }
  //               : p
  //           )
  //         ),
  //       }
  //     })
  //     return { previousPosts }
  //   },
  //   onError: (err, variables, context) => {
  //     // Rollback on error
  //     if (context?.previousPosts) {
  //       queryClient.setQueryData(['posts'], context.previousPosts)
  //     }
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries({ queryKey: ['posts'] })
  //   },
  // })
  // const unlikeMutation = useMutation({
  //   mutationFn: async () => {
  //     const response = await fetch(`${getApiBaseUrl()}/api/posts/${post.id}/unlike`, {
  //       method: 'POST',
  //     })
  //     if (!response.ok) throw new Error('Failed to unlike post')
  //     return response.json()
  //   },
  //   onMutate: async () => {
  //     await queryClient.cancelQueries({ queryKey: ['posts'] })
  //     const previousPosts = queryClient.getQueryData(['posts'])
  //     queryClient.setQueryData(['posts'], (old: any) => {
  //       if (!old) return old
  //       return {
  //         ...old,
  //         pages: old.pages.map((page: Post[]) =>
  //           page.map((p) =>
  //             p.id === post.id
  //               ? { ...p, likes: p.likes - 1, isLiked: false }
  //               : p
  //           )
  //         ),
  //       }
  //     })
  //     return { previousPosts }
  //   },
  //   onError: (err, variables, context) => {
  //     if (context?.previousPosts) {
  //       queryClient.setQueryData(['posts'], context.previousPosts)
  //     }
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries({ queryKey: ['posts'] })
  //   },
  // })

  const handleLike = () => {
    // ============================================================================
    // OPTION A: GraphQL + Apollo Client
    // ============================================================================
    // TODO: Implement like/unlike functionality with optimistic updates
    // if (post.isLiked) {
    //   unlikePost({ variables: { id: post.id } })
    // } else {
    //   likePost({ variables: { id: post.id } })
    // }

    // ============================================================================
    // OPTION B: REST + TanStack Query
    // ============================================================================
    // TODO: Implement like/unlike functionality with optimistic updates
    // if (post.isLiked) {
    //   unlikeMutation.mutate()
    // } else {
    //   likeMutation.mutate()
    // }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffDays > 0) return `${diffDays}d ago`
    if (diffHours > 0) return `${diffHours}h ago`
    if (diffMins > 0) return `${diffMins}m ago`
    return 'Just now'
  }

  return (
    <View className="bg-card mb-4 rounded-lg overflow-hidden border border-border">
      {/* Header */}
      <View className="flex-row items-center p-4">
        <Image
          source={{ uri: post.creatorAvatar }}
          className="w-10 h-10 rounded-full mr-3"
        />
        <View className="flex-1">
          <ThemedText type="defaultSemiBold">{post.creatorName}</ThemedText>
          <ThemedText className="text-muted-foreground text-sm">
            {formatTimestamp(post.timestamp)}
          </ThemedText>
        </View>
      </View>

      {/* Content */}
      <View className="px-4 pb-3">
        <ThemedText>{post.content}</ThemedText>
      </View>

      {/* Image */}
      {post.imageUrl && (
        <Image
          source={{ uri: post.imageUrl }}
          className="w-full h-64"
          resizeMode="cover"
        />
      )}

      {/* Actions */}
      <View className="flex-row items-center px-4 py-3 border-t border-border">
        <TouchableOpacity
          onPress={handleLike}
          className="flex-row items-center mr-6"
          activeOpacity={0.7}
        >
          <ThemedText
            className={`text-2xl mr-2 ${post.isLiked ? '' : 'opacity-50'}`}
          >
            {post.isLiked ? '❤️' : '🤍'}
          </ThemedText>
          <ThemedText className="text-muted-foreground">
            {post.likes.toLocaleString()}
          </ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  )
}
