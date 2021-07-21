import React from "react";
import TodoItem from "./todoItem";
import AddTodoForm from "./addTodoForm";
import { ToastContainer } from "react-toastify";
import "./todoList.css";

function TodoList({
  addedReducerType,
  completedReducerType,
  deletedReducerType,
  url,
  title,
  collapseName,
  data,
}) {
  return (
    <div>
      {data ? (
        <div className="accordion accordion-flush " id="accordionFlushExample">
          <div className="accordion-item ">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#" + collapseName}
                aria-expanded="false"
                aria-controls={collapseName}
              >
                <h2 className="text-primary fw-bold">{title}</h2>
                <span className="badge bg-primary rounded-pill fs-6 mx-2">
                  {data.length}
                </span>
              </button>
            </h2>
            <div
              id={collapseName}
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-light">
                <ul className="list-group">
                  {data.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      id={todo.id}
                      url={url}
                      completedReducerType={completedReducerType}
                      deletedReducerType={deletedReducerType}
                      title={todo.title}
                      completed={todo.completed}
                    />
                  ))}
                </ul>
              </div>
              <AddTodoForm addedReducerType={addedReducerType} url={url} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <ToastContainer />{" "}
        </div>
      )}
    </div>
  );
}

export default TodoList;
