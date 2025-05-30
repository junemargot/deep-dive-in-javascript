// const 선언과 초기화
// const foo = 1;
// const foo; // SyntaxError: Missing initializer in const declaration

{
  // 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  const foo = 1;
  console.log(foo); // 1
}

// 블록 레벨 스코프를 갖는다.
console.log(foo); // ReferenceError: foo is not defined

// 재할당 불가
const apple = 1;
apple = 2; // TypeError: Assignment to constant variable.