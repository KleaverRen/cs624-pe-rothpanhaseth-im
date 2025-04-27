import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = ({
  todo,
  onToggleComplete,
  onDelete,
}: {
  todo: Todo;
  onToggleComplete: (todoIndex: number) => void;
  onDelete: (todoIndex: number) => void;
}) => (
  <View style={styles.todoItem}>
    <TouchableOpacity
      style={styles.todoTextContainer}
      onPress={() => onToggleComplete(todo.todoIndex)}
    >
      <Text
        style={[styles.todoText, todo.complete && styles.completedTodoText]}
      >
        {todo.title}
      </Text>
    </TouchableOpacity>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => onToggleComplete(todo.todoIndex)}
      >
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(todo.todoIndex)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Types
interface Todo {
  title: string;
  todoIndex: number;
  complete: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    // Add these styles for shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // This is for Android shadow
    backgroundColor: "white", // Ensure a background color for the shadow to be visible
    padding: 5,
  },
  todoTextContainer: {
    flex: 1,
  },
  todoText: {
    fontSize: 18,
  },
  completedTodoText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  doneButton: {
    backgroundColor: "#2ecc71",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  doneButtonText: {
    color: "#fff",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
  },
});
export default TodoItem;
