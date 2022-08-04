//Fibonacci Sequence

// const fib = (index) => {
//     let arr = [0,1];
//     for(i=2; i<= index; i++){
//         let sum = arr[i-1] + arr[i-2]
//         arr.push(sum)
        

//     }

//     console.log(arr);
// }

// fib(10)



//Using reduce, determine the number of desks that are sitting and the number that are standing.
// let desks = [
//     { type: 'sitting' },
//     { type: 'standing' },
//     { type: 'sitting' },
//     { type: 'sitting' },
//     { type: 'standing' }
// ];

// let deskType = desks.reduce((pre, curr)=>{
//     curr.type == 'sitting' ? pre.sitting+= 1 : pre.standing+= 1
//     return pre

// }, {sitting: 0, standing:0})

// console.log(deskType)


//sum the multiples
const sumOfMultiples = (num) => {
    let arr = [];
    for(i=0; i <=num; i++){
        i%7==0? arr.push(i):
        i%11==0? arr.push(i):
        arr
    }
   
    let sum=0;
    for(j=0; j < arr.length; j++){
        
        sum+=arr[j];
    }
    console.log(sum);
    
}
sumOfMultiples(1000)


//bubble sort
numbers = [2,1,45,67,89,4,5,7,9]
const sort = (arr) => {
    let i;
    let j;
    for(i=0; i < arr.length; i++){
        for(j=0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1], arr[j]]
            }
        }
        
    }
    console.log(arr);

}
sort(numbers)




