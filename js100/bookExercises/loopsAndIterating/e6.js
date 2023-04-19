function factorial(int){
  if(int<=2){
    return int
  }
  return int * factorial(int-1)
}

console.log(factorial(5))