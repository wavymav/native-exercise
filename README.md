# Post Feed - React Native Coding Exercise

<img width="360" alt="iOS Post Feed Screenshot" src="assets/images/ios-post-feed.png" />

## Overview

Build a working post feed with infinite scrolling and like functionality using React Native, Expo, and @tanstack/react-query with a REST API.

**Time Limit:** 45-50 minutes

## Getting Started

```bash
npm install
npx expo start --web
```

Then open the app in your browser.

## What You Need to Implement

### 1. Fetch Posts with Infinite Scrolling (`app/(tabs)/index.tsx`)

**Find the TODOs at lines 8-29**

1. Import and set up `useInfiniteQuery` from `@tanstack/react-query`
   - Import `apiClient` from `@/lib/api-client`
   - Use `queryKey: ['posts']`
   - Use `queryFn: ({ pageParam = 0 }) => apiClient.getPosts(pageParam, 20)`
   - Set `initialPageParam: 0`

2. Implement `getNextPageParam`:
   - Return `undefined` if `lastPage.length < 20` (no more pages)
   - Otherwise return `allPages.length * 20` (next offset)

3. Destructure the query result:
   - `data`, `isLoading`, `error`, `fetchNextPage`, `hasNextPage`, `isFetchingNextPage`

4. Flatten the pages array to get all posts: `data?.pages?.flat() || []`

### 2. Implement Pagination (`app/(tabs)/index.tsx`)

**Find the TODOs at lines 31-43**

1. Implement `handleLoadMore` function:
   - Call `fetchNextPage()` if `hasNextPage` is true and not currently `isFetchingNextPage`

### 3. Render the Feed (`app/(tabs)/index.tsx`)

**Find the TODOs at lines 45-123**

Replace the placeholder with a FlatList that:
- Renders PostCard components for each post
- Implements `keyExtractor` to return unique post IDs
- Calls `handleLoadMore` when scrolling near the bottom
- Shows loading footer and empty state (helpers are provided)

### 4. Add Like/Unlike Functionality (`components/post-card.tsx`)

**Find the TODOs at lines 20-48**

1. Implement `likeMutation` using `useMutation`:
   - Use `apiClient.likePost(id)` as `mutationFn`

2. Implement `unlikeMutation` using `useMutation`:
   - Use `apiClient.unlikePost(id)` as `mutationFn`

3. For both mutations, implement optimistic updates:
   - **onMutate**: Cancel outgoing refetches, snapshot previous data, update cache optimistically
   - **onSuccess**: Update cache with server response
   - **onError**: Rollback to previous data

4. Cache update structure:
   - Query data is `{ pages: Post[][] }`
   - Find and update the post in the nested array
   - For like: increment `likes` by 1, set `isLiked` to `true`
   - For unlike: decrement `likes` by 1, set `isLiked` to `false`

## REST API

The API client (`lib/api-client.ts`) provides these methods:

### Endpoints

**GET /api/posts?offset={offset}&limit={limit}**
- Returns: `Post[]`
- Pagination via offset/limit query parameters

**POST /api/posts/{id}/like**
- Returns: `Post` (updated post object)

**POST /api/posts/{id}/unlike**
- Returns: `Post` (updated post object)

### Post Interface

```typescript
interface Post {
  id: string
  creatorName: string
  creatorAvatar: string
  content: string
  imageUrl: string | null
  likes: number
  timestamp: string
  isLiked: boolean
}
```

## Important Notes

- **Optimistic Updates Required**: Mutations have 1-1.5 second delays. Implement optimistic updates in `onMutate` for instant UI feedback.
- **React Query Cache**: Query data structure is `{ pages: Post[][] }` for infinite queries.
- **Pagination**: Use `useInfiniteQuery` with `getNextPageParam` to handle offset-based pagination.
- **Dataset**: 500 mock posts available for testing pagination.

## What's Already Built

- React Query client with cache configuration
- REST API endpoints with simulated delays
- Complete UI components and styling
- Loading/error states
- API client wrapper functions

## Success Criteria

1. Posts load and display correctly
2. Infinite scroll loads more posts
3. Like button updates instantly (optimistic)
4. Code is clean and follows React Query best practices

## Questions?

Ask your interviewer if you need clarification on any requirements.
