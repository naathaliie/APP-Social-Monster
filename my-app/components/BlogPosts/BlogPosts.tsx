import { FlatList, StyleSheet, Text, View } from "react-native";
import BlogPostCard from "./BlogPostCard";
import { Posts } from "../../types";

type BlogPostProps = {
  posts: Posts;
  overView?: boolean;
};

export default function BlogPosts({ posts, overView }: BlogPostProps) {
  //Sortera alla posts så att den nyaste visas istället för den första
  const reversedDirectionPosts = [...posts].reverse();

  return (
    <View style={styles.BlogPosts}>
      <Text style={styles.headerText}>Inlägg</Text>
      <FlatList
        style={{ maxHeight: 200 }} //ta bort
        data={reversedDirectionPosts}
        nestedScrollEnabled
        keyExtractor={(item) => item.id.toString()}
        horizontal
        /*         showsHorizontalScrollIndicator={false} // Döljer den horisontella scroll-baren
         */ renderItem={({ item }) => (
          <BlogPostCard onePost={item} overView={overView} />
        )}
        contentContainerStyle={{ paddingHorizontal: 10 }} // Tillval för bättre layout
      />
    </View>
  );
}

const styles = StyleSheet.create({
  BlogPosts: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    marginHorizontal: 10,
    margin: 10,
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
