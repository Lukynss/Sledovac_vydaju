
function Task({Name, Description}) {
    return (
        <div className="border border-primary rounded-3 p-3 mb-3 mt-3 shadow-sm">
            <h3>{Name}</h3>
            <p>{Description}</p>
        </div>
    )
}

export default Task;