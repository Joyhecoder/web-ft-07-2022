let arr = [45, 6, 7, 23, 33]

Array.prototype.myMap = function(callBackFunction){
    let arr = []
    for(let i =0; i <this.length; i++){
        arr.push(callBackFunction(this[i],i,this))
    }
    return arr
}

let newArr = arr.myMap(num => num+5)
console.log(newArr);


//-----filter
Array.prototype.myFilter = function(callBackFunction){
    let arr = []
    for(let i=0; i< this.length; i++){
        let result=callBackFunction(this[i])
        if(result == true){
            arr.push(this[i])
        }
    }
    return arr
}
let newArr1 = [1,2,3,4,5] 
let result = newArr1.myFilter(num =>{
    return num==5
})
console.log(result)

//----some

Array.prototype.mySome = function(callBackFunction){
    for(let i=0; i<this.length; i++){
        let result=callBackFunction(this[i])
        if(result==true){
            return true
        }
    }
}

let newArr2 = [1,2,3]
let result1 = newArr2.mySome(num =>{
    return num==2

}) 
console.log (result1)

