const repeatString = function(word, num) {
    a = ''
    if (num<0) {
        return "ERROR"
    }
    for (i=1; i<=num; i++) {
        a += word;
    }
    return a
};

// Do not edit below this line
module.exports = repeatString;
