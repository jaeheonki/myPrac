//createServer_reFactor.js에서 user()함수 수정하여 동적으로 응답이 변경되도록 함수 변경
const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    if(path == "/user"){
        user(req, res);
    } else if(path == "/feed"){
        feed(req, res);
    }
    else {
        NotFound(req, res);
    }
})
.listen("3000", () => console.log("Making Router "));

//user() 함수 변경
const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query; //url에 있는 query string 데이터를 userInfo에 할당
    res.end(`[user]name : ${userInfo.name}, age : ${userInfo.age}`); // 결과값으로 userInfo에 있는 값 출력
};

const feed = (req, res) => {
    res.end(`<ul> 
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
    `);
};
const NotFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found");
};