/*
Challenge : Email Validation Using Regex

Write a function validateEmail to validate the email passed as a parameter to the function
It will return true if the email is valid and false if invalid.
*/
function validateEmail(email){
    const exp = /^[A-Za-z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z\.]{2,}$/
    return exp.test(email);
}
module.exports = validateEmail;