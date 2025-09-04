import { useState, useRef, useMemo } from "react"
import useTasks from "../hooks/useTasks"

export default function AddTask() {

    const [nameTasks, setNameTasks] = useState('')
    const selectRef = useRef()
    const descriptionRef = useRef()

    const { tasks, addTask, removeTask, updateTask } = useTasks()

    async function sendDataTask(e) {
        e.preventDefault()
        const newTask = {
            title: nameTasks,
            status: selectRef.current.value,
            description: descriptionRef.current.value
        }
        if (!validationTask.validation) {
            console.log('Inserire nome della task')
        } else {
            console.log('New Task:', newTask)
        }

        try {
            await addTask(newTask)
            alert('Task creata con successo')
            setNameTasks('')
            selectRef.current.value = 'To do'
            descriptionRef.current.value = ''
        } catch(error){
            alert(error.message)
        }

    }

    function isValidTask(userTask) {
        if (!userTask.trim()) {
            return { validation: false, message: 'Il nome non può essere vuoto, inserire nome della task' }
        }
        const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";
        if (userTask.split('').some(l => symbols.includes(l))) {
            return { validation: false, message: 'Il nome non può includere simboli' }
        }
        return { validation: true, message: 'Nome Task valida' }
    }
    const validationTask = useMemo(() => isValidTask(nameTasks), [nameTasks])

    return (
        <>
            <h1 className="mb-4">Aggiungi una nuova Task</h1>
            <form className="row g-3" onSubmit={sendDataTask}>
                <div className="col-6">
                    <label htmlFor="nome" className="mb-1"><strong>Nome:</strong></label>
                    <input type="text" id="nome" className="form-control mb-2" placeholder="Nome della task" value={nameTasks} onChange={(e) => setNameTasks(e.target.value)}></input>
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
                    <label htmlFor="select" className="mb-1"><strong>Stato:</strong></label>
                    <select className="form-select" ref={selectRef} defaultValue='To do' id="select">
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div className="col-8">
                    <label htmlFor="descrizione" className="mb-1"><strong>Descrizione:</strong></label>
                    <textarea className="form-control" placeholder="Descrizione" rows="3" ref={descriptionRef} id="descrizione"></textarea>
                </div>
                <div className="col-8 container-button">
                    <button type="submit" className="btn btn-primary mb-3" disabled={!validationTask.validation} >Aggiungi Task</button>
                </div>
            </form>
        </>
    )
}