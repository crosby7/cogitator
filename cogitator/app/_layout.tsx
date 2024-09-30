import { useCallback, useEffect, useState } from 'react';
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";


SplashScreen.preventAutoHideAsync();


export default function DrawerLayout() {

  const [loaded, error] = useFonts({
    'requiem': require('./../assets/fonts/Requiem.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="pages/about"
          options={{
            drawerLabel: "About Cogitator",
            headerTitle: "About Cogitator"
          }}
        />
        <Drawer.Screen
          name="pages/profile"
          options={{
            drawerLabel: "My Account",
            headerTitle: "My Account"
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}