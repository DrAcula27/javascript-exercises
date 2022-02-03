const leapYears = function(year) {
    //year is leap year if:
        //The year is a multiple of 400. OR
        //The year is a multiple of 4 and not a multiple of 100.
    
    if (((year % 400) === 0) || (((year % 4) === 0) && ((year % 100) !== 0))) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
