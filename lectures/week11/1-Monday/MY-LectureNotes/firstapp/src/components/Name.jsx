import React from 'react'
import Days from './Days'
import Dropdown from './Dropdown'

const Name = ({name, days, language}) => {

 

  return (
    <div> 
      {name}
      <Days days={days}/>
      <Dropdown days={days} language={language} />

    </div>
   
    
  )
}

export default Name
