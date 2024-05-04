class Car{
    make:string;
    model:string;
    year:number;
    constructor(make:string, model:string, year:number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    accelerate():void{
        console.log("The car is accelerating");
    }
    stop():void{
        console.log("The car has stopped.")
    }
}
let myCar = new Car("Toyota", "Camry", 2022);
myCar.accelerate();
myCar.stop();