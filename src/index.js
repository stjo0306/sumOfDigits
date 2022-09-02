const { number } = require('../number');

console.log('input number:', number);

let targetNumber = number;
let sum = 0;

while (targetNumber > 0) {
  sum = sum + (targetNumber % 10);
  targetNumber = Math.floor(targetNumber / 10);
}

console.log('sum of individual digits:', sum);
