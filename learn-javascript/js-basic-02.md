Day02. 자바스크립트 기초 문제
(1) 함수를 정의하는 올바른 방법

B) function myFunc() {}

(2) 함수를 호출(call) 한다는 것은?

C) 함수를 실행한다

(3) 함수의 반환값(return value)

A) return x = y;

(4) 함수의 매개변수(parameter)

C) 항상 숫자여야 한다.

(5) 기본적인 함수 호출 형태

A) function()myFunc;

(6) 함수 실행이 종료되는 즉시 반환되는 키워드

B) return

(7) 함수 반환값이 없을 때 반환되는 기본 값

C) undefined

(8) 익명 함수(Anonymous Function)

A) function() { console.log("Hello"); }

(9) 함수 선언식(Declaration)과 함수 표현식(Expression)의 차이

A) 선언식은 호이스팅(hoisting)된다.

(10) function add(a, b){ return a + b; }
console.log(add(2, 3));

B) 5

(11) function greet(name){ return "Hi " + name; }
console.log(greet("Yumi"));

C) Hi Yumi

(12) 기본 매개변수를 사용하는 올바른 예시

B) function f(a,b=10){}

(13) 함수 내부에서 선언된 변수의 범위

B) 지역 범위

(14) 전역변수(gloabl varialbe)

B) 함수 외부에서 선언되어 모든 함수가 접근 가능하다.

(15) let x = 10;
function test(){
let x = 5;
console.log(x);
}
test();

B) 5

(16) function square(x){ return x\*x; }
console.log(square());

A) NaN

(17) 화살표 함수(Arrow Function)의 올바른 예시

A) const add = (a,b) => a + b;

(18) const multiply = (a,b=2) => a\*b;
console.log(multiply(5));

A) 10

(19) 함수 표현식에 대한 올바른 설명

A) 반드시 이름이 있어야 한다.

(20) var say = function(){ return "Hello"; }
console.log(say());

A) Hello

(21) 콜백 함수(Callback Function)

B) 함수의 인수로 전달되는 함수

(22) function run(fn){ fn(); }
run( ? )

C) function() { console.log("done"); }

(23) function outer(){
function inner(){
return "inside";
}
return inner();
}
console.log(outer());

C) inside

(24) 즉시 실행 함수(IIFE)의 올바른 예시

D) run(){};

(25) (function(a,b){
console.log(a+b);
})(3,4);

A) 7

(26) function makeAdder(x){
return function(y){
return x+y;
}
}
const add5 = makeAdder(5);
console.log(add5(2));
