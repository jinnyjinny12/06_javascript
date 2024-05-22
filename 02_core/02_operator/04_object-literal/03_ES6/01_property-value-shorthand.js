/* 01_property-value-shorthand(프로퍼티 값 단축 구문) */

var id="p-0001";
var price =  30000;


var product={
    id:id, // id 는 프로덕트 안에 있는 키, ex) 키 : 변수 이런 형태로 기재되어 있다고 보면 됨. 
    price:price
}

console.log(product);

/*
ES6에서 프로퍼티 값으로 변수를 사용하는 경우
변수의 이름으로 프로퍼티 키를 생성하게 되어 key와 값을 생략할 수 있다.
프로퍼티 키는 변수 이름으로 값은 변수의 값으로 할당한다.
*/
var product2 ={ id, price};
console.log(product2);


var product3 = {...product2}; // 프로덕트가 가지고 있는 속성을 모두 가지고 있음.
// 이건 할당해주는 거기 때문에 출력은 안됨
console.log("product3")
console.log(product3)

var product4 = product2;
console.log("product4")
console.log(product4) //이건 주소값을 가져오는 거와 같음!!
