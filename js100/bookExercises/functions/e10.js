function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
/*
global
multiply, getNumber,parsefloat,question,left,right
parsefloat and question are global because they are not defined and confined to fn block

local
left right product prompt
*/ 