// 재귀 함수는 반복되는 처리를 위해 사용한다.
// 예를 들어 10부터 0까지 출력하는 함수를 구현해보자.
function countdown(n) {
  for(var i = n; i >= 0; i--) console.log(i);
}

countdown(10);

// 반복문 없이 재귀 함수를 사용할 수 있다.
function countdown2(n) {
  if (n < 0) return;
  console.log(n);
  countdown2(n - 1); // 재귀 호출
}

countdown2(7);

// 자기 자신을 호출하는 재귀 함수를 사용하면 반복되는 처리를 반복문 없이 구현할 수 있다. 예) 팩토리얼
// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if(n <= 1) return 1;
  // 재귀 호출
  return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2)); // 2 * 1 = 2
console.log(factorial(3)); // 3 * 2 * 1 = 6
console.log(factorial(4)); // 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120