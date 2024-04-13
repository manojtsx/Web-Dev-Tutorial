/*
Q. Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.
Example:
console.log(findMax([1,5,3,9,2])); Output: 9
console.log(findMax([-10,-5,-3,-9,-2])); Output: -2
console.log(findMax([5])); Output: 5
*/
function findMax(arr){
    let max = Number.NEGATIVE_INFINITY;
    for(let number of arr){
        if(Number(number) > max){
            max = Number(number);
        }
    }
    return max;
}

module.exports = findMax;