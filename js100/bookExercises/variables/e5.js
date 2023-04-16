let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
//should log bar, as each foo is created in different scopes