let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj)
myObj['qux'] =3;
console.log(myObj)

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
//qux, own keys

for (let key in myObj) {
  console.log(key);
}
//foo, bar,qux, all keys