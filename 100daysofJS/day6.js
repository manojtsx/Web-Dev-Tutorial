/*
Q. Write a function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation and capitalization.
console.log(isPalindrome("A man, a plan, a canal, Panama")) // True
console.log(isPalindrome("racecar")) //True
console.log(isPalindrome("hello")) //False

Constraints:
1. The input string may contain letters, digits, spaces, punctuation, and special characters.
2. The function shoule be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
3. Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
4. The function should return true if the input string is a palindrome and false otherwise.

*/
function isPalindrome(str) {
  const regex = /[A-Za-z0-9]/g;
  const processedStr = str.toLowerCase().match(regex).join("");
  const reversedStr = processedStr.split("").reverse().join("");
  return processedStr === reversedStr;
}
module.exports = isPalindrome;
