// screens/CitiesScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CitiesScreen = ({ cities, addCityToList }) => {
  // Receive cities and addCityToList as props
  const [cityName, setCityName] = useState("");
  const [cityCountry, setCityCountry] = useState(""); // To store the country of the city

  const navigation = useNavigation();

  const handleAddCity = () => {
    if (cityName.trim() === "" || cityCountry.trim() === "") {
      Alert.alert("Error", "Please enter both city name and its country.");
      return;
    }

    const newCity = {
      id: Math.random().toString(), // Simple unique ID for now
      name: cityName,
      country: cityCountry,
    };

    addCityToList(newCity); // Call the function passed from App.js

    Alert.alert("Success", `City "${cityName}, ${cityCountry}" added!`);

    // Clear input fields
    setCityName("");
    setCityCountry("");
  };

  const renderCityItem = ({ item }) => (
    <View style={styles.cityItem}>
      <Text style={styles.cityNameDisplay}>{item.name}</Text>
      <Text style={styles.cityCountryDisplay}>({item.country})</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New City</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter City Name"
        value={cityName}
        onChangeText={setCityName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter City's Country"
        value={cityCountry}
        onChangeText={setCityCountry}
      />
      <Button title="Add City" onPress={handleAddCity} />

      <Text style={styles.listHeader}>Your Cities</Text>
      {cities.length > 0 ? (
        <FlatList
          data={cities}
          renderItem={renderCityItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <Text style={styles.noCitiesText}>
          No cities added yet. Add one above!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  listHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  cityItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cityNameDisplay: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
  },
  cityCountryDisplay: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  noCitiesText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#888",
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default CitiesScreen;
