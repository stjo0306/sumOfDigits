const number = process.argv[2];
const { sumOfDigits } = require('./sumOfDigits');


console.log('input number:', number);


console.log('sum of individual digits:', sumOfDigits(Number(number)));
