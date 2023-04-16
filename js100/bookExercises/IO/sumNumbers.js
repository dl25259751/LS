let rlSync = require('readline-sync');

let number1 = Number(rlSync.question(`what is number 1?\n`));
let number2 = Number(rlSync.question(`what is number 2?\n`));
console.log(`the sum of ${number1} and ${number2} is ${number1+number2}`);