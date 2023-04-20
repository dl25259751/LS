function sumOfSquares(array) {
  let total =0;
  array.forEach(element => total += element**2)
  return total
}
function sumOfSquaresReduce(array) {
  return array.reduce((accumulator, element) =>accumulator += element**2, 0)
}
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
console.log(sumOfSquaresReduce(array))