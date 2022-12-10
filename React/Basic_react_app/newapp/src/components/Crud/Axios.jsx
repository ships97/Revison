import React from "react";
import axios from "axios";
import { useEffect } from "react";

export const Axios = () => {
  let url = "http://localhost:8080/info";
  const Post = () => {
    axios.post(url, {
      name: "ssss",
    }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  useEffect(()=>{

    axios.get(url).then((data)=>console.log(data.data))
  })
  return (
    <div>
      <h1>Axios</h1>

      <button onClick={Post}>Axios Post</button>
      <button> Axios Get </button>
      <button>Axios update</button>
    </div>
  );
};
