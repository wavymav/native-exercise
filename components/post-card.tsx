import { ThemedText } from '@/components/themed-text'
import { apiClient } from '@/lib/api-client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
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

export const PostCard = ({ post }: { post: Post }) => {
  const queryClient = useQueryClient()

  // TODO: Implement likeMutation using useMutation from @tanstack/react-query
  // Requirements:
  // 1. Use apiClient.likePost(id) as the mutationFn
  // 2. Implement optimistic updates in onMutate:
  //    - Cancel any outgoing refetches for the "posts" query
  //    - Snapshot the previous query data for rollback
  //    - Optimistically update the cache: increment likes by 1 and set isLiked to true for the post with matching id
  //    - The query data structure is: { pages: Post[][] }
  // 3. In onSuccess: Update the cache with the server response (updatedPost) to ensure consistency
  // 4. In onError: Rollback to the previous data if the mutation fails
  const likeMutation = useMutation({
    mutationFn: (id: string) => apiClient.likePost(id)
    // TODO: Add onMutate, onSuccess, and onError handlers
  })

  // TODO: Implement unlikeMutation using useMutation from @tanstack/react-query
  // Requirements:
  // 1. Use apiClient.unlikePost(id) as the mutationFn
  // 2. Implement optimistic updates in onMutate:
  //    - Cancel any outgoing refetches for the "posts" query
  //    - Snapshot the previous query data for rollback
  //    - Optimistically update the cache: decrement likes by 1 and set isLiked to false for the post with matching id
  //    - The query data structure is: { pages: Post[][] }
  // 3. In onSuccess: Update the cache with the server response (updatedPost) to ensure consistency
  // 4. In onError: Rollback to the previous data if the mutation fails
  const unlikeMutation = useMutation({
    mutationFn: (id: string) => apiClient.unlikePost(id)
    // TODO: Add onMutate, onSuccess, and onError handlers
  })

  const handleLike = async () => {
    try {
      if (post.isLiked) {
        await unlikeMutation.mutateAsync(post.id)
      } else {
        await likeMutation.mutateAsync(post.id)
      }
    } catch (error) {
      console.error('Error toggling like:', error)
    }
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
