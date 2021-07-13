import React, { useEffect } from "react";
import TodoItem from "./todoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, loadTodosFromApi } from "../store/todosSlice";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos());

  useEffect(() => {
    dispatch(loadTodosFromApi());
  }, [dispatch]);

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
