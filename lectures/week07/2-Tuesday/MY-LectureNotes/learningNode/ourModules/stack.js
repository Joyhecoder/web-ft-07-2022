

class Stack {

    constructor(arr){
        this.arr = []

    }

    //peek, push, pop, length

    peek =() => {
        if(this.arr.length> 0){
            return this.arr[this.arr.length-1]
        }
        return null
    }

    push = () => {
        this.arr.push(val)
    }

    pop = () => {
        this.arr.pop()
    
    }

    length= () => {
        return this.arr.length
    }


}

module.exports = Stack