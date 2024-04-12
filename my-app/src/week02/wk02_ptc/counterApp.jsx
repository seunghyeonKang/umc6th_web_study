import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log("increase가 클릭됨");
  };

  const decrement = () => {
    setCount(count - 1);
    console.log("decrease가 클릭됨");
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}

export default CounterApp;
