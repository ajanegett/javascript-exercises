const reverseString = function(str) {
    let splitted = str.split("")
    let reversed_String = ""
    for (let i= splitted.length-1; i>=0;i--) {
        reversed_String += splitted[i]
    }
    return reversed_String

};

// Do not edit below this line
module.exports = reverseString;
