// const isUnique = (arr) => {

//     let cache = {};
//     let result = true;
//     for (let i = 0; i < arr.length; i++) {

//         if(cache[arr[i]]){  //looking things up
//             return false
//         }else{
//             cache[arr[i]] = true //we're adding
//             //cache.key = value
//         }
      
//       }
    
//     return true;
//   };
//   console.log(isUnique([1,2,3]));
//   console.log(isUnique([1,1,3]));


  //----------------sort--------------//

//   const uniqSort = function(arr) {
//     const cache = {};
//     let results = []
//     for (let i = 0; i < arr.length; i++){
//         let currVal = arr[i]
//         if(!cache[currVal]){
//             results.push(currVal)
//             cache[currVal]= true
//         }
//     }
//     return results.sort((a, b) => a - b);
    
// };


// let result = uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]
// console.log(result)

 //?----------------cache times10--------------//

// const cache = {}
// const times10 = (n)=>n*10
// const memoTimes10 =(n) => {
//     if(n in cache){
//         console.log('fecthing from cache', n);
//         return cache[n] //constant
//     }else{
//         console.log('calculate result');
//         cache[n] =times10(n)
//     }
// }

// console.log(memoTimes10(9))

//fib()=> 0, 1, 1, 2, 3 Fibonacci Sequence
     //recurssion 
// const fib = (n) =>{
//     if(n<2) return n;
//     const arr = [0,1]
//     for(let i =2; i <= n; i++){
//         let a = arr[i-2]
//         let b = arr[i-1]
//         arr.push(a+b)
//     }
//     return arr

// }
// console.log(fib(49));

   //recurssion with memorization 

function fibb(n, prevValues =[]){
    if(prevValues[n] != null){
       
        return prevValues[n]
    }
    let result;
    if(n<2){
        return n;

    } else{
        result = fibb(n-1, prevValues) + fibb(n-2, prevValues)
    }
    prevValues[n] = result
    return result 
  

}
console.log(fibb(5));