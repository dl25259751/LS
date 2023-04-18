function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7);//5,7
show(0, 0);//0,0
show(4);//4,42
show();//3,42