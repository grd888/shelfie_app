import { StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors.js";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={[styles.container]}>
      <ThemedText style={styles.title} title>About Page</ThemedText>

      <Link
        href="/"
        style={styles.link}
      >
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginTop: 10,
    borderBottomWidth: 1,
  },
});
