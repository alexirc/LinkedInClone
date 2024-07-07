import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'mon': require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
    'spaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'robot-black': require('../assets/fonts/Roboto/Roboto-Black.ttf'),
    'robot-bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'robot-regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'robot-medium': require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
    'robot-light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
    'robot-thin': require('../assets/fonts/Roboto/Roboto-Thin.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name='(modals)/postModal'
          options={{
            title: 'Post',
            presentation: 'modal',
            headerShown: false,
            contentStyle: {backgroundColor: 'white'}
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
