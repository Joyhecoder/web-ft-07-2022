let button = document.querySelector('.buttons');
let input = document.querySelector('.input');

let plus = document.querySelector('#plus');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let zero = document.querySelector('#zero');
let decimal = document.querySelector('#decimal');
let clear = document.querySelector('#clear');
let equal= document.querySelector('.equal')


seven.addEventListener('click', (e)=>{
    let number=e.target.innerText
    input.append(number)
})
eight.addEventListener('click', (e)=>{
    let number=e.target.innerText
    input.append(number)
})
nine.addEventListener('click', (e)=>{
    let number=e.target.innerText
    input.append(number)
})
four.addEventListener('click', (e)=>{
    let number=e.target.innerText
    input.append(number)
})
five.addEventListener('click', (e)=>{
    let number=e.target.innerText
    input.append(number)
})
six.addEventListener('click', (e)=>{
    let number=e.target.innerText
    input.append(number)
})
one.addEventListener('click', (e)=>{
    let number=e.target.innerText
    input.append(number)
})
two.addEventListener('click', (e)=>{
    let number=e.target.innerText
    input.append(number)
})
three.addEventListener('click', (e)=>{
    let number=e.target.innerText
    input.append(number)
})
zero.addEventListener('click', (e)=>{
    let number=e.target.innerText
    input.append(number)
})
decimal.addEventListener('click', (e)=>{
    let number=e.target.innerText
    input.append(number)
})
clear.addEventListener('click', (e)=>{
    document.getElementById('input').innerHTML ='';
})


let num1 = '';
let num2 = '';
let operation = '';

plus.addEventListener('click', (e)=>{
    num1 = input.innerText
    console.log(num1)
    document.getElementById('input').innerHTML ='';
    operation = '+'
    
})
subtract.addEventListener('click', (e)=>{
    num1 = input.innerText
    console.log(num1)
    document.getElementById('input').innerHTML ='';
    operation = '-'
    
})
multiply.addEventListener('click', (e)=>{
    num1 = input.innerText
    console.log(num1)
    document.getElementById('input').innerHTML ='';
    operation = '*'
    
})
divide.addEventListener('click', (e)=>{
    num1 = input.innerText
    console.log(num1)
    document.getElementById('input').innerHTML ='';
    operation = '/'
    
})


equal.addEventListener('click', (e)=>{
    num2 = input.innerText
    document.getElementById('input').innerHTML ='';
    if(operation==='+'){
        let result = Number(num1) + Number(num2);
        console.log(result)
        input.append(result);

    }else if(operation==="-"){
        let result = Number(num1) - Number(num2);
        console.log(result)
        input.append(result);
    }else if(operation==="*"){
        let result = Number(num1) * Number(num2);
        console.log(result)
        input.append(result);
    }else if(operation==="/"){
        let result = Number(num1) / Number(num2);
        console.log(result)
        input.append(result);
    }

})


