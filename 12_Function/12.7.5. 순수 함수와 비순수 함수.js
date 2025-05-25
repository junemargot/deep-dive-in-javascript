// 순수 함수는 동일한 인수가 전달되면 언제나 동일한 값을 반환하는 함수
// 즉, 순수 함수는 어떤 외부 상태에도 의존하지 않고 오직 매개변수를 통해 함수 내부로 전달된 인수에게만 의존해 반환값을 만든다.
// 함수의 외부 상태에 의존하는 함수는 외부 상태에 따라 반환값이 달라진다.

// 순수 함수의 또 하나의 특징은 함수의 외부 상태를 변경하지 않는다는 것
// 어떤 외부 상태에도 의존 X, 외부 상태 변경 X
var count = 0;

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
  return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2

// 비순수 함수는 반대로 함수의 외부 상태에 따라 반환값이 달라지는 함수, 외부 상태를 의존/변경하는 함수
var count2 = 0;

// 비순수 함수
function increase2() {
  return ++count2; // 외부 상태에 의존하며 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase2();
console.log(count2); // 1

increase2();
console.log(count2); // 2