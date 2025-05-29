var x = 1;
var y = 1;

var x = 100;
var y; // 초기화문이 없는 변수 선언문으로 이전의 초기화 값이 그대로 유지된다. 만약 값을 초기화해주지 않고 찍으면 undefined 출력

console.log(x); // 100
console.log(y); // 1