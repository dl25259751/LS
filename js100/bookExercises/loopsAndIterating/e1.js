let rlSync = require('readline-sync');

let currAge = rlSync.questionInt('What is your current age? ');

for(idx =0; idx <=4; idx++){
  console.log(`in ${10*idx} years you will be ${currAge +10*idx} years old.`);
}