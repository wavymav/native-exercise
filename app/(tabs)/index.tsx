import { Post } from '@/components/post-card'
import { Spinner } from '@/components/spinner'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import React from 'react'
import { FlatList, RefreshControl, TouchableOpacity, View } from 'react-native'

// TODO: Define the GET_POSTS query using gql
// The query should accept optional $offset and $limit variables (both Int)
// It should query the posts field with these variables
// The query should return: id, creatorName, creatorAvatar, content, imageUrl, likes, timestamp, isLiked
// const GET_POSTS = gql`
//   # Your query here
// `

export default function FeedScreen() {
  // TODO: Set up the useQuery hook with:
  // - GET_POSTS query
  // - variables: { offset: 0, limit: 20 }
  // - notifyOnNetworkStatusChange: true (to track refresh state)
  // Destructure: data, loading, error, fetchMore, refetch, networkStatus
  // Example: const { data, loading, error, fetchMore, refetch, networkStatus } = useQuery(...)

  // Placeholder variables - replace these with destructured values from useQuery above
  const loading = false // TODO: Replace with loading from useQuery
  const error: { message: string } | undefined = undefined // TODO: Replace with error from useQuery
  const fetchMore = () => {} // TODO: Replace with fetchMore from useQuery
  const refetch = () => {} // TODO: Replace with refetch from useQuery
  const networkStatus = 1 // TODO: Replace with networkStatus from useQuery

  const posts: Post[] = [] // TODO: Extract posts from data (data?.posts || [])
  const isRefreshing = false // TODO: Set to true when networkStatus === 4 (refetching)

  // TODO: Implement handleLoadMore function for infinite scrolling pagination
  // - Check if loading, return early if so
  // - Call fetchMore with variables: { offset: posts.length, limit: 20 }
  const handleLoadMore = () => {
    // Your implementation here
    // Hint: if (loading) return; fetchMore({ variables: { offset: posts.length, limit: 20 } })
  }

  // TODO: Implement handleRefresh function for pull-to-refresh
  // - Call refetch with variables: { offset: 0, limit: 20 }
  const handleRefresh = () => {
    // Your implementation here
    // Hint: refetch({ offset: 0, limit: 20 })
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
          Build your feed here!
        </ThemedText>
      </ThemedView>
    )
  }

  return (
    <ThemedView className="flex-1">
      {/* TODO: Set up FlatList to display the post feed.
          - The FlatList should:
            - Use the `posts` array as data.
            - Render each post with `renderPost`.
            - Use `keyExtractor` for keys.
            - Use `onEndReached` to trigger `handleLoadMore` for infinite scroll.
            - Use `refreshControl` for pull-to-refresh with `isRefreshing` and `handleRefresh`.
            - Display a footer and placeholder if empty.
            - Style as needed.
          - Remove/add props as appropriate once your logic is implemented.
       */}
      <FlatList
        data={posts /* TODO: replace with the list of posts from your query */}
        renderItem={renderPost /* TODO: render a post card */}
        keyExtractor={keyExtractor /* TODO: extract a unique post ID */}
        onEndReached={handleLoadMore /* TODO: implement infinite loading */}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          renderFooter /* TODO: optional: show spinner on load more */
        }
        ListEmptyComponent={renderEmpty /* TODO: empty/error/loading UI */}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing /* TODO: isRefreshing state */}
            onRefresh={handleRefresh /* TODO: implement refresh logic */}
          />
        }
        contentContainerClassName="p-4"
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        initialNumToRender={10}
        windowSize={10}
        removeClippedSubviews={true}
      />
    </ThemedView>
  )
}
