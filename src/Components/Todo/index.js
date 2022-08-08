import React from "react";
import "../../App.js";
import "./style.css";

export default function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div
      className="todo-div"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button 
              className="div-button"
              onClick={() => completeTodo(index)}
        >{todo.isCompleted ? "uncheck" : "check"}</button>
        <button
              className="div-button-delete"
              onClick={() => deleteTodo(index)}
        >x</button>
      </div>
    </div>
  );
}