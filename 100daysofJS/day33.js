/*
Coding Challenge : Random Hex Color Generator

Write a function randomHexColor that generates a random hexadecimal color code each time it is called. The function should return a string representing the random color code in the format '#RRGGBB', where RR, GG, and BB are two digit hexadecimal numbers representing the red, green, and blue components of the color respectively.

Your challenge is to implement the randomHexColor function using JavaScript and ensure that it produces a valid hexadecimal color code with a length of 7 characters ( including the # symbol).

CONSTRAINTS:
1. The output color code should always with # followed by six hexadecimal characters. (RRGGBB)
2. The function should not take any parameters.
3. The generated color codes should be unique and evenly distributed across the entire range of possible hexadecimal color coes 

HINT: Conver the random number into hexadecimal string reprsentation.
console.log(randomHexColor());
*/
function randomHexColor(){
    let randomColor = "#";
    let randomNum;
    for(let i = 1; i <= 6 ; i++){
        randomNum = Math.floor(Math.random() * 15);
        randomColor+=randomNum.toString(16); 
    }
    return randomColor;
}
module.exports = randomHexColor;