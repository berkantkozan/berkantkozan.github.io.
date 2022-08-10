import React,{useState} from "react";
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import TodoForm from "../Todo-Form/index.js"
import Description from "../Description/index.js"
import "./style.css";


export default function Main () {
    const [todos, setTodos] = useState([
        {
          text: "You can write your to-do above and add",
          isCompleted: false,
          description: "hello",
          id:[0,]
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
                <TodoForm addTodo={addTodo}/>
                            <div>
                            {todos.map((todo, index) => (
                                <>
                                    <RouterArrange
                                        key={index}
                                        id={index}
                                        todo={todo}
                                        completeTodo={completeTodo}
                                        deleteTodo={deleteTodo}
                                        addTodo={addTodo} /></>
                                    
                                    
                                    ))}
                            </div>
                </div>
            </div>
            </Router>
        </main>
    )
}

function RouterArrange ({ todo, id, completeTodo, deleteTodo,addTodo}){
    let smt = `/${id}`
   
    return( 
        <div 
            className="todo-div"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >   
            <div>
                <Link to = {smt}>{todo.text}</Link>
                <Routes>
                      <Route exact path="/"></Route>
                      <Route 
                          exact path= {smt}
                          element=  {<Description 
                                        todo={todo}
                                        id={id} 
                                    />}
                      ></Route>
              </Routes>
            </div>
            <div>
                <button
                    className="div-button"
                    onClick={() => completeTodo(id)}
                    >{todo.isCompleted ? "uncheck" : "check"}</button>
                <button
                    className="div-button-delete"
                    onClick={() => deleteTodo(id)}
                    >x</button>
            </div>
        </div>
    )
  }
  