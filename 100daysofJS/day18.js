/*
Q. Write a function to check if a character if uppercase or lowercase.

Constraints:
1. The input char will be a single character.
2. The character can be any printable ASCII character.
3. You can assume that the input will always be a string of length 1.

Example:
console.log(isUpperCase("s")) // True
console.log(isUpperCase("b")) // False

Note:
Ensure that the function correctly identifies uppercase characters based on their ASCII values.
Optimize the function to handle edge cases efficiently.
*/

function isUpperCase(char){
    const regex = /[a-zA-Z]/;
    if(regex.test(char)){
        return char === char.toUpperCase();
    }
    return false;
}
module.exports = isUpperCase;