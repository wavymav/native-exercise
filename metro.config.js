const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

// Wrap NativeWind config in try-catch for environments where it may not load
let finalConfig = config
try {
  const { withNativeWind } = require('nativewind/metro')
  finalConfig = withNativeWind(config, { input: './global.css' })
} catch (error) {
  console.warn('NativeWind metro config failed to load:', error.message)
  console.warn('Falling back to default Expo metro config')
}

module.exports = finalConfig
