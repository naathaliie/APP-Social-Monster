import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import UserIcon from "@/components/UserIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Pressable } from "react-native";

export default function TabsLayout() {
  //För att kunna använda expo-router
  const router = useRouter();

  //Få tillgång till currentUser för att visa ikonen till höger
  const currentUser = useSelector((state: RootState) => state.currentuser);
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
          headerRight: () => (
            <Pressable
              onPress={() => {
                router.push("/myPage");
              }}
              style={{ marginRight: 10 }}
            >
              <UserIcon monsterImage={currentUser.image} size="small" />
            </Pressable>
          ),
          headerShown: true,
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
          name="allProfiles"
          options={{
            headerTitle: "Alla monsterProfiler",
            tabBarLabel: "Byt monster",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={color}
                size={30}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
