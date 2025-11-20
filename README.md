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

Implement a GraphQL query to fetch posts and set up the query hook. Extract the posts data and handle loading/error states.

### 2. Implement Pagination (`app/(tabs)/index.tsx`)

Implement infinite scrolling pagination and pull-to-refresh functionality.

### 3. Render the Feed (`app/(tabs)/index.tsx`)

Replace the placeholder with a FlatList that displays posts, handles pagination, and shows appropriate loading/error states.

### 4. Add Like/Unlike Functionality (`components/post-card.tsx`)

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
- Apollo Client cache is pre-configured.
- 500 mock posts are available for testing pagination.

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
