# Post Feed - React Native Coding Exercise

<img width="360" alt="Screenshot 2025-12-03 at 11 24 05 AM" src="https://github.com/user-attachments/assets/2019a421-3112-40fc-ac2b-d1b5aeb7fac2" />

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

If you complete the main exercise early and have time remaining within the 45-50 minute limit, identify and implement performance optimizations. Look for opportunities to improve rendering performance, reduce unnecessary computations, and prevent race conditions.

### Areas to Consider

- **Component Re-renders**: Are components re-rendering unnecessarily when parent state changes? Consider React's memoization patterns to prevent re-renders when props haven't changed.
- **Expensive Computations**: Are there calculations that run on every render but could be optimized? Look for functions that process data but only depend on specific props.
- **List Performance**: Are there optimizations that could improve FlatList rendering performance? Consider memoizing callbacks passed to FlatList to prevent unnecessary item re-renders.
- **User Interactions**: Are there edge cases with rapid user interactions that should be handled? Think about preventing duplicate mutations when users click buttons quickly.

### Success Criteria for Bonus

1. ✅ Unnecessary component re-renders are minimized
2. ✅ Expensive computations are optimized
3. ✅ List rendering performance is improved
4. ✅ Rapid user interactions are handled gracefully
5. ✅ Performance improvements are measurable (smoother scrolling, fewer re-renders)

### Testing Performance Improvements

- Use React DevTools Profiler to verify fewer re-renders
- Test scrolling performance with 100+ posts
- Verify that rapid interactions don't cause issues
- Verify that optimizations reduce unnecessary work

## Questions?

Ask your interviewer if you need clarification on any requirements.
