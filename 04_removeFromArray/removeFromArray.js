const removeFromArray = function(array, ...args) {
    array = array.filter(item => args.indexOf(item) === -1);
    return array;
};

/*
Another method: using includes() -> only works on latests browsers
    array = array.filter(item => !args.includes(item));
    return array;
*/

// Do not edit below this line
module.exports = removeFromArray;
