/*
Q. Write a function arraysAreEqual that take two arrays arr1 and arr2 as input and returns true if the arrays are equal. (i.e. contain the same elements in the same order), and false otherwise.

// Example usage:
console.log(arraysAreEqual([1,2,3],[1,2,3]))  Output : true
console.log(arraysAreEqual([1,2,3],[1,2,4]))  Output : false
console.log(arraysAreEqual([],[]))  Output : true

Note: 
1. The function should return false if the arrays have different lengths.
2. The function should compare each element of arr1 with the corresponding elememnt in arr2.
3. The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.

*/

function arraysAreEqual(arr1, arr2){
    for(let i = 0 ; i <= arr1.length ; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}   
module.exports = arraysAreEqual;