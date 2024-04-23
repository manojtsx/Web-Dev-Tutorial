/*
    Q. Write a function called repeatString that takes two parameters.
    str : A string that needs to be repeated.
    num : An integer representing the number of tiems the string should be repeated.
    The function should repeat the string str the specified number of tiems num adn return the resulting string.

    Example: 
    console.log(repeatString("abc",5)) //OUTPUT: "abcabcabcabcabc";

    Constraints: 
    1. The input string str will contain only alphanumeric characters and punctuation marks.
    2. The input number num will be a non negative integer.
    3. The output string length should not exceed the length of str multiplied by num.
*/

function repeatString(str, num){
    let repeatedString = "";
    for(let i = 1 ; i <= num ; i++ ){
        repeatedString+=str;
    }
    return repeatedString;
}

module.exports = repeatString;