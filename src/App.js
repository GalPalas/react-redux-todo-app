import AddTodoForm from "./components/addTodoForm";
import TodoList from "./components/todoList";
import TotalCompleteItems from "./components/totalCompleteItems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container bg-light p-4 mt-5">
        <h1>My Todo List</h1>
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </div>
  );
}

export default App;
