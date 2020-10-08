const isEven = (num) => {
  // write code for numbers.isEven
  // Return a boolean that represents whether a given number is even
  // Hint: the modulus function returns the division remainer

  // If the number is divisible by 2 then return true else return false
  // In order to be even a number must be dvisible by 2
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

const sum = (arr) => {
  // write code for numbers.sum
  // Return a value that represents the sum of an array of numbers
  // Hint: Reduce method reduces the array to a single value

  // syntax: array.reduce(function([total],[CurrentValue],[currentIndex],[arr],[initialValue])
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  // Determine if any combination of numbers in an array equals a given sum. Return a boolean
  // Hint: Loop in loop OR indexOf for diff
  let startingArray = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  if (startingArray == sum) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  // this exports our isEven, sun, and comboSum to tests
  isEven,
  sum,
  comboSum,
};
