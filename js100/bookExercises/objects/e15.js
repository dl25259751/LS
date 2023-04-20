function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

//var = bar, arg1,arg2,foo,qux,result
//prop = abc def dghi jkl mno pqr,1 2 3
//prim = hello 1,2,3,4,5,6,null,nan,victor,antonia, properties in qux obj
//obj = bar, qux obj, arr in obj