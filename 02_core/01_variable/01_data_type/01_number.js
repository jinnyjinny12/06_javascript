/*
    자바의 경우 정수와 실수를 구분해 int, long, float, double 등과 같은 다양한 숫자 타입을 제공한다.
    하지만 자바스크립트의 경우, 하나의 숫자타입만 존재하고 모든 수를 실수로 처리한다.
*/

// 자바의 변수 표현식
// 자료형 변수명 = 10;
// 데이터 영역에 한 번 선언된 값은 바뀌지 않는다.
// 데이터 영역에 값이 있는지 먼저 확인하고 주소값을 본다.
// 만약 없으면 새로 만들어주고 선언해준다, 참조카운트가 0이면 제거한다.

// Number(); 라는 클래스가 있다.
Number();

var integer = 10; // int short byte long
var double = 5.5; // float double
var negative = -10;


console.log(typeof integer);
console.log(typeof double);
console.log(typeof negative);

console.log(10 === 10.0); // === 완전히 똑같다는 의미 (값과 자료형까지 모두 같다면 === 쓴다)

// 자바에서 = (한 개)는 할당 연산자에 변수를 할당하기 위해 사용되며 비교연산자가 아니다.
// javascript에서 == (두 개) 동등연산자로 값의 비교와 데이터타입간의 변환 시도도 한다.
// javascript에서 === (세 개) 값과 데이터타입 둘 다를 비교하는 연산자. 10인지와 typeof가 같은지를 비교함.

console.log("javascript의 일치연산자와 동등연산자 확인");

console.log(10 == 10.0);  // true
console.log(10 == '10');  // true
console.log(10 === 10);   // true
console.log(10 === '10'); //false

/* 
    infinity: 양의 무한대
    -infinity: 음의 무한대
    NaN: 산술 연산 불가
    ex) 1 곱하기 문자열은 연산이 불가능한 오류로  NaN 이라고 뜬다.!오류유형 중 하나.
*/


console.log("여기서부터는 연산한 결과가 출력합니다!!")

console.log(10/4); // 연산한 결과가 나옴!
console.log(10/0); // 10을 0으로 나누면 양의 무한대가 나옴.
console.log(10/-10); 

console.log(1*'문자열'); // 산술연산 불가로 NaaN 이 출력됨
console.assert(1*'문자열'); // 에러남 assert의 경우 에러메세지를 출력해줌.

console.log(Number("10")*"10"); // 이건 에러가 안남. 자료형을 숫자로 변경한게 가로를 벗어난 "10" 에도 영향을 줌.







