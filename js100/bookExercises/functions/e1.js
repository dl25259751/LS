let foo =1;
let bar = () => {
  let foo =2;
}

foo();
console.log(bar);
//console logs 1, since the string variables foo initialized in ln 1 and ln3 are different
//foo in ln 1 is a global var and foo in ln 2 is a local var 