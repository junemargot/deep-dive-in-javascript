let foo = 1; // 전역 변수
{
  let foo = 2; // 지역 변수
  let bar = 3; // 지역 변수
}

console.log(foo); // 1
// console.log(bar); // ReferenceError: bar is not defined

// 함수 레벨 스코프
let i = 10; // 전역 스코프
function temp() { // 함수 레벨 스코프
  let i = 100;
  for(let i=1; i<3; i++) { // 블록 레벨 스코프
    console.log(i); // 1 2
  }
  console.log(i); // 100
}

temp();
console.log(i); // 10

console.log(apple); // ReferenceError: Cannot access 'apple' before initialization

let apple;