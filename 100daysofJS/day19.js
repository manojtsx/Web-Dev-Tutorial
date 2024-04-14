/*
 Q. Write a function to check if a given string starts with a specific substring.
 str : A string(e.g : Hello World);
 subStr :  A substring to check if it starts the given string(eg: Hello);
 Output : true if the given string starts with the specified substring, otherwise false.

 Example : 
 console.log(startsWith("Hello world","hello"))  Output : True
 console.log(startsWith("Hello world","World"))  Output : True
*/

function startsWith(str, subStr) {
  for (let i = 0; i < subStr.length; i++) {
    if (str[i] !== subStr[i]) return false;
  }
  return true;
}
module.exports = startsWith;
