function tenLtrToUpper(strInput) {
  if(strInput.length > 10 ){
    return strInput.toUpperCase();
  }
  else{
    return strInput;
  }
}
/*
ternary expression vers
function tenLtrToUpper(strInput){
  return ((strInput.length > 10) ? strInput.toUpperCase : string);
}

*/