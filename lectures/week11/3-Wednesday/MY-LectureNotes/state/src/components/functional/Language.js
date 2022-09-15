import React, {useState} from 'react'

function Language() {
    const [language, setLanguage] = useState("🇨🇳")
    const obj = [
      {
      Flag: "🇨🇳",
      Lang: "Chinese"
    },
    {
      Flag: "🇩🇪",
      Lang: "German"
    },
    {
      Flag: "🇬🇧",
      Lang: "English"
    },
    {
      Flag: "🇰🇷",
      Lang: "Korean"
    }
  ]
  return (
    <>
        <select>

          {obj.map(choice => <option value={choice.Lang} onClick={()=> setLanguage(choice.Flag)}>{choice.Flag}</option>)}
            {/* <option value="Chinese" selected>🇨🇳</option>
            <option value="German" onClick={()=> setLanguage('🇩🇪')}>🇩🇪</option>
            <option value="English">🇬🇧</option>
            <option value="Korean">🇰🇷</option> */}
            
        
        </select>
        <br />

        
       

        
    </>
  )
}

export default Language