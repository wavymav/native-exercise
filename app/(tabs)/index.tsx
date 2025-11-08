import { Post } from '@/components/post-card'
import { Spinner } from '@/components/spinner'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

export default function FeedScreen() {
  // TODO: Implement useInfiniteQuery hook for fetching posts with pagination
  // Requirements:
  // 1. Use queryKey: ['posts']
  // 2. Use queryFn: ({ pageParam = 0 }) => apiClient.getPosts(pageParam, 20)
  //    - pageParam represents the offset (starting index)
  //    - Limit should be 20 posts per page
  // 3. Implement getNextPageParam:
  //    - If lastPage.length < 20, return undefined (no more pages)
  //    - Otherwise, return the next offset: allPages.length * 20
  // 4. Set initialPageParam to 0
  // 5. Destructure: data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isRefetching
  // Placeholder variables for useInfiniteQuery destructured values
  const data: { pages: Post[][] } = { pages: [] } // TODO: replace with the list of posts from useInfiniteQuery
  const isLoading = false // TODO: replace with the loading state from useInfiniteQuery
  const error: { message: string } | undefined = undefined // TODO: replace with the error state from useInfiniteQuery
  const isFetchingNextPage = false // TODO: replace with the fetching next page state from useInfiniteQuery
  const isRefetching = false // TODO: replace with the refetching state from useInfiniteQuery

  // Flatten pages array to get all posts (will always be empty array as data is undefined)
  const posts: Post[] = data?.pages?.flat() || [] // TODO: replace with the list of posts from useInfiniteQuery
  const isRefreshing = isRefetching && !isFetchingNextPage

  // TODO: Implement handleLoadMore function
  // Requirements:
  // - Should call fetchNextPage() if there are more pages (hasNextPage) and not currently fetching (isFetchingNextPage)
  const handleLoadMore = () => {
    // TODO: Implement load more logic
  }

  // TODO: Implement handleRefresh function
  // Requirements:
  // - Should call refetch() to refresh the posts list
  const handleRefresh = () => {
    // TODO: Implement refresh logic
  }

  const renderPost = () => null // TODO: render a post card

  const keyExtractor = () => '' // TODO: extract a unique post ID

  const renderFooter = () => {
    // TODO: optional: show spinner on load more and if there are no posts return null
    return (
      <View className="py-4">
        <Spinner />
      </View>
    )
  }

  const renderEmpty = () => {
    if (isLoading && posts.length === 0) {
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
      {/* 
        // TODO: Remove the placeholder and Implement the FlatList to display the post feed here.
        Requirements:
          - Use React Native's FlatList component.
          - Data: Use the `posts` array from your query results.
          - Rendering: Each post should be rendered using the `renderPost` function.
          - Keys: Use `keyExtractor` to provide unique keys for each post.
          - Pagination: Implement infinite scroll with `onEndReached` to trigger `handleLoadMore`.
          - Pull-to-Refresh: Use React Native's RefreshControl component, controlled by `isRefreshing` and `handleRefresh`.
          - Footer: Use `renderFooter` to show a loading spinner or indicator when loading more posts.
          - Empty/Error/Loading State: Use `renderEmpty` for empty/error/loading UI.
          - Styling: Add any necessary FlatList and content styling as needed.
      */}
      <ThemedView className="flex-1 items-center justify-center py-20 px-8">
        <ThemedText type="title" className="text-center">
          Build your feed here!
        </ThemedText>
      </ThemedView>
    </ThemedView>
  )
}
