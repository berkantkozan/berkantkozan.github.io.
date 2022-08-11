import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GlobalContext } from "../Context/provider.js"
import TodoForm from "../Todo-Form/index.js"
import Description from "../Description/index.js"
import "./style.css";

export default function Main() {

    const {todos, setTodos} = useContext(GlobalContext);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
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
        <main>
            <Router basename={process.env.PUBLIC_URL}>
                <div className="div" >
                    <div className="div-alt">
                        <div className="div-up">
                            <button
                                type="button"
                                className="div-button-home"
                            ><Link to="/">Home</Link>
                            </button>
                            <TodoForm addTodo={addTodo} />
                        </div>
                        <div>
                            {todos.map((todo, index) => (
                                todo.id = index,
                                <RouterArrange
                                    key={index}
                                    todo={todo}
                                    completeTodo={completeTodo}
                                    deleteTodo={deleteTodo}
                                    addTodo={addTodo} />


                            ))}
                        </div>
                    </div>
                </div>
            </Router>
        </main>
    )
}

function RouterArrange({ todo, completeTodo, deleteTodo }) {

    let smt = `/${todo.id}`
    return (
        <div
            className="todo-div"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            <div>
                <Link to={smt}>{todo.text}</Link>
                <Routes>
                    <Route path="/"></Route>
                    <Route
                        exact path={smt}
                        element={<Description
                            todo={todo}
                        />}
                    ></Route>
                </Routes>

            </div>
            <div>
                <button
                    className="div-button"
                    onClick={() => completeTodo(todo.id)}
                >{todo.isCompleted ? "uncheck" : "check"}</button>
                <button
                    className="div-button-delete"
                    onClick={() => deleteTodo(todo.id)}
                >x</button>
            </div>
        </div>
    )
}
