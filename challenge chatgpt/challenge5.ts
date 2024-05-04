interface Shape{
    calculateArea() : number
}

class Rectangle implements Shape{
    width : number;
    height : number;
    constructor(w:number,h:number
    ){
        this.width = w;
        this.height = h;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape{
    radius : number;
    constructor(r:number){
        this.radius = r;
    }
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius,2);
    }
}

let rectangle = new Rectangle(5, 10);
console.log("Area of rectangle:", rectangle.calculateArea()); // Output should be 50

let circle = new Circle(5);
console.log("Area of circle:", circle.calculateArea()); // Output should be approximately 78.54