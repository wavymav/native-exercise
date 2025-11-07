import { useColorScheme } from '@/hooks/use-color-scheme'
import { ActivityIndicator } from 'react-native'

export const Spinner = ({ size = 'large' }: { size?: 'small' | 'large' }) => {
  const colorScheme = useColorScheme()
  const isDarkMode = colorScheme === 'dark'
  const indicatorColor = isDarkMode ? '#9ea8ff' : '#4434BC'

  return <ActivityIndicator size={size} color={indicatorColor} />
}
