import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(5)  //count = 0

    //setCount(count+1)
  return (
    <>

        Counter

        <h1>{count}</h1>

        <button onClick={()=> setCount(count + 1)}>Increment</button>
        <button onClick={()=> setCount(count - 1)}>Decrement</button>
        <button onClick={()=> setCount(0)}>Reset</button>

    </>
  )
}

export default Counter


// const name = () => setCount(count + 1)
