import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface TodoBarProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

const TodoBar: React.FC<TodoBarProps> = ({ filter, onFilterChange }) => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={[styles.tabItem, filter === "All" && styles.activeTabItem]}
        onPress={() => onFilterChange("All")}
      >
        <Text
          style={[styles.tabText, filter === "All" && styles.activeTabText]}
        >
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabItem, filter === "Active" && styles.activeTabItem]}
        onPress={() => onFilterChange("Active")}
      >
        <Text
          style={[styles.tabText, filter === "Active" && styles.activeTabText]}
        >
          Active
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabItem, filter === "Complete" && styles.activeTabItem]}
        onPress={() => onFilterChange("Complete")}
      >
        <Text
          style={[
            styles.tabText,
            filter === "Complete" && styles.activeTabText,
          ]}
        >
          Complete
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  tabItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: "#888", // Default text color (gray)
  },
  activeTabItem: {
    backgroundColor: "#fff", // White background for active tab
  },
  activeTabText: {
    color: "#000", // Black text for active tab
  },
});

export default TodoBar;
