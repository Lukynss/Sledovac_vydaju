
function AddTask({onSubmit}) {
    return (
        <div className="">
            <form action="" className="form d-flex flex-column align-items-start" onSubmit={AddTask}>
                <input type="text" className="form-control mb-3" placeholder="Název úkolu" onChange={(e) => {}}/>
                <input type="text" className="form-control mb-3" placeholder="Popis úkolu" onChange={(e) => {}}/>
                <input type="submit" value="Přidat úkol" className="btn btn-success"/>
            </form>
        </div>
    )
}

export default AddTask;