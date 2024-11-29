import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "monsterAppen",
          headerLeft: () => <></>,
        }}
      />
      <Tabs.Screen
        name="myPage"
        options={{
          headerTitle: "Mina sidor",
        }}
      />
      <Tabs.Screen name="+not-found" />
    </Tabs>
  );
}
