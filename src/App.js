import './App.css';
import Header from "./components/Header.js"
import Tasks from "./components/Tasks";

import {useState, useEffect} from "react";

function App() {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                name: "Vynést koše",
                description: "Už smrdí"
            },
            {
                id: 2,
                name: "Umýt okna",
                description: "Není vidět ven"
            }
        ]
    )

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

  return (
    <div className="App container">
        <Header text="To-do List" className="mb-3 mt-3"/>
        <Tasks tasks={tasks} Delete={removeTask} />
    </div>
  );
}

export default App;
