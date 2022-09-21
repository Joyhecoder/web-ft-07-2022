
/**
 ** Given an array of integers, return indices of the two numbers such that they add up to a specific target You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
Example:
Given nums = [11, 15, 2, 7, 4]
                         |

{
    11: 11 
    15: 1 
    2: 2
}
target = 9
Because nums[0] + nums[1] = 2 + 7 = 9

<<<<<<< HEAD
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
=======
caching 
target = x + y

y = target -x 

9 -11  = -2

15 - 3 = 12

9 -2 = 7

9 - 7 = 2


O(n)
*/

/**
 * cache[-2]
 * {
 * }
 */

const two_sum = (target, arr) => {

    // [11, 15, 2, 7, 4]
    //             |
    //  0    1  2  3  4
    let cache = {}
    let result = [];

    for(let y = 0; y < arr.length; y++){
        // y+ x = targetSum 
        // y = targetSum -y


        let match = targetSum - arr[y] // 9 - 7 = 2 

        if(cache[match]) === match ) {
            result.push(array[y], match)  //[7, 2]

            return result
        }
        else{
            cache[arr[y]] = arr[y]  // {11: 11, 15: 15, 2:2, }
        }
}



const f = n =>      n <= 1    ? 1:       n * f(n - 1);



let g = f(4)

const f = (n) => { 
    
    if (n<=1){
        return 1 
    }

    return n * f(n - 1)

}

// 1  => 1
// 2 * f(1)  => 2 * 1 = 2
// 3 * f(2) => 3 * 2 = 6
// 4 * f(3) = > 4 * 6 = 24
// f(4) =24


console.log(g)
    
>>>>>>> 24175854bc5a7d128d8e4bfa59f350280a0f26a4
