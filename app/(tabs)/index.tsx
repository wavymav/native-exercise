import { Post, PostCard } from '@/components/post-card'
import { Spinner } from '@/components/spinner'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { getApiBaseUrl } from '@/lib/query-client'
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'

export default function FeedScreen() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam = 0 }) => {
      const baseUrl = getApiBaseUrl()
      const url = baseUrl ? `${baseUrl}/api/posts` : '/api/posts'
      const response = await fetch(`${url}?offset=${pageParam}&limit=20`)
      if (!response.ok) throw new Error('Failed to fetch posts')
      return response.json()
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 20 ? allPages.length * 20 : undefined
    },
    initialPageParam: 0,
  })
  const posts: Post[] = data?.pages.flat() || []
  const loading = isLoading

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }

  const renderFooter = () => {
    if (!isFetchingNextPage) return null
    return (
      <View className="py-4">
        <Spinner />
      </View>
    )
  }

  // NOTE: Pull-to-refresh is not available in React Native Web (CodeSandbox environment)
  // You can implement a manual refresh button if desired, but it's not required.
  const handleRefresh = () => {
    refetch()
  }

  const renderPost = ({ item }: { item: Post }) => {
    return <PostCard post={item} />
  }

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
