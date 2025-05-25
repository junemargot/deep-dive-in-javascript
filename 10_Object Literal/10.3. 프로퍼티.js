var person = {
  firstName: 'Kil-Dong', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키 → 따옴표 생략 가능
  'last-name': 'Hong', // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키 → 따옴표 생략 불가
  // nick-name: 'Mr.Hong' // SyntaxError: Unexpected token '-'
};

console.log(person); // { firstName: 'Kil-Dong', 'last-name': 'Hong' }

var num = {
  0: 1,
  1: 2,
  2: 3
};

console.log(num); // { '0': 1, '1': 2, '2': 3 }

var foo = {
  name: 'Lee',
  name: 'Kim'
};

console.log(foo); // { name: 'Kim' }

var person = {
  name: 'Lee'
};

// 마침표 표기법 접근
console.log(person.name); // Lee

// 대괄호 표기법 접근
console.log(person['name']); // Lee
// console.log(person[name]); // ReferenceError: name is not defined

console.log(person.age); // undefined 객체에 존재하지 않는 프로퍼티에 접근 undefined를 반환
// person[name]에서 name은 문자열 "name"이 아니라 변수로 해석되는데 name이라는 변수가 정의되어 있지 않아 ReferenceError가 발생

var person = {
  'last-name': 'Lee',
  1: 10
};

// person.'last-name'; // SyntaxError: Unexpected string
// person.last-name; // 브라우저 환경: NaN, Node.js 환경: ReferenceError: last is not defined

// person[last-name]; // ReferenceError: last is not defined
person['last-name']; // Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
// person.1; // SyntaxError: Unexpected number
// person.'1'; // SyntaxError: Unexpected string
person[1]; // 10 : person[1] -> person['1']
person['1']; // 10

// 프로퍼티 값 갱신
var person = {
  name: 'Kim'
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티 값이 갱신된다.
person.name = 'Lee';
console.log(person); // { name: 'Lee' }

// 프로퍼티 동적 생성
var person = {
  name: 'Lee'
};

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;
console.log(person); // { name: 'Lee', age: 20 }

// 프로퍼티 삭제 delete
var person = {
  name: 'Lee'
};

// 프로퍼티 동적 생성
person.age = 20;
console.log(person); // { name: 'Lee', age: 20 }

// delete 연산자로 age 프로퍼티 삭제
delete person.age;
console.log(person); // { name: 'Lee' }

// person 객체에 없는 address 프로퍼티 삭제 시도
delete person.address;
console.log(person); // { name: 'Lee' }