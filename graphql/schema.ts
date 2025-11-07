export const typeDefs = /* GraphQL */ `
  type Post {
    id: ID!
    creatorName: String!
    creatorAvatar: String!
    content: String!
    imageUrl: String
    likes: Int!
    timestamp: String!
    isLiked: Boolean!
  }

  type Query {
    posts(offset: Int, limit: Int): [Post!]!
  }

  type Mutation {
    likePost(id: ID!): Post
    unlikePost(id: ID!): Post
  }
`
