import { StyleSheet } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const Books = () => {
  return (
    <ThemedView style={styles.container} safe>

      <ThemedText style={styles.heading}>Your Reading List</ThemedText>

      <Spacer />

    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
