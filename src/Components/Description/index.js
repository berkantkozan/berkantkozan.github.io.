import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { GlobalContext } from "../Context/index.js";
import { useNavigate } from 'react-router-dom';
import "./style.css"

export default function Description() {
    const { setInfo, selectedTodo } = useContext(GlobalContext);
    const navigate = useNavigate();
    console.log({ selectedTodo });
    function handleClick() {
        setInfo(false)
        navigate(`/`)
    }
    function handleDivClick() {
        setIsEditing(!isEditing)
    }
    const [isEditing, setIsEditing] = useState(false)
    return (
        <main>
            <div className="div" >
                <div className="div-alt">
                    <Button variant="secondary" onClick={handleClick}>homepage</Button>
                    <div className="div-up">
                        <form>
                            <div><h1>TASK NUMBER: {selectedTodo.id}</h1></div>
                            <div
                                className="desc-div"
                                contentEditable={isEditing}
                                onInput={(e) => selectedTodo.text = e.currentTarget.textContent}
                            ><li>{selectedTodo.text}</li>
                            </div>
                            <div className="a-div">
                                <Button
                                    variant="outline-primary"
                                    size="sm"
                                    onClick={() => setIsEditing(!isEditing)}
                                >{isEditing ? "save" : "edit"}</Button> {' '}
                            </div>
                            <h1>{selectedTodo.text}</h1>
                            <footer>TASK ADDED ON: {selectedTodo.date.toLocaleString("en-US")}</footer>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}