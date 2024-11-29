import { StyleSheet, Text, View } from "react-native";

export default function myPage() {
  return (
    <View style={styles.container}>
      <Text>MyPage sidan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
