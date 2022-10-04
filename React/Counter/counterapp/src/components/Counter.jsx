import React, { useState } from "react";

export const Counter = () => {
  const [first, setfirst] = useState(0);
  return (
    <div>
      Counter {first}
      <div>
        <button onClick={() => setfirst(first + 1)}>+</button>

        <button onClick={() => setfirst(first - 1)}>-</button>
      </div>
    </div>
  );
};
