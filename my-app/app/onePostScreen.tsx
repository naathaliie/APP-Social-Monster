import { ScrollView, View, StyleSheet, Text } from "react-native";
import { useSearchParams } from "expo-router/build/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function OnePost() {
  const params = useSearchParams();
  const postId = Number(params.get("id") || 0);
  // Hämta det skickade post-ID:t
  console.log("Oooooch ID:t vi fick är....", postId);

  //Hämtar alla posts
  const allPosts = useSelector((state: RootState) => state.post);
  const thisPost = allPosts.find((post) => {
    return post.id === postId;
  });

  return (
    <ScrollView style={styles.container} nestedScrollEnabled>
      <View>
        <View>
          <Text> Här ska bilden vara: {thisPost?.image}</Text>
        </View>

        <View>
          <Text style={styles.sectionTitle}>{thisPost?.title}</Text>
        </View>

        <View>
          <Text>{thisPost?.bodyText}</Text>
        </View>
        <View>
          <Text>Publicerad av: {thisPost?.author}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
