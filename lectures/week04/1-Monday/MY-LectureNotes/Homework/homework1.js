
//Hello You!
// function hello(name){
  
//     console.log(`Hello, ${name}!`)
    
// }

// hello("Mustache")

//-------------------------------------------------------------//

//modified
// function hello(name){
//     if(name){
//         console.log(`Hello, ${name}!`)
//     }else{
//         console.log('Hello, world!')
//     }
// }

// hello("Joy")
// hello()

//-------------------------------------------------------------//

//Madlib
// function madlib(name, subject){
//     var str= `${name} 's favorite subject in school is ${subject}.`;
//     console.log(str);
// }

// madlib('Anushka', 'art')




//-------------------------------------------------------------//

//Tip Calculator
// function tipAmount(totalBill, serviceLevel){
//     if(serviceLevel=="good"){
//         tip = totalBill * 0.2
//         console.log(tip)
//     }else if(serviceLevel=="fair"){
//         tip = totalBill * 0.15
//         console.log(tip)
//     }else if(serviceLevel=="bad"){
//         tip = totalBill * 0.1
//         console.log(tip)
//     }
// }

// tipAmount(100,'good')
// tipAmount(100,'fair')
// tipAmount(40,'fair')
// tipAmount(40,'bad')


//-------------------------------------------------------------//


//Tip Calculator 2
// function tipAmount(totalBill, serviceLevel){
//     if(serviceLevel=="good"){
//         bill = totalBill * 1.2
//         console.log(bill)
//     }else if(serviceLevel=="fair"){
//         bill = totalBill * 1.15
//         console.log(bill)
//     }else if(serviceLevel=="bad"){
//         bill = totalBill * 1.1
//         console.log(bill)
//     }
// }

// tipAmount(100, 'good')
// tipAmount(40, 'fair')


//-------------------------------------------------------------//

//Tip Calculator 3

// function tipAmount(totalBill, serviceLevel, numberOfPeople){
//     if(serviceLevel=="good"){
//         bill = totalBill * 1.2
//         amountOfEach = bill / numberOfPeople
//         console.log(amountOfEach)
//     }else if(serviceLevel=="fair"){
//         bill = totalBill * 1.15
//         amountOfEach = bill / numberOfPeople
//         console.log(amountOfEach)
//     }else if(serviceLevel=="bad"){
//         bill = totalBill * 1.1
//         amountOfEach = bill / numberOfPeople
//         console.log(amountOfEach)
//     }
// }

// tipAmount(100, 'good', 5)
// tipAmount(40, 'fair', 2)




//-------------------------------------------------------------//

//Print Numbers

// function printNumbers(num1, num2){
//     for(let i=num1;i<=num2; i++){
//         console.log(i)
//     }
// }

// printNumbers(1,10)



//-------------------------------------------------------------//

//Leetspeak

// function leetSpeak(string){
//     arr=string.split('')
//     for(let i=0; i<arr.length; i++){
//         if (arr[i]=='a'){
//             arr[i]=4;
//         }else if(arr[i]=='e'){
//             arr[i]=3;
//         }else if (arr[i]=='g'){
//             arr[i]=6;
//         }else if (arr[i]=='i'){
//             arr[i]=1;
//         }else if (arr[i]=='o'){
//             arr[i]=0;
//         }else if (arr[i]=='s'){
//             arr[i]=5;
//         }else if(arr[i]=='t'){
//             arr[i]=7;
//         }
//     }
//     string=arr.join()
//     console.log(string)
// }

// leetSpeak("leet")




//-------------------------------------------------------------//

//long-long vowels

// function longVowel(string){
//     arr = string.split('');
//     for(let i=0; i < arr.length; i++){
//         if(arr[i]==arr[i+1]){
//             arr.splice(i,0, arr[i], arr[i], arr[i]);
//             break;

//         }
//     }
//     string1=arr.join('')
//     console.log(string1)
// }
// longVowel('cheese')