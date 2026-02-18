# Post Feed - React Native Coding Exercise

<img width="360" alt="iOS Post Feed Screenshot" src="./assets/images/ios-post-feed.png" />

## Overview

Build a working post feed with infinite scrolling and like functionality using React Native Web (running in CodeSandbox), Expo, and **TanStack Query (React Query)** for data fetching.

**Environment:** This exercise runs in CodeSandbox using React Native Web. The app runs in your browser, not on a mobile device.

**Time Limit:** 45-50 minutes

## Tech Stack

- **React Native** with **Expo**
- **TanStack Query** for data fetching, caching, and mutations
- **REST API** endpoints (Expo API Routes)
- **NativeWind** (TailwindCSS) for styling

## Getting Started

This exercise runs in **CodeSandbox** using **React Native Web**. The CodeSandbox environment is pre-configured, so you can start coding immediately.

The app will run in your browser. You don't need to install anything locally or start a development server.

## Requirements

- Fetch and display a feed of posts
- Implement infinite scroll pagination
- Add like/unlike functionality with optimistic updates
- Handle loading and error states

**Note:** Pull-to-refresh is not available in React Native Web.

## API Documentation

**GET `/api/posts?offset=0&limit=20`**
- Returns an array of posts
- Query parameters:
  - `offset` (optional, default: 0): Starting index for pagination
  - `limit` (optional, default: 20): Number of posts to return
- Response: `Post[]`

**POST `/api/posts/:id/like`**
- Likes a post by ID
- Response: `Post`

**POST `/api/posts/:id/unlike`**
- Unlikes a post by ID
- Response: `Post`

**Post Type:**
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

## What's Already Built

- CodeSandbox environment pre-configured for React Native Web
- TanStack Query client with sensible defaults (`lib/query-client.ts`)
- `QueryClientProvider` set up in the root layout
- REST API endpoints with simulated network delays
- `PostCard` UI component (`components/post-card.tsx`)
- Loading spinner, themed text/view components
- 500 mock posts available for testing

## Success Criteria

1. Posts load and display correctly
2. Infinite scroll loads more posts
3. Like button updates instantly (optimistic updates)
4. Code is clean and follows best practices
5. Error states are handled gracefully

## Bonus (if time permits)

If you finish early, identify and implement performance optimizations. Think about rendering efficiency, unnecessary re-renders, and edge cases with rapid user interactions.

## Questions?

Ask your interviewer if you need clarification on any requirements.
