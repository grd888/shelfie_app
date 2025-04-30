import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from "expo-router"
import ThemedText from "../components/ThemedText"
import ThemedView from "../components/ThemedView"
const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title>Contact Us</ThemedText>

      <Link href="/" style={styles.link}><ThemedText>Back Home</ThemedText></Link>
    </ThemedView>
  )
}

export default Contact

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
    borderBottomWidth:1
  }
});