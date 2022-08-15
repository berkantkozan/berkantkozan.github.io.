import React, { useContext } from "react";
import { GlobalContext } from "../Context/index.js"
import TodoForm from "../Todo-Form/index.js"
import Todo from "../Todo/index.js"

export default function Body() {

    const {
        todos,
        addTodo
    } = useContext(GlobalContext);
    return (
        <div className="div" >
            <div className="div-alt">
                <div className="div-up">
                    <h1>TO-DO LIST</h1>
                    <TodoForm addTodo={addTodo} />
                </div>
                <div className="todo-divs">
                    {todos.map((todo, index) => (
                        todo.id = index,
                        <Todo key={index} todo={todo} />))}
                </div>
            </div>
        </div>
    )
}