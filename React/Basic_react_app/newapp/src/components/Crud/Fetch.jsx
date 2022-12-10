import React from "react";

export const Fetch = () => {
  const url = "https://fakestoreapi.com/products";

  let obj = {
    name: "sachin",
    roll: "175",
  };

  const post = () => {
    fetch(url, {
      method: "POST",
      headers: {
        
        'Content-Type': 'application/json'
      },
      headers: "application/JSON",
      body: JSON.stringify(obj),
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      Fetch
      <button onClick={post}>Click me to Post Data</button>
    </div>
  );
};
