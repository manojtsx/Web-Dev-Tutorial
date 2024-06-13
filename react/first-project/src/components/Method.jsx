import React, { useState } from "react";

const Method = () => {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(number + 1);
    console.log(number);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <h2>{number}</h2>
    </div>
  );
};

export default Method;
