    /*
        Challenge : Number of Days Between Two Dates

        Write a function calculateDaysBetweenDates that calculates the number of days between two dates. The date will be provided in YYYY-MM-DD

        Hint:
        Days = 24*60*60*1000

        console.log(calculateDaysBetweenDates("2024-01-01","2024-01-30"))
        */
    function calculateDaysBetweenDates(startDate, endDate) {
    var start = new Date(startDate);
    var end = new Date(endDate);
    return (end - start)/1000/60/60/24;
    }

    // console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-30"));
    module.exports = calculateDaysBetweenDates;
