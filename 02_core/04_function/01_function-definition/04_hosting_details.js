// 함수 선언문과 할당문의 차이

/*
함수 선언문
프로그램의 흐름을 기준으로 생각한다.

1번  
function test(){
    console.log("이거랑")
}

2번
function test(){
    console.log("이거 중 어떤 것이 실행되는가?")
}

3번
var variable;

4번 
test();

5번
console.log(variable);

6번
variable = "testsetsetestest";

*/

//console.log(variable);

// 함수 선언문
function test(){
    console.log("이거랑")
}
var test1 = function test(){
    console.log("이거 중 어떤 것이 실행되는가?")
}

test();  // test console에 있는거 그대로 출력됨.
test1();  // test1 console에 있는거 그대로 출력됨.

console.log(test); // 이러면 [function: test] 가 출력됨.
// console.log(test());
console.log(test1()); // 리턴값이 없어서 undefined 같이 출력됨.

console.log("여기까지 출력되는 거임!!!=============");
//var variable = "testsetsetestest";

//console.log(variable);

// --------------------
// 프로그램을 여기서 부터 실행된다고 생각을하자.


// 함수 할당문
/*
    1번
    var funTest;
    2번
    console.log(funTest);
    
    3번
    funTest = () =>{
        console.log("1");
    }
    4번
    funTest();
    
    5번 
      funTest = () =>{
        console.log("2");
    }
    6번
    funTest();
*/

console.log("지금 여기 공부할 차례");
console.log(funTest);

var funTest = () =>{
    console.log("1");
}
funTest();

var funTest = () =>{
    console.log("2");
}

funTest();

/* 자바스크립트의 let은 동일한 변수명을 생성할 수 없다. 
let funTest = ()=>{
    console.log("2");
}
*/

// 함수 선언문과 표현식 

// 함수 선언식
function a (){
};

// 함수 할당식 중
// 익명 함수 표현식
const b = function(){}; 

// 기명 함수 표현식
const c = function d(){};

// 일회성 함수 
// 얘는 바로 출력되는 함수!! 

(function (){
    console.log("이거 맞나?")
})();