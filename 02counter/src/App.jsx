import { useState } from "react";
import "./App.css";

function App() {
  // let [counter, setCounter] = useState(0);
  let counter = 0;
  const increase = () => {
    counter = counter + 1;
    // setCounter(counter + 1);
    console.log("button clicked", counter);
  };
  const decrease = () => {
    counter = counter - 1;
    // setCounter(counter - 1);
    console.log("button clicked", counter);
  };
  return (
    <>
      <h1>React Tutorial {counter}</h1>
      <h2>Counter: {counter}</h2>
      <br />
      <button onClick={increase}>Increase Value {counter}</button>
      <button onClick={decrease}>Decrease Value {counter}</button>
    </>
  );
} 

export default App;
