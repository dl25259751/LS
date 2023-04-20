let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  let ret = arr.filter(element => element.length%2 === 1)
  ret = ret.map(element => element.length);
  return ret;
}
