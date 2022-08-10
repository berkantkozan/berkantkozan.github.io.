import React from "react";

export default function Description ({todo,id}){
    //const [value, setValue] = useState(todo.text);
      
    return(
        <form>
            <h1>{todo.text}</h1>
            <h1>to-do id : {id}</h1>
        </form>
    )
}