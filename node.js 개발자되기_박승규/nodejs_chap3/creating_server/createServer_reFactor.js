//createServer안에 모든 함수를 집어넣으면 가독성 떨어짐, 따라서 라우팅 이후의 처리를 별도의 함수를 만들어서 진행
//implement_router.js 파일을 리팩터링한 코드
const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", text/html);

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

const user = (req, res) => {
    res.end("[user] name : andy, age : 30");
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