// async function apiCall(){
//     return new Promise(resolve => {
//         setTimeout (()=> {resolve('b')}, 50)
//     })
// }

// async function logger(){
//     setTimeout(()=> console.log('a'), 10);
//     console.log(await apiCall());
//     console.log('c');
// }
// logger()

// function reverseString(str){
//     let answerArr = []    
//     let newArr = str.split(" ")
   
//     for(let i=0; i < newArr.length; i++){
//         let reverseWord = newArr[i].split('').reverse().join("")
//         answerArr.push(reverseWord)
//     }
//     let result = answerArr.join(" ")
//     return result
// }

// console.log(reverseString("Hello world Joy"))

function compareTriplets(a, b) {
    let resultArr = []
    let aliceSum = 0
    let bobSum = 0
//for loop to compare each element in each array
    for(let i =0; i<= a.length -1; i++){
        //if a > b, alice +=1
        if(a[i] > b[i]){
            aliceSum += 1
        }
        //else bob +=1
        else if(b[i] > a[i]){
            bobSum += 1
        }
    }
   

//store the point into an array to return
    resultArr.push(aliceSum)
    resultArr.push(bobSum)
// return aliceSum, bobSum
return resultArr
}

console.log(compareTriplets([12, 3, 2], [1, 1 , 1]))