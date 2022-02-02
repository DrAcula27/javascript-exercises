const repeatString = function(string, num) {
    if (num < 0) return "ERROR"; //to account for negative numbers

    let newString = ""; //to hold contents of string to return
    for (let i = 0; i < num; i++) {
        newString += string;
    }
    return newString;
};

/*Methods to repeat a string in JavaScript

1. While Loop:

    //create empty string to hold new string
    let repeatedString = "";

    //create while loop
    while (num > 0) {
        repeatedString += string;
        num--;
    }

    //return the result
    return repeatedString

2. Recursion

    //define the terminal condition to end the recursion
    if (num < 0) return "";

    //special case for num === 1
    if (num === 1) return string;

    //recursion
    else {
        return string + repeatString(string, num - 1);
    }

3. ES6 repeat() method

    //for non-negative num
    if (num >= 0) {
        return string.repeat(num);
    } else { //if num is negative
        return "ERROR";
    }

    //again, using the ternary operator - 
    num >= 0 ? string.repeat(num) : "ERROR";
*/

// Do not edit below this line
module.exports = repeatString;
