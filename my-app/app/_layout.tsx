import { store } from "@/redux/store";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

/**********ALLA FILER DU LÄGGER I MAPPEN app KOMMER ATT BLI TILL EN "SCREEN"**********/

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Stack screenOptions={{}}>
          {/* Första skärmen - index */}
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          {/* Andra skärmen - chooseProfileScreen  */}
          <Stack.Screen
            name="chooseProfileScreen"
            options={{
              headerShown: false,
            }}
          />
          {/* Här kommer själva "appen" */}
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          {/* Fallback sidan om något skulle gå fel */}
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
