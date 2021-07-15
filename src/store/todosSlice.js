import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    callRequested: (todos, action) => {
      todos.loading = true;
    },
    callSuccess: (todos, action) => {
      todos.list = action.payload;
      todos.loading = false;
    },
    callFailed: (todos, action) => {
      todos.loading = false;
    },
    todoAdded: (todos, action) => {
      todos.list.push(action.payload);
    },
    todoCompleted: (todos, action) => {
      console.log("todoCompleted", action.payload.id);
      const index = todos.list.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todos.list[index].completed = action.payload.completed;
    },
    todoDeleted: (todos, action) => {
      todos.list = action.payload;
    },
  },
});

export const {
  callRequested,
  callSuccess,
  callFailed,
  todoAdded,
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

export const addTodo = (title) =>
  apiCallBegan({
    url,
    method: "post",
    data: title,
    onSuccess: todoAdded.type,
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

export const getTodos = () =>
  createSelector(
    (state) => state.entities.todos,
    (todos) => todos.list
  );

export const getCompletedItems = () =>
  createSelector(
    (state) => state.entities.todos,
    (todos) => todos.list.filter((todo) => todo.completed === true)
  );
