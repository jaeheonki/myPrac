//모든 요청에 "ok"를 반환하는 서버

const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html"); // 응답의 헤더 설정, text/html은 텍스트를 html로 해석하겠다느 ㄴ의미
    res.end("OK"); // "OK"를 응답하고 종료
});

server.listen("3000", () => console.log("OK Server Start ! ")); // createSever 로 서버 인스턴스 생성 -> listen() 함수를 붙여서 실행