
function Task({Name, Description, Delete}) {
    return (
        <div className="border border-primary rounded-3 p-3 mb-3 mt-3 shadow-sm row">
            <div className="col-9">
                <h3>{Name}</h3>
                <p>{Description}</p>
            </div>
            <div className="col-3">
               <button onClick={Delete} className="btn btn-danger" >🗑️</button>
            </div>
        </div>
    )
}

export default Task;