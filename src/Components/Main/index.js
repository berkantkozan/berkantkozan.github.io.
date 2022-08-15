import React, { useContext } from "react";
import { GlobalContext } from "../Context/index.js"
import TodoForm from "../Todo-Form/index.js"
import Todo from "../Todo/index.js"
import Description from "../Description/index.js"
import "./style.css";

export default function Main() {

    const {
        todos,
        addTodo,
        info
    } = useContext(GlobalContext);
    return (
        <main>
            {info ? <Description /> :
                <div className="div" >
                    <div className="div-alt">
                        <div className="div-up">
                            <h1>TO-DO LIST</h1>
                            <TodoForm addTodo={addTodo} />
                        </div>
                        <div className="todo-divs">
                            {todos.map((todo, index) => (
                                todo.id = index,
                                <Todo key={index} todo={todo} />))}
                        </div>
                    </div>
                </div>
            }
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
