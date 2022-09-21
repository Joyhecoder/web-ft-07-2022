import React from 'react'

const ResetCount = ({resetFunction}) => {
  return (
    <>
    <button onClick={resetFunction}>Reset</button>
    </>
  )
}

export default ResetCount