import React,{useState} from "react";
import ReactDOM  from "react-dom/client";
import TodoForm from "./Todo-form.js"
import Todo from "./Todo.js"

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