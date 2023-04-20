function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

//var = hello,greeting,name,xyzzy,howdy,foo
//property names in a obj are not vars, ln6
//obj = hello,cyzzy, obj in ln6, arr in obj, obj in obj
//prim values = " ",prop vals ln 6, hi, grace
