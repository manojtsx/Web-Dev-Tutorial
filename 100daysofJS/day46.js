/*
Programming Challenge: Mobile Number Validation

 Write a function that takes a string as input and returns true if the string represents
a valid Indian mobile number, and false otherwise.

Validation Requirements:
1. Length: An Indian mobile number should have exactly 10 digits.
2. Starting Digit: The number must start with 6, 7, 8, or 9, which are valid starting
digits for Indian mobile numbers.

Test Cases
console.log(validateIndianMobileNumber("9876543210")); // Expected output: true
console.log(validateIndianMobileNumber("0123456789")); // Expected output: false
console.log(validateIndianMobileNumber("897654321")); // Expected output: false
console.log(validateIndianMobileNumber("78965432107")); // Expected output: false

*/
function validateIndianMobileNumber(number) {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(number);
  }
  
  module.exports = validateIndianMobileNumber;
  