const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => { return total + number; }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, number) => { return total * number; }, 1);
};

const power = function(num1, num2) {
  return num1**num2;
};

const factorial = function(num) {
  let runningTotal = 1;
	for(num; num >= 1; num--) {
    runningTotal *= num;
  }
  return runningTotal;
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
