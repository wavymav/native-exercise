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

### 1. Configure Apollo Client Cache (`lib/apollo-client.ts`)

Configure the Apollo Client cache to properly handle pagination. The cache should merge paginated results correctly when loading more posts.

### 2. Fetch Posts with GraphQL (`app/(tabs)/index.tsx`)

Implement a GraphQL query to fetch posts and set up the query hook. Extract the posts data and handle loading/error states.

### 3. Implement Pagination (`app/(tabs)/index.tsx`)

Implement infinite scrolling pagination and pull-to-refresh functionality.

### 4. Render the Feed (`app/(tabs)/index.tsx`)

Replace the placeholder with a FlatList that displays posts, handles pagination, and shows appropriate loading/error states.

### 5. Add Like/Unlike Functionality (`components/post-card.tsx`)

Implement like and unlike mutations with optimistic updates for instant UI feedback.

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

- Mutations have network delays that should be handled appropriately.
- Apollo Client cache needs to be configured to handle pagination merging.
- 500 mock posts are available for testing pagination.

## What's Already Built

- Apollo Client setup (cache configuration needed)
- GraphQL server with resolvers
- Complete UI components and styling
- Loading/error states
- Performance optimizations

## Success Criteria

1. Cache is properly configured for pagination
2. Posts load and display correctly
3. Infinite scroll loads more posts
4. Pull-to-refresh resets the feed
5. Like button updates instantly (optimistic)
6. Code is clean and follows Apollo best practices

## Bonus: Performance Improvements (Optional)

If you complete the main exercise early and have time remaining within the 45-50 minute limit, implement the following performance optimizations. These are quick wins that demonstrate React performance optimization skills:

### 1. Memoize PostCard Component (`components/post-card.tsx`)

Wrap the `PostCard` component with `React.memo` to prevent unnecessary re-renders when parent components update but the post data hasn't changed.

**Considerations:**

- What props should trigger a re-render?
- How should you handle the comparison function?

### 2. Optimize Expensive Computations (`components/post-card.tsx`)

The `formatTimestamp` function is called on every render. Use `useMemo` to memoize the formatted timestamp value so it's only recalculated when the `timestamp` prop changes.

### 3. Optimize FlatList Callbacks (`app/(tabs)/index.tsx`)

Use `useCallback` to memoize the `renderPost` and `keyExtractor` functions passed to FlatList. This prevents these functions from being recreated on every render, which can cause FlatList to unnecessarily re-render items.

**Hint:** Consider what dependencies these callbacks have.

### 4. Debounce Like Button Clicks (`components/post-card.tsx`)

Add debouncing to the like button handler to prevent rapid-fire mutations if a user clicks multiple times quickly. This reduces unnecessary network requests and potential race conditions.

**Considerations:**

- How long should the debounce delay be?
- Should you use a library or implement a simple debounce yourself?
- How does this interact with optimistic updates?

### Success Criteria for Bonus

1. ✅ PostCard is memoized with `React.memo`
2. ✅ Timestamp formatting is memoized with `useMemo`
3. ✅ FlatList callbacks are memoized with `useCallback`
4. ✅ Like button has debouncing to prevent rapid clicks
5. ✅ Performance improvements are measurable (smoother scrolling, fewer re-renders)

### Testing Performance Improvements

- Use React DevTools Profiler to verify fewer re-renders
- Test scrolling performance with 100+ posts
- Verify that rapid like clicks don't cause multiple mutations
- Verify that memoization reduces unnecessary component re-renders

## Questions?

Ask your interviewer if you need clarification on any requirements.
