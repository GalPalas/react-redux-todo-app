import { combineReducers } from "redux";
import TodoReducer from "./todosSlice";

export default combineReducers({
  todos: TodoReducer,
});
