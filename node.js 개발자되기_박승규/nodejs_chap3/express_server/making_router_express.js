//making_router_plus_query_refactor.js 코드를 express로 구현하기

const url = require("url");
const express = require("express");
const app = express // 읽어온 express app에 할당
const port = 3000;

//익스프레스 서버 대기
app.listen(port , () => {
    console.log("Making Router Refactoring by Express");
});

//GET Method 라우팅 설정
//기존에 UrlMap으로 url 매핑을 하지 않고 app.get() 함수 사용
//URL이 많아진다면 app.get()함수를 사용하는 것이 가독성 good

app.get("/", (_,res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) {
    //query 값 읽기
    const user = url.parse(req.url, true).query;
    //json 형태로 유저명과 나이 제공
    res.json(`[user] name : ${user.name}, age : ${user.age}`);
};
//사용하지 않는 변수는 빼는 것이 원칙이지만, 구조상 넣을 수 밖에 없을 때 _를 사용
function feed(_, res){
    res.json(`<ul> 
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
    `);
}