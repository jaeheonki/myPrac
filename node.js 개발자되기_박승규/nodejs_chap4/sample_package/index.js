//sample_package를 불러오면 실행하는 파일 - 모듈을 require 함수로 포함시킬 때 실행된다고 한다

console.log("require로 부르면 실행")

module.exports = {
    add : (a,b) => a+b,
    sub : (a,b) => a-b,
    multi : (a,b) => a*b,
    div : (a,b) => a/b
}