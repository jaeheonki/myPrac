//프로미스가 잘못 사용되는 경우 2 - 프로미스를 중첩하여 사용하였을 때

function myWork(work){
    return new Promise((resolve, reject) => {
        resolve(work.toUpperCase())
    })
}

function PlayGame(work){
    return new Promise((resolve, reject)=> {
        if ( work == 'DONE'){
            resolve('Go Play Game');
        }else {
            reject(new Error("Don't"));
        }
    })
}
//프로미스 중첩하여 사용했을 때

myWork('done')
    .then(function (result){
        PlayGame(result).then(function(val){
            console.log(val);
        });
    })

//위의 코드는 가독성이 좋지 않음, 그래서 프로미스의 결과를 then으로 넘김 -> 가독성 up

myWork('done')
    .then(PlayGame)
    .then(console.log)