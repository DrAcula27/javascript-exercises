const fibonacci = function (num) {
  // do not accept negatives
  if (num < 0) return "OOPS";

  // Binet's formula:
  // (1/sqrt(5)) * (((1 + sqrt(5)) / 2)**n - ((1 - sqrt(5)) / 2)**n)
  let squareRootOf5 = Math.sqrt(5);
  let multiplier = 1 / squareRootOf5;
  let posQuadratic = (1 + squareRootOf5) / 2;
  let negQuadratic = (1 - squareRootOf5) / 2;
  return Math.round(multiplier * (posQuadratic ** num - negQuadratic ** num));
};

// Do not edit below this line
module.exports = fibonacci;
