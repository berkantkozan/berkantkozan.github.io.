import React from "react";
import "./style.css";
import DescriptionRoute from "../Route/index.js";

export default function Main() {

    return (
        <main>
            <DescriptionRoute /> 
        </main>
    )
}

/*function RouterArrange({ todos, completeTodo, deleteTodo }) {
    const [isEditing, setIsEditing] = useState(false)
    const navigate = useNavigate();
    const [selectedTodo, setselectedTodo] = useState({})
    const todoDetailOnClick = (todo) => {
        setselectedTodo(todo)
        navigate(`/${todo.id}`)
    }
    console.log(todos)
    return (
        <div
            className="todo-div"
        // style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            <div>
                {
                    todos.map(todo =>
                        <div
                            contentEditable={isEditing}
                            onInput={(e) => todo.text = e.currentTarget.textContent}>
                            <div onClick={() => todoDetailOnClick(todo)}>{todo.text}</div>
                        </div>
                    )}

                <div>
                    <Routes>
                        <Route path="/"></Route>
                        <Route
                            exact path={`/${selectedTodo.id}`}
                            element={<Description
                                todo={selectedTodo}
                            />}
                        ></Route>
                    </Routes>
                </div>

            </div>
            {/* <div>
                <button
                    className="div-button"
                    onClick={() => setIsEditing(!isEditing)}
                >{isEditing ? "save" : "edit"}</button>
                <button
                    className="div-button"
                    onClick={() => completeTodo(todo.id)}
                >{todo.isCompleted ? "uncheck" : "check"}</button>
                <button
                    className="div-button-delete"
                    onClick={() => deleteTodo(todo.id)}
                >x</button>
            </div> }
        </div>
    )
}*/
