/*
Programming Challenge: Validate Hex-Color-Code

Write a regular expression to validate a hex color code (e.g., #a3c113).

Requirements
1. The hex color code should start with "#".
2. It should be followed by either 3 or 6 hexadecimal characters.

Use Cases
1. Validating color codes in design tools.
2. Ensuring consistent color code format in CSS.
3. Filtering valid hex color codes in data processing.

Test Cases
console.log(validateHexColor("#a3c113")); // Expected output: true
console.log(validateHexColor("#fff")): // Exnected output: true
*/
function validateHexColor(code) {
    return /^#[0-9A-F]{3}$|^#[0-9A-F]{6}$/i.test(code);
}              
module.exports = validateHexColor;