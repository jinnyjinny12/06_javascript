/* 02_function-expression(함수 표현식)
자바스크립트의 함수는 객체 타입의 값으로 값의 성질을 갖는 객체를 일급 객체라고 한다.
함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.
*/

// 함수 표현식에서는 함수명을 생략할 수 있다.
// function 다음에 함수 이름이 없잖아. 그래도 실행이 된다 ^______^

var hello = function (name) {
    return `${name}님 안녕하세요!`;
}

// 식별자로 함수를 호출한다.
// hello 안에 function 을 담아서 그거로 함수를 호출한다는 의미이다.

console.log(hello('홍길동'));

// 함수 표현식에서 함수명을 생략하지 않아도 문제는 없다.
// calc 이라는 변수에 함수를 할당했다.

var calc = function add(a, b) {
    return a + b;
}

function add(a,b){
    return a + b;
}

// 단, 함수 호출은 식별자로 이루어진다. ?? 
console.log(calc(10, 20));

console.log(add(10, 20)); 

// 함수명으로 호출은 불가능하다. function add 가 따로 선언되어 있지 않으면 
// add 만 써서 호출하는 건 불가능하다.

// ReferenceError: add is not defined
// console.log(add(10, 20));