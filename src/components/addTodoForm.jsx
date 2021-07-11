import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";

function AddTodoForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title: value }));
  };

  return (
    <form onSubmit={onSubmit} className="form-inline my-3">
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
}

export default AddTodoForm;
