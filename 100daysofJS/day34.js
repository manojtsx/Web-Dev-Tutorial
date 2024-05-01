/*
 Challenge : Remove Duplicates from an Array
 
 Write a function removeDuplicates that takes an array of elements as input and returns a new array
 with duplicate elements removed.

 Your taks is to implement the removeDuplicates function using JavaScript and ensure that he returned array contains only unique elements from the input array. The order of elements in the output array should be the same as the original array, with the first occurence of each unique element preserved.
 
 Constraints:
 1. The input array may contain elements of any data type.
 2. The function should retun a new array with duplicate elements removed, while preserving the order of elements from the original array.
 3. You should use the provided removeDuplicates function signature without any additional parameters.

 console.log(removeDuplicates([1,2,3,3,4,4,5]));
 console.log(removeDuplicates(["a","b","c","b","a"]));

*/
function removeDuplicates(arr){
    let  newArr = [];
    for(let i = 0 ; i < arr.length ; i++){
       if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
       }
    }
    return newArr;
}
module.exports = removeDuplicates;