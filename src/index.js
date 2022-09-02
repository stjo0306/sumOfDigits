const { sumOfDigits } = require('./sumOfDigits');
const readline = require('readline');


const rl = readline.createInterface(process.stdin, process.stdout);

// manage user input
rl.setPrompt('please enter a number (or type \'exit\' to exit) >');
rl.on('line', (input) => {
  if (input === 'exit') {
    process.exit();
  }
  try {
    const number = Number(input);
    if (isNaN(number)) {
      throw new Error(`'${input}' is not a number.  try again!`);
    }
    console.log('sum of individual digits:', sumOfDigits(number));
  } catch (err) {
    console.log(err.message);
  };
  rl.prompt();
});

// need this to get the ball rolling
rl.prompt();
