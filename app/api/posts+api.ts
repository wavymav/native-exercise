import { delay, posts } from '@/lib/posts-data'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const offset = parseInt(searchParams.get('offset') || '0', 10)
  const limit = parseInt(searchParams.get('limit') || '20', 10)

  // Match the delay behavior from GraphQL resolvers
  const isInitialLoad = offset === 0
  const delayTime = isInitialLoad
    ? 4000 + Math.random() * 2000
    : 2000 + Math.random() * 1000

  await delay(delayTime)

  const result = posts.slice(offset, offset + limit)

  return Response.json(result)
}
