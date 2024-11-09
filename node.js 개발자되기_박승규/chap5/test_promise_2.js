//test_promise.js에서 동시에 여러 promise 객체를 호출하도록 코드 변경하기

const DB = [];

function saveDB(user){
    const oldDBSize = DB.length;
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
    //비동기 호출이지만, 순서를 지켜서 실행
    const result = saveDB(user).then(sendEmail).then(getResult);
    //아직 완료되지 않았으므로 지연(pending) 상태
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