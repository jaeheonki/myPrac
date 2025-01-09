//인터페이스의 매개변수 타입도 제네릭으로 지정 가능
//함수에서와 마찬가지로 인터페이스명 뒤에 타입 매개변수를 추가

interface ILabel<Type> {
    label:Type;
}

const stringLabel:ILabel<string> = {
    label : "Hello"
}

const numberLabel : ILabel<number> = {
    label : 100
}

// const booleanLabel : ILabel<boolean> = {
//     label : 3.14         //boolean에 number를 넣을 수 없음
// }