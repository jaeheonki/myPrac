//Router를 만들어 두 url에 다른 응답을 주는 코드

const http = require("http");
const url = require("url"); //url 모듈 로딩, url 변수에 할당

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname; //url 모듈을 사용해 url의 pathname 얻어낸다 ex) localhost:3000/user 에서 pathname은 user!
    res.setHeader("Content-Type", "text/html");

    if(path == "/user"){ //localhost 뒤의 이름이 /user일 때
        res.end("[user] name : andy, age : 30");
    }else if (path == "/feed"){ //localhost 뒤의 이름이 /feed일 때
        //html part : <ul> : 목록 , <li> : 목록 안의 항목, bullet으로 나타난다
        res.end(`<ul> 
            <li>picture1</li>
            <li>picture2</li>
            <li>picture3</li>
            </ul>
        `);
    } else { // /user 과 /feed 이외의 요청이 왔을 때 : 404 not found 반환
    res.statusCode = 404;
    res.end("404 page not found");
    }
})
.listen("3000", () => console.log("Making Router "));