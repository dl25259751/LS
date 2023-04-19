function randomNumberBetween(min, max){
  let tries =0;
  let result = 0;
  while(result <=2){
    result = Math.floor(Math.random()*(max - min + 1)+min)
    tries++;
    console.log(result)
  }
  console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

}

randomNumberBetween(1,6)