// App.js

import React, { useState, useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import your screens
import CitiesScreen from "./screens/CitiesScreen";
import AddCountryScreen from "./screens/AddCountryScreen";
import CountriesScreen from "./screens/CountriesScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]); // New state for cities

  // Function to add a new country to the list
  const addCountryToList = useCallback((newCountry) => {
    setCountries((prevCountries) => [...prevCountries, newCountry]);
  }, []);

  // New function to add a new city to the list
  const addCityToList = useCallback((newCity) => {
    setCities((prevCities) => [...prevCities, newCity]);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
      >
        {/* Pass addCityToList and cities to CitiesScreen using render props */}
        <Tab.Screen name="Cities">
          {(props) => (
            <CitiesScreen
              {...props}
              cities={cities}
              addCityToList={addCityToList}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="AddCountry">
          {(props) => (
            <AddCountryScreen {...props} addCountryToList={addCountryToList} />
          )}
        </Tab.Screen>

        <Tab.Screen name="Countries">
          {(props) => <CountriesScreen {...props} countries={countries} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
