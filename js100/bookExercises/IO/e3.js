let rlSync = require(`readline-sync`);

let currAge = rlSync.questionInt('How old are you? ');

console.log(`you are currently ${currAge} years old.`);
console.log(`in 10 years, you will be ${currAge+10} years old`);
console.log(`in 20 years, you will be ${currAge+20} years old`);
console.log(`in 30 years, you will be ${currAge+30} years old`);
console.log(`in 40 years, you will be ${currAge+40} years old`);

