import { delay, posts } from "@/lib/posts-data";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const offset = parseInt(url.searchParams.get("offset") || "0", 10);
  const limit = parseInt(url.searchParams.get("limit") || "20", 10);

  // Simulate network latency
  // Initial load or refetch: 4-6 seconds (VERY obvious loading state)
  // Pagination: 2-3 seconds (clearly noticeable)
  const isInitialLoad = offset === 0;
  const delayTime = isInitialLoad
    ? 4000 + Math.random() * 2000 // 4-6 seconds for initial/refetch
    : 2000 + Math.random() * 1000; // 2-3 seconds for pagination

  await delay(delayTime);

  // Simulate pagination
  const paginatedPosts = posts.slice(offset, offset + limit);

  return new Response(JSON.stringify(paginatedPosts), {
    headers: { "Content-Type": "application/json" },
  });
}
