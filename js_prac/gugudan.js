const readline = require('readline'); //console에서 입력을 받기 위해 패키지 불러오기

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getNum() {
    //Promise사용하여 비동기 작업 처리
    return new Promise((resolve) => { //reject가 없으므로 resolve만
      rl.question('정수를 입력하세요 (종료하려면 0 입력): ', (input) => {
        const num = parseInt(input);
        if (isNaN(num)) {
          console.log('유효한 정수를 입력하세요.');
          resolve(getNum());  // 유효하지 않은 입력 시 다시 입력받기
        } else {
          resolve(num);
        }
      });
    });
  }
  

function gugudan(dan){
    for(let i = 1; i <10; i++){
        console.log(dan + " * " + i + " = " + dan * i);
    }
}
//async, await 활용
async function main() {
  while (true) {
    let num = await getNum();
    if (num === 0) {
      console.log("프로그램을 종료합니다.");
      rl.close();
      break;
    } else {
      gugudan(num);
    }
  }
}
main();