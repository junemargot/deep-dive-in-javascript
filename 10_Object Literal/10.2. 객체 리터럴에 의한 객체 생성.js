var person = {
  name: 'Hwang',
  sayHello: function() {
    console.log(`Hello! My name is ${this.name}.`);
  }
};

console.log(typeof person); // object
console.log(person); // { name: 'Hwang', sayHello: [Function: sayHello] }
