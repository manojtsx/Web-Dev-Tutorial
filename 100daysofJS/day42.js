/*
    Challenge : Validate a Credit Card (Luhn Algorithm)

    Write a function validateCreditCard to validate credit card numbers using the Luhn algorithm.

    REQUIREMENTS:
    1. Write a function named validateCreditCard that takes a credit card number as a string.
    2. The function should return true if the number is valid according to the Luhn algorithm, and false otherwise.
    3. Ensure the function can handle numbers as strings, which may include spaces and dashes.

    Luhb Algorithm Steps:
    1. Prepare the Number: Start with the digits of the number, For example, if validating the number 79927398713.
    2. Reverse the digits:  It becomes 31789379297.
    3. Double Every Second Digit: 3, 1*2,7,8*2 and so on.
    4. If doubling the number result in a number greater than 9, subtract 9 from it. Now, it becomes 3,2,7,7,9,6,7,9,2,5,9
    5. Sum All Digits : Add all the digits together. 3+2+7+7+9+6+7+9+2+5+9
    6. Check Modulo 10: If the sum module 10 is 0. then the number is valid.
    Here, 66%10 = 6, which is not 0. So, 79927398713 is not a valid credit card number.

    Example:
    console.log(validateCreditCard("4539 1488 0343 6467")); OUTPUT: true
    console.log(validateCreditCard("7992 7398 7134 6783")); OUTPUT: false
*/
function validateCreditCard(cardNum){
    const digit = cardNum.split(" ").join("").split("");
    const reverseDigit = digit.reverse();
    const doubleDigit = reverseDigit.map((num, index)=>{
        if(index%2 !== 0){
            num = num * 2;
            return num > 9 ? num - 9 : num; 
        }else{
            return num;
        }
    })
    let sum = 0;
    for(var num of doubleDigit){
        sum+=Number(num);
    }
    return sum%10===0;
}

module.exports = validateCreditCard;