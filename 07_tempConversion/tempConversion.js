const ftoc = function(fTemp) {
  //formula: C = (F - 32) * (5/9)
  //round result to 1 decimal place
  return celsius = Math.round((((fTemp - 32) * (5/9)) * 10) / 10);
};

const ctof = function(cTemp) {
  //formula: F = (C * (9/5)) + 32
  //round result to 1 decimal place
  return fahrenheit = Math.round((((cTemp * (9/5)) + 32) * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
