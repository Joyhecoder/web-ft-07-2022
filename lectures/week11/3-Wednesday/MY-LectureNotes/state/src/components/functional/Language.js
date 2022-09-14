import React, {useState} from 'react'

function Language() {
    const [language, setLanguage] = useState("🇨🇳")
  return (
    <>
        <select>
            <option value="Chinese" selected>🇨🇳</option>
            <option value="German" onClick={()=> setLanguage('🇩🇪')}>🇩🇪</option>
            <option value="English">🇬🇧</option>
            <option value="Korean">🇰🇷</option>
            
        
        </select>
        <br />

        
       

        
    </>
  )
}

export default Language