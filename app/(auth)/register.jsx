import { StyleSheet } from "react-native";
import React from "react";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText
        style={styles.title}
        title
      >
        Register to Your Account
      </ThemedText>
      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>
          Login instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
