/*
Q. Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a','e','i','0','u' as vowels (both lowercase and uppercase)

Example: 
console.log(countVowels("Helloo world")) Output: 4
console.log(countVowels("ThE quIck brOwn fOx")) Output: 5
console.log(countVowels("qwe")) Output: 0

Constraints: 
1. The input string may contain letters in both uppercase and lowercase.
2. The output should be a non-negative integer representing the count of vowels in the input string.

*/

function countVowels(str){
    let count = 0;
    const regex = new RegExp('[aeiouAEIOU]');
    for(let char of str){
        if(regex.test(char)){
            count += 1;
        }
    }
    return count;
}
const result = countVowels("ThE quIck brOwn fOx");
console.log(result); //OUTPUT: 5