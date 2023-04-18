let multiply = () => {
  let rlSync = require('readline-sync');
  let a = Number(rlSync.question('Enter the first number :'));
  let b = Number(rlSync.question('Enter the second number: '));

  console.log(`${a} + ${b} = ${a*b}`);
};

multiply();
