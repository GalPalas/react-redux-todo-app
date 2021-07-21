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
        addedReducerType="todos/todayAdded"
        completedReducerType="todos/todayCompleted"
        url="/todos/today"
        title="Today"
        collapseName="today"
        data={todayData}
      />
      <TodoList
        addedReducerType="todos/tomorrowAdded"
        completedReducerType="todos/tomorrowCompleted"
        url="/todos/tomorrow"
        title="Tomorrow"
        collapseName="tomorrow"
        data={tomorrowData}
      />
      <TodoList
        addedReducerType="todos/upcomingAdded"
        completedReducerType="todos/upcomingCompleted"
        url="/todos/upcoming"
        title="Upcoming"
        collapseName="upcoming"
        data={upcomingData}
      />
      <TodoList
        addedReducerType="todos/somedayAdded"
        completedReducerType="todos/somedayCompleted"
        url="/todos/someday"
        title="Someday"
        collapseName="someday"
        data={somedayData}
      />
    </div>
  );
}

export default TodoLists;
