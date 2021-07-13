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
    callSuccess: (todos, action) => {
      todos.list = action.payload;
    },
    callFailed: (todos, action) => {
      todos.loading = false;
      console.log(action.payload);
    },
    addTodo: (todos, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      todos.list.push(newTodo);
    },
    toggleCompleted: (todos, action) => {
      const index = todos.list.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todos.list[index].completed = action.payload.completed;
    },
    deleteTodo: (todos, action) => {
      return todos.list.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { callSuccess, callFailed, addTodo, toggleCompleted, deleteTodo } =
  todosSlice.actions;
export default todosSlice.reducer;

export const loadTodosFromApi = () => (dispatch, getState) => {
  dispatch(apiCallBegan());
};

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
