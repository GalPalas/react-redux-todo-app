import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import TodoLists from "./components/todoLists";
import TotalCompleteItems from "./components/totalCompleteItems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container bg-light p-4 mt-5">
        <h1>All Tasks</h1>
        <TodoLists />
        <TotalCompleteItems />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
