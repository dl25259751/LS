for (let i = 0; i < 5;) {
  console.log(i += 1);
}

//this should work properly since i +=1 is a post increment and is incrementing i
//thus eventually the break condition will be hit