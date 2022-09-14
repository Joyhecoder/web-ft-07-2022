import React, {useState} from 'react'

function Status() {
    const [status, setStatus] = useState('')
  return (
    <>
        <h2>{status}</h2>
        <button onClick={()=> setStatus(('Active'))}>Active</button>
        <button onClick={()=> setStatus(('Away'))}>Away</button>
        <button onClick={()=> setStatus(('Offline'))}>Offline</button>
    </>
  )
}

export default Status