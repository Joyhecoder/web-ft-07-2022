


//compare small num index
let arr =[34, 22, 10, 19, 17];
let newArr = [];
let smallNum;
for(index=0; index<arr.length;index++){
    // smallNum = arr[index]
    if(smallNum<arr[index+1]){
        smallNum;
    }else{
        smallNum = arr[index+1];
    }
console.log(smallNum)
  




}



//append the small onto a new array


//veronica's solution
function selectionSort(arr){

    for(let i = 0; i< arr.length; i++){
        let smallest = i; 

        for(let j = i + 1; j<arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j
            }
        }

        if(i !== smallest){

            [arr[i], arr[smallest]] = [arr[smallest], arr[i]]; 
        }
    }

    return arr;
}

let sortedArr = selectionSort([34, 22, 10, 19, 17])
console.log(sortedArr)

//bubble sort solution
let arr = [34, 22, 10, 19, 17]

for (let i = 0; i < arr.length; i ++){
    for (let x = 0; x < arr.length-1; x ++){
        if (arr[x+1] < arr[x]){
            [arr[x+1],arr[x]] = [arr[x], arr[x+1]];
        }
    }
    
}

console.log(arr)