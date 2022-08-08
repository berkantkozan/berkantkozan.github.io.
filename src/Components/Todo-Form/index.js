import React, {useState} from "react";
import "./style.css";

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="div-input"
          placeholder="I Will Do This "
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button
            className="div-button"
            onChange={e => setValue(e.target.value)}
        > Add </button>
      </form>
    );
  }