//express를 이용하여 간단한 게시판 api 만들기
//데이터베이스가 없어 재시작하면 사용한 데이터가 모두 사라짐, 따라서 휘발성
//API(Application Programming Interface) : 프로그램에서 다른 프로그램의 기능을 사용할 수 있게 해주는 규약

// / : get == 게시판 목록 가져오기
// /posts : post == 게시판에 글쓰기
// /posts/:id : delete == 게시글 아이디가 id인 글을 삭제하기

const express = require("express");
const app = express();
let posts = []; //게시글 리스트로 사용할 posts 

//Json 미들웨어를 활성화하지 않으면 req.body를 사용하면 undefined로 반환한다
app.use(express.json()); //json 미들웨어 활성화하기

//POST 요청시 content type이 application/x-www-form-urlendoded인 경우 파싱한다 =>express.json과 함께 사용
//application/x-www-form-urlendoded : body에 키=값&키2=값2같은 조합 형태인 데이터인 경우
app.use(express.urlencoded({extended: true})); 

app.get("/", (req, res) => { // '/' 요청시에 실행
    res.json(posts); //게시판 목록 가져오기
});

app.post("/posts", (req, res) => { // 'posts' 요청시에 실행 : localhost:3000/posts로 POST요청이 오는 경우 실행
    //title=타이틀&name=이름&text=내용 형식으로
    const { title, name, text } = req.body; //http요청의 body 데이터를 변수에 할당

    //게시글 리스트에 새로운 게시글 정보 추가
    posts.push({ id : posts.length + 1, title, name, text, createdDt: Date()}); //id : 글의 고유 번호
    res.json({title, name, text}); //게시판 목록 가져온다, 리스트를 전달해야 하므로 res.end() 사용 불가 => res.json() 사용
});

app.delete("/posts/:id", (req, res) => {
    const id = req.params.id; //요청(req) = url path 에 할당된 id를 가져와서 id 변수에 넣는다
    //글 삭제 로직 : id 이외의 글만 뽑아서 filteredPosts에 다시 할당, 그 이후 post에 filteredPosts에 있는 글들 할당
    //궁금증 : 그렇다면 고유번호는, 중간에 있는 글이 삭제된다면 중간에 있던 고유번호는 비어있는가? : 고유 id는 바뀌지 않는다. 1 2 3 중 2번 게시물이 지워지면 1 3 만 남아있고 번호는 바뀌지 않는다.


    //javascript에서 가장 많이 사용되는 함수 : filter(), map(), reduce()
    //map() : 배열 요소들을 다른 형태로 바꿔준다. map.js 파일 참고
    //reduce() : 배열을 하나의 값으로 줄인다, reduce.js파일 참고
    const filteredPosts = posts.filter((post)=> post.id !== +id); 
    const isLengthChanged = posts.length !== filteredPosts.length;
    posts = filteredPosts;

    if(isLengthChanged){ //성공적으로 삭제되었는지 boolean
        res.json("OK");
        return; //삭제된 경우 return을 하여 빠져나가는데, 이 방법을 빠른 반환(Early Return)이라고 부른다, if문이 중첩될 경우 else문을 줄이기 위함
    }
    res.json("NOT CHANGED"); //변경 없는 경우 "NOT CHANGED 반환"
});

app.listen(3000, () => {
    console.log("welcome posts START!");
});