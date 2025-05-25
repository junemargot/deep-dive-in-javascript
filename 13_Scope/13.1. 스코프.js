function add(x, y) {
  // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
  // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부이다.
  console.log(x, y); // 2, 5
  return x + y;
}

add(2, 5);

// console.log(x, y); // ReferenceError: x is not defined

var val1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수
if(true) {
  var val2 = 2; // 코드 블록 내에서 선언한 변수
  if(true) {
    var val3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
  }
}

function foo() {
  var val4 = 4; // 함수 내에서 선언한 변수

  function bar() {
    var val5 = 5; // 중첩된 함수 내에서 선언한 변수
  }
}

console.log(val1); // 1
console.log(val2); // 2
console.log(val3); // 3
// console.log(val4); // ReferenceError: val4 is not defined
// console.log(val5); // ReferenceError: val5 is not defined

// 다음 예제의 동작을 생각해보자
var x = 'global';

function foo() {
  var x = 'local';
  console.log(x); // local
}

foo();

console.log(x); // global

// 전역과 전역 스코프
var x = 'global x';
var y = 'global y';

function outer() {
  var z = "outer's local z";

  console.log(x); // global x
  console.log(y); // global y
  console.log(z); // outer's local z

  function inner() {
    var x = "inner's local x";

    console.log(x); // inner's local x
    console.log(y); // global y
    console.log(z); // outer's local z
  }

  inner();
}

outer();

console.log(x); // global x
// console.log(z); // ReferenceError: z is not defined

// 스코프 체인에 의한 함수 검색
function foo() {
  console.log('global function foo');
}

function bar() {
  // 중첩 함수
  function foo() {
    console.log('local function foo');
  }
  foo();
}

bar(); // local function foo