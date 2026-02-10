import { Post } from '@/components/post-card'
import { Spinner } from '@/components/spinner'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

// ============================================================================
// CHOOSE YOUR APPROACH: Option A (GraphQL + Apollo) or Option B (REST + TanStack Query)
// ============================================================================

// OPTION A: GraphQL + Apollo Client
// TODO: Define a GraphQL query to fetch posts
// import { gql, useQuery } from '@apollo/client'
// const GET_POSTS = gql`
//   query GetPosts($offset: Int, $limit: Int) {
//     posts(offset: $offset, limit: $limit) {
//       id
//       creatorName
//       creatorAvatar
//       content
//       imageUrl
//       likes
//       timestamp
//       isLiked
//     }
//   }
// `

// OPTION B: REST + TanStack Query
// TODO: Set up useInfiniteQuery hook to fetch posts
// import { useInfiniteQuery } from '@tanstack/react-query'
// import { getApiBaseUrl } from '@/lib/query-client'

export default function FeedScreen() {
  // ============================================================================
  // OPTION A: GraphQL + Apollo Client Implementation
  // ============================================================================
  // TODO: Set up the useQuery hook to fetch posts
  // const { data, loading, error, fetchMore, refetch, networkStatus } = useQuery(GET_POSTS, {
  //   variables: { offset: 0, limit: 20 },
  //   notifyOnNetworkStatusChange: true,
  // })
  // const posts: Post[] = data?.posts || []
  // const isRefreshing = networkStatus === 4 // NetworkStatus.refetch

  // ============================================================================
  // OPTION B: REST + TanStack Query Implementation
  // ============================================================================
  // TODO: Set up useInfiniteQuery hook to fetch posts
  // const {
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   isLoading,
  //   error,
  //   refetch,
  //   isRefetching,
  // } = useInfiniteQuery({
  //   queryKey: ['posts'],
  //   queryFn: async ({ pageParam = 0 }) => {
  //     const response = await fetch(`${getApiBaseUrl()}/api/posts?offset=${pageParam}&limit=20`)
  //     if (!response.ok) throw new Error('Failed to fetch posts')
  //     return response.json()
  //   },
  //   getNextPageParam: (lastPage, allPages) => {
  //     return lastPage.length === 20 ? allPages.length * 20 : undefined
  //   },
  //   initialPageParam: 0,
  // })
  // const posts: Post[] = data?.pages.flat() || []
  // const loading = isLoading
  // const isRefreshing = isRefetching

  // Placeholder variables - replace these with values from your chosen approach
  const loading = false
  const error: { message: string } | undefined = undefined
  const fetchMore = () => {}
  const refetch = () => {}
  const networkStatus = 1

  const posts: Post[] = []
  const isRefreshing = false

  // ============================================================================
  // OPTION A: GraphQL + Apollo Client - Pagination
  // ============================================================================
  // TODO: Implement handleLoadMore function for infinite scrolling pagination
  // const handleLoadMore = () => {
  //   if (!loading && hasMore) {
  //     fetchMore({
  //       variables: {
  //         offset: posts.length,
  //         limit: 20,
  //       },
  //     })
  //   }
  // }

  // ============================================================================
  // OPTION B: REST + TanStack Query - Pagination
  // ============================================================================
  // TODO: Implement handleLoadMore function for infinite scrolling pagination
  // const handleLoadMore = () => {
  //   if (hasNextPage && !isFetchingNextPage) {
  //     fetchNextPage()
  //   }
  // }

  // TODO: Implement handleLoadMore function for infinite scrolling pagination
  const handleLoadMore = () => {
    // Your implementation here
  }

  // ============================================================================
  // OPTION A & B: Refresh functionality (optional)
  // ============================================================================
  // NOTE: Pull-to-refresh is not available in React Native Web (CodeSandbox environment)
  // You can implement a manual refresh button if desired, but it's not required.
  // TODO: (Optional) Implement handleRefresh function for manual refresh
  // const handleRefresh = () => {
  //   refetch()
  // }

  // TODO: (Optional) Implement handleRefresh function for manual refresh
  const handleRefresh = () => {
    // Your implementation here (optional - not required for React Native Web)
  }

  const renderPost = () => null // TODO: implement post rendering

  const keyExtractor = () => '' // TODO: implement key extraction

  const renderFooter = () => {
    // TODO: implement footer rendering
    return (
      <View className="py-4">
        <Spinner />
      </View>
    )
  }

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
      {/* TODO: Replace placeholder with a FlatList to display posts */}
      <ThemedView className="flex-1 items-center justify-center py-20 px-8">
        <ThemedText type="title" className="text-center">
          Build your feed here!
        </ThemedText>
      </ThemedView>
    </ThemedView>
  )
}
