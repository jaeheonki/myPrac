//hello express를 반환하는 익스프레스 서버, express 사용 첫번째 !

const express = require("express"); // express 모듈 
const app = express(); // app 에 express 모듈 할당
const port = 3000;

app.get("/", (req, res) => { // /으로 요청이 오는 경우 실행됨, url path가 '/'이면서 http method가 get()인 경우 실행
    res.set({"Content-Type": "text/html; charset=utf-8" }); //헤더값 설정
    res.end("hello express !");
});
app.listen(port, () => { // == server.listen
    console.log(`START SERVER : use ${port}`);
});