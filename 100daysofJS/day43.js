/*
Challenge : FizzBuzz Challenge

Write a function fizzBuzz that accepts two numbers, startNum and endNum, as input. The function should return an array containing numbers and specific strings based on the following rules:

//For each number i in the range from startNum to endNum(both inclusive):
//If i is divisible by both 3 and 5, include "FizzBuz" in the result.
//If i is divisible by only 3, include "Fizz" in the result.
//If i is divisible by only 5, include "Buzz" in the result.
//Otherwise, include the number i itself.

EXAMPLE: 
console.log(fizzBuzz(1,15));

OUTPUT:
[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz", 11, "Fizz",13,14,"FizzBuzz"];
*/
function fizzBuzz(startNum, ednNum) {
    let outputArr = [];
    let index = 0;
    for(let i = startNum; i<=ednNum;i++){
        if(i%3===0 && i%5 === 0){
            outputArr[index] = "FizzBuzz";
        }else if(i%3 === 0){
            outputArr[index] = "Fizz";
        }else if(i%5 === 0){
            outputArr[index] = "Buzz";
        }else{
            outputArr[index] = i;
        }
        index++;
    }
    return outputArr;
}
module.exports = fizzBuzz;
