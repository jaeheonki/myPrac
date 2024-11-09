//자바스크립트의 가장 최근에 나온 비동기 처리, async await 사용 예제
async function myname(){
    //async의 return값 : Promise
    return "Andy";
}

async function showName() {
    //await : 성공 혹은 실패로 Promise 객체의 실행이 완료되기를 기다린다
    //async 키워드를 사용한 함수 안에서만 사용 가능, await 뒤에는 Promise가 온다.
    const name = await myname(); 
    console.log(name);
}

console.log(showName());
