//reduce 공부하기
const numbers = [1,2,3,4];


//forEach
// let total = 0;

// numbers.forEach(number =>{
//     total = total + number;
// })
// console.log(total);

//reduce : 하나의 최종값을 반환한다
//numbers.reduce()안에 중괄호안에 있는 함수를 reducer 함수라고 부른다
//두가지 인수 전달받음 : accumulator, currentValue
//currentValue : foreach의 number과 같은,, 배열 안의 값을 하나씩 돈다
//accumulator : 현재까지 누적된 값 (forEach의 total) : 초기값 초기화는 괄호 마지막에 (,초기값)
const total = numbers.reduce((accumulator, currentValue) => {
    //reducer 함수 안에 어떻게 accumulator을 누적할지 정의
    return accumulator + currentValue //반환값은 다음 요소의 accumulator에 누적
    //최종적으로 반환되는 accumulator 값이 reduce 함수의 반환값!

}, 0) //=> accumulator 초기값 : 0
//reduce 사용하여 최소값 구하기
const nums = [10, 4 ,2, 8];

const smallest = nums.reduce((accumulator, currentValue)=>{
    if(accumulator > currentValue){
        return currentValue;
    }
    return accumulator;
});
console.log(smallest);
//초기값을 넣지 않으면 초기값(여기서는 10)을 스킵하고 두번째 값부터 계산한다, accumulator의 초기값은 배열의 첫번째 값(여기서는 10)으로 저장된다

//reduce 실습
//cart안에 있는 price의 합계 구하기
const cart = [
    {
        name : '사과',
        price: 500,
    },
    {
        name : '바나나',
        price: 700,
    },
    {
        name: '레몬',
        price: 300,
    },
];
const result = cart.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue.price
},0);
console.log(result);