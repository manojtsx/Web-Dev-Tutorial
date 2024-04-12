/*
Q.Write a function to calculate the sum of squares of all elements in an array.
For example, given the array [1,2,3] the function should return 14.
1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14
console.log(sumOfSquares([1,2,3])) Output: 14
*/
function sumOfSquares(arr){
    let total = 0;
    for(let num of arr){
        total += Math.pow(num, 2);
    }
    return total;
}
const result = sumOfSquares([1,2,3]);
console.log(result);