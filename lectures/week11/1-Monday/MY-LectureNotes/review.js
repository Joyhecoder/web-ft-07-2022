
let age = 21

// if (age >= 21) {
//     console.log('what beer would you like?');
// }else{
//     console.log('too young to drink');
// }

// let result = (age >= 21) ? 'what beer would you like?' : 'too young to drink';
// console.log(result);


//! spread operator
// let arrA = [1,2,3];
// let arrB = [...arrA]
// arrB.push(4)
// console.log(arrA);
// console.log(arrB);


//!for loop and map

let arr = [1,2,3,45,69,78]

let newArr = arr.map(val =>{
    return val
})
console.log(newArr);

// arr.forEach(val => {
//     console.log(val);
// })

for (x of arr){                       //for of is for array
                                      //for in is for object
    // console.log(x);
}

let obj = {
    fName: "joy",
    lName: "he",
    city: "houston"
}
for (key in obj) {
    // console.log(key);
    // console.log(obj[key]);
}


//?explicit return
let liTags = arr.map(el =>{
    return `<li>${el}</li>`
})

//?implicit reuturn
let liTags2 = arr.map(el => `<li>${el}</li>`)