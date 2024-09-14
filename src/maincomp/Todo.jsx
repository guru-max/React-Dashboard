import React from "react";
import Reportcard from "../subcomp/Todocard";
import Subheader from "../subcomp/Subheader";
import { grey, indigo, red } from "@mui/material/colors";

const todoList = [
  {
    date: 20,
    month: "May",
    dcolor: "blue",
    title: "Revamp Instagram app",
    subTitle: "Today",
    bcolor: "white",
  },
  {
    date: 21,
    month: "May",
    dcolor: "black",
    title: "Prototyping",
    subTitle: "Upcoming",
    bcolor: grey.A200,
  },
  {
    date: 22,
    month: "May",
    dcolor: "black",
    title: "Collect references for new project",
    subTitle: "Upcoming",
    bcolor: grey.A200,
  },
];

const Todo = () => {
  return (
    <div>
      <Subheader title={"To-Do lists"} />
      {todoList.map((todo) => (
        <Reportcard
          date={todo.date}
          dcolor={todo.dcolor}
          month={todo.month}
          title={todo.title}
          subTitle={todo.subTitle}
          show={todo.show}
          bcolor={todo.bcolor}
        />
      ))}
    </div>
  );
};

export default Todo;
