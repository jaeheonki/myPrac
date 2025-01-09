//typescript에서는 같은 이름의 인터페이스가 있고 속성이 각각 다르다면 인터페이스를 내부적으로는 병합해준다

interface Clock {
    time : Date;
}
interface Clock {
    brand : string;
}
interface Clock {
    price : number;
}

//위에서 clock을 세번 정의 했을때 내부적으로는 interface Clock{ time : date; brand : string; price: number; } 상태로 병합됨됨

// const WrongClock : Clock = {         // brand, price 속성이 없어서 에러러
//     time : new Date(),
// }

const clock : Clock = {
    time: new Date(),
    brand : "Rolex",
    price : 10000,
}