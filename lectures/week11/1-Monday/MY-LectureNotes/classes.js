class Car {
    constructor(name){
        this.name = name;
    }

    printName = ()=>{
        console.log(this.name);
    }
}


class Hybrid extends Car {
    constructor(gasMilage, name){
        super(name)  //calling parent class constructor and passing name value
        this.gasMilage = gasMilage
    }

    printCarDetails(){
        console.log(this.gasMilage);
    }
}



let toyota = new Car('toyota')
console.log(toyota);