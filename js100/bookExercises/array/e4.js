let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let evenOrOdd = myArray.map(element =>{
  if(element%2 ===0){
    return 'Even';
  }
  else{
    return 'Odd';
  }
})

console.log(evenOrOdd)