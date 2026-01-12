import Task from './Task';

function Tasks({tasks, Delete}) {
    return (
        <div className="rounded-3 p-3 shadow-sm">
            {tasks.map((task) => (
                <Task key={task.id} Name={task.name} Description={task.description} Delete={Delete} />
            ))}
        </div>
    )
}

export default Tasks;