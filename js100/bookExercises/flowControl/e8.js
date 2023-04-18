function numberRange(input){
  if(input<0){
    console.log(`${input} is less than 0`)
  }
  else if(input <51){
    console.log(`${input} is beteewn 0 and 50`)
  }
  else if(input <101){
    console.log(`${input} is beteewn 51 and 100`)
  }
  else{
    console.log(`${input} is greater than 100`)
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);