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
// console.log(exampleObj['a']= exampleObj['b'] || 0);
// console.log(exampleObj['a']= exampleObj['a']);



// function timeInWords(h, m) {
//     // Write your code here
//    const nums =['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','quarter','sixteen','seventeen','eighteen','nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five','twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half'];
//    let answer = ''
//    if(m==0){
//     //    answer + nums[h]
//     //    console.log(answer)
//        console.log(nums[h] +" " + "o' clock");
//        console.log(nums[h].concat(" oo'clock"));
//    }
// }
// timeInWords(5,0)

// var data = {foo : 8, bar : 32, baz : 7}; 
// console.log(data.baz);

// var data = {1 : 'Joe', 2 : 'Bob', 3 : 'Jim'};
// for(let i in data){
//     console.log(data[i]);
// }

var data = [89, 5, 3, 54, 23];
// for(let num of data){
//     console.log(num)
// }
data.forEach(num =>{ console.log(num)})

var foo = [1, 3, 8]; 
var bar = [44, 99]; 
// foo.concat(bar)
// console.log(foo);

// const newArray = [...foo, ...bar]
// console.log(newArray)

// var data = [3, 8, 23, 55, 10];
// data.push(9)
// console.log(data);

