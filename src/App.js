import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoContainer from "./components/TodoContainer/TodoContainer";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (item) => setTodos([...todos, item]);
  const removeTodo = (item) => {
    const newTodos = todos.filter((todo) => todo !== item);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>Yet-To</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoContainer todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
