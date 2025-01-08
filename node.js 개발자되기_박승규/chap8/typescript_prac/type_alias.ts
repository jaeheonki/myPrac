//타입 별칭 : 자주 재사용하는 유니온 타입의 경우 타입 별칭 사용
type nsb = number | string | boolean;
let anyValue1: nsb = 10;
anyValue1 = "hello";
anyValue1 = true;
//anyValue1 = null; //컴파일 에러(anyValue1에 null은 할당 불가능)

//타입 별칭에 null 추가
type nullabeNsb = nsb | null;

let nullableValue : nullabeNsb = null;
nullableValue = 20;
nullableValue = "nullable";
nullableValue = false;
//nullableValue = undefined; //컴파일 에러(null은 할당 가능 하지만 undefined는 할당 불가가)
