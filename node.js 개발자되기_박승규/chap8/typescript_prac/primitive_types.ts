// 타입스크립트의 7가지 기본 타입

const one : number = 1;                         //숫자 타입입
const myName : string = "Jaeheon";              //문자열(string) 타입
const trueOrFalse: boolean = true;              //boolean 타입
const unIntended: undefined = undefined;        //undefined 타입 : 변수에 값이 할당되지 않은 경우, 즉 의도하지 않은 값의 부재
const nullable : null = null;                   //null 타입 : 의도적으로 값이 없음
const bigNumber : bigint = 1234567890123456789012345678901234567890n; //bigint 타입 : 매우 큰 숫자를 할당 할 수 있는 타입, 숫자 뒤에 n을 붙인다
const symbolValue: symbol = Symbol("symbol");   //symbol 타입 :  불변이면서 유니크한 값을 표현하는 자료형

console.log(one + 1);                           
console.log(myName + " is my name");
console.log(trueOrFalse ? "true" : "false");
console.log(bigNumber / 10000000000n);

console.log(symbolValue === Symbol("symbol"));  //모든 값이 유일하므로 같은 값을 넣어도 False
