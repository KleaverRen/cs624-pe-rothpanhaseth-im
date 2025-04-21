import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState("");

  return (
    <ScrollView contentContainerStyle={[styles.container, { flexGrow: 1 }]}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.image}
      />

      <Text style={styles.header}>CityU MSCS Core Courses</Text>

      <Text style={styles.label}>Enter your favorite course:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        onChangeText={(text) => setFavoriteCourse(text)}
        value={favoriteCourse}
      />

      <Text style={styles.label}>Your favorite course:</Text>
      <Text style={styles.course}>{favoriteCourse}</Text>

      <Text style={styles.subHeader}>Core Requirements (24 credits)</Text>
      {[
        "CS 504 Software Engineering",
        "CS 506 Programming for Computing",
        "CS 519 Cloud Computing Overview",
        "CS 533 Computer Architecture",
        "CS 547 Secure Systems and Programs",
        "CS 622 Discrete Math and Algorithms for Computing",
        "CS 510 Artificial Intelligence for Data Science",
        "CS 620 Machine Learning & Deep Learning",
      ].map((course, index) => (
        <Text key={index} style={styles.course}>
          {course}
        </Text>
      ))}

      <Text style={styles.subHeader}>Depth of Study (6 Credits)</Text>
      <Text style={styles.course}>
        CS 624 Full-Stack Development - Mobile App
      </Text>
      <Text style={styles.course}>
        CS 628 Full-Stack Development - Mobile App
      </Text>

      <Text style={styles.subHeader}>Capstone:</Text>
      <Text style={styles.course}>CS 590 Capstone Project</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subHeader: {
    fontSize: 35,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    backgroundColor: "yellow",
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "white",
  },
  course: {
    fontSize: 16,
    paddingVertical: 3,
  },
});

export default App;
