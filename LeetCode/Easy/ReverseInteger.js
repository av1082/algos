// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

var reverse = function(x) {
  const intRev = x.toString().split('').reverse().join('');
  let answer = parseInt(intRev) * Math.sign(x);
  if (answer < -2147483648 || answer > 2147483648) {
    return 0
  }
  else {
    return answer;
  }
};
