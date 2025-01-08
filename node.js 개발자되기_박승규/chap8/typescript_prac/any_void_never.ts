//any 알아보기

// let anyValue = 10;     // anyValue 타입을 number 타입으로 추론
// anyValue = "hello";    // 컴파일 에러
// anyValue = true;       // 컴파일 에러러

//any 타입을 사용해 컴파일에러를 사라지게 하고 실행 가능하다, 그러나 컴파일 시점 아닌 런타임 시점에 에러가 날 수 있으므로 지양하기
let anyValue: any = 10;
anyValue = "hello";
anyValue = true;

//void : 함수의 결과값이 없을 때 사용
//never : 의도적으로 값을 바환하지 않을 때 사용(예외를 발생시키거나 무한루프를 실행하는 함수 일때 사용)

//결과값이 없음
function print(value: any) : void{
    console.log(value);
}

//예외를 던짐
function throwError(message: string):never {
    throw new Error(message);
}

//무한 루프
function infiniteLoop(): never{
    while(true){}
}