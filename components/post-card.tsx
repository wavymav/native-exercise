import { ThemedText } from '@/components/themed-text'
import { Image, TouchableOpacity, View } from 'react-native'

// Option A: GraphQL + Apollo Client imports
// Option B: REST + TanStack Query imports

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
  // TODO: Implement like/unlike mutations
  // Option A: Use Apollo useMutation with optimistic updates
  // Option B: Use TanStack useMutation with optimistic updates

  const handleLike = () => {
    // TODO: Toggle like/unlike based on post.isLiked
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
