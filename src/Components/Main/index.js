import React,{useState} from "react";
import TodoForm from "../Todo-Form/index.js"
import Todo from "../Todo/index.js"
import "./style.css";

export default function Main () {
    const [todos, setTodos] = useState([
        {
          text: "You can write your to-do above and add",
          isCompleted: false
        },
    ]);
    
    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
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
        <main>
            <div className="div" >
                <div className="div-alt">
                    <TodoForm addTodo={addTodo} />
                        {todos.map((todo, index) => (
                        <Todo
                            key={index}
                            index={index}
                            todo={todo}
                            completeTodo={completeTodo}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}