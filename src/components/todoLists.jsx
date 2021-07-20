import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadTodosFromApi,
  todayTodos,
  tomorrowTodos,
  upcomingTodos,
  somedayTodos,
} from "../store/todosSlice";
import TodoList from "./todoList";

function TodoLists() {
  const dispatch = useDispatch();
  const todayData = useSelector(todayTodos());
  const tomorrowData = useSelector(tomorrowTodos());
  const upcomingData = useSelector(upcomingTodos());
  const somedayData = useSelector(somedayTodos());

  useEffect(() => {
    dispatch(loadTodosFromApi());
  }, [dispatch]);

  return (
    <div>
      <TodoList
        reducerType="todos/todayAdded"
        url="/todos/today"
        title="Today"
        collapseName="today"
        data={todayData}
      />
      <TodoList
        reducerType="todos/tomorrowAdded"
        url="/todos/tomorrow"
        title="Tomorrow"
        collapseName="tomorrow"
        data={tomorrowData}
      />
      <TodoList
        reducerType="todos/upcomingAdded"
        url="/todos/upcoming"
        title="Upcoming"
        collapseName="upcoming"
        data={upcomingData}
      />
      <TodoList
        reducerType="todos/somedayAdded"
        url="/todos/someday"
        title="Someday"
        collapseName="someday"
        data={somedayData}
      />
    </div>
  );
}

export default TodoLists;
