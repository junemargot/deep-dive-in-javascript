// n만큼 어떤 일을 반복한다.
function repeat(n) {
  for(var i = 0; i < n; i++) console.log(i);
}

repeat(5);

// repeat 함수는 매개변수를 통해 전달받은 숫자만큼 반복하며 console.log(i)를 호출한다.
// 이때 repeat 함수는 console.log(i)에 강하게 의존하고 있어 다른 일을 할 수 없다.
// 따라서 만약 repeart 함수의 반복문 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.

// n만큼 어떤 일을 반복한다.
function repeat2(n) {
  for(var i = 0; i < n; i++) {
    if(i % 2) console.log(i);
  }
}

repeat2(5);

// 위 예제의 함수들은 반복하는 일은 변하지 않고, 공통적으로 수행하지만 반복하면서 하는 일의 내용이 다르다.
// 즉, 함수의 일부분만이 다르기 때문에 매번 함수를 새롭게 정의해야 한다.
// 이 문제를 함수를 합성하는 것으로 해결할 수 있다.
// 함수의 변하지 않는 공통 로직은 미리 정의해 두고, 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 함수 내부로 전달하는 것이다.

// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat3(n, f) {
  for(var i = 0; i < n; i++) {
    f(i); // i를 전달하면서 f를 호출
  }
}

var logAll = function(i) {
  console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat3(5, logAll);

var logOdds = function(i) {
  if(i % 2) console.log(i);
};

repeat3(5, logOdds);