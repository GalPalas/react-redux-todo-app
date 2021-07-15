import React from "react";
import { useDispatch } from "react-redux";
import { completedTodo, deleteTodo } from "../store/todosSlice";

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();

  const handleCompletedClick = () => {
    dispatch(completedTodo(id, !completed));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mx-3"
            defaultChecked={completed}
            onChange={handleCompletedClick}
          ></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
