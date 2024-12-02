import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function TabsLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "lightgreen",
          headerStyle: {
            backgroundColor: "lightgreen",
          },
          headerShadowVisible: false,
          headerTintColor: "darkgreen", //headertextens färg
          tabBarStyle: {
            backgroundColor: "darkgreen",
          },
        }}
      >
        <Tabs.Screen
          name="homeScreen"
          options={{
            headerTitle: "Monster Appen",
            tabBarLabel: "Hem",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={30}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="myPage"
          options={{
            headerTitle: "Mina sidor",
            tabBarLabel: "Mina sidor",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={color}
                size={30}
              />
            ),
          }}
        />
        <Tabs.Screen name="allProfiles" />
      </Tabs>
    </>
  );
}
