import { Post } from '@/components/post-card'
import { Spinner } from '@/components/spinner'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'

// Option A: GraphQL + Apollo Client imports
// Option B: REST + TanStack Query imports

export default function FeedScreen() {
  // TODO: Fetch posts with pagination
  // Option A: Use Apollo useQuery with offset/limit variables
  // Option B: Use TanStack useInfiniteQuery

  const posts: Post[] = []
  const loading = false
  const error: unknown = null

  // TODO: Implement pagination handler
  const handleLoadMore = () => {}

  // TODO: Implement footer loading indicator
  const renderFooter = () => {
    return null
  }

  const handleRefresh = () => {
    // TODO: Implement refresh
  }

  const renderPost = () => null

  const keyExtractor = (item: Post) => item.id

  const renderEmpty = () => {
    if (loading && posts.length === 0) {
      return (
        <View className="flex-1 items-center justify-center py-20">
          <Spinner />
          <ThemedText className="mt-4 text-muted-foreground">
            Loading posts...
          </ThemedText>
        </View>
      )
    }

    if (error) {
      const errorMessage =
        (error as { message?: string })?.message || 'An error occurred'
      return (
        <View className="flex-1 items-center justify-center py-20 px-8">
          <ThemedText className="text-destructive text-center mb-4">
            Unable to load posts
          </ThemedText>
          <ThemedText className="text-muted-foreground text-center text-sm mb-4">
            {errorMessage}
          </ThemedText>
          <TouchableOpacity
            onPress={handleRefresh}
            className="bg-primary px-6 py-3 rounded-lg"
          >
            <ThemedText className="text-primary-foreground font-semibold">
              Try Again
            </ThemedText>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <ThemedView className="flex-1 items-center justify-center py-20 px-8">
        <ThemedText type="title" className="text-center">
          No posts...
        </ThemedText>
      </ThemedView>
    )
  }

  return (
    <ThemedView className="flex-1">
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={keyExtractor}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={posts.length === 0 ? { flex: 1 } : undefined}
      />
    </ThemedView>
  )
}
