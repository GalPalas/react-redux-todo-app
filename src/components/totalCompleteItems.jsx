import React from "react";
import { getCompletedItems } from "../store/todosSlice";
import { useSelector } from "react-redux";

function TotalCompleteItems() {
  const completedTodos = useSelector(getCompletedItems());
  return <h4 className="mt-3">Total Complete Items: {completedTodos}</h4>;
}

export default TotalCompleteItems;
