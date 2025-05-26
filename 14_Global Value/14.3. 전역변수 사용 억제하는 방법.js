// 즉시 실행 함수
(function () {
  var foo = 10; // 즉시 실행 함수의 지역 변수
  // ...
}());

// console.log(foo); // ReferenceError: foo is not defined

// 네임스페이스 객체
var MYAPP = {}; // 전역 네임스페이스 객체
MYAPP.name = 'Lee';

console.log(MYAPP.name); // Lee

MYAPP.person = {
  name: 'Kim',
  address: 'Seoul'
};

console.log(MYAPP.person.name); // Kim

// 모듈 패턴
var Counter = (function() {
  // private 변수
  var num = 0;

  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    }
  };
}());

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0