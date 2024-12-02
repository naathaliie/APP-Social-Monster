import BlogPosts from "@/components/BlogPosts/BlogPosts";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import NewBlogPostModal from "../../components/NewBlogPostModal";
import { OneMonster } from "@/types";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  //FÖR TEST
  const router = useRouter();
  //Hämta alla poster
  const allPosts = useSelector((state: RootState) => state.post);
  //Hämtar currensUser för newpost
  const currentUser: OneMonster = useSelector(
    (state: RootState) => state.currentuser
  );
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 300,
      }}
      nestedScrollEnabled
    >
      <View style={styles.container}>
        {/* Modal för att skriva nytt inlägg */}
        {/* <NewBlogPostModal authorId={currentUser.id} position="right" /> */}

        <View style={styles.imgContainer}>
          <Image
            source={require("../../assets/images/monsters.png")}
            style={styles.imgStyle}
          />
        </View>

        <View style={styles.contentWrapper}>
          <View>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              velit aut dicta deleniti, alias cumque quo iusto, ex fuga incidunt
              officia ducimus quae excepturi ullam veniam voluptate sit ratione
              dolores.
            </Text>
          </View>
          <View>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              velit aut dicta deleniti, alias cumque quo iusto, ex fuga incidunt
              officia ducimus quae excepturi ullam veniam voluptate sit ratione
              dolores.
            </Text>
          </View>
          <BlogPosts posts={allPosts} overView={true} />
          <View>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              velit aut dicta deleniti, alias cumque quo iusto, ex fuga incidunt
              officia ducimus quae excepturi ullam veniam voluptate sit ratione
              dolores.
            </Text>
          </View>
          <View>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              velit aut dicta deleniti, alias cumque quo iusto, ex fuga incidunt
              officia ducimus quae excepturi ullam veniam voluptate sit ratione
              dolores.
            </Text>
          </View>
        </View>
        <View style={{ padding: 20, backgroundColor: "plum" }}>
          <View>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              velit aut dicta deleniti, alias cumque quo iusto, ex fuga incidunt
              officia ducimus quae excepturi ullam veniam voluptate sit ratione
              dolores.
            </Text>
          </View>
          <View>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              velit aut dicta deleniti, alias cumque quo iusto, ex fuga incidunt
              officia ducimus quae excepturi ullam veniam voluptate sit ratione
              dolores.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    fontSize: 30,
  },
  imgContainer: {
    height: "30%",
    width: "100%",
    borderBottomWidth: 1,
  },
  imgStyle: {
    flex: 1,
    backgroundColor: "#0553",
  },
  contentWrapper: {
    margin: 15,
  },
});
