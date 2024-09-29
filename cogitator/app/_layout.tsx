import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  useFonts({
    "requiem": require('./../assets/fonts/Requiem.ttf')
  });

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