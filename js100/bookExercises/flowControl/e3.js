function evenOrdOdd(number) {
  if(!Number.isInteger(number)){
    console.log('error, not a int');
    return; // can't use break need return
  }

  if(number%2===1){
    console.log('odd');
  }
  else{
      console.log('even');
  }
}

evenOrdOdd(1)
evenOrdOdd(2)
evenOrdOdd('3')