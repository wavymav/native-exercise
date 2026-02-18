import { Spinner } from '@/components/spinner'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

export default function FeedScreen() {
  // TODO: Fetch posts from the API with pagination
  const error = undefined 
  const loading = false 
  const posts: any[] = []

  // TODO: Load more posts when the user scrolls to the end
  const handleLoadMore = () => {}

  // TODO: Show a loading indicator while fetching the next page
  const renderFooter = () => {}

  // NOTE: Pull-to-refresh is not available in React Native Web (CodeSandbox environment)
  // TODO: Implement refresh logic
  const handleRefresh = () => {}

  // TODO: Render each post using the PostCard component
  const renderPost = () => null

  // TODO: Provide a unique key for each post
  const keyExtractor = () => null

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
      {/* TODO: Implement FlatList with infinite scroll */}
      {renderEmpty()}
    </ThemedView>
  )
}
