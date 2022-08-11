import React, {useState} from "react";
import "./style.css";

export default function TodoForm({ addTodo}) {
    const [value, setValue] = useState("");
    //const [editvalue, setEditValue] = useState("");
  
    const handleAdd = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
    /*
    let editable = false;
    const handleEdit = e => {
      e.preventDefault();
      editable = !editable;
      if (!value) return;
      if (editable) setEditValue(value);
      editTodo(id,editvalue);
      setValue("") ;
    };
    */
    return (
      <form >
        <input
          type="text"
          className="div-input"
          placeholder="I Will Do This "
          value={value}
          onChange={e =>setValue(e.target.value)}
        />
        <button
            className="div-button"
            onChange={e => setValue(e.target.value)}
            onClick={handleAdd}
        > Add </button>
      </form>
    );
  }