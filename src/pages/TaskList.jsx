import { useContext, memo, useState, useMemo, useCallback } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow"

// funzione di debounce
function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay);
    }
}

export default function TaskList() {
    const { tasks } = useContext(GlobalContext)

    const [sortBy, setSortBy] = useState('createdAt')
    const [sortOrder, setSortOrder] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')

    // debounce di setSearchQuery
    const debounceSearch = useCallback(debounce(setSearchQuery, 500), [])

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
        return [...tasks].filter(task => {
            const isInTitle = task.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
            return isInTitle
        }).sort((a, b) => {
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

    }, [tasks, sortBy, sortOrder, searchQuery])

    return (
        <>
            <div className="container-h1-input">
                <h1 className="mb-3">Lista delle Task</h1>
                <div>
                    <input type="text" className="form-control mb-2" onChange={(e) => debounceSearch(e.target.value)} placeholder="Cerca" />
                </div>
            </div>
            <table className="table table-light table-bordered">
                <thead >
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