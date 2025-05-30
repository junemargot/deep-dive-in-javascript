// var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.
console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 10; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 10

// let 키워드로 선언한 변수는 "선언 단계"와 "초기화 단계"가 분리되어 진행된다.
// 즉, 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언 단계가 먼저 실행되지만 초기화 단계는 변수 선언문에 도달했을 때 실행된다.
console.log(bar); // ReferenceError: Cannot access 'bar' before initialization

let bar; // 변수 선언문에서 초기화 단계가 진행된다.
console.log(bar); // undefined

bar = 100;
console.log(bar); // 100