function foo() {
    if(true){
        //js 처럼 var은 전역 변수 취급, let은 지역 변수, 때문에 주로 let과 const 사용
        var a = 10;
    }
    return a;
}
console.log(foo());

let b = 10;
b += 1;
console.log(b); //11 출력

const c = 10;
//c += 1;         //const는 불변이기 때문에 error, but const 에 배열이나 객체 등을 할당하면 값 변경 가능
console.log(c);