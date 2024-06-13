import React, { useState } from 'react'

const AddSubtract = () => {
    const [number, setNumber] = useState(0);
    const increNum = () =>{
        if(number >= 10){
            return window.alert('Value cannot be greater than 10')
        }
        setNumber(number + 1);
    }
    const decreNum = ()=>{
        if(number <= 0){
            return window.alert("value cannot be less than 0")
        }
        setNumber(number - 1);
    }
  return (
    <>
        <h2>{number}</h2>
        <div>
            <button onClick={increNum}>+</button>
            <button onClick={decreNum}>-</button>
        </div>
    </>
  )
}

export default AddSubtract