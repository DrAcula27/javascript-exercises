const palindromes = function (str) {
    //find unwanted characters in the string
    let regEx = /[\W_]/g;

    //remove unwanted characters and make lowercase
    let lowercaseEditStr = str.toLowerCase().replace(regEx, "");

    //create a reversed str
    reversedStr = lowercaseEditStr.split("").reverse().join("");

    //return the comparison of the two strings
    return lowercaseEditStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
