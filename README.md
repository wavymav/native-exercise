# Post Feed - React Native Coding Exercise

## Overview

Build a working post feed with infinite scrolling and like functionality using React Native, Expo, and GraphQL.

**Time Limit:** 45-50 minutes

## Getting Started

```bash
npm install
npx expo start
```

Then press `i` for iOS simulator or `a` for Android emulator.

## What You Need to Implement

### 1. Fetch Posts with GraphQL (`app/(tabs)/index.tsx`)

**Find the TODOs at lines 8-32**

1. Define the `GET_POSTS` GraphQL query using `gql`
   - Accept `$offset` and `$limit` variables (both `Int`)
   - Query the `posts` field with these variables
   - Return all Post fields: `id`, `creatorName`, `creatorAvatar`, `content`, `imageUrl`, `likes`, `timestamp`, `isLiked`

2. Set up the `useQuery` hook
   - Use the `GET_POSTS` query
   - Pass `variables: { offset: 0, limit: 20 }`
   - Set `notifyOnNetworkStatusChange: true` to track refresh state
   - Destructure: `data`, `loading`, `error`, `fetchMore`, `refetch`, `networkStatus`

3. Extract posts from the query data
4. Track refresh state using `networkStatus === 4`

### 2. Implement Pagination (`app/(tabs)/index.tsx`)

**Find the TODOs at lines 34-47**

1. Implement `handleLoadMore` function:
   - Check if already loading and return early if so
   - Call `fetchMore` with new offset using `posts.length` and `limit: 20`

2. Implement `handleRefresh` function:
   - Call `refetch` with `offset: 0` to reset the feed

### 3. Render the Feed (`app/(tabs)/index.tsx`)

**Find the TODOs at lines 49-126**

Replace the placeholder with a FlatList that:
- Renders PostCard components for each post
- Implements `keyExtractor` to return unique post IDs
- Calls `handleLoadMore` when scrolling near the bottom
- Implements pull-to-refresh with RefreshControl
- Shows loading footer and empty state (helpers are provided)

### 4. Add Like/Unlike Functionality (`components/post-card.tsx`)

**Find the TODOs at lines 15-45**

1. Define `LIKE_POST` mutation using `gql`
   - Accept `$id` variable of type `ID!`
   - Call the `likePost` mutation
   - Return: `id`, `likes`, `isLiked`

2. Define `UNLIKE_POST` mutation using `gql`
   - Accept `$id` variable of type `ID!`
   - Call the `unlikePost` mutation
   - Return: `id`, `likes`, `isLiked`

3. Set up `useMutation` hooks for both mutations

4. Implement `handleLike` function with optimistic updates:
   - If post is liked, call `unlikePost` with optimistic response
   - If post is not liked, call `likePost` with optimistic response
   - Include `__typename: 'Post'` in optimistic response
   - Update `likes` count and `isLiked` state optimistically

## GraphQL API

All queries and mutations are available at `/api/graphql`:

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

## Important Notes

- **Optimistic Updates Required**: Mutations have 1-1.5 second delays. Use `optimisticResponse` for instant UI updates.
- **Apollo Cache**: Pre-configured to merge paginated results automatically.
- **Network Status**: Use `networkStatus === 4` to detect pull-to-refresh state.
- **Dataset**: 500 mock posts available for testing pagination.

## What's Already Built

- Apollo Client with cache configuration
- GraphQL server with resolvers
- Complete UI components and styling
- Loading/error states
- Performance optimizations

## Success Criteria

1. Posts load and display correctly
2. Infinite scroll loads more posts
3. Pull-to-refresh resets the feed
4. Like button updates instantly (optimistic)
5. Code is clean and follows Apollo best practices

## Questions?

Ask your interviewer if you need clarification on any requirements.
