import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useParams } from "react-router-dom"
export default function TaskDetails() {
    const { id } = useParams()
    const { tasks } = useContext(GlobalContext)

    const task = tasks.find(t => t.id === parseInt(id))
    if (!task) {
        return (<h2>Task non Trovata</h2>)
    }
    // formattazione data
    const formatted = new Date(task.createdAt)
    const createdDate = formatted.toLocaleDateString("it-IT");

    const statusCLass = task.status.replace(" ", "").toLowerCase()

    return (
        <>
            <h1 className="mb-3">Dettaglio Task</h1>
            <div className="card w-75 mb-3 ">
                <div className="card-body row g-5">
                    <div className="col-12">
                        <h3 className="card-title">{task.title}</h3>
                    </div>
                    <div className="col-12">
                        <span>Descrizione: </span> 
                        <span className="card-text size-text-card">{task.description}</span>
                    </div>
                    <div className="col-6">
                        <span>Stato:</span> 
                        <span className="card-text size-text-card">{task.status}</span>
                    </div>

                    <div className="col-4">
                        <span>Data di Creazione:</span>
                        <span className="card-text size-text-card">{createdDate}</span>
                    </div>

                    <div className="col-2">
                        <button type="button" className="btn btn-danger">Elimina Task</button>
                    </div>
                </div>
            </div>
        </>
    )
}