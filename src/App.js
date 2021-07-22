import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import TodoLists from "./components/todoLists";
import TotalCompleteItems from "./components/totalCompleteItems";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import Footer from "./components/footer";

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <Navbar />
      <div className="container bg-light mt-5 rounded-2 p-4 mb-5">
        <div className="row">
          <div className="col">
            <h1 className="container">All Tasks</h1>
            <TodoLists />
            <TotalCompleteItems />
          </div>
          <div className="col mx-5">
            <h1 className="mb-2">Calendar</h1>
            <Calendar className="p-3" onChange={onChange} value={value} />
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
