/*
Q. Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene"

console.log(checkTriangle(3,3,3)); //Output: equilateral
console.log(checkTriangle(3,4,3)); //Output: isosceles
console.log(checkTriangle(5,8,6)); //Output: scalene

Constraints:
1. If all three sides are of equal length, return "equilateral".
2. If only two sides are of equal length, return "isosceles";
3. If all three sides are of different lengths, return "scalene"

*/

function checkTriangleType(a,b,c,){
    if(a==b && b===c) return "equilateral";
    else if(a===b || a===c || b===c) return "isosceles";
    else return "scalene";
}

module.exports = checkTriangleType;