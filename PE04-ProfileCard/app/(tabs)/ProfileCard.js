import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProfileCard = ({ profile, isExpanded }) => {
  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.cardContainer,
          isExpanded ? styles.expandedCard : styles.thumbnailCard,
        ]}
      >
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={profile.image} />
        </View>
        <View>
          <Text style={styles.cardName}>{profile.name}</Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{profile.occupation}</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>{profile.description}</Text>
        </View>
      </View>
    </View>
  );
};

const profileCardColor = "dodgerblue";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 180,
    height: 380,
  },
  thumbnailCard: {
    padding: 10,
  },
  expandedCard: {
    height: 420,
    padding: 10,
    borderColor: "black",
    borderWidth: 3,
    borderStyle: "solid",
  },
  cardImageContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "black",
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardName: {
    color: "white",
    marginTop: 30,
  },
  cardOccupationContainer: {
    borderColor: "black",
    borderBottomWidth: 3,
  },
  cardOccupation: {
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    // marginTop: 10,
    // marginRight: 40,
    // marginLeft: 40,
    // marginBottom: 10,
  },
});
export default ProfileCard;
