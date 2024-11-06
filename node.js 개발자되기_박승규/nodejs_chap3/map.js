//javascript array.map()

//map : 배열에서 사용, 원본 배열의 요소들을 다른 형태로 변환하여 새로운 배열에 담아줄 수 있다! 


const fruits = [
    {name : '오렌지', price : 300},
    {name : '바나나', price : 700},
    {name : '사과', price : 500},
    {name : '망고', price : 1000},
];
//map 또한 reduce()처럼 callback함수 사용
const priceTags = fruits.map((fruit)=>{
    //요소를 어떤식으로 변환할 건지 callback 함수 안에 정의
    return `${fruit.name}: ${fruit.price}원`;
});
console.log(fruits);
console.log(priceTags);
