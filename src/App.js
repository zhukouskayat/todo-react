import React from "react";
import './App.css';
import TodoForm from "./editForm/editForm.js"
import TodoList from "./todoList/todoList.js"

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: props.allTodo}
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
  }

  handleCreateTodo(todo){
    const newTodos = [todo, ...this.state.todos];
    this.setState({ todos: newTodos})
    console.log(`${todo}`)
  }

  render() {
    const { todos } = this.state;
    return (
      <div id="app-container">
        <h1>Create Todo</h1>
        <TodoForm onCreateTodo={this.handleCreateTodo} />
        <TodoList allTodo={todos} />
      </div>
    );
  }
}

export default TodoApp;
