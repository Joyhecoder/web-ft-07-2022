function gradingStudents(grades){
    const studentsIndex = grades.length -1
    let resultArr = []
    // console.log(studentsIndex)
    for(let i = 0; i <= studentsIndex; i++){
        if(grades[i] < 38){
            resultArr.push(grades[i])
            console.log("<38", resultArr)
        }
     
        //43,44 => 45
        //48,49 => 50
       else if((grades[i]+1) % 5 === 0){
            resultArr.push(grades[i]+1)
            console.log("+1", resultArr)
        }
       else if((grades[i]+2)%5===0){
            let newGrade = grades[i]+2
            console.log("negrade", newGrade);
            resultArr.push((grades[i]+2))
            console.log("+2", resultArr)
        }
       
        else{
            resultArr.push(grades[i])
            console.log("final", resultArr)
        }
            
    } 
}

gradingStudents([73, 67, 38, 33])