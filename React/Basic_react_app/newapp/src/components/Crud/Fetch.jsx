import React from "react";

export const Fetch = () => {
  const url = "http://localhost:8080/info";

  let obj = {
    name: "rahul",
    roll: "175",
  };

  const post = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const getdata = async () => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  };

  return (
    <div>
      Fetch
      <button onClick={post}>Click me to Post Data</button>
      <button onClick={getdata}> click me to get data</button>
    </div>
  );
};
