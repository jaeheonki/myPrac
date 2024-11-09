//test_promise.js_2에서 예외처리 추가하기

const DB = [];

function saveDB(user){
    //의도적으로 promise 처리 오류를 일으키기 위해 DB,length+1로 바꿈
    const oldDBSize = DB.length+1;
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve, reject) => {
        if (DB.length > oldDBSize){
            resolve(user);
        }
        else{
            reject(new Error("Save DB Error!"));
        }
    });
}
function sendEmail(user){
    console.log(`email to ${user.email}`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function getResult(user){
    return new Promise((resolve, reject) => {
        resolve(`success register ${user.name}`);
    });
}
function registerByPromise(user){
    //registerByPromise에서 catch를 사용해 예외처리
    const result = saveDB(user)
                        .then(sendEmail)
                        .then(getResult)
                        .catch(error => new Error(error)); //error가 발생했을 시에 catch구문 호출
    console.log(result);
    return result;
}
const myUser = {email: "andy@test.com", password: "1234", name: "andy"};


//주석 처리된 부분
// const result = registerByPromise(myUser);
// //결과값이 Promise이므로 then() 메서드에 함수를 넣어서 결괏값을 볼 수 있음
// result.then(console.log);

allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
allResult.then(console.log);