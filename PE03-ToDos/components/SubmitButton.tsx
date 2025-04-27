import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

interface SubmitButtonProps {
  onPress: () => void;
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.submitButton} onPress={onPress}>
        <Text style={styles.submitButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end", // Align button to the right
  },
  submitButton: {
    backgroundColor: "#fff", // Light gray background
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#333", // Dark gray text
    fontWeight: "normal", // Remove bold text
  },
});

export default SubmitButton;
