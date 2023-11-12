const convertToCelsius = function(value) {
  return Number(((5/9) * (value - 32)).toFixed(1))
};

const convertToFahrenheit = function(value) {
  return Number(((9/5) * (value) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
