const caesar = function(str, num) {
    //for negative num
    if(num < 0) {
        return caesar(str, (num + 26))
    }
    //create empty string for encoded str
    let cipher = "";
    //iterate through str
    for (let i = 0; i < str.length; i++) {
        //create variable for current character
        let char = str[i];
        //if current character is a letter
        if (char.match(/[a-z]/i)) {
            //get character code
            let charCode = str.charCodeAt(i);
            //for uppercase letters
            if (charCode >= 65 && charCode <= 90) {
                //shift in alphabet according to num
                char = String.fromCharCode(((charCode - 65 + num) % 26) + 65);
            //for lowercase letters
            } else if (charCode >= 97 && charCode <= 122) {
                //shift in alphabet according to num
                char = String.fromCharCode(((charCode - 97 + num) % 26) + 97);
            }
        }
        //add character to encoded str
        cipher += char;
    }
    return cipher;
};

// Do not edit below this line
module.exports = caesar;
