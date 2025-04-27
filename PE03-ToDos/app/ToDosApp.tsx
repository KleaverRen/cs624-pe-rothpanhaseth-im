import React, { useState, useEffect } from "react"; // Import useEffect
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native"; // Import ScrollView
import Input from "@/components/Input";
import Heading from "@/components/Heading";
import SubmitButton from "@/components/SubmitButton";
import TabBar from "@/components/TabBar";
import TodoItem from "@/components/TodoItem"; // Helper function to simulate logging (since we're in a React Native environment)

// Types
interface Todo {
  title: string;
  todoIndex: number;
  complete: boolean;
}

// Main App Component
const TodosApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("All");

  // Log the 'todos' state whenever it changes
  useEffect(() => {}, [inputValue, todos, filter]); // Log whenever inputValue, todos, or filter change

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
      console.log("State -", { inputValue: "", todos: [...todos, newTodo] }); // Modified to match the picture
    }
  };

  // Part 1: Input change handler
  const handleInputChange = (text: string) => {
    console.log("Input Value: -", text); // Modified to match the picture
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
    backgroundColor: "#eee",
  },
  content: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
});

export default TodosApp;
