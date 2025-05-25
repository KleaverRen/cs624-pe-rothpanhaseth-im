// screens/AddCountryScreen.js

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const AddCountryScreen = ({ addCountryToList }) => {
  // Destructure addCountryToList from props
  const [countryName, setCountryName] = useState("");
  const [currency, setCurrency] = useState("");
  const navigation = useNavigation(); // Get navigation object

  const handleAddCountry = () => {
    if (countryName.trim() === "" || currency.trim() === "") {
      Alert.alert("Error", "Please enter both country name and currency.");
      return;
    }

    const newCountry = { name: countryName, currency: currency };
    addCountryToList(newCountry); // Call the function passed from App.js

    Alert.alert(
      "Success",
      `Country "${countryName}" with currency "${currency}" added!`
    );

    // Clear the input fields after adding
    setCountryName("");
    setCurrency("");

    // Optionally navigate to the Countries tab after adding
    navigation.navigate("Countries");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Country Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter country name"
        value={countryName}
        onChangeText={setCountryName}
      />

      <Text style={styles.label}>Currency:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter currency (e.g., USD, EUR)"
        value={currency}
        onChangeText={setCurrency}
      />

      <Button title="Add Country" onPress={handleAddCountry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});

export default AddCountryScreen;
