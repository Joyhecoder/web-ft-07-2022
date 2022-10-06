
import React, {useState, useEffect} from 'react'

const App = () => {

  const [studentData, setStudentData] = useState([])

  console.log(studentData);

  useEffect(() => {
    
    const getData = async () => {
      
      let result = await fetch('/api')
      let data = await result.json()

      // console.log(data);

      setStudentData(data)
      
    }

    getData()

    

  }, [])

  return (
    <>
    
     <h1>Hello World</h1>

     <ul>
       {studentData.map(student =>{
         return <li key={student.id}>{student.name}</li>
       })}
     </ul>
    </>
  )
}

export default App