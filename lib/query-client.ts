import { QueryClient } from '@tanstack/react-query'
import { Platform } from 'react-native'

// Determine the API base URL based on platform
export const getApiBaseUrl = () => {
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:8081' // Android emulator
  } else if (Platform.OS === 'ios') {
    return 'http://localhost:8081' // iOS simulator
  }
  return '' // Web - use relative URLs for CodeSandbox/React Native Web
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
      retry: 2,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
    },
  },
})
