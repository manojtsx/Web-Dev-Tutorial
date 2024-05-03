/*
Challenge : Simple Interest Calculator

Write a function calculateSimpleInterest that calculates the simple interest given the principal amount, rate of interest per annum, and time in years.

console.log(calculateSimpleInterest(1000,5,3))  OUTPUT: 150
*/

function calculateSimpleInterest(principal, rate, time){
    return (principal * rate * time)/100;
}
module.exports = calculateSimpleInterest;