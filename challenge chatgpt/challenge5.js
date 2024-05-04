var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.width = w;
        this.height = h;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(r) {
        this.radius = r;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var rectangle = new Rectangle(5, 10);
console.log("Area of rectangle:", rectangle.calculateArea()); // Output should be 50
var circle = new Circle(5);
console.log("Area of circle:", circle.calculateArea()); // Output should be approximately 78.54
