/*
Calculate the Average

Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

Your function should:

1. Accept an array of numbers as input.
2. Calculate the sum of all the numbers in the array.
3. Divide the sum by the total number of elements in the array to find the array.
4. Return the calculated average.

Example: 
 console.log(calculateAverage([5,10,2,8])) Output: 6.25

 Note: Ensure the function handles arrays of any length. The average should be returned as a floating-point number.
*/
function calculateAverage(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
        console.log(sum);
    }
    let average = sum / arr.length;
    return average;
}
const result = calculateAverage([5,10,2,8]);
console.log(result); //Output : 6.25
