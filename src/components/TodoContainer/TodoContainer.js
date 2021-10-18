import React from "react";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Todo from "../Todo/Todo";

export default function TodoContainer(props) {
  return (
    <Grid
      direction="column-reverse"
      item
      xs={12}
      sm={6}
      md={3}
      style={{ margin: "1rem" }}
    >
      <List>
        {props.todos.map((todo) => (
          <Todo todo={todo} removeTodo={props.removeTodo}></Todo>
        ))}
      </List>
    </Grid>
  );
}
