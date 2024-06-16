import React from "react";

const ArrayMap = () => {
  const arr = ["Mango", "Litchi", "Apple", "Banana", "Pineapple"];
  const arr1 = [23, 45, 67, 12, 34, 89, 9, 2, 5, 56];
  const filteredArray = arr.filter((item) => {
    let len = item.length;
    return item.slice(Math.floor(len / 2), Math.floor(len / 2) + 1) === "a";
  });
  return (
    <ul>
      {filteredArray.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default ArrayMap;
