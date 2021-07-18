import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadTodosFromApi,
  todayTodos,
  tomorrowTodos,
} from "../store/todosSlice";
import TodoList from "./todoList";

function TodoLists() {
  const dispatch = useDispatch();
  const todayData = useSelector(todayTodos());
  const tomorrowData = useSelector(tomorrowTodos());

  useEffect(() => {
    dispatch(loadTodosFromApi());
  }, [dispatch]);

  return (
    <div>
      <TodoList
        id="todos/todayAdded"
        title="Today"
        collapseName="today"
        data={todayData}
      />
      <TodoList
        id="todos/tomorrowAdded"
        title="Tomorrow"
        collapseName="tomorrow"
        data={tomorrowData}
      />
    </div>
  );
}

export default TodoLists;
