import React from 'react'

const Dropdown = ({days, language}) => {
  return (
    <div>
        {language}

        <select>

            {days.map(day => <option value={day}>{day}</option>)}
          
        </select>
    </div>
  )
}

export default Dropdown