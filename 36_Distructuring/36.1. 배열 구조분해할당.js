// // ES5
// var arr = [1, 2, 3];

// var one = arr[0];
// var two = arr[1];
// var three = arr[2];

// console.log(one, two, three); // 1 2 3

// // ES6
// const arr = [1, 2, 3];

// // ES6 배열 디스트럭처링
// // 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// const [one, two, three] = arr;

// console.log(one, two, three) // 1 2 3

// // 기본값
// const [a, b, c = 3] = [1, 2];
// console.log(a, b, c); // 1 2 3

// // 기본값보다 할당된 값이 우선한다.
// const [e, f = 10, g = 3] = [1, 2, 5];
// console.log(e, f, g); // 1, 2, 5

// url을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체를 생성해 반환한다.
function parseURL(url = '') {
  // '://' 앞의 문자열(protocol)과 '/' 이전의 '/'로 시작하지 않는 문자열(host)과 
  // '/' 이후의 문자열(path)을 검색한다.
  const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parsedURL);
  /*
    [
      'https://developer.mozilla.org/ko/docs/Web/JavaScript',
      'https',
      'developer.mozilla.org',
      'ko/docs/Web/JavaScript',
      index: 0,
      input: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
      groups: undefined
    ]
  */

  if(!parsedURL) return {};

  // 배열 디스트럭처링 할당을 사용하여 이터러블에서 필요한 요소만 추출
  const [, protocol, host, path] = parsedURL;
  return { protocol, host, path };
}

const parsedURL = parseURL('https://developer.mozilla.org/ko/docs/Web/JavaScript');
console.log(parsedURL);
/*
  {
    protocol: 'https',
    host: 'developer.mozilla.org',
    path: 'ko/docs/Web/JavaScript'
  }
*/