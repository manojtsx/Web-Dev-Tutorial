/*
Q. Write a JavaScript function to count the occurence of each element in an array and store the counts in an object. The keys of te object represent the elements of the array, and the values should represent the number of times each element appears in the array.

TODO:
1. Accept an array of numbers as an input.
2. Create an empty object called counts to store the counts of each element.
3. Iterate through each number in the array.
5. For each number, increment the count in the counts object.
6. If the count for a number doesnot exist yet, initlialize it to 1.
7. Return the counts object containing the counts of each element.

INPUT:
const numbers = [1,2,2,3,1,4,2];
OUTPUT:
{'1':2,'2':3,'3':1,'4':1 }

CONSTRAINTS:
1. The input array may contain positive integers only.
2. You can assume that the input array isnot empty.
*/
function countOccurrences(arr){
    let counts = {};
    for(let num of arr){
        if(counts[num]){
            counts[num]++;
        }else{
            counts[num] = 1;
        }
    }
    return counts;
}

module.exports = countOccurrences;
