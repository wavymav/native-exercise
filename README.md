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

Implement a query to fetch posts using `useInfiniteQuery` and set up pagination. Extract the posts data and handle loading/error states.

### 2. Implement Pagination (`app/(tabs)/index.tsx`)

Implement infinite scrolling pagination to load more posts as the user scrolls.

### 3. Render the Feed (`app/(tabs)/index.tsx`)

Replace the placeholder with a FlatList that displays posts, handles pagination, and shows appropriate loading/error states.

### 4. Add Like/Unlike Functionality (`components/post-card.tsx`)

Implement like and unlike mutations with optimistic updates for instant UI feedback.

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

- Mutations have network delays that should be handled appropriately.
- 500 mock posts are available for testing pagination.

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
