/*
Challenge : Calculate Age from birthDate

Create a function calculateAge that takes birthDate as input and returns the current age of the person. The birthDate will be provided in the format YYYY-MM-DD.

Requirements:
1. The function must handle leap years and varying numbers of days in each month accurately.
2. Consider the timezone difference and ensure the age is calcualated based on the current date in your local time zone.
3. The output should be the age in whole years.

console.log(calculateAge("1990-05-15")); //OUTPUT: 33

//TODOS:
1. Checks if the current month is less than the birth month of it's the same month but today's date is before the birth date. If either condition is true, it subtracts one from the age because the birthday has not yet occured this year. 
*/

function calculateAge(birthDate){
    let todayDate = new Date();
    birthDate = new Date(birthDate);
    
    let age = todayDate.getFullYear() - birthDate.getFullYear();

    let monthDiff = todayDate.getMonth() - birthDate.getMonth();
    let dayDiff = todayDate.getDate() - birthDate.getDate();
    if(monthDiff < 0 || monthDiff === 0 && dayDiff < 0){
        age--;
    }
    return age;
}
module.exports = calculateAge;
