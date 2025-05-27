// map 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반홚나다. 이때 원본 배열은 변경되지 않는다.
const numbers = [1, 4, 9, 16];

// map 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출
// 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.
const roots = numbers.map(x => x * 2);

// 위 코드는 아래 코드와 같다.
// const roots = numbers.map(Math.sqrt);

// map 메서드는 새로운 배열을 반환한다.
console.log(roots); // [ 2, 8, 18, 32 ]
console.log(numbers); // [ 1, 4, 9, 16 ]
