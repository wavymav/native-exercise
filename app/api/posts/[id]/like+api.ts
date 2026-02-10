import { delay, posts } from '@/lib/posts-data'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params

  // Match the delay behavior from GraphQL resolvers
  await delay(1000 + Math.random() * 500)

  const post = posts.find((p) => p.id === id)
  if (post && !post.isLiked) {
    post.likes += 1
    post.isLiked = true
  }

  if (!post) {
    return Response.json({ error: 'Post not found' }, { status: 404 })
  }

  return Response.json(post)
}
