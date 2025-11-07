import { resolvers } from '@/graphql/resolvers'
import { typeDefs } from '@/graphql/schema'
import { createSchema, createYoga } from 'graphql-yoga'

export const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers
  }),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response }
})

export const GET = yoga
export const POST = yoga
export const OPTIONS = yoga
