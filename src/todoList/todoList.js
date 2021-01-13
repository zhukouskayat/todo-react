import Todo from "./todoItem/todoItem.js"
import "./todoList.css"

const TodoList = ({ allTodo }) => (
  <ul className="todo-list">
    {allTodo.map((todo) => (
      <li key={`li-${todo.id}`} className="item">
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

export default TodoList;