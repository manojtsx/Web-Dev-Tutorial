/*
Q. Write a function to sort an array of numbers in an ascending order.
console.log(sortAscending([5,3,10,8])) //Output: [3,5,8,10]
console.log(typeof sortAscending[2]);

Constraints:
1. The function should take an array of numbers as input.
2. It should return a new array with the numbers sorted in ascending order.
3. The original array should remain unchanged.
4. You are not allowed to use the build-in sort() method.
*/

function sortAscending(arr){
    let newArr = arr;
    for(let i = 0 ; i < newArr.length ; i++){
        for(let j = i; j<= newArr.length ; j++){
            if(newArr[i] > newArr[j]){
                temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    return newArr;
}
let result = sortAscending([3,2,6,4,1,9,8]);
console.log(result);