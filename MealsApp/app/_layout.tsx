import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import FavoritesContextProvider from '../app/store/context/favorites-context'

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <FavoritesContextProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ title: "All Meals Categories" }}
        />
        <Stack.Screen name="meals/[categoryId]" />
        <Stack.Screen name="mealDetails/[mealId]" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
      </FavoritesContextProvider>
    </ThemeProvider>
  );
}