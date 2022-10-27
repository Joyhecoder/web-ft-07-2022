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

function reverseString(str){
    let answerArr = []    
    let newArr = str.split(" ")
   
    for(let i=0; i < newArr.length; i++){
        let reverseWord = newArr[i].split('').reverse().join("")
        answerArr.push(reverseWord)
    }
    let result = answerArr.join(" ")
    return result
}

console.log(reverseString("Hello world Joy"))