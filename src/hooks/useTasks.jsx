import { useState, useEffect } from "react"
const { VITE_URL_API } = import.meta.env

export default function useTasks() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`${VITE_URL_API}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err))
    }, [])

    const addTask = () => { }
    const removeTask = () => { }
    const updateTask = () => { }


    return [tasks, addTask, removeTask, updateTask]
}
