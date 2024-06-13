import React from "react";

const ArrayMap = () => {
  const arr = ["Mango", "Litchi", "Apple", "Banana", "Pineapple"];
  return (
    <ul>
      {arr.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default ArrayMap;
