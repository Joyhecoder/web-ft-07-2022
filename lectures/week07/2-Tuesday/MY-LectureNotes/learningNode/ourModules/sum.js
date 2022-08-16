
// reduce
const sum = (arr) =>{
    
    let sumArr = arr.reduce((prev, curr)=>{
        return prev + curr

    }, 0)
    return sumArr
}


//for loop
const sumAlt = (arr) => {
    let sum =0;
    for(let i =0; i< arr.length; i++){
        sum += arr[i]

    }
    return sum
    
}

//for of is for array    for in is for obj
const sumAlt2 = (arr) => {
    let sum =0
    for(val in arr){
        sum += val
    }
    return sum
    
}


//create a function for multiply
const multiply = (arr) => {
    let product = 1;
    for(let i =0; i < arr.length; i++){
        product *= arr[i]
    }
    return product
    
}

let math = {
    sum: sum,
    multiply: multiply
}
module.exports = math;
