/* 03_convert-to-boolean (불리언 타입으로 변환) */
console.log('===== 논리 타입으로 변환 ======');

// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가 되는 값) 
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true(값이 있는 녀석), Falsy -> false(값이 없는 녀석)로 암묵적 타입 변환 된다.

//if()에서 () 안에 있는 함수가 true일 경우에만 출력됨.

if(true) console.log("if(true)"); 
if(false) console.log("if(false)"); // 얜 false 라 안 출력됨.
if(undefined) console.log("if(undefined)"); //undefined은 falsy라 출력안됨.

if(null) console.log("if(null)"); // null 도 falsy
if(0) console.log("if(0)"); // 0은 Falsy로 판단을 한다.
if(NaN) console.log("if(NaN)"); // NaN 또한 Falsy
if('') console.log("if('')"); // ''는 빈 값으로 falsy 
if('JavaScript') console.log("if('JavaScript')"); // 얘는 왜 참이야? false, undefined, null, 0, NaN, '' 뺴고 모두 Truthy

var test;
console.log(!test) //이렇게 출력하면 true 가 나옴. 
//왜? 1)현재 test라는 변수는 지금 쓰면 undefined 임.(falsy)
// 2)undefined + ! 하면 트루나옴
// 3) 이런 형태는 값의 존재 여부를 판단하는데 사용됨. 저렇게 썼을 때 true 가 나오면 존재하지 않는다고 생각하면 됨. 그래서 편하게 쓰려면 느낌표 2개 쓰면 됨!!
// ex) console.log(!!test) 요렇게!!


// false, undefined, null, 0, NaN, ''(빈 문자열)은 Falsy 값이며
// 이 외의 모든 값은 Truthy 값이다.