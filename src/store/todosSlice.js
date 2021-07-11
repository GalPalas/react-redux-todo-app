import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
  ],
  reducers: {
    addTodo: (todos, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      todos.push(newTodo);
    },
    toggleCompleted: (todos, action) => {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      todos[index].completed = action.payload.completed;
    },
    deleteTodo: (todos, action) => {
      return todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleCompleted, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;

export const getTodos = () =>
  createSelector(
    (state) => state.entities.todos,
    (todos) => todos
  );

export const getCompletedItems = () =>
  createSelector(
    (state) => state.entities.todos,
    (todos) => todos.filter((todo) => todo.completed === true)
  );
