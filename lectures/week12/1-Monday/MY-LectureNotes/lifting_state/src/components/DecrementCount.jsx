import React from 'react'

const DecrementCount = ({decrementFunction}) => {
  return (
    <>
    <button onClick={decrementFunction}>Decrement</button>
    </>
  )
}

export default DecrementCount