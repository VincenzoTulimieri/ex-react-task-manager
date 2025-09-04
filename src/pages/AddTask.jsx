import { useState, useRef } from "react"

export default function AddTask() {

    const [nameTasks, setNameTasks] = useState('')
    const selectRef = useRef()
    const descriptionRef = useRef()

    function sendDataTask(e) {
        e.preventDefault()
        const newTask = {
            name: nameTasks,
            status: selectRef.current.value,
            description: descriptionRef.current.value
        }
        if (!validationTask.validation) {
            console.log('Inserire nome della task')
        } else {
            console.log('New Task:', newTask)
        }
    }

    function isValidTask(userTask){
        if (!userTask.trim()) {
            return {validation: false, message: 'Il nome non può essere vuoto, inserire nome della task'}
        }
        const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";
        if(userTask.split('').some(l=>symbols.includes(l))){
            return {validation: false, message: 'Il nome non può includere simboli'}
        }
        return {validation: true, message: 'Task valida'}
    }
    const validationTask= isValidTask(nameTasks)

    return (
        <>
            <h1 className="mb-4">Aggiungi una nuova Task</h1>
            <form className="row g-3" onSubmit={sendDataTask}>
                <div className="col-6">
                    <input type="text" className="form-control mb-2" placeholder="Nome della task" value={nameTasks} onChange={(e) => setNameTasks(e.target.value)}></input>
                    {nameTasks !== '' && (validationTask.validation ? (<div className="alert alert-success d-flex align-items-center" role="alert">
                        <div>
                            {validationTask.message}
                        </div>
                    </div>) : (<div className="alert alert-danger d-flex align-items-center" role="alert">
                        <div>
                            {validationTask.message}
                        </div>
                    </div>))}
                </div>
                <div className="col-2">
                    <select className="form-select" ref={selectRef}>
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div className="col-8">
                    <textarea className="form-control" placeholder="Descrizione" rows="3" ref={descriptionRef}></textarea>
                </div>
                <div className="col-8 container-button">
                    <button type="submit" className="btn btn-primary mb-3">Aggiungi Task</button>
                </div>
            </form>
        </>
    )
}

{/* <div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    An example danger alert with an icon
  </div>
</div> */}


{/* <div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    An example success alert with an icon
  </div>
</div> */}