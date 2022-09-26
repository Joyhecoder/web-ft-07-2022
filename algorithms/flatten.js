/**
 ** Without using .flat(), create a function to flatten an array 

const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10]
flatten(exampleArray) //[1,2,3,4,5,6,7,8,9,10]

 */

const flatten =(arr)=>{
    let newArr=[]
    for(let i=0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]))
        }else{
            newArr.push(arr[i])
        }
    }

    return newArr
}