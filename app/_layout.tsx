import { Spinner } from '@/components/spinner'
import { useColorScheme } from '@/hooks/use-color-scheme'
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject
} from '@apollo/client'
import { QueryClientProvider } from '@tanstack/react-query'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import 'react-native-reanimated'
import '../global.css'

import { initializeApollo } from '@/lib/apollo-client'
import { queryClient } from '@/lib/query-client'

export const unstable_settings = {
  anchor: '(tabs)'
}

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const isDarkMode = colorScheme === 'dark'
  const [client, setClient] =
    useState<ApolloClient<NormalizedCacheObject> | null>(null)

  useEffect(() => {
    initializeApollo().then(setClient)
  }, [])

  if (!client) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <Spinner />
      </View>
    )
  }

  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </QueryClientProvider>
    </ApolloProvider>
  )
}
