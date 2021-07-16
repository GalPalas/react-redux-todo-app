import TodoList from "./components/todoList";
import TotalCompleteItems from "./components/totalCompleteItems";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container bg-light p-4 mt-5">
        <h1>All Tasks</h1>
        <TodoList />
        <TotalCompleteItems />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
