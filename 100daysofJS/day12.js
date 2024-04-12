/*
Q. Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

Example: 
console.log(removeDuplicates([1,2,3,2,1,4])) //Output: [1,2,3,4]
console.log(removeDuplicates([5,6,7,7,8,8,9])) //Output: [5,6,7,8,9]
console.log(removeDuplicates([1,2,3,4])) //Output: [1,2,3,4]
console.log(removeDuplicates([])) //Output: []

The new Set()method in JavaScript creates a new Set object. A Set object is a collection of unique values. It can store any type of value, whether primitive values or object references.

Constraints:
1. The input array may contain both positive and negative integers.
2. The input array may be empty.
3. The elements at the input array are not guaranteed to be sorted.
4. The output array should retain the original order of elements from the input array.

*/
function removeDuplicates(arr){
    let newArray = [];
    for(let num of arr){
        if(!newArray.includes(num)){
            newArray.push(num);
        }
    }
    return newArray;
}
const result = removeDuplicates([1,2,3,2,1,4]);
console.log(result); //Output: [1,2,3,4]

function removeDuplicates(arr){
    let newArray = new Set(arr);
    return Array.from(newArray);
}
const result1 = removeDuplicates([1,2,3,2,1,4]);
console.log(result1);
