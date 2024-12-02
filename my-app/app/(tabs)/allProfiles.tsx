import UserIcon from "@/components/UserIcon";
import { RootState } from "../../redux/store";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentUser } from "@/redux/currentUserSlice";
import { useNavigation } from "@react-navigation/native";
import { useSetChoosenUser } from "@/hooks/useSetChoosenUser";
import { useState } from "react";
import { GuestUser, OneMonster } from "@/types";

export default function ProfileScreen() {
  //Håll koll på klickat monster
  const [chosenMonster, setChoosenMonster] = useState<OneMonster | GuestUser>({
    id: 0,
    name: "GuestUser",
    age: 0,
    color: "none",
    image: "GuestUser.png",
  });

  //Hämta alla monster från monsterSlicen
  const monsterProfiles = useSelector((state: RootState) => state.monster);

  //Hämta currentuser
  const currentUser = useSelector((state: RootState) => state.currentuser);
  //använder egen hook
  const setChoosenUser = useSetChoosenUser();

  // Skapa dispatch för att kunna använda reducers från slicenn
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Här kan du ändra inloggat monster</Text>
        <Text style={{ textAlign: "center" }}>
          Du är just nu inloggad som: {currentUser.name}
        </Text>
      </View>

      <View style={styles.profilesContainer}>
        {monsterProfiles.map((monster) => {
          return (
            <Pressable
              key={monster.id}
              onPress={() => setChoosenMonster(monster)}
            >
              <UserIcon
                monsterImage={monster.image}
                size="large"
                choosen={chosenMonster.id === monster.id ? true : false}
              />
              <Text style={{ textAlign: "center" }}>{monster.name}</Text>
            </Pressable>
          );
        })}
      </View>
      <View>
        <Pressable
          onPress={
            () =>
              setChoosenUser(
                chosenMonster
              ) /* här ska vi också navigera oss till MyPage */
          }
        >
          <Text>Välj monsterprofil</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    gap: 10,
  },
  infoBox: {
    padding: 10,
    marginBottom: 50,
    height: "25%",
    width: "100%",
    justifyContent: "center",
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
  },
  profilesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 1,
  },
  userIcon: {
    margin: 5,
  },
});
