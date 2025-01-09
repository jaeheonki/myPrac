//함수를 값처럼 사용할수 있다

function echo(message: string) : string {
    console.log(message);
    return message;
}

type FuncEcho = (message: string) => string;    //기존과 동일하게 type 타입명 = 타입 형태, (message: string) => string; 이 타입
const funcEcho2 : FuncEcho  = echo;

//type 지정시 객체 타입의 속성으로 함수 지정
type FuncEcho3 = {
    (message: string) : string;                 // =>가 없다
};
const funcEcho3 : FuncEcho3 = echo;
funcEcho3("test");                              //함수의 타입을 자동으로 추론해 실행
//funcEcho3(123);                                 //매개변수가 문자열이 아니므로 타입 에러러