import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerTitle: "monsterAppen",
          headerLeft: () => <></>,
        }}
      />
      {/*       <Stack.Screen
        name="myPage"
        options={{
          headerTitle: "Mina sidor",
        }}
      />
      VI FLYTTADE DENNA TILL TABS FÖR ATT GÖRA DEN TILL EN TAB ISTÄLLET
 */}{" "}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
