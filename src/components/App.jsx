import React, { useState } from "react";
import reactDom from "react-dom";

function App() {
  // var count = 0;
  const [count, setCount] = useState(0);
  function increased() {
    setCount(count + 1);
  }
  function decreased() {
    setCount(count - 1);
  }
  function double() {
    setCount(count * 2);
  }
  function inital() {
    setCount(count * 0);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <h2>Welcome To Number Game ! </h2>
      <button onClick={increased}>+</button>
      <button onClick={decreased}>-</button>
      <button onClick={double}>2x</button>
      <button onClick={inital}>Restart</button>
      {/* <button onClick={t}>exit</button> */}
    </div>
  );
}

export default App;
