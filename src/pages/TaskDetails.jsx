import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useParams, useNavigate } from "react-router-dom"
import Modal from "../components/Modal"
import EditTaskModal from "../components/EditTaskModal"

export default function TaskDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { tasks, removeTask, updateTask } = useContext(GlobalContext)

    // show della modale
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [showModalEdit, setshowModalEdit] = useState(false)

    const task = tasks.find(t => t.id === parseInt(id))
    if (!task) {
        return (<h2>Task non Trovata</h2>)
    }

    // formattazione data
    const formatted = new Date(task.createdAt)
    const createdDate = formatted.toLocaleDateString("it-IT");


    const deleteTask = async () => {
        try {
            await removeTask(task.id)
            alert('Task elimitata con successo')
            navigate('/')
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }

    const editedTask = async (editTask) => {
        try {
            updateTask(editTask)
            alert('Task modificata con successo')
            setshowModalEdit(false)
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }


    return (
        <>
            <h1 className="mb-3">Dettaglio Task</h1>
            <div className="card w-75 mb-3 ">
                <div className="card-body row g-5">
                    <div className="col-12">
                        <h3 className="card-title">{task.title}</h3>
                    </div>
                    <div className="col-12">
                        <p className="card-text"><strong>Descrizione:</strong> {task.description}</p>
                    </div>
                    <div className="col-6">
                        <p className="card-text"><strong>Stato:</strong> {task.status}</p>
                    </div>
                    <div className="col-4">
                        <p className="card-text"><strong>Data di Creazione:</strong> {createdDate}</p>
                    </div>
                    <div className="col-12 flex-button">
                        <button type="button" className="btn btn-primary" onClick={() =>navigate('/')}>Indietro</button>
                        <button type="button" className="btn btn-success" onClick={() => setshowModalEdit(true)}>Modifica Task</button>
                        <button type="button" className="btn btn-danger" onClick={() => setShowModalDelete(true)}>Elimina Task</button>
                    </div>
                    {/* Modale di eliminazione task */}
                    <Modal title='Conferma Eliminazione' content={<p>Sei sicuro di voler eliminarela la task?</p>} show={showModalDelete} onClose={() => setShowModalDelete(false)} onConfirm={deleteTask} confirmText="Elimina" />
                    {/* Modale di modifica task */}
                    <EditTaskModal show={showModalEdit} onClose={() => setshowModalEdit(false)} task={task} onSave={editedTask} />
                </div>
            </div>
        </>
    )
}