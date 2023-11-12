const leapYears = function(year) {
    if (year % 4 === 0 && (!(year % 100 === 0) || (year % 400 === 0))) {
        return true
    }
    return false
};

// Divisible by 4, not divisible by 100, unless divisible by 400
// Do not edit below this line
module.exports = leapYears;
