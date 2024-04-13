/*
Q. Write a function that convert a string to camelCase & snake_case.
console.log(toCamelCase("hello world thapa")) //Output: helloWorldThapa
console.log(toSnakeCase("hello World")); //Output: hello_world
*/
function toCamelCase(str) {
  const splittedWords = str.split(" ");
  let words = splittedWords[0];
  let camelCase = (
    words[0].toLowerCase() + words.substring(1, words.length)
  ).toLowerCase();
  for (let i = 1; i < splittedWords.length; i++) {
    let word = splittedWords[i];
    camelCase +=
      word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
  }
  return camelCase;
}
const result = toCamelCase("HeLlo worLd thapa");
console.log(result); //OUTPUT: helloWorldThapa

function toSnakeCase(str) {
    const splittedWords = str.split(" ");
    let i = 0;
    for(let word of splittedWords){
        splittedWords[i] = word.toLowerCase();
        i++;
    }
    return splittedWords.join("_");
}
const result1 = toSnakeCase("hello World");
console.log(result1); //OUTPUT : hello_world
