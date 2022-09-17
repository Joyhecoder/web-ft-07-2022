
/**
 ** Given an array of integers, return indices of the two numbers such that they add up to a specific target You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
Example:
Given nums = [2, 7, 11, 15]
target = 9
Because nums[0] + nums[1] = 2 + 7 = 9

target = x + y
y = target -x

 */



const two_sum = (target, arr) => {
    let cache = {}

    let result = [];
    for(let y =0; y < arr.length; y++){

        //y+x = targetSum
        //y = targetSum -x

        let match = target - arr[y]
        if(cache[match] === match ){
            result.push(arr[y], match)
            return result.join(' ')
        }
        else{
            cache[arr[y]] = arr[y] //{}create a new key
        }
    }

}

let test = two_sum(5, [1,2,3])
console.log(test)