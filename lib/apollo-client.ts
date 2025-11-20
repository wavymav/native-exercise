import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { Platform } from 'react-native'

// Create the cache
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: {
          keyArgs: false,
          merge(existing = [], incoming, { args }) {
            if (!args?.offset || args.offset === 0) {
              return incoming
            }
            return [...existing, ...incoming]
          }
        }
      }
    },
    Post: {
      keyFields: ['id']
    }
  }
})

// Persist cache configuration
export const initializeApollo = async () => {
  // Determine the GraphQL endpoint based on platform
  const getGraphQLEndpoint = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:8081/api/graphql' // Android emulator
    } else if (Platform.OS === 'ios') {
      return 'http://localhost:8081/api/graphql' // iOS simulator
    }
    return 'http://localhost:8081/api/graphql' // Web/default
  }

  const httpLink = new HttpLink({
    uri: getGraphQLEndpoint()
  })

  const client = new ApolloClient({
    link: from([httpLink]),
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all'
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all'
      },
      mutate: {
        errorPolicy: 'all'
      }
    }
  })

  return client
}
