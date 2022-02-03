const sumAll = function(int1, int2) {
    //check no non-number parameters
    if ((typeof int1 !== "number") || typeof int2 !== "number") {
        return "ERROR";
    }
    //check no negative parameters
    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }
    //sum parameters and all integers in between
    let finalSum = 0;
    if (int1 < int2) {
        for (let i = int1; i <= int2; i++) {
            finalSum += i;
        }
        return finalSum;
    }
    if (int1 > int2) {
        for (let j = int2; j <= int1; j++) {
            finalSum += j;
        }
        return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
