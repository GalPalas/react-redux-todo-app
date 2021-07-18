import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    today: [],
    tomorrow: [],
    loading: false,
  },
  reducers: {
    callRequested: (todos, action) => {
      todos.loading = true;
    },
    callSuccess: (todos, action) => {
      todos.today = action.payload;
      todos.tomorrow = action.payload; //fix bug here!
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
    todoCompleted: (todos, action) => {
      const index = todos.today.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todos.today[index].completed = action.payload.completed;
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
  todoCompleted,
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

export const addTodo = (id, title) =>
  apiCallBegan({
    url,
    method: "post",
    data: { title: title },
    onSuccess: id,
  });

export const completedTodo = (id, completed) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "patch",
    data: { completed },
    onSuccess: todoCompleted.type,
  });

export const deleteTodo = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "delete",
    onSuccess: todoDeleted.type,
  });

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

export const getCompletedItems = () =>
  createSelector(
    (state) => state.entities.todos,
    (todos) => todos.today.filter((todo) => todo.completed === true)
  );
