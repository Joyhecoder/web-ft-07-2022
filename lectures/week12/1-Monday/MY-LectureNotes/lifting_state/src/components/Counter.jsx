import React, {useState} from 'react'
import DecrementCount from './DecrementCount'
import DisplayCount from './DisplayCount'
import IncrementCount from './IncrementCount'
import ResetCount from './ResetCount'

const Counter = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = () => { 
    setCount(count+1)
   }

   const handleDecrement = () => {
    setCount(count-1)
   }

   const handleReset = () => { 
    setCount(0)
    }

  return (
    <>
    <h1> Counter</h1>
    <DisplayCount countProp={count} />
    <IncrementCount incrementFunctionFromParent={handleIncrement} />
    <DecrementCount decrementFunction={handleDecrement} />
    <ResetCount resetFunction={handleReset} />
    <br /><br />

{/* a different way to do it */}

    <IncrementCount incrementFunctionFromParent={()=>setCount(count +1)} />
    <DecrementCount decrementFunction={()=>setCount(count-1)} />
    <ResetCount resetFunction={()=>setCount(0)} />
   
    </>
  )
}

export default Counter