/*
    Q.  Coding Challenge ; Truncate a String

    Write a function called truncateString that takes two parameters:
    str : A string that needs to be truncated.
    maxLength : An integer representing the maximum length of the string allowed.
    The function should truncate the input string str if its length exceeds the specified maxLength. If truncation occurs, the function should add '...' to the end of the trucated string.

    EXAMPLE:
    console.log(truncateString("A-tisket a-tasket A green and yellow basket",8));
    OUTPUT:
    "A-tisket..."

    Constraints:
    1. The input string str will contain only alphanumeric characters and punctuation marks.
    2. The maximum length maxLength will be a positive integer.
    3. The output string length should exceed maxLength + 3 characters due to the addition of '...'.
    4. If space lies at the end after truncation, then it must have to remove that space.
*/
function truncateString(str, maxLength){
    if(maxLength < 1){
        return "The length must be greated than 0."
    }
    let truncatedString = str.substring(0,maxLength).trim() + "...";
    return truncatedString;
}
module.exports = truncateString;