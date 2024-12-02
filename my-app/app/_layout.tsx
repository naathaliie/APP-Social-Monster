import { store } from "@/redux/store";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Stack>
          {/* Första skärmen - index */}
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          {/* Väg till chooseProfileScreen */}
          <Stack.Screen
            name="chooseProfileScreen"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerTitle: "monsterAppen",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="+not-found"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </PaperProvider>
    </Provider>
  );
}
