import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputHandler = (event) => setInput(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    props.addTodo(input);
    setInput("");
  };
  return (
    <>
      <form>
        <TextField
          id="standard-basic"
          label="Write Todo"
          variant="standard"
          value={input}
          onChange={inputHandler}
        />
        <Button
          style={{ marginLeft: "2rem", marginTop: "0.5rem" }}
          type="submit"
          variant="contained"
          onClick={submitHandler}
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>
    </>
  );
}
