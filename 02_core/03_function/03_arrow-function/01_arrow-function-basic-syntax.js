/* 01_arrow-funciton-basic-syntax
ES6에서 도입 된 화살표 함수는 function 키워드 대신 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다. 
화살표 함수는 항상 익명 함수로 정의한다. 본문이 한 줄인 함수를 작성할 때 유용하다.
*/
var message;
// 변수를 선언한다.
// var 은 변수를 선언할 때 사용하는 키워드이다. 
// 아직 값은 할당되지 않았음으로 undefinded 이다. 


// 기존 function 정의
message = function () {
    return "Hello World!";
};
// message 라는 변수에 함수를 할당한다?
// message 변수에 할당된 함수는 아무런 매개변수를 받지 않고 "Hello World!"를 출력한다.

message(); 
// message 만 써주면 반환값을 처리해줄 수 없기 때문에 출력되지 않는다.
console.log("위에가 메시지");
console.log(message());

// var message1 
// message1 = function () {
//      console.log("헬로 월드!!");
// }

// message1();
// console.log("위에가 메시지1");
// return 값이 있는 메서드의 경우, console.log 형태로 넣어줘야 return 값을 처리할 수 있다.


// function 키워드 생략 가능
message = () => {
    return "Arrow Function!";
};

console.log(message());

// 명령문이 하나만 있는 경우 중괄호 생략 가능
// 이 때 함수 몸체 내부의 문이 값으로 평가 될 수 있는 표현식인 문이라면 암묵적으로 반환 된다.
// return 키워드 생략 가능
message = () => "Arrow Functions are Simple!"; // 몸체 스코프가 없음!! 리턴문 생략되어 있기 때문!!


console.log(message());


// 매개변수가 있을 경우
message = (val1, val2) => "Arrow " + val1 + val2;

// console.log(message('Function', '!'));
consoel.log(message('여기가 val1', 'val2자리'));
console.log("===========구분==============");

// 매개변수가 하나면 소괄호 생략 가능
// 매개변수가 없거나 여러 개일 경우 생략 불가하다
message = val => "Arrow " + val;

console.log(message('Functions are GOOD!!!'));


let id ="test";
let pass = "123"
let obj = { id, pass}

const test = ({ id, pass}) => `hi ${id} + ${pass}`;

console.log(test(obj));


