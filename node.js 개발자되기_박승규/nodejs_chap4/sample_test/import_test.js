//sample_test 폴더에 sample_package가 정말로 설치되었는지 테스트

const cal = require("sample_package") // sample_package 불러오기

const a = 17;
const b = 3;

console.log("a + b = ", cal.add(a,b));
console.log("a - b = ", cal.sub(a,b));
console.log("a * b = ", cal.multi(a,b));
console.log("a / b = ", cal.div(a,b));