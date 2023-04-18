let getName = function(prompt) {
  let rlSync = require('readline-sync')
  let name = rlSync.question(prompt)
  return name
}

let fName = getName('What is your first name? ');
let lName = getName('What is your last name? ');

console.log(`Hello, ${fName} ${lName}`)