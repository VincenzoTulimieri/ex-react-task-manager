import { useContext, memo, useState, useMemo } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow"

export default function TaskList() {
    const { tasks } = useContext(GlobalContext)

    const [sortBy, setSortBy] = useState('createdAt')
    const [sortOrder, setSortOrder] = useState(1)

    // MEMO
    const TaskRowMemo = memo(TaskRow)

    console.log(tasks)

    const orderTask = (nameColumn) => {
        if (sortBy === nameColumn) {
            setSortOrder(prev => prev * -1)
        } else {
            setSortBy(nameColumn)
            setSortOrder(1)
        }
    }

    const sortTask = useMemo(() => {
        return [...tasks].sort((a, b) => {
            let comparison
            if (sortBy === 'title') {
                comparison = a.title.localeCompare(b.title)
            } else if (sortBy === 'status') {
                const statusOption = ['To do', 'Doing', 'Done']
                comparison = statusOption.indexOf(a.status) - statusOption.indexOf(b.status)
            } else if (sortBy === 'createdAt') {
                const dateA = new Date(a.createdAt).getTime()
                const dateB = new Date(b.createdAt).getTime()
                comparison = dateA - dateB
            }

            return comparison * sortOrder
        })

    }, [tasks, sortBy, sortOrder])

    return (
        <>
            <h1 className="mb-3">Lista delle Task</h1>
            <table className="table table-light table-bordered">
                <thead>
                    <tr>
                        <th scope="col" className="hover-box-intestazione" onClick={() => orderTask('title')} >Nome</th>
                        <th scope="col" className="hover-box-intestazione" onClick={() => orderTask('status')}>Stato</th>
                        <th scope="col" className="hover-box-intestazione" onClick={() => orderTask('createdAt')}>Data di Creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {sortTask && sortTask.map((task) => {
                        return (
                            <TaskRowMemo key={task.id} {...task} />
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}