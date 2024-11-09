//async - await를 사용하여 1부터 10까지 1초에 하나씩 출력
function waitOneSecond(msg){
    //직접 Promise를 만들어서 반환하므로 async를 붙이지 않아도 됨, setTimeout()에 반환값이 없어서 Promise 직접 생성
    return new Promise((resolve, _) => {    //reject를 사용하지 않기 때문에 resolve, _로 표현
        setTimeout(() => resolve(`${msg}`), 1000);
    });
}

async function countOneToTen(){
    for (let x of [...Array(10).keys()]){ //Array(10) : 길이가 10이지만 요소가 없는 배열 생성, .keys() : 배열의 인덱스를 생성하는 iterator 반환
        // ... : 확산 연산자, 반복 가능한 요소를 개별 요소로 확장한다. 여기서는 .keys에 의해 생성된 값들을 새로운 배열에 넣는다.
        let result = await waitOneSecond(`${x+1}초 대기중 ...`);
        console.log(result);
    }
    console.log("완료");
}

countOneToTen();