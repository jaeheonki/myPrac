//prettier(자동으로 자바스크립트를 포매팅 해주는 함수) 를 실습하기 위해 일부러 코드를 엉망으로 작성

function getRandomInt(
  min,
  max, //주석도 포매팅가능
) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(10, 20));

//pack.json에 bin 설정이 있고 실행 파일이 있다면 모두 npx 명령어로 실행할 수 있다
//Node.js로 작성한 패키지 중 {패키지명}-cli 프로젝트들은 대부분 npx로 실행 가능