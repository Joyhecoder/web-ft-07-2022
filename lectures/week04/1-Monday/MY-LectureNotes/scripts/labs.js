// create a variable firstName
let firstName = "Joy";

// create variable lastName
let lastName = "He";

// print your first name concatenated with your last name

console.log(firstName + " " + lastName);

let greeting = `My name is ${firstName} ${lastName}`
console.log(greeting);

//the sum of a + b = 9
let a = 4;
let b = 5;
let sum = a + b;
let result = `The sum of ${a} and ${b} is ${sum}`;
console.log(result);

//print length of first name and lenth of lastname and then add the two together
let firstLength = firstName.length;
let lastLength = lastName.length;
console.log(firstLength);
console.log(lastLength);
sumOfName = firstLength + lastLength;
console.log(sumOfName);


let name1 = firstName + ' ' + lastName;
let result1 = name1.indexOf(firstName)
let result2 = name1.indexOf(lastName)
console.log(result1);
console.log(result2);


let num1 = 8;
let num2 = 8;
//write a program that compares the value
if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`)
} else if (num1 < num2){
    console.log(`${num1} is smaller than ${num2}`)
} else{
    console.log(`${num1} is euqal to ${num2}`)
}



//switch case for month
 let month= 15;
 switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('This month has 31 days');
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        console.log("This month has 30 days");
        break;

    case 2:
        console.log("This month has 28 days.");
        break;

    default:
        console.log("Unknown month!");
        break;

 }
//different solution
let month2 = 7 

let numDays = 31 

switch(month2){
    case 4: 
    case 6: 
    case 9: 
    case 11: 
        numDays = 30; 
        break; 
    case 2: 
        numDays = 28; 
        break; 
    default:
        break;
}

console.log(`this month has ${numDays} days`)



//for the numbers 1-20 print all the even numbers
let num=1;
while(num<21){
    if(num%2==0){
        console.log(num);
    }
    num ++;
}


for(num=1;num<= 20; num++){
    if(num%2==0){
        console.log(num)
    }
}


// FizzBuzz
// Use a for loop to print out all the numbers 1 to 30, but insert the word fizz for any number that is divisible by 3, insert the word buzz for any number that is divisible by 5 and insert the word fizz buzz for any numbers that are both divisible by 3 and 5, like 15.

for(num=1; num<=30; num++) {
    if(num%3 ==0 && num%5 != 0){
        console.log(`${num} + fizz`)
    }else if(num%5==0 && num%3!=0){
        console.log(`${num} + buzz`)
    }else if(num%15==0){
        console.log(`${num} + fizz + buzz`)
    }else{
        console.log(num)
    }
}



// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = 
// lottoNums.splice(2, 1);
// console.log(arrayOfSplicedValues);

// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = 
// lottoNums.splice(2, 3);
// console.log(arrayOfSplicedValues);

// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2,4));

let str1 = "javascript";
arr1 = str1.split('');
// console.log(arr1)
for(i=0; i < arr1.length; i++){
    if((i+1)%2==0){
        // console.log(arr1[i]= 'Z')
        arr1[i]= 'Z'
    }else{
        // console.log(arr1[i]);
        arr1[i];
    }
}

let str2 = arr1.join('');
console.log(str2);

//different way to do it
var str3 = "javascript".split("");


for (var i = 1; i < str3.length; i+=2) {
     str3[i] = "z";
}
console.log( str3.join("") );