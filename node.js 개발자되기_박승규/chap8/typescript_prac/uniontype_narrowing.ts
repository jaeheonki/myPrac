//유니온 타입 : 사용하면 변수 하나를 여러가지 타입으로 지정 가능 : | 기호로 타입을 구분해 여러 타입을 정의

let anyVal : number | string | boolean = 10;      //이 시점에서는 number 타입
printAny(anyVal);
anyVal = "hello";     //이 시점에서는 string 타입
printAny(anyVal);
anyVal = true;        //이 시점에서는 boolean 타입임
printAny(anyVal);

function printAny(value: number | string | boolean): void{
    if(typeof value === "number") {
        console.log(value.toExponential(3));
    }
    else if (typeof value=== "string"){
        console.log(value.toUpperCase());
    }
    else if (typeof value === "boolean"){
        console.log(value ? "참" : "거짓");
    }
}