import React, { useState } from 'react'

const Counter = () => {
    // let counter = 0;
    const [counter ,setCounter] = useState(10);
    
    const [alpha, setalpha] = useState(10)

    const [char ,setChar] = useState("ahed");


    const increaes = () => {
      setCounter(prev => prev + 1)
      setalpha(40000)
      setChar("maol")
    }
     const decreaes = () =>{
       setCounter(prev => prev - 1)

    }
  return (
    <div>
        <button onClick={increaes}>increaes by 1</button>
      <h1>{counter}</h1>
      <h1>{alpha}</h1>
      <h1>{char}</h1>
        <button onClick={decreaes}>Decreaes by 1</button>
    </div>
  )
}

export default Counter
