const add = function(...Numbers) {
  let easy =Numbers.reduce((total,num) => total += num, 0)
  return easy
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let easy =array.reduce((total,num) => total += num, 0)
  return easy
};

const multiply = function(array) {
  return array.reduce((total, num) => total * num)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(x) {
	let total = 1;
  for (let i = x; x > 0; x--) {
    total *= x;
  }
  return total
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
