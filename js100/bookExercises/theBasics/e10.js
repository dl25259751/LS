console.log('foo' = 'Foo') 
//returns false as foo is not strictly equal to Foo
//perhaps its a result of f and F having different utf-16 codes
//'f'.charCodeAt(0) = 102
//'F'.charCodeAt(0) = 70