import {useState} from "react";
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

function Todolist () {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                name: "Phone",
                description: "500"
            },
            {
                id: 2,
                name: "car",
                description: "5000"
            }
        ]
    )

    const addTask = (newTask) => {
        let newId = Math.max(...tasks.map(task => task.id)) + 1;
        newTask.id = newId;
        setTasks([...tasks, newTask]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const total =tasks.reduce((sum, task) => {
        return sum + Number(task.description);
    },0 )

    return (
        <div className="App container p-5">
            <Header text="Sledovač výdajů" className="mb-3 mt-3"/>
            <h2> Total : {total} Kč</h2>
            <AddTask onSubmit={addTask} />
            <Tasks tasks={tasks} Delete={removeTask} />
        </div>
    );
}

export default Todolist;