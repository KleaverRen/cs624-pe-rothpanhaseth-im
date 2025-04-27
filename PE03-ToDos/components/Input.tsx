import { View, TextInput, StyleSheet } from "react-native";

const Input = ({
  inputValue,
  onChange,
  onAdd,
}: {
  inputValue: string;
  onChange: (text: string) => void;
  onAdd: () => void;
}) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="What needs to be done?"
      value={inputValue}
      onChangeText={onChange}
      onSubmitEditing={onAdd}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically in the center
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5, // Add some border radius for rounded corners
  },
  submitButton: {
    backgroundColor: "#eee", // Light gray background
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#333", // Dark gray text
    fontWeight: "normal", // Remove bold text
  },
});
export default Input;
