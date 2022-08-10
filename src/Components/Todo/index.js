import React from "react";
import "../../App.js";
import "./style.css";
//import Contact from '../Contact/contact.js';

export default function Todo({ todo, id, completeTodo, deleteTodo,}) {
  return(
    <div 
      className="todo-div"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >     {todo.text}
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


