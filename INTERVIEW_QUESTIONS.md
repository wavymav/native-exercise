# Interview Questions: Senior Mobile Engineer (React Native)

## Pre-Exercise Questions (5-10 minutes)

These questions help set context, understand the candidate's experience level, and clarify expectations before they begin coding.

### Experience & Background

1. **Data Fetching Approach**

   - Which approach did you choose: GraphQL + Apollo Client or REST + TanStack Query? Why?
   - How familiar are you with your chosen approach? Have you worked with it in production apps?
   - What's your experience with the alternative approach? Have you used it before?

2. **GraphQL & Apollo Client Experience** (if Option A chosen)

   - How familiar are you with Apollo Client? Have you worked with it in production apps?
   - What's your experience with GraphQL queries and mutations? Any challenges you've encountered?
   - Have you implemented optimistic updates before? Can you walk me through your approach?

3. **REST & TanStack Query Experience** (if Option B chosen)

   - How familiar are you with TanStack Query (React Query)? Have you worked with it in production apps?
   - What's your experience with infinite queries and pagination? Any challenges you've encountered?
   - Have you implemented optimistic updates with TanStack Query before? Can you walk me through your approach?

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
   - What are the trade-offs between GraphQL and REST for this use case?

---

## Post-Exercise Questions (15-20 minutes)

These questions dive deep into the candidate's implementation, decision-making, and real-world experience.

### Implementation Deep Dive

#### Option A: GraphQL & Apollo Client

1. **Query Implementation**

   - Walk me through your GraphQL query. Why did you structure it this way?
   - How did you handle the pagination parameters (offset/limit)? Why this approach?
   - Did you use `fetchMore` or `refetch`? What's the difference and why did you choose one over the other?

2. **Cache Understanding**

   - Looking at the existing cache configuration in `apollo-client.ts`, can you explain what it's doing?
   - What does `keyArgs: false` do? Why is it needed for pagination?
   - How does the `merge` function work? What does it do when `offset === 0` vs other values?
   - What happens if a user likes a post, then refetches? How does the cache handle this?

3. **Optimistic Updates**
   - Walk me through your optimistic update implementation. How does it work?
   - What happens if the mutation fails? How would you handle rollback?
   - Why are optimistic updates important for UX in this context?

#### Option B: REST & TanStack Query

1. **Query Implementation**

   - Walk me through your `useInfiniteQuery` setup. Why did you structure it this way?
   - How did you handle the pagination parameters (offset/limit)? Why this approach?
   - How does `getNextPageParam` work? What determines when more data is available?
   - What's the difference between `fetchNextPage` and `refetch`? When would you use each?

2. **Cache Understanding**

   - How does TanStack Query's cache work? What are query keys and why are they important?
   - How does the cache handle infinite query data? What's the structure of the cached data?
   - What happens if a user likes a post, then refetches? How does the cache handle this?
   - How would you invalidate specific queries vs all queries?

3. **Optimistic Updates**
   - Walk me through your optimistic update implementation using `onMutate`. How does it work?
   - How did you handle the cache rollback in `onError`? Why is this important?
   - What's the purpose of `onSettled`? When would you use it vs `onSuccess`?
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
   - How would you handle network errors differently from GraphQL errors?
   - What about retry logic? When would you implement it?

7. **TypeScript & Type Safety**

   - **Option A:** How did you ensure type safety with the GraphQL queries? Did you generate types from the schema, or define them manually? What are the trade-offs?
   - **Option B:** How did you ensure type safety with the REST API responses? Did you define types manually or use a schema validation library? What are the trade-offs?

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
   - **Option A:** When would you consider using Redux or Zustand instead of Apollo's cache?
   - **Option B:** When would you consider using Redux or Zustand instead of TanStack Query's cache?
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
    - How would you share GraphQL types between mobile and web?
    - What about shared UI components?

19. **Feature Flags & Analytics**
    - How would you integrate feature flags (e.g., LaunchDarkly) to gradually roll out the like feature?
    - What analytics events would you track? Where would you add them?
    - How would you A/B test different feed algorithms?

---

## Evaluation Criteria

Use these questions to assess:

### Technical Skills

- ✅ **Data Fetching**: Understanding of chosen approach (GraphQL/Apollo or REST/TanStack Query)
- ✅ **Option A - GraphQL/Apollo**: Understanding of queries, mutations, optimistic updates
- ✅ **Option A - Apollo Cache**: Understanding of existing cache configuration and how it works
- ✅ **Option B - REST/TanStack Query**: Understanding of infinite queries, mutations, optimistic updates
- ✅ **Option B - TanStack Query Cache**: Understanding of query keys, cache invalidation, and cache manipulation
- ✅ **React Native**: FlatList, pagination, performance optimization
- ✅ **TypeScript**: Type safety, proper typing
- ✅ **Expo**: Familiarity with Expo ecosystem

### Problem-Solving

- ✅ **Approach**: Logical, systematic problem-solving
- ✅ **Trade-offs**: Understanding of technical trade-offs
- ✅ **Edge Cases**: Consideration of edge cases and error handling

### Code Quality

- ✅ **Best Practices**: Following React Native and Apollo best practices
- ✅ **Clean Code**: Readable, maintainable code
- ✅ **Performance**: Awareness of performance implications

### Senior-Level Skills

- ✅ **Architecture**: Understanding of scalable architecture
- ✅ **Mentorship**: Ability to explain and teach concepts
- ✅ **Production Mindset**: Thinking beyond the exercise to production concerns

---

## Red Flags to Watch For

- ❌ No understanding of optimistic updates or how the chosen cache works (Apollo or TanStack Query)
- ❌ Poor error handling or no consideration of edge cases
- ❌ Performance issues (e.g., re-rendering entire list on like)
- ❌ No consideration of production concerns
- ❌ Unable to explain their implementation decisions
- ❌ Doesn't ask clarifying questions when stuck
- ❌ **Option A:** No understanding of Apollo cache merge functions or keyArgs
- ❌ **Option B:** No understanding of TanStack Query query keys or cache manipulation

## Green Flags

- ✅ Asks clarifying questions before starting
- ✅ Chooses an approach they're comfortable with and can explain why
- ✅ Implements optimistic updates correctly
- ✅ Handles error states gracefully
- ✅ Considers performance implications
- ✅ **Option A:** Can explain how the existing Apollo cache configuration works
- ✅ **Option B:** Can explain how TanStack Query cache and query keys work
- ✅ Can explain trade-offs and decisions
- ✅ Thinks about production concerns (offline, analytics, etc.)
- ✅ Clean, readable code with good TypeScript usage
- ✅ Can discuss the trade-offs between GraphQL and REST approaches
