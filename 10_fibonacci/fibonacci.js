const fibonacci = function(IndexNum) {
    let aNum = Number(IndexNum);
    if (aNum <= 0) {
        return "OOPS";
    }
    if (aNum === 1 || aNum === 2) {
        return 1;
    }

    let firstNum = 1, secondNum = 1, theNum = 1, holder ;
    let x = 2

    while (x<aNum) {
        holder = theNum
        theNum += firstNum 
        firstNum = holder
        x+=1;
    }
    return theNum;
};

1 + 1 + 2 + 3 + 5 + 8 + 13


// Do not edit below this line
module.exports = fibonacci;
