let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  return arr.reduce((filteredArray,currElement) => {
    let length = currElement.length;
    if(length%2 === 1){
      filteredArray.push(length)
    }
    return filteredArray;
  }
  , [] );
}
/*
initializes and returns accumulator as the array filteredArray, filteredArray is initialized as a empty arr []
for element in arr, if the length of the element is odd, append/push it into filtered array
*/