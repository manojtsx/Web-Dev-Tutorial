/*
Q. Write a function to reverse a string without using any build-in methods or libraries. The function should take a string and return the reversed string.
Example: 
console.log(reverseString("hello")) OUTPUT : olleh 
*/
function reverseString(str){
    let reversedStr = "";
    for(let i = str.length - 1 ; i >= 0 ; i--){
        reversedStr+=str[i];
    }
    return reversedStr;
}
module.exports = reverseString;
