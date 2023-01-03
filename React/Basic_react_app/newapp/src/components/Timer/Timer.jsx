import React, { useState } from "react";

export const Timer = () => {
    const[value,setValue]=useState([])
  return (
    <div>
      <h1> Timer  {value}</h1>

      <div>
        <button>Start</button>
        <button>Stop</button>
      </div>
    </div>
  );
};
