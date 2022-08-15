import React from "react";
import { useState, createContext } from "react";

export const GlobalContext = createContext()

export const ContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            text: "You can write your to-do above and add",
            isCompleted: false,
            description: "hello",
            id: 0,
            date : new Date()
        },
    ]);
    const [info, setInfo] = useState(false)
    const [selectedTodo, setselectedTodo] = useState({})

    const addTodo = (text) => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
        newTodos[newTodos.length -1].date = new Date();
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = newTodos[index].isCompleted ? false : true;
        setTodos(newTodos);
    };

    /*const editTodo = (index,text) => {
        console.log(index,text)
        const newTodos = [...todos];
        newTodos[index] = text;
        setTodos(newTodos)
    }; */

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
            deleteTodo, 
            info, 
            setInfo, 
            selectedTodo, 
            setselectedTodo
        }} >
            {children}
        </GlobalContext.Provider>
    )
}