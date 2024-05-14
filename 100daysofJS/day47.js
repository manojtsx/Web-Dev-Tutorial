/*
Programming Challenge: Extract Numbers from a String

 Write a regular expression to extract all numbers from a given string.

Requirements
1. Extract all numbers from a string.
2. Return the numbers as an array.

3. Use Cases
4. Parsing numerical data from text.
5. Extracting numeric values for calculations.
6. Filtering numbers from mixed content.

Example: 
console.log(extractNumbers("abc123def456")); //Output: [123, 456]
console.log(extractNumbers("no numbers here")); //Output: []
console.log(extractNumbers("1a2b3c4d5e6f")); //Output: [1, 2, 3, 4, 5, 6]
console.log(extractNumbers("")); //Output: []
*/  
function extractNumbers(str){
    const regex = /\d+/g;
    var result = [];
    if(str.match(regex)){
        result = str.match(regex).map(Number);
    }
    return result;
}
module.exports = extractNumbers;