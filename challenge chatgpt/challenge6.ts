class Animal{
    name:string;
    age : number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    makeSound():void{
        console.log("Animal Sound");
    }
}

class Dog extends Animal{
    bark():void{
        console.log("Woof!");
    }
}

let myDog = new Dog("Buddy", 3);
console.log("Name:", myDog.name); // Output should be "Buddy"
console.log("Age:", myDog.age); // Output should be 3
myDog.makeSound();
myDog.bark();