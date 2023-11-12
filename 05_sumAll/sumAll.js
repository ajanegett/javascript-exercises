const sumAll = function(num1,num2) {
    let max, min;
    if (num1 > num2) {
        max = num1
        min = num2
    } else {
        min = num1
        max = num2
    }  
    if (num1<0 || num2<0 || typeof(num1) !== typeof(111)|| typeof(num2) !== typeof(111) ) {
        return "ERROR"
    }
    let sum = 0;
    for (let i = min; i<=max; i++ ) {
        sum+=i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
