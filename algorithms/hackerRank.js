// function gradingStudents(grades){
//     const studentsIndex = grades.length -1
//     let resultArr = []
//     // console.log(studentsIndex)
//     for(let i = 0; i <= studentsIndex; i++){
//         if(grades[i] < 38){
//             resultArr.push(grades[i])
//             console.log("<38", resultArr)
//         }
     
//         //43,44 => 45
//         //48,49 => 50
//        else if((grades[i]+1) % 5 === 0){
//             resultArr.push(grades[i]+1)
//             console.log("+1", resultArr)
//         }
//        else if((grades[i]+2)%5===0){
//             let newGrade = grades[i]+2
//             console.log("negrade", newGrade);
//             resultArr.push((grades[i]+2))
//             console.log("+2", resultArr)
//         }
       
//         else{
//             resultArr.push(grades[i])
//             console.log("final", resultArr)
//         }
            
//     } 
// }

// gradingStudents([73, 67, 38, 33])

function isValid(s) {
    // Write your code here
    //abcdefghhgfedecba
    //split s into an array
    const arr = s.split('')
    const obj = {}
   
    for(let i=0; i < arr.length; i++){
         //if the element is not in the obj, add it to the obj
        if(!obj[arr[i]]){
            obj[arr[i]] = 1
        }
         //if the element is in the obj, value + 1
        else{
            obj[arr[i]] +=1
        }
    }
//    console.log(obj);
    let valArr = []
    for(let val in obj){
        valArr.push(obj[val])
    }  


    let numberOfOneMore = 0
    for(let i = valArr.length -1; i>0; i--){
        if(valArr[0]==valArr[i]){
            
            console.log("inside equal", i);
            continue
            
        }
        else if(Math.abs(valArr[0]- valArr[i])==1){
            
            numberOfOneMore +=1
            console.log("abs", i, numberOfOneMore);
            continue
        }
        else return "NO"
    }
     //else if one value is one more than others, return yes
        //else return no
    if(numberOfOneMore < 2){
        return 'YES'
    }else{
        return "NO"
    }
   
    
 
}

// console.log(isValid('abcdefghhgfedecba'));


let exampleObj ={
    "a": 1

}
console.log(exampleObj['a']= exampleObj['b'] || 0);
// console.log(exampleObj['a']= exampleObj['a']);