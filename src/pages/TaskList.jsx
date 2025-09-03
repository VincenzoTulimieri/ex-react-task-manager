import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function TaskList() {

    const {task}= useContext(GlobalContext)


    return (
        <>
            <h1>Task</h1>
        </>
    )
}