import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";

function AddTodoForm({ addedReducerType, url }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(addedReducerType, url, value));
  };

  return (
    <form onSubmit={onSubmit} className="form-inline my-3">
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-11">
            <input
              type="text"
              className="form-control mb-2 mr-sm-2 rounded-pill "
              placeholder="I want to..."
              value={value}
              onChange={(event) => setValue(event.target.value)}
            ></input>
          </div>
          <div className="col-1">
            <button
              type="submit"
              className="btn btn-primary mb-2 rounded-circle"
            >
              <span className="fw-5">+</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddTodoForm;
