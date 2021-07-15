import AddTodoForm from "./components/addTodoForm";
import TodoList from "./components/todoList";
import TotalCompleteItems from "./components/totalCompleteItems";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container bg-light p-4 mt-5">
        <h1>My Todo List</h1>
        <TodoList />
        <AddTodoForm />
        <TotalCompleteItems />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
