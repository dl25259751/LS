let number = 4936;
let arr =[];
for(let i = 0 ; i < 4 ; i++) {
  arr[i] = number%10;
  number = (number - number%10) / 10;
}

let digits = arr[0];
let tens = arr[1];
let hundreds = arr[2];
let thousands = arr[3];

console.log(`${thousands},${hundreds},${tens},${digits}`)