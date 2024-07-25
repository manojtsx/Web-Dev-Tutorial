import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />

      <p>Currently the count is : {count}</p>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
    </>
  );
}

export default App;
