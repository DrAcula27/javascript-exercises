const reverseString = function(string) {
    return string.split("").reverse().join("");
};

/*Multiple ways to reverse a string in JavaScript

1. using built-in methods:

    //use split() method to return a new array
    let splitString = string.split("");

    //use reverse() method to reverse the new array
    let reverseArray = splitString.reverse();

    //use join() method to join the array back into a string
    let joinArray = reverseArray.join("");

    //return the result
    return joinArray;

2. using loops:

    //create an empty string to hold the new string
    let newString = "";

    //use for loop
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }

    //return the result
    return newString;

3. using recursion:

    //define terminal condition that ends the recursion
    if (string === "") return "";
    else
        //substr() method returns the characters in a string beginning at the specified location through the specified number of characters
        //charAt() method returns the specified character from a string
        return reverseString(string.substr(1)) + string.charAt(0);
*/

// Do not edit below this line
module.exports = reverseString;
