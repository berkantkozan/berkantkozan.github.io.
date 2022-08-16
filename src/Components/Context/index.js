import React, { useState, createContext, useEffect } from "react";

export const GlobalContext = createContext()

export const ContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            text: "You can write your to-do above and add",
            isCompleted: false,
            description: "hello",
            id: 0,
            date: new Date()
        },
    ]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("localTodos"));
        if(storedTodos) setTodos(storedTodos);
    }, [])
    
    useEffect(() => {
        localStorage.setItem("localTodos", JSON.stringify(todos));
    }, [todos])


    const addTodo = (text) => {
        const newTodo = { text, date: new Date() };
        setTodos(prevTodos => ([...prevTodos, newTodo]));
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = newTodos[index].isCompleted ? false : true;
        setTodos(newTodos);
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    return (
        <GlobalContext.Provider value={{
            todos,
            setTodos,
            addTodo,
            completeTodo,
            deleteTodo
        }} >
            {children}
        </GlobalContext.Provider>
    )
}