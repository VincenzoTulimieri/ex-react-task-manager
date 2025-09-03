import { createContext, useEffect, useState } from "react";
import useTasks from "../hooks/useTasks";

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {
    const {tasks} = useTasks()
    return (
        <GlobalContext.Provider value={{ tasks }}>
            {children}
        </GlobalContext.Provider>
    )
}