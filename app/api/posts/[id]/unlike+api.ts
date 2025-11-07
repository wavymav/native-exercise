import { delay, posts } from "@/lib/posts-data";

export async function POST(request: Request) {
  // Extract ID from URL path: /api/posts/[id]/unlike
  const url = new URL(request.url);
  const pathParts = url.pathname.split("/").filter(Boolean);
  const idIndex = pathParts.indexOf("posts") + 1;
  const id = pathParts[idIndex];

  if (!id) {
    return new Response(JSON.stringify({ error: "Post ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Simulate a network request (1-1.5 seconds)
  // Long enough to clearly see optimistic update advantage
  await delay(1000 + Math.random() * 500);

  const post = posts.find((p) => p.id === id);
  if (!post) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (post.isLiked) {
    post.likes -= 1;
    post.isLiked = false;
  }

  return new Response(JSON.stringify(post), {
    headers: { "Content-Type": "application/json" },
  });
}
