function factorial(int){
  let result = 1;
  for(let i=1;i<=int;i++){
    result *=i;
  }
  console.log(result);
}

factorial(5)