/*
Challenge: Convert Object to Array and Vice Versa

Your task is to implement two functions:

Convert Object to Array : Write a function objectToArray that takes an object as an input and returns an array of key-value pairs, where each element in the array is an array with two elements: the key and the corresponding value from the object.

Covert Array to Object: Write a function arrayToObject that takes an array of key-value pairs (as returned by the objectToArray function and returns a new object with the keys and values from the array.)

Ensure that the conversion functions work correctly for objects with various data types as values, such as strings, numbers, and objects.

CONSTRAINTS:
1. The input object may contain properties of any data type.
2. The input array must contain arrays with exactly two elements(key-value pairs).
3. The output object should hae properties in the same order as the original object.
4. You should use the provided function signatures (objectToArray and arrayToObject) without any additional parameters.

const obg = {
    name : "Kodyfier Shrestha",
    age : 23,
    city : "Damauli"
}

*/

//Convert the object to an array of key-value pairs.
function objectToArray(obj){
    return Object.entries(obj);
}

//Convert the array of key-value pairs back to an object.
function arrayToObject(arr){
    return Object.fromEntries(arr);
}

module.exports = {objectToArray, arrayToObject};