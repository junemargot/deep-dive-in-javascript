// 세율을 의미하는 값 = 상수
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice); // 110

// const 키워드로 선언된 변수에 객체를 할당한 경우에는 값을 변경할 수 있다.
const person = {
  name: 'Lee'
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = 'Kim';
console.log(person); // { name: 'Kim' }