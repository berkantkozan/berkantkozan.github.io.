import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { GlobalContext } from "../Context/index.js"
import "../../App.js";
import "./style.css";

export default function Todo({ todo }) {
  const {
    completeTodo,
    deleteTodo,
    setInfo,
    info
  } = useContext(GlobalContext);

  const navigate = useNavigate();
  const todoDetailOnClick = (todo) => {
    //setselectedTodo(todo)
    setInfo(!info)
    navigate(`/${todo.id}`)
    console.log(todo.id)
  }
  return (
    <div className="main-div">
      <div>
        <div
          className="todo-div"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          onInput={(e) => todo.text = e.currentTarget.textContent}
          onClick={() => todoDetailOnClick(todo)}
        ><li>{todo.text}</li>
        </div>
        <div className="a-div">
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => completeTodo(todo.id)}
          >{todo.isCompleted ? "uncheck" : "check"}</Button>{' '}
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => deleteTodo(todo.id)}
          >x</Button>{' '}
        </div>
      </div>
    </div>
  )
}
 /*  */

