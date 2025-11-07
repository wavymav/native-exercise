# Post Feed - Technical Coding Exercise

## Overview

This is a React Native Expo application that displays a feed of posts. Your task is to implement the GraphQL queries and mutations needed to fetch posts, handle infinite scrolling pagination, and enable users to like/unlike posts with optimistic updates.

**Time Limit:** 45-50 minutes

## Setup Instructions

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npx expo start
   ```

3. Open the app in your preferred environment (iOS simulator, Android emulator, or Expo Go)

## Exercise Tasks

### Task 1: Implement GET_POSTS Query (`app/(tabs)/index.tsx`)

**Location:** `app/(tabs)/index.tsx`

**What to do:**

1. Define the `GET_POSTS` GraphQL query using the `gql` template literal

   - Accept optional `$offset` and `$limit` variables (both `Int`)
   - Query the `posts` field with these variables
   - Return: `id`, `creatorName`, `creatorAvatar`, `content`, `imageUrl`, `likes`, `timestamp`, `isLiked`

2. Set up the `useQuery` hook:

   - Use the `GET_POSTS` query
   - Pass `variables: { offset: 0, limit: 20 }`
   - Set `notifyOnNetworkStatusChange: true` to track refresh state
   - Destructure: `data`, `loading`, `error`, `fetchMore`, `refetch`, `networkStatus`

3. Extract posts from the query data: `data?.posts || []`

4. Set `isRefreshing` to `true` when `networkStatus === 4` (refetching)

### Task 2: Implement Infinite Scrolling Pagination (`app/(tabs)/index.tsx`)

**Location:** `app/(tabs)/index.tsx`

**What to do:**

1. Implement `handleLoadMore` function:

   - Check if `loading` is true, return early if so
   - Call `fetchMore` with `variables: { offset: posts.length, limit: 20 }`

2. Implement `handleRefresh` function:
   - Call `refetch` with `variables: { offset: 0, limit: 20 }`

The FlatList is already configured with:

- `onEndReached={handleLoadMore}` for infinite scrolling
- `onEndReachedThreshold={0.5}` to trigger loading when 50% from bottom
- `refreshControl` for pull-to-refresh functionality

### Task 3: Implement Like/Unlike Mutations (`components/post-card.tsx`)

**Location:** `components/post-card.tsx`

**What to do:**

1. Define the `LIKE_POST` mutation using `gql`:

   - Accept `$id` variable of type `ID!`
   - Call the `likePost` mutation
   - Return: `id`, `likes`, `isLiked`

2. Define the `UNLIKE_POST` mutation using `gql`:

   - Accept `$id` variable of type `ID!`
   - Call the `unlikePost` mutation
   - Return: `id`, `likes`, `isLiked`

3. Set up mutation hooks:

   - Use `useMutation` for `LIKE_POST`
   - Use `useMutation` for `UNLIKE_POST`

4. Implement `handleLike` function with optimistic updates:
   - If `post.isLiked` is true, call `unlikePost` mutation with:
     - `variables: { id: post.id }`
     - `optimisticResponse: { unlikePost: { __typename: 'Post', id: post.id, likes: post.likes - 1, isLiked: false } }`
   - Otherwise, call `likePost` mutation with:
     - `variables: { id: post.id }`
     - `optimisticResponse: { likePost: { __typename: 'Post', id: post.id, likes: post.likes + 1, isLiked: true } }`

## GraphQL Schema Reference

The GraphQL endpoint is available at `/api/graphql`. Here's the schema:

```graphql
type Post {
  id: ID!
  creatorName: String!
  creatorAvatar: String!
  content: String!
  imageUrl: String
  likes: Int!
  timestamp: String!
  isLiked: Boolean!
}

type Query {
  posts(offset: Int, limit: Int): [Post!]!
}

type Mutation {
  likePost(id: ID!): Post
  unlikePost(id: ID!): Post
}
```

## Key Points

- **Optimistic Updates**: The mutations have simulated network delays (1-1.5 seconds). Use optimistic updates to provide immediate UI feedback.
- **Pagination**: The API supports offset-based pagination. Use `fetchMore` for infinite scrolling.
- **Cache Management**: Apollo Client cache is already configured to handle pagination merging. The cache will automatically merge paginated results.
- **Performance**: The FlatList is already optimized with performance props (`maxToRenderPerBatch`, `windowSize`, etc.) for handling 500+ items.

## What's Already Implemented

✅ Apollo Client setup and configuration  
✅ GraphQL schema and resolvers  
✅ Post card UI component  
✅ FlatList with performance optimizations  
✅ Loading states and error handling UI  
✅ Pull-to-refresh UI  
✅ Styling with NativeWind

## Evaluation Criteria

Your implementation will be evaluated on:

1. **Correctness**: Queries and mutations work as expected
2. **Optimistic Updates**: UI updates immediately when liking/unliking
3. **Pagination**: Infinite scrolling loads more posts correctly
4. **Code Quality**: Clean, readable code following React/Apollo best practices
5. **Error Handling**: Existing error handling is preserved

## Tips

- Check the GraphQL schema in `graphql/schema.ts` for exact field names and types
- The Apollo Client cache is configured to handle pagination - you don't need to manually merge results
- Use the Apollo DevTools (if available) to debug queries and mutations
- Test both like and unlike flows
- Test pagination by scrolling to the bottom
- Test pull-to-refresh functionality

## Questions?

If you have any questions about the requirements or setup, please ask your interviewer.

Good luck! 🚀
