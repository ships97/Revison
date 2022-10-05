import React, { useState } from "react";

import style from "./Todo.module.css";

export const MainTodo = () => {
  const [task, setTask] = useState("");
  const [tododata, setTododata] = useState([]);

  const adddata = () => {
    const abc = task;
    setTododata([...tododata, abc]);
  };

  const delte = (a) => {
    var p = tododata.filter((e) => {
      return e != a;
    });
    setTododata(p);
  };

  
  return (
    <div>
      <h1>Todo</h1>
      <hr />
      <input
        type="text"
        placeholder="Add the Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={adddata}>add</button>

      <p>{task}</p>

      <table className={style.abc}>
        <tr>
          <th>Todo list </th>
          <th>edit Secction</th>
          <th>delete section</th>
        </tr>
        {tododata.map((e, index) => (
          <tr key={index}>
            <th>{e} </th>
            <th>
              <button>Edit</button>
            </th>
            <th>
              <button onClick={() => delte(e)}>Delete</button>
            </th>
          </tr>
        ))}
      </table>

      <div></div>
    </div>
  );
};
