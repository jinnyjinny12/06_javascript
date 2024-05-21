/* 05_symbol-and-object */

/* Symbol 타입
심벌은 ES6에서 추가 된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다. 다른 곳 객체 키를 넣어줄 때 쓴다.
다른 값과 중복 되지 않는 유일무이한 값으로 이름 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다. 
심벌 이외의 원시 값은 리터럴을 통해 생성하지만 심벌은 Symbol 함수를 통해 호출해 생성한다.
 */

// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key); // key 의 타입은 symbol 이 된다.

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무일한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value'; // obj 라는 객체에 [key] 라는 symbol 을 만들고 거기에 'value' 를 할당한다?

console.log(obj[key]);

// 지금은 데이터 타입의 한 종류라고만 이해하고 넘어가면 된다.
// 심벌에 대한 자세한 내용은 ES6+ 챕터에서 다루게 된다.

/*
객체 타입
자바스크립트의 데이터 타입은 크게 원시 타입과 객체 타입으로 분류한다.
자바스크립트는 객체 기반의 언어이며, 자바스크립트를 이루고 있는 거의 모든 것이 객체이다.
number, string, boolean, undefined, null, symbol 6가지 데이터 타입 이외의 값은 모두 객체 타입이다.
객체, 함수, 배열 등에 대해서 추후 하나씩 자세히 다뤄볼 것이다.
 */

