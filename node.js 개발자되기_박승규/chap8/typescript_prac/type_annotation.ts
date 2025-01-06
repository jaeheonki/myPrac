//type-annotation(타입 명시) : var/let/const 이후에 <변수명>:<타입>

let username: string = "Jaeheon";   //문자열
let height : number = 181;          //숫자
let idConditionGood : boolean = true; //불리언

//객체에서 타입 선언
let myInfo: {
    name: string;
    height: number;
    isConditionGood: boolean;
    gender?: string;        //선택적 속성 : 필수가 아닌 값, 값을 할당할 때 넣어주지 않아도 문제 X
} = {
    name: "Jae",
    height: 181,
    isConditionGood : true,
}

//isCritical은 옵션
function printMessageWithAlert(message: string, isCritical?: boolean): void{
    console.log(message);

    if(isCritical) {
        alert(message);
    }
}