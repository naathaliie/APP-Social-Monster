// hooks/useSetChoosenUser.ts
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { updateCurrentUser } from "@/redux/currentUserSlice";
import { OneMonster } from "@/types";

//En egenskapad hook för att kunna använda useDispatch och komma åt redux-slices utanför providern

export function useSetChoosenUser() {
  const dispatch = useDispatch();

  return function (oneMonster: OneMonster) {
    if (oneMonster) {
      dispatch(updateCurrentUser(oneMonster));
      console.log("Du valde ett monster ", oneMonster.name);
    } else {
      console.error("MonsterProfilen hittades inte");
    }
  };
}
