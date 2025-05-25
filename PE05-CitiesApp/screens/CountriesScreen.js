// screens/CountriesScreen.js

import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// Change this line:
const CountriesScreen = ({ countries }) => {
  // Destructure 'countries' directly from props

  const renderCountryItem = ({ item }) => (
    <View style={styles.countryItem}>
      <Text style={styles.countryName}>{item.name}</Text>
      <Text style={styles.countryCurrency}>Currency: {item.currency}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Countries and Currencies</Text>
      {countries.length > 0 ? (
        <FlatList
          data={countries}
          renderItem={renderCountryItem}
          keyExtractor={(item, index) => item.name + index.toString()} // More robust key
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <Text style={styles.noCountriesText}>
          No countries added yet. Go to 'AddCountry' tab to add some!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  countryItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  countryName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
  },
  countryCurrency: {
    fontSize: 16,
    color: "#666",
  },
  noCountriesText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
    color: "#888",
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default CountriesScreen;
