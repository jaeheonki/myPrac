//인터섹션 타입 : 타입 A 이면서 타입 B인 타입
type cup = {
    size: string;
}
type brand = {
    brandName : string;
}

type brandedCup = cup & brand;

let starbucksGrandeSizeCup: brandedCup = {
    brandName: "Starbucks",
    size : "grande",
};

//인터섹션 타입을 복잡하게 만들면 타입 검사시 에러가 나는 경우 여러 개의 타입을 동시에 표시해야 하므로 에러메시지를 이해하기 힘들어짐 -> 간결함 유지해 사용하기

//리터럴 타입 : 기본 타입의 값을 조합해서 한정적인 값들만 나타내는 타입
type CoffeeSize = "small" | "medium" | "large";

let myCoffeeSize : CoffeeSize = "small";
//let starbucksCoffeeSize : CoffeeSize = "tall";  //small, medium, large만 할당 가능하므로 타입 에러