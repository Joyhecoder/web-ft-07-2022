
//a few array of bracket for comparing
let p=["(", ")"]
let c=["{", "}"]
let b=["[", "]"]


function balanceBracket(arr){
    //if the length is even continue, else return false
    if(arr.length%2==0){

        //for loop: take the first bracket and the last to store in a new array to compare with comparing one
        for(let i=0; i < arr.length; i ++){
            new_arr=[];
            new_arr.push(arr[i])
            new_arr.push(arr[(-(i+1))]);
            console.log(new_arr)
            if(new_arr!=p && new_arr != c && new_arr != b){
                // return false;
                
                console.log(`${arr} is not balanced`);
                // return false;
            }
        }
      
       console.log(`${arr} is a balanced array`)

    }else{
        console.log(`${arr} is not balanced`);
    }
}

balanceBracket(["{", "{","(",")", "}", "}"])



//--------------kipp's solution
let codeString = '{{[[}]}]'

function evenBrackets(braces){
    let opening = [ '(', '[', '{']
    let closing = [ ')', ']', '}']
    let arr = []

    for (let i = 0; i < braces.length; i++) {
        if (opening.includes(braces[i])) {
            arr.push(braces[i])
            console.log(arr + ' opening')
        } else
        if (closing.includes(braces[i])){
            let idx = closing.indexOf[braces[i]]
            arr.splice(opening[idx], 1)
            console.log(arr + ' closing')
        } 
        else {
            return false
        }
    } 
    console.log(arr)
    return arr.length === 0;
}

console.log(evenBrackets(codeString))







//veronica's solution

function balanced_brackets(codeString){

    if(!codeString.length){
        return true
    }

    let stack = []

    let opening = {
        "(" : true, 
        "{" : true, 
        "[" : true
    }

    let closing = {
        ")": "(", 
        "}": "{", 
        "]" : "["
    }

    for(let i = 0; i< codeString.length; i++){
//     {()}
//       |
        let char = codeString[i]  // { 

        if(opening[char]){  //opening["{"]
            stack.push(char)  //[{, ]
        }

        if(char in closing){ // closign["("]
            let lastChar = stack.pop()  //"("

            if(lastChar !== closing[char]){
                return false
            }
        }

    }

    if(stack.length === 0){
        return true
    }
    else{
        return false
    }
}
