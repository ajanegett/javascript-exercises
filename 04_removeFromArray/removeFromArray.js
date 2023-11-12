const removeFromArray = function(array, ...removeArgs) {
    const args = removeArgs;
    const new_Array = []
    array.forEach(element => {
        new_Array.push(element)
    });
    for (const val of array) {
        for (const arg of args) {
            if (val === arg) {
                new_Array.splice(new_Array.indexOf(val), 1)
            }
        }
    }
    return new_Array
};

// Do not edit below this line
module.exports = removeFromArray;
