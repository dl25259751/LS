function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

//outputs product2 product 3 product not found 
//cause by lack of break statements in cases, causes fall through, eval for true in case 3
// and default