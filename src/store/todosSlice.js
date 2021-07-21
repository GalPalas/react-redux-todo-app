import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    today: [],
    tomorrow: [],
    upcoming: [],
    someday: [],
    loading: false,
  },
  reducers: {
    callRequested: (todos, action) => {
      todos.loading = true;
    },
    callSuccess: (todos, action) => {
      let { today, tomorrow, upcoming, someday } = action.payload;
      todos.today = today;
      todos.tomorrow = tomorrow;
      todos.upcoming = upcoming;
      todos.someday = someday;
      todos.loading = false;
    },
    callFailed: (todos, action) => {
      todos.loading = false;
    },
    todayAdded: (todos, action) => {
      todos.today.push(action.payload);
    },
    tomorrowAdded: (todos, action) => {
      todos.tomorrow.push(action.payload);
    },
    upcomingAdded: (todos, action) => {
      todos.upcoming.push(action.payload);
    },
    somedayAdded: (todos, action) => {
      todos.someday.push(action.payload);
    },
    todayCompleted: (todos, action) => {
      const index = todos.today.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todos.today[index].completed = action.payload.completed;
    },
    tomorrowCompleted: (todos, action) => {
      const index = todos.tomorrow.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todos.tomorrow[index].completed = action.payload.completed;
    },
    upcomingCompleted: (todos, action) => {
      const index = todos.upcoming.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todos.upcoming[index].completed = action.payload.completed;
    },
    somedayCompleted: (todos, action) => {
      const index = todos.someday.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todos.someday[index].completed = action.payload.completed;
    },
    todoDeleted: (todos, action) => {
      todos.today = action.payload;
    },
  },
});

export const {
  callRequested,
  callSuccess,
  callFailed,
  todayAdded,
  tomorrowAdded,
  upcomingAdded,
  somedayAdded,
  todayCompleted,
  tomorrowCompleted,
  upcomingCompleted,
  somedayCompleted,
  todoDeleted,
} = todosSlice.actions;
export default todosSlice.reducer;

const url = "/todos";

export const loadTodosFromApi = () => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url,
      onStart: callRequested.type,
      onSuccess: callSuccess.type,
      onError: callFailed.type,
    })
  );
};

export const addTodo = (addedReducerType, url, title) =>
  apiCallBegan({
    url: url,
    method: "post",
    data: { title: title },
    onSuccess: addedReducerType,
  });

export const completedTodo = (id, url, completedReducerType, completed) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "patch",
    data: { completed },
    onSuccess: completedReducerType,
  });

export const deleteTodo = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "delete",
    onSuccess: todoDeleted.type,
  });

/* --------------- Get todos types from store ---------------  */
export const todayTodos = () =>
  createSelector(
    (state) => state.entities.todos,
    (todos) => todos.today
  );

export const tomorrowTodos = () =>
  createSelector(
    (state) => state.entities.todos,
    (todos) => todos.tomorrow
  );

export const upcomingTodos = () =>
  createSelector(
    (state) => state.entities.todos,
    (todos) => todos.upcoming
  );

export const somedayTodos = () =>
  createSelector(
    (state) => state.entities.todos,
    (todos) => todos.someday
  );
/* --------------- End => Get todos types from store  ---------------  */

export const getCompletedItems = () =>
  createSelector(
    (state) => state.entities.todos,
    (todos) => todos.today.filter((todo) => todo.completed === true)
  );
