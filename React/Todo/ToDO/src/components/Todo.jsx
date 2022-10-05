import React from "react";
import { useState } from "react";

export const Todo = () => {
  const [task, setTask] = useState("Enter the Task");

  const [data, setData] = useState([]);

  const inputhandel = (e) => {
    setTask(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    // console.log("hello");
    const newdata = task;
    setData([...data, newdata]);
    // console.log(data)
    setTask("");
  };

  return (
    <div>
      <div>
        Todo
        <hr />
        <hr />
      </div>
      <div>
        <form action="" onSubmit={add}>
          <input type="text" value={task} onChange={inputhandel} />
          <button type="submit">Add Task</button>
        </form>
      </div>

      <table>
        <tr>
          <th>Todo </th>
          <th>x</th>
        </tr>
       
      </table>
    </div>
  );
};
