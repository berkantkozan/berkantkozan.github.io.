import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { GlobalContext } from "../Context/index.js";
import { useNavigate, useParams } from 'react-router-dom';
import "./style.css"

export default function Description() {
    const { todos } = useContext(GlobalContext);
    const navigate = useNavigate();
    const { id } = useParams();
    function handleClick() {
        navigate(`/`)
    }
    const [isEditing, setIsEditing] = useState(false)
    return (
        <main>
            <div className="div" >
                <div className="div-alt">
                    <Button variant="secondary" onClick={handleClick}>homepage</Button>
                    <div className="div-up">
                        <form>
                            {todos.filter((todo) => todo.id.toLocaleString() === id).map(todo => (
                                <div key={id}>
                                    <div><h1>TASK NUMBER: {todo.id}</h1></div><div
                                    className="desc-div"
                                    contentEditable={isEditing}
                                    onInput={(e) => todo.text = e.currentTarget.textContent}
                                ><li>{todo.text}</li>
                                </div><div className="a-div">
                                        <Button
                                            variant="outline-primary"
                                            size="sm"
                                            onClick={() => setIsEditing(!isEditing)}
                                        >{isEditing ? "save" : "edit"}</Button> {' '}
                                    </div><h1>{todo.text}</h1><footer>TASK ADDED ON: {todo.date.toLocaleString("en-US")}</footer>
                                    </div>
                            ))}
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}