const preciseRound = function (value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

const convertToCelsius = function (temp) {
  // formula: x°F = (x − 32) × 5/9 °C
  let celsius = (temp - 32) * 5/9;
  celsius = preciseRound(celsius, 1);
  return celsius;
};

const convertToFahrenheit = function (temp) {
  // formula: x°C = (x × 9/5 + 32) °F
  let fahrenheit = (temp * (9/5) + 32);
  fahrenheit = preciseRound(fahrenheit, 1);
  return fahrenheit;
};

/*
To accurately round to any number of decimal places, use exponential notation.
See this article for more info:
https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8
*/
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
