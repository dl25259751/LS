let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

//this causes a inf loop because it is using a single = sign.
//console = int returns true since int is a primitive value and all primitive values are truthy
