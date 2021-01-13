import React from "react";
import "./editForm.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.count = 1;

    this.state = { todoDescription: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ todoDescription: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const nextId = 3 + this.count++;

    const todo = {
      text: this.state.todoDescription,
      state: "in-process",
      dateCreated: Date().toString(),
      dateCompleted: null,
      id: nextId ,
  };

    this.props.onCreateTodo(todo);
  }

  render() {
    return (
      <div className="editor-form">
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo-description"
          value={this.state.todoDescription}
          onChange={this.handleChange}
          className="form-row-left"
          id="todo-text"
        />
        <div className="form-row-right">
        <input type="submit" value="Add" id="add-todo-button" />
        <input type="button" value="Clear" id="clear-form-button" />
        </div>
      </form>
      </div>
    );
  }
}

export default TodoForm;