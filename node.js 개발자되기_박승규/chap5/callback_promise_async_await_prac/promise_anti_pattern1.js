//프로미스가 콜백보다는 깔끔한 코드를 유지할 수 있지만, 잘못 사용될 수 있는 예(1)
// 프로미스의 then()함수에 성공 시와 실패 시 처리할 함수를 둘 다 넘기는 경우
// -> 이렇게 되면 Promise는 장식에 불과하며 기존의 콜백 함수에 결과/에러를 동시에 넘기는 형태와 진배없다

function myWork(work) {
    return new Promise((resolve, reject) => {
        if (work == 'done'){
            resolve('game available')
        } else{
            reject(new Error("game not available"));
        }
    })
}
//콜백과 다를 바가 없다.
myWork('done').then(function (value) { console.log(value)}, function(err){ console.error(err) });
//같은 함수지만 catch사용하여 예외 처리( 좋은 경우 )
myWork('doing')
    .then(function (value) { console.log(value) })
    .catch(function (err) { console. error(err) });
