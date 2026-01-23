# Interview Questions: Senior Mobile Engineer (React Native)

## Pre-Exercise Questions (5-10 minutes)

These questions help set context, understand the candidate's experience level, and clarify expectations before they begin coding.

### Experience & Background

1. **React Query Experience**

   - How familiar are you with @tanstack/react-query? Have you worked with it in production apps?
   - What's your experience with `useQuery` and `useMutation`? Any challenges you've encountered?
   - Have you implemented optimistic updates before? Can you walk me through your approach?

2. **React Native & Expo**

   - What's your experience with Expo? Have you used EAS Build or OTA updates?
   - How do you typically handle pagination and infinite scrolling in React Native?
   - What performance optimization techniques have you used in React Native apps?

3. **Time Management**
   - This exercise is designed to take 45-50 minutes. How do you prioritize when time is limited?
   - If you run into a blocker, what's your approach?

### Exercise-Specific Clarifications

4. **Understanding the Task**

   - Based on the README, what do you understand needs to be implemented?
   - Are there any questions about the requirements before you start?
   - What's your plan of attack? What would you tackle first?

5. **Technical Approach**
   - How would you approach implementing optimistic updates for the like/unlike functionality?
   - What considerations do you have for handling the network delays mentioned in the requirements?
   - How would you ensure the infinite scroll performs well with 500+ posts?

---

## Post-Exercise Questions (15-20 minutes)

These questions dive deep into the candidate's implementation, decision-making, and real-world experience.

### Implementation Deep Dive

#### React Query & Data Fetching

1. **Query Implementation**

   - Walk me through your `useInfiniteQuery` setup. Why did you structure it this way?
   - How did you implement `getNextPageParam`? Why this approach?
   - How does `fetchNextPage` work with infinite queries?

2. **Cache Understanding**

   - How does React Query's cache work with infinite queries?
   - What's the structure of the cached data for `useInfiniteQuery`? How do you access the posts?
   - What happens if a user likes a post, then the query refetches? How does the cache handle this?

3. **Optimistic Updates**
   - Walk me through your optimistic update implementation. How does it work?
   - What's the role of `onMutate`, `onSuccess`, and `onError` in the mutation lifecycle?
   - What happens if the mutation fails? How does rollback work with the context you saved?
   - Why are optimistic updates important for UX in this context?

#### React Native & Performance

4. **FlatList & Infinite Scroll**

   - How did you implement infinite scrolling? What triggers loading more posts?
   - What's the `keyExtractor` doing? Why is it important?
   - How would you optimize this for 1000+ posts? What about memory management?

5. **Performance Considerations**
   - What performance optimizations did you consider or implement?
   - How would you handle image loading performance if there were many images?
   - What about bundle size? How would you optimize if this were a production app?

### Code Quality & Best Practices

6. **Error Handling**

   - How did you handle error states? What happens if the query fails?
   - How would you handle network errors differently from API errors?
   - What about retry logic? React Query has built-in retries - how would you configure them?

7. **TypeScript & Type Safety**

   - How did you ensure type safety with the React Query hooks?
   - How did you type the query data and mutation variables?
   - What are the trade-offs of manual typing vs generated types?

8. **Testing**
   - How would you test this implementation? What would you test first?
   - How would you test the optimistic updates?
   - What about integration tests for the infinite scroll?

### Real-World Scenarios

9. **Production Readiness**

    - What's missing from this implementation for a production app?
    - How would you handle offline scenarios?
    - What about analytics? Where would you add tracking?

10. **Scalability**

    - How would this perform with 10,000 posts? What would you change?
    - How would you handle real-time updates (e.g., new posts from other users)?
    - What about handling multiple tabs/windows? How would you sync state?

11. **Edge Cases**
    - What happens if a user rapidly clicks the like button multiple times?
    - How would you handle a scenario where the user likes a post, then scrolls away before the mutation completes?
    - What if the network is slow? How would you improve the UX?

### Architecture & Design Decisions

12. **Component Structure**

    - Why did you structure the components this way?
    - How would you refactor this if you needed to add comments or shares?
    - What about reusability? Could this feed component be used elsewhere?

13. **State Management**

    - Where is state managed? Why this approach?
    - When would you consider using Redux or Zustand instead of React Query's cache?
    - How would you handle global state vs. local component state?

14. **NativeWind & Styling**
    - How familiar are you with NativeWind? What are the pros/cons vs. StyleSheet?
    - How would you ensure consistent theming across the app?
    - What about dark mode? How would you implement it?

### Team Collaboration & Mentorship

15. **Code Review**

    - If you were reviewing this code, what would you look for?
    - What feedback would you give a junior engineer implementing this?
    - How would you document this for other team members?

16. **Technical Debt**
    - What technical debt did you introduce? What would you refactor given more time?
    - How would you prioritize improvements?
    - What would you do differently if you had 2 hours instead of 45 minutes?

### Job-Specific Alignment

17. **Expo & EAS**

    - How would you deploy this app using EAS Build?
    - What about OTA updates? How would you roll out a bug fix?
    - Have you worked with EAS Submit? What's your experience?

18. **Monorepo & Shared Code**

    - If this were in a monorepo with shared packages, how would you structure it?
    - How would you share API types between mobile and web?
    - What about shared UI components?

19. **Feature Flags & Analytics**
    - How would you integrate feature flags (e.g., LaunchDarkly) to gradually roll out the like feature?
    - What analytics events would you track? Where would you add them?
    - How would you A/B test different feed algorithms?

---

## Evaluation Criteria

Use these questions to assess:

### Technical Skills

- ✅ **React Query**: Understanding of `useInfiniteQuery`, `useMutation`, optimistic updates
- ✅ **Cache Management**: Understanding of React Query's cache and how to update it
- ✅ **React Native**: FlatList, pagination, performance optimization
- ✅ **TypeScript**: Type safety, proper typing
- ✅ **Expo**: Familiarity with Expo ecosystem

### Problem-Solving

- ✅ **Approach**: Logical, systematic problem-solving
- ✅ **Trade-offs**: Understanding of technical trade-offs
- ✅ **Edge Cases**: Consideration of edge cases and error handling

### Code Quality

- ✅ **Best Practices**: Following React Native and React Query best practices
- ✅ **Clean Code**: Readable, maintainable code
- ✅ **Performance**: Awareness of performance implications

### Senior-Level Skills

- ✅ **Architecture**: Understanding of scalable architecture
- ✅ **Mentorship**: Ability to explain and teach concepts
- ✅ **Production Mindset**: Thinking beyond the exercise to production concerns

---

## Red Flags to Watch For

- ❌ No understanding of optimistic updates or how React Query cache works
- ❌ Poor error handling or no consideration of edge cases
- ❌ Performance issues (e.g., re-rendering entire list on like)
- ❌ No consideration of production concerns
- ❌ Unable to explain their implementation decisions
- ❌ Doesn't ask clarifying questions when stuck

## Green Flags

- ✅ Asks clarifying questions before starting
- ✅ Implements optimistic updates correctly with proper rollback
- ✅ Handles error states gracefully
- ✅ Considers performance implications
- ✅ Understands React Query's mutation lifecycle (onMutate, onSuccess, onError)
- ✅ Can explain trade-offs and decisions
- ✅ Thinks about production concerns (offline, analytics, etc.)
- ✅ Clean, readable code with good TypeScript usage
