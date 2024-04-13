/*
Q. You are required to implement a function generateHash that generates  hash tag from a given string.
The hash tag should be constructed as follows:

1. The input string should be converted to a hash tag format, where each word is capitalized and concatented together without spaces.
2. If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
3. Otherwise, the function should return the generated hash tag prefixed with #.
*/

function generateHash(str) {
  if (str.trim("") === "" || str.length > 280) {
    return false;
  }
  
  const words = str.split(" ");
  let hashTagWord = "#";
  for(let word of words){
    word = word[0].toUpperCase() + word.slice(1,word.length);
    // let newWord = word.replace(word[0],word[0].toUpperCase());
    hashTagWord+=word;
  }

  return hashTagWord;
}
module.exports = generateHash;