import React from "react";
import TodoItem from "./todoItem";
import { useSelector } from "react-redux";
import { getTodos } from "../store/todosSlice";

function TodoList() {
  const todos = useSelector(getTodos());

  return (
    <div>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
