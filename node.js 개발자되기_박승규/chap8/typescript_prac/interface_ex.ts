//타입과 인터페이스
//type                                          |       interface
//기존 타입/새 타입을 정의하는데 사용                   객체 타입의 구조를 정의하는데 사용
//다른 타입/인터페이스를 상속/구현 불가                 다른 인터페이스를 상속/구현 가능
//리터럴/유니온/인터섹션 타입 사용 가능                 extends 키워드로 인터페이스로 확장 가능
//간단한 타입 별칭을 생성할때 적합                      잘 정의된 구조의 객체 타입을 정의할 때 적합

type BookType = {           //BookType 타입
    title : string;
    price : number;
    author : string;
}

interface Book {            //Book 인터페이스
    title : string;
    price : number;
    author : string;
}

let BookType : BookType = {     // BookType 타입 객체 할당
    title: "백엔드 개발자 되기",
    price : 10000,
    author : "박승규"
}

let book : Book = {             // Book 인터페이스 객체 할당당
    title: "백엔드 개발자 되기",
    price : 10000,
    author : "박승규"
}

//선언 방법이나 객체 할당 방법은 같다
//인터페이스의 선택적 속성/읽기 전용 속성

interface Car {
    name: string;
    price: number;
    brand : string;
    options?: string[];     //차량의 옵션은 선택적 속성, 속성에 '?'를 붙이면 선택적 속성
}

let avante : Car = {        //에어컨, 내비게이션의 옵션
    name : "아반떼" ,
    price : 1500,
    brand: "현대",
    options : ["에어컨", "내비게이션"],
};

let morning : Car = {       //옵션 X
    name : "모닝",
    price: 650,
    brand : "기아",
};

//읽기 전용 속성 : 한번 정해지면 수정할 수 없음
interface Citizen {
    id: string;
    name : string;
    region : string;
    readonly age: number;   //readonly로 속성 이름 앞에 붙이면 읽기 전용으로 수정 불가가 됨됨
}
let Jaeheon : Citizen = {
    id : "123456",
    name : "김재헌",
    region: "서울",
    age: 25,
}

//Jaeheon.age = 26;           //age 속성을 읽기 전용이므로 에러