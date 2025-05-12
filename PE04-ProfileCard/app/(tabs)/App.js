import React, { useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import ProfileCard from "./ProfileCard";

export default function App() {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const profileData = [
    {
      id: "1",
      name: "Alice",
      occupation: "React Native Developer",
      description:
        "Alice is a really great JavaScript developer. He loves using JS tobuild React Native applications for iOS and Android.",
      image: require("../../assets/images/user.png"),
    },
    {
      id: "2",
      name: "Bob",
      occupation: "React Native Developer",
      description:
        "Bob is a really great JavaScript developer. He loves using JS build React Native applications for iOS and Android.",
      image: require("../../assets/images/user.png"),
    },
    {
      id: "3",
      name: "Charlie",
      occupation: "React Native Developer",
      description:
        "Charlie is a really great JavaScript developer. He loves using JS build React Native applications for iOS and Android.",
      image: require("../../assets/images/user.png"),
    },
    {
      id: "4",
      name: "Diana",
      occupation: "React Native Developer",
      description:
        "Diana is a really great JavaScript developer. He loves using JS build React Native applications for iOS and Android.",
      image: require("../../assets/images/user.png"),
    },
    {
      id: "5",
      name: "Eve",
      occupation: "React Native Developer",
      description:
        "Eve is a really great JavaScript developer. He loves using JS build React Native applications for iOS and Android.",
      image: require("../../assets/images/user.png"),
    },
    {
      id: "6",
      name: "Frank",
      occupation: "React Native Developer",
      description:
        "Frank is a really great JavaScript developer. He loves using JS build React Native applications for iOS and Android.",
      image: require("../../assets/images/user.png"),
    },
  ];

  const handleCardPress = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleCardPress(item.id)}
      style={styles.cardContainer}
    >
      <ProfileCard profile={item} isExpanded={item.id === expandedCardId} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={profileData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
    justifyContent: "center", // Center items vertically
    alignItems: "center", // Center items horizontally
  },
  cardContainer: {
    margin: 15,
  },
});
