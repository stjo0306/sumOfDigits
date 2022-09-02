const sumOfDigits = (number) => {
  let num = number;
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}

module.exports = {
  sumOfDigits,
};
