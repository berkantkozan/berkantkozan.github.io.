import React from "react";
import { useState, createContext } from "react";

export const GlobalContext = createContext()

export const ContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            text: "You can write your to-do above and add",
            isCompleted: false,
            description: "hello",
            id: 0
        },
    ]);
    return (
        <GlobalContext.Provider value={{ todos, setTodos }} >
            {children}
        </GlobalContext.Provider>
    )
}