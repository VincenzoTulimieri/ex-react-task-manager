import { useState, useRef } from "react";
import Modal from "./Modal";

export default function EditTaskModal({ show, onClose, task, onSave }) {
    const [editedTask, setEditedTask] = useState(task)
    const { title, description, status } = editedTask
    const formRef = useRef()

    function changeTask(key, value) {
        setEditedTask(prev => ({ ...prev, [key]: value }))
    }
    const sendUpdateTask = (event) =>{
        event.preventDefault()
        onSave(editedTask)
    }
    return (
        <>
            <Modal
                title='Modifica Task'
                content={
                    <form className="row g-3" ref={formRef} onSubmit={sendUpdateTask}>
                        <div className="col-6">
                            <label htmlFor="nome" className="mb-1"><strong>Nome:</strong></label>
                            <input type="text" id="nome" className="form-control mb-2" placeholder="Nome della task" value={title} onChange={(e) => changeTask('title', e.target.value)}></input>
                        </div>
                        <div className="col-2">
                            <label htmlFor="select" className="mb-1"><strong>Stato:</strong></label>
                            <select className="form-select" value={status} onChange={(e) => setNewStatus('status', e.target.value)} defaultValue='To do' id="select">
                                <option value="To do">To do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                        <div className="col-8">
                            <label htmlFor="descrizione" className="mb-1"><strong>Descrizione:</strong></label>
                            <textarea className="form-control" placeholder="Descrizione" rows="3" value={description} onChange={(e) => changeTask('desription', e.target.value)} id="descrizione"></textarea>
                        </div>
                    </form>
                }
                confirmText="Salva"
                show={show}
                onClose={onClose}
                onConfirm={()=>formRef.current.requestSubmit()} />
        </>
    )
}