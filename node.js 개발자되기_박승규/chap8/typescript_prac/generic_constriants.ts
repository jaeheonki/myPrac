//제네릭 제약 조건, any와 다르게 세밀하게 타입을 제약할 수 있다
//ex) 속성에 숫자타입 length가 있는 타입만 넘기는 것을 허용한다 (string, list, etc)

interface ICheckLength {
    length: number;
}

function echoWithLength<T extends ICheckLength>(message : T){   //T는 ICheckLength를 확장한 extends 타입이므로 최소한 IchkeckLength의 속성을 가져야만 한다
    console.log(message);
}

echoWithLength("Hello");        //Hello 문자열의 length : 5, 사용가능
echoWithLength([1,2,3]);        //1,2,3 length가 3이므로 사용 가능
echoWithLength({length : 10})   //사용 가능
//echoWithLength(10)              //10은 number타입으로 length가 없어 에러 발생생