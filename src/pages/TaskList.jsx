import { useContext, memo } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow"

export default function TaskList() {

    const { tasks } = useContext(GlobalContext)
    const TaskRowMemo = memo(TaskRow)

    console.log(tasks)

    return (
        <>
            <h1>Lista delle Task</h1>
            <table className="table table-dark table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Stato</th>
                        <th scope="col">Data di Creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks && tasks.map((task) => {
                        return (
                            <TaskRowMemo key={task.id} {...task} />
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}