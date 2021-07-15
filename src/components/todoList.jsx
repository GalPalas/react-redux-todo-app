import React, { useEffect } from "react";
import TodoItem from "./todoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, loadTodosFromApi } from "../store/todosSlice";
import "./todoList.css";

function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector(getTodos());

  useEffect(() => {
    dispatch(loadTodosFromApi());
  }, [dispatch]);

  return (
    <div className="accordion accordion-flush " id="accordionFlushExample">
      <div className="accordion-item ">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <h2 className="text-primary fw-bold">Today</h2>
            <span className="badge bg-primary rounded-pill fs-6 mx-2">
              {todos.length}
            </span>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body bg-light">
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
        </div>
      </div>
    </div>
  );
}

export default TodoList;
