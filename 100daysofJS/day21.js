/*
Q. Write a function called calculateMean that takes an array of numbres as input and returns the mean (average) of those numbers.
todo In math, the mean is the average of a set of numbers, or the numeric value that represents the center of collection of numbres.

Constraints:
1. The input array may contain positive and negative integers.
2. The input array may be empty. If it is empty, the function should return 0.

console.log(calculateMean([1,2,3,4,5])) //Output: 3
console.log(calculateMean([10,20,30])) //Output: 20
console.log(calculateMean([-1,0,1])) //Output: 0
console.log(calculateMean([])) //Output: 0

*/
function calculateMean(arr){
    let total = 0;
    if(arr.length === 0){
        return 0;
    }
    for(let num of arr){
        total+=num;
    }
    return total/arr.length;
}
module.exports = calculateMean;