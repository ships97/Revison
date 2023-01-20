import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const LiveTodo = () => {
  let url = "http://localhost:8000/info";

  const [text, SetText] = useState("");
  const [data, setdata] = useState([]);

  const posting = () => {
    // fetch("http://localhost:8000/info", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ text }),
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    axios
      .post(url, { text })
      .then((a) => {
        console.log("tx", a);
        getdata();
      })
      .catch((err) => console.log(err));
  };

  const getdata = () => {
    // fetch("http://localhost:8000/info")
    //   .then((response) => response.json())
    //   .then((s) => setdata(s));
    axios
      .get(url)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getdata();
  }, []);


  const Del=(id)=>{
    axios
    .delete(`http://localhost:8000/info/${id}`)
    .then((res) =>{console.log(res); getdata()})
    .catch((err) => console.log(err));
  }
  return (
    <div>
      {/* <h1>{text}</h1> */}
      <input
        type="text"
        placeholder="enter the task"
        onChange={(e) => SetText(e.target.value)}
      />
      <button onClick={posting}>Click here</button>

      {data.map((e, index) => {
        return <div key={index}>{e.text}
          <button onClick={()=>Del(e.id)}>delete</button>
        </div>;
      })}
    </div>
  );
};
