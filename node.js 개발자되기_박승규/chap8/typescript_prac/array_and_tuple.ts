//배열과 튜플
//배열은 크기가 고정이 아니며, 튜플은 고정 -> 배열은 각 원소의 타입을 정의하고, 튜플은 언소 개수만큼 타입을 정의해야한다

const numbers : number[] = [1,2,3,4,5];                         //숫자 배열
const stringArray: Array<string> = ["a", "b", "c", "d", "e"];   //문자열 원소

//스프레드 연산자로 합치기 가능
const oneToTen = [...numbers, ...numbers];
console.log(...oneToTen);

//객체의 배열 타입
const idols: { name : string; birth: number }[] = [
    { name : "minji", birth : 2004 },
    { name : "hani", birth : 2004 },
    { name : "danielle", birth: 2005 },
    { name : "haerin", birth : 2006 },
    { name : "hyein", birth: 2008 },
];

//배열의 원소가 객체인 타입
const gameConsoleArray: Array<{ name : string; launch : number }> = [
    { name : "플스5", launch : 2020 },
    { name : "엑스박스 X/S", launch : 2020 },
    { name : "닌텐도 스위치", launch: 2017 },
    { name : "스팀덱" ,launch : 2021 },
];

//튜플 : 원소 갯수가 고정되어있음, 반환되는 개수가 정해져 있는 곳에서 사용하면 좋음

const myTuple: [string, number] = ["Jae", 181];

//튜플은 함수의 매개변수가 여러 개 일때 유용하다
function printMyInfo(label: string, info : [string, number]): void {
    console.log(`[${label}]`, ...info);
}
//결과값 : [튜플테스트] Jae 181
printMyInfo("튜플 테스트", myTuple);

//튜플 반환 함수
function fetchUser(): [string, number] {
    return ["Jae", 181];
}
//결과값 분해해서 받기
const [name24, height24] = fetchUser();
console.log(name24, height24);