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

// var data = [89, 5, 3, 54, 23];
// for(let num of data){
//     console.log(num)
// }
// data.forEach(num =>{ console.log(num)})

// var foo = [1, 3, 8]; 
// var bar = [44, 99]; 
// foo.concat(bar)
// console.log(foo);

// const newArray = [...foo, ...bar]
// console.log(newArray)

// var data = [3, 8, 23, 55, 10];
// data.push(9)
// console.log(data);

// function pickingNumbers(a) {
//     // Write your code here
//     //4 6 5 3 3 1
//     //1, 3, 3, 4, 5, 6 
//     const sortedA = a.sort((a,b) => a-b)
//     console.log(sortedA)
//     let count = 1
//     let countArr = []
//     let i = 0

//     if(sortedA[0] === sortedA[sortedA.length-1]){
//         return sortedA.length
//     }
    
//     for(i; i< sortedA.length; i++){
//         for(let j = i+1; j < sortedA.length; j++){
//             if(Math.abs(sortedA[i]-sortedA[j] )<=1){
//                 console.log('abs', Math.abs(sortedA[i]-sortedA[j]))
//                 count ++
//                 console.log('if','i',i, count)
//             }else{
//                 countArr.push(count)
//                 count = 1
//                 // console.log('else', count)
//             }
            
//         }
       
//     }
//     if(countArr == null){
//         console.log(count)
//     }
//     // console.log(countArr)
//     let answer = Math.max(...countArr)
//     // console.log(answer)
//     return answer
// }

// pickingNumbers([1,1,1,1,1,1,1,1,1,1])


// function highestValuePalindrome(s, n, k) {
//     // Write your code here  
//     let sArr = Array.from(String(s), Number)
//     console.log(s);
//     console.log(sArr);
//     //when the n is even
//     if(n%2==0){
//         // console.log("it is even");
//         let midIndex = n / 2
//         let i = 1
//         let count = 0
      
//         // console.log(sArr);
//         for(midIndex; midIndex < n; midIndex++){
//             // console.log("midIndex", midIndex);
//             // console.log(188, sArr[midIndex-1]);
//             if(sArr[midIndex-1] != sArr[midIndex -1 - i]){
//                 count++
//             }
//             i += 2
//         }
//         //if k is not met
//         if(count > k){
//             return -1
//         }
//         //check if k is met 
        
//         else{
//             // console.log('else condition');
            
         

//             //need to reassign the value of midIndex and i in order to run the loop
//             midIndex = n / 2   //3
//             console.log(209, midIndex);
//             i = 1
//             let j = 0
//             let m = n-1
//             //s=092282 k=3 n=6
//             for(j; j < midIndex; j++){
//                 console.log('loop');
//                 console.log('k', k);
//                 console.log(sArr);
//                 if(sArr[j] != sArr[m]){
//                     console.log("not the same");
//                     if(k>1 && sArr[j] != 9 && sArr[m] != 9){
//                         sArr[j]= 9
//                         sArr[m]= 9
//                         k -= 2
//                     }else if(k>1 && sArr[j] == 9){
//                         sArr[m] = 9
//                         k -= 1
//                     }else if(k>1 && sArr[m] ==9){
//                         sArr[j]=9
//                         k -= 1
//                     }
                    
//                     else{
//                     if(sArr[j]> sArr[m]){
//                         sArr[m] = sArr[j]
//                         console.log(210, sArr)
//                     }else{
//                         sArr[j] = sArr[m]
//                         console.log(213, sArr);
//                     }
//                     k--
//                 }
              
//                 }
//             m--
            
//         }
             
            
//         }
//     }

//     //when n is odd
//     else{

//     }
//     let answer = sArr.join('')
//     console.log('answer', answer);
//     return answer

// }

// highestValuePalindrome('092282', 6, 3)


// function timeConversion(s) {
//     // Write your code here
//     const letter = s.slice(8,9)
//     // console.log(letter)
//     if(letter == "A"){
//         const hour = s.slice(0,2)
//         if(hour == '12'){
//             const sArr = s.split("")

//             sArr.splice(0,2,'0','0')
            
//             sArr.splice(8,2)
//             const result = sArr.join("")
//             console.log(result);
//             return result
//         }else{
//             const sArr = s.split("")
            
//             sArr.splice(8,2)
//             const result = sArr.join("")
//             return result
//         }
//     }else{
//         const hour = s.slice(0,2)
//         // console.log(hour)
//         if(hour=='12'){
            
//             const sArr = s.split("")
            
//             sArr.splice(8,2)
//             const result = sArr.join("")
//             return result
            
//         }else{
//             let hourInt = parseInt(hour)
//             hourInt += 12
//             // console.log(hourInt)
//             const sArr = s.split("")
//             // console.log(sArr)
//             sArr.splice(0,2,hourInt)
//             sArr.splice(7,2)
            
//             const result = sArr.join("")
//             return result
//         }
//     }

// }

// timeConversion('12:40:22AM')


function sockMerchant(n, ar) {
    // Write your code here
    let colorDic = {}
    let pair = 0
    for(let i=0; i < n; i++){
        if(!colorDic[ar[i]]){
            colorDic[ar[i]]= 1
        }else{
            colorDic[ar[i]] += 1
        }
    }
    console.log(colorDic)
    for(let el in colorDic){
        if(colorDic[el] <2){
            pair
        }else{
            if(colorDic[el]%2 == 0){
                pair += (colorDic[el]/2)
            }else{
                pair += ((colorDic[el]-1)/2)
            }
            
        }
    }
    console.log(pair)
    // return pair

}

sockMerchant(20, [4,5,5,5,6,6,4,1,4,4,3,6,6,3,6,1,4,5,5,5])