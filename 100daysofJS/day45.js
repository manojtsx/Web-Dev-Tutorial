/*
Challenge : Password Validation Coding Problem

Create a function validatePassword that checks if given password string meets the following criteria:

1. Minimum length : The password must be at least 8 characters long.
2. Case Requirements : The password must include at least one uppercase letter and at least one lowercase letter.
3. Numerical Requirement : The password must contain at least one digit.
4. Special Character Requirement: The password must have at least one special character from the set !@#$%^&*()-_+=.

Requirements: 
1. The function should return true if the password meets all the criteria, and false otherwise.
2. Your are to implement this function using JavaScript.

*/
function validatePassword(pass){
    let exp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=]).{8,}$/;
    return exp.test(pass);
}
module.exports = validatePassword;