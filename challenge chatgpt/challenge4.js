var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.accelerate = function () {
        console.log("The car is accelerating");
    };
    Car.prototype.stop = function () {
        console.log("The car has stopped.");
    };
    return Car;
}());
var myCar = new Car("Toyota", "Camry", 2022);
myCar.accelerate();
myCar.stop();
