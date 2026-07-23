import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{ headerShown: false }}>
        {/* (main) 그룹과 (auth) 그룹을 등록하고 화면 옵션을 설정할 수 있습니다 */}
        <Stack.Screen name="(main)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </>
  );
}
