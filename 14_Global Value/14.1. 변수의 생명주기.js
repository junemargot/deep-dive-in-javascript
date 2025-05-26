var x = 'global';

function foo() {
  console.log(x); // undefined
  var x = 'local';
  return x;
}

foo(); //
console.log(x); // global