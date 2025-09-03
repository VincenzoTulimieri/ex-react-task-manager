import { createContext, useEffect, useState } from "react";
const { VITE_URL_API } = import.meta.env

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`${VITE_URL_API}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    )
}