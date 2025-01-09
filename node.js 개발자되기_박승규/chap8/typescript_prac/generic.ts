//제네릭 함수 : 매개변수와 결괏값의 타입을 함수 선언 시점이 아니라, 함수를 호출하는 시점에 정하는 기법


//먼저 any를 사용하는 방법 : 무슨 타입이던지 받을 수 있지만 타입스크립트에서는 any를 사용하는 것을 지양양
function echo(message: any) : any {
    console.log("in echo : ", message);
    return message;
}

type phone = {
    name : string,
    price : number,
    brand : string,
}

const myPhone = {name : "iPhone", price : 1000, brand : "Apple"}
echo(1)
echo("안녕")
echo(myPhone);

//제네릭 함수를 사용하는 코드
//T 타입 매개변수, 어떤 특별한 타입을 지칭하는 것이 아닌 런타임에 변경되는 타입 대신 T라고 선언해둔 것에 불과
//관례적으로 사용하는 제네릭 문자들 : T(변수 타입), E(리스트 내부 요소들의 타입 표현), K,V : 맵에서 Map(K,V)로 주로 키,값 쌍을 표현할떄 흔히 사용된다다
function genericEcho<T>(message : T) : T {     
    console.log(message);
    return message;
}

genericEcho(1)
genericEcho<string>("안녕")
genericEcho<any>(myPhone)       //any를 타입으로 넣으면 제네릭을 쓸 이유가 없음음
//genericEcho<string>(myPhone)    //타입이 달라서 에러 발생
