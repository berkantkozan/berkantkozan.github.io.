import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

export default function TodoForm({ addTodo }) {

  const [value, setValue] = useState("");
  const handleAdd = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="I Will Do This "
          aria-describedby="basic-addon2"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button
          variant="primary"
          onChange={e => setValue(e.target.value)}
          onClick={handleAdd}
        > Add </Button>
      </InputGroup>
    </>
  );
}