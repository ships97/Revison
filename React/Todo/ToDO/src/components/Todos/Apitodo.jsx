import React, { useState } from "react";
import axios from "axios";

import style from "./Todo.module.css";
import { useEffect } from "react";

export const Apitodo = () => {
  const [task, setTask] = useState("");
  const [tododata, setTododata] = useState([]);
  const [editbox, setEditbox] = useState(false);
  const [defaut, setDefaut] = useState("");
  const adddata = () => {
    const abc = task;
    let obj = {
      taskname: abc,
    };

    // fetch("http://localhost:8080/todos", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(obj),
    // }).then((res) => console.log(res));

    axios.post("http://localhost:8080/todos", obj).then((res) => getdata());
  };

  const getdata = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((data) => setTododata(data.data));
  };

  useEffect(() => {
    getdata();
    
  }, []);

  const delte = (a) => {
    // var p = tododata.filter((e) => {
    //   return e != a;
    // });
    // setTododata(p);

    fetch(`http://localhost:8080/todos/${a}`, {
      method: "DELETE",
    });
    getdata();
  };

  const Editcode = (id) => {

    if(editbox)
    {
        setEditbox(false)
    }else{
        setEditbox(true)
    }

  
    axios
      .get(`http://localhost:8080/todos/${id}`)
      .then((data) => setDefaut(data.data));
      console.log(defaut)
  };
  console.log(defaut)
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
            <th>{e.taskname} </th>
            <th>
              <button onClick={() => Editcode(e.id)}>Edit</button>
            </th>
            <th>
              <button onClick={() => delte(e.id)}>Delete</button>
            </th>
          </tr>
        ))}
      </table>

      <div>
        {editbox ? (
          <div>
            edit box
            {" "}
            <input type="text" placeholder="Add the Task" id="hello"  value={defaut.taskname}/>
            <button >update</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
