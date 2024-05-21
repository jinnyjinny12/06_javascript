/* 01_ optional-chaining-operator(옵셔널 체이닝 연산자)
ES11(ECMAScript2020)에서 도입된 연산자로 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고
그렇지 않으면 우항의 프로퍼티 참조를 이어간다. 
*/

// var obj = null;
var obj = {};

// TypeError: Cannot read properties of null (reading 'value')
// let val = obj.value;

console.log("dfjslfjklsd");
console.log(obj); // null 값이 출력됨.



console.log(obj?.value) // 물음표를 쓰지 않으면 에러가 남.
obj.value = 10;
console.log("여기서부터 시작");
//console.log(value); //그냥 value 함수를 출력하니 바로 오류남!

console.log(obj.value);

var val = obj?.value; // value가 존재하는지 묻는다. 오브젝트에 벨류라는 속성이 존재해? 존재하면 null 을 반환함.
console.log(val);

// 옵셔널 체이닝 연산자 이전에는 논리연산자 &&를 사용한 단축 평가로 확인했다.
// 단, 빈 문자열과 같은 Falsy 값을 false 취급해서 생기는 문제가 있다.

var str = '';

// len에 str 즉 빈 문자열이 담긴다
// var len = str && str.length;     
// 빈 문자열은 null 또는 undefined가 아니므로 문자열의 길이 값이 담긴다

var len = str?.length; // str 의 문자열은 빈값으로 그 길이는 0이다. 그래서 0이 출력됨!
console.log(len);

