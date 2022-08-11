import React from "react";

export default function Description ({todo}){
    //const [value, setValue] = useState(todo.text);
      
    return(
        <form>
            <h1>{todo.text}</h1>
            <h1>to-do id : {todo.id}</h1>
        </form>
    )
}