//making_router_plus_query.js 코드를 리팩토링함
// 현재는 user(), feed(), notFound() 3개의 함수지만 늘어나면 유지보수가 어려움, urlMap 사용하여 리팩토링
const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    if(path in urlMap){ //urlMap에 path가 있는지 확인, in 연산자 사용
        urlMap[path](req, res); // urlMap에 path값으로 매핑된 함수 실행
    }
    else{
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

//UrlMap으로 매핑해주는 함수
//가장 하단에 추가한 이유는 user() 함수나 feed() 함수보다 위에 있으면 const로 선언한 변수들은 초기화 전에 읽을 수는 없어서 에러가 나기 때문
const urlMap = {
    "/" : (req, res) => res.end("HOME"),
    "/user": user, 
    "/feed": feed,
};