/**
 * Product Sum 
Write a function that takes in a "special" array and returns its product sum.

A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array its elements ,where "special" arrays inside it re summed themselves and then multiplied by their level of depth.

The depth of a "special" array is how far nested it is.  For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2. The depth of the innermost array in [[[]]] is 3.

Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2 * (y + z);  the product sum of [x, [y, [z]]] is x + 2 * (y + 3z)

Sample input

array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
                           |


Sample Output

12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

 */

const productSum = (arr, depth=1) => {
<<<<<<< HEAD
    return arr.reduce((acc, val)=>{
        if(Array.isArray(val)){
            return acc + (depth + 1) * (productSum(val,depth+2))
        }else{
            return acc + val
        }
    }, 0)
}
=======
    
    return arr.reducer( (acc, val)=>{
        if(Array.isArray(val)){
            return acc + (depth + 1) * (productSum(val, depth + 1))
        }
        else{
            return acc + val
        }
    }, 0)
}

//[-13, 8]
//-5

// [6, [-13, 8], 4]
//  6 +  (2 + 1) * -5) ==  6 -15 = -9

// 5 + 2 + (1 + 1) * (6)  + 3  + (1 +1)* -9)
// 

>>>>>>> 4dee55e873cc72ef66f4d4a5d8ff2fe4292a4e9c
