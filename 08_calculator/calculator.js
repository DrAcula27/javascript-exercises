const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	return numArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

const multiply = function(numArray) {
	return numArray.reduce((previousValue, currentValue) => previousValue * currentValue);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  return num === 0 ? 1 : (num * factorial(num - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
