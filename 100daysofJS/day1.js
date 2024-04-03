/*
Q. Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

Constraints:
The input string may cotain alphabetic characters, digits, spaces and punctuation.
The input string is non-empty
The input string may contain multiple words separated by spaces

Note:
If the input string is empty or contains only whitespace the function should return an false.
The function should ignore leading and trailing whitespace.
*/

function findLongestWord(str) {
  if (str.trim("") === "") {
    return false;
  }
  let longestWord = "";
  const words = str.split(" ");
  words.map((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}
let result = findLongestWord("Hello this is javascript programming language");
console.log(result);
