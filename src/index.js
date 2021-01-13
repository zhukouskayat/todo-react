import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import todos from "./todoStorage/todoStorage.js"
import TodoApp from "./App.js"

ReactDOM.render(
  <React.StrictMode>
    <TodoApp allTodo={todos} />
  </React.StrictMode>,
  document.getElementById("root")
);
