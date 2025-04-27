import { View, Text, StyleSheet } from "react-native";

const Heading = () => (
  <View style={styles.headingContainer}>
    <Text style={styles.heading}>ToDos</Text>
  </View>
);

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  heading: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#e67e22",
  },
});
export default Heading;
