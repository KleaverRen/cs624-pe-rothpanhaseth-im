import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native"; // Import ScrollView
import Input from "@/components/Input";
import Heading from "@/components/Heading";
import SubmitButton from "@/components/SubmitButton";
import TabBar from "@/components/TabBar";
// Helper function to simulate logging (since we're in a React Native environment)
const myLog = (...args: any[]) => {
  console.log(...args); // Use console.log for broader compatibility
};

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

// Main App Component
const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("All");

  // Part 1: Add Todo
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        title: inputValue,
        todoIndex: todos.length,
        complete: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
      myLog("New Todo Added:", newTodo);
    }
  };

  // Part 1: Input change handler
  const handleInputChange = (text: string) => {
    console.log(" Input Value: ", text);
    setInputValue(text);
  };

  // Part 2: Toggle Complete
  const handleToggleComplete = (todoIndex: number) => {
    const newTodos = todos.map((todo) =>
      todo.todoIndex === todoIndex
        ? { ...todo, complete: !todo.complete }
        : todo
    );
    setTodos(newTodos);
  };

  // Part 2: Delete Todo
  const handleDeleteTodo = (todoIndex: number) => {
    const newTodos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    setTodos(newTodos);
  };

  // Part 2: Filtered Todos
  const filteredTodos = () => {
    switch (filter) {
      case "All":
        return todos;
      case "Active":
        return todos.filter((todo) => !todo.complete);
      case "Complete":
        return todos.filter((todo) => todo.complete);
      default:
        return todos;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Heading />
        <Input
          inputValue={inputValue}
          onChange={handleInputChange}
          onAdd={handleAddTodo}
        />
        {filteredTodos().map((todo) => (
          <TodoItem
            key={todo.todoIndex.toString()}
            todo={todo}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        ))}
        <SubmitButton onPress={handleAddTodo} text="Submit" />
      </ScrollView>
      <TabBar filter={filter} onFilterChange={setFilter} />
    </View>
  );
};

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
    justifyContent: "space-between", // changed from space-around to space-between
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
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
    backgroundColor: "#2ecc71", // Green for "Done"
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5, // Add some margin to separate buttons
  },
  doneButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
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
    fontWeight: "bold",
  },
  activeTabItem: {
    backgroundColor: "#3498db",
  },
  activeTabText: {
    color: "#fff",
  },
});

export default TodoApp;
