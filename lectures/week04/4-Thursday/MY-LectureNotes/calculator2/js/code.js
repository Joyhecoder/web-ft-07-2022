let button = document.querySelector('.buttons');
let input = document.querySelector('.input');


button.addEventListener('click',(e)=>{

    let number=e.target.innerText
    console.log(input)
    if(number == 0|| number == 1 || number ==2 || number==3 || number==4 || number ==5 || number==6 || number==7 || number==8 || number ==9 || number=='.'){
    input.innerText += number
    }

    if(number == 'C'){
        document.getElementById('input').innerHTML ='';
    }
    
    let operator=""
    let num1=""
    let num2=""

    if(number == "+"){
        operator="+"
        num1 = input.innerText
        document.getElementById('input').innerHTML ='';
        
    }else if(number == "-"){
        operator="-"
        num1 = input.innerText
        document.getElementById('input').innerHTML ='';
        
    }else if(number == "*"){
        operator="*"
        num1 = input.innerText
        document.getElementById('input').innerHTML ='';
        
    }else if(number == "/"){
        operator="/"
        num1 = input.innerText
        document.getElementById('input').innerHTML ='';
        
    }
    
    if(number == "="){
        num2 = input.innerText
        // document.getElementById('input').innerHTML ='';
        if(operator == "+"){
        let result = num1 + num2;
        console.log(result);
        }
    }


    }
)