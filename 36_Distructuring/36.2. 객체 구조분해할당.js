// // ES5
// var user = { firstName: 'Kildong', lastName: 'Hong' };
// var firstName = user.firstName;
// var lastName = user.lastName;

// console.log(firstName, lastName); // Kildong Hong

// ES6
// 변수 lastName, firstName을 선언하고 person 객체를 디스트럭처링하여 할당한다.
// 이때 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
const person = { firstName: 'Kildong', lastName: 'Hong' };
const { lastName, firstName } = person;
// const { lastName, firstNme }; // SyntaxError: Missing initializer in destructuring declaration

// console.log(firstName, lastName); // Kildong Hong

const str = 'Hello';
// String 래퍼 객체로부터 length 프로퍼티만 추출
const { length } = str;
console.log(length); // 5

const todo = { id: 1, content: 'HTML', completed: true };
// todo 객체로부터 content 프로퍼티만 추출
const { content } = todo;
console.log(content); // HTML

function printTodo(todo) {
  console.log(`학습할 ${todo.content}는 ${todo.completed ? '완료' : '비완료'} 상태입니다.`);
}

printTodo({ id: 2, content: 'JavaScript', completed: true });
// 학습할 JavaScript는 완료 상태입니다.

function printTodo2({ content, completed }) {
  console.log(`학습할 ${content}는 ${completed ? '완료' : '비완료'} 상태입니다.`);
}

printTodo2({ id: 3, content: 'AWS', completed: false });
// 학습할 AWS는 비완료 상태입니다.

const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false },
];

// todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출
const [, { id }] = todos;
console.log(id); // 2

// 중첩 객체
const doll = {
  name: 'mimi',
  address: {
    zipCode: '03068',
    city: 'DreamLand'
  }
};

// address 프로퍼티 키로 객체를 추출하고 이 객체의 city 프로퍼티 키로 값을 추출
const { address: { city } } = doll;
console.log(city); // DreamLand

// Rest 프로퍼티
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x, rest);