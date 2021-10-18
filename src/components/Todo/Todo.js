import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo(props) {
  const removeHandler = () => props.removeTodo(props.todo);
  return (
    <ListItem
      style={{
        backgroundColor: "#B1E693",
        borderRadius: "0.8rem",
        marginBottom: "1rem",
      }}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon onClick={removeHandler} />
        </IconButton>
      }
    >
      <ListItemText primary={props.todo} />
    </ListItem>
  );
}
