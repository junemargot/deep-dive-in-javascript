function outer() {
  var x = 1;

  // 중첩 함수
  function inner() {
    var y = 2;

    // 외부 함수의 변수 참조 가능
    console.log(x + y);
  }

  inner();
}

outer();