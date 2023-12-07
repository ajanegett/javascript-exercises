const reverseString = function(str) {
    let splitted = str.split("")
    let reversed_String = ""
    for (let i= splitted.length-1; i>=0;i--) {
        reversed_String += splitted[i]
    }
    return reversed_String
};


function isLetter(x) {
    return !(x.toLowerCase() === x.toUpperCase())
}

const palindromes = function (string) {
    let myString = string.toLowerCase()
    const myArray = myString.split("")
    const lll = myArray.filter((char) => {
        if (isLetter(char)) {
            return true;
        }
        else if (char == Number(char) && char != " ") {
            return true
        }
        return false
    })
    let newString = lll.join("")
    return (reverseString(newString) ===  newString)
};

// Do not edit below this line
module.exports = palindromes;
