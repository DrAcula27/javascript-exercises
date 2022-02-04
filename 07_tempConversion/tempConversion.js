const ftoc = function(fTemp) {
  //formula: C = (F - 32) * (5/9)
  celsius = (fTemp - 32) * (5 / 9);
  //round result to 1 decimal place
  //roundedCelsius = (Math.round(celsius * 10)) / 10;
  roundedCelsius = Number(Math.round(celsius + "e1") + "e-1");

  return roundedCelsius;
};

const ctof = function(cTemp) {
  //formula: F = (C * (9/5)) + 32
  fahrenheit = (cTemp * (9 / 5) + 32);
  //round result to 1 decimal place
  //roundedFahrenheit = (Math.round(fahrenheit * 10)) / 10;
  roundedFahrenheit = Number(Math.round(fahrenheit + "e1") + "e-1");

  return roundedFahrenheit;
};
/*
To accurately round to any number of decimal places, use exponential notation.
See this article for more info:
https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8
*/
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
