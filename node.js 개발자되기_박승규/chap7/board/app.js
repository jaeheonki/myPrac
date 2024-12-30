const express = require("express");
const app = express();
// req.body와 POST 요청을 해석하기 위한 설정
app.use(express.json());                                                    // JSON 미들웨어 활성화
app.use(express.urlencoded({extended: true}));                              // JSON 미들웨어와 함께 활성화

const handlebars = require("express-handlebars");
const postService = require("./services/post_service");                     // 서비스 계층 코드가 있는 post_service.js 로딩, writePost 변수에 적절한 함수 할당

//몽고디비 연결 함수
const mongodbConnection = require("./configs/mongodb_connection");          //본문 코드에 콜백이 없으므로 콜백 없이 MongoClient 객체 반환
const { ObjectId } = require("mongodb");

app.engine("handlebars",                                                    //익스프레스에서 사용할 템플릿 엔진 등록
    handlebars.create({                                                     //handlebars 객체 생성, 옵션으로 handlebars_helpers에 있는 헬퍼 함수 추가
        helpers : require("./configs/handlebars_helpers"),
    }).engine,
);
app.set("view engine", "handlebars");                  ``                     //웹페이지 로드 시 사용할 템플릿(뷰 엔진) 엔진 설정
app.set("views", __dirname + "/views");                                     // 뷰로 사용할 파일들의 디렉토리를 설정한다(원래는 상대경로, __dirname을 사용해 절대경로로 지정)


//라우터 설정
// localhost:3000으로 접근시 콜백 함수 실행
// home : 템플릿 파일의 이름 , views: 기본 경로, handlebars : 확장자 
// -> views/home.handlers 파일에 데이터를 렌더링, 렌더링 시에 title과 message 값이 객체로 들어가게 된다



//리스트 페이지
app.get("/", async (req, res) => {
    const page = parseInt(req.query.page) || 1;                                         //req.query 객체로 변수의 값을 받아옴
    const search = req.query.earch || "";                                               // || : 이전 값이 비었거나 null일 경우 || 뒤의 값을 기본값으로 설정
    try{
        const [posts, paginator] = await postService.list(collection, page, search);    //리스트의 데이터를 가져옴

        res.render("home", { title : "테스트 게시판", search, paginator, posts });       // 객체에 값을 할당할 때 값으로 사용하는 변수명 = 키의 이름이어서 변수만 넣음 ( == search : search, paginator : paginator, posts : posts)
    }
    catch (error) {                                                                     //에러가 나는 경우 빈 값으로 렌더링(예외 처리)
        console.error(error);
        res.render("home", { title : "테스트 게시판"});
    }
});

//글쓰기 섹션
app.post("/write", async (req, res) => {
    const post = req.body;                                                  //글쓰기 후 결과 반환
    const result = await postService.writePost(collection, post);           //post에 저장된 내용을 몽고디비에 저장하고 결과 반환, writePost()함수에서 Promise를 넘기므로 await
    res.redirect(`/detail/${result.insertedId}`);                           //저장 결과에 식별자로 사용할 수 있는 insertedID 값을 사용해 상세페이지로 이동
});

//쓰기 페이지 이동 : mode : create
app.get("/write", (req, res) => {           
    res.render("write", { title: "테스트 게시판", mode: "create"});         //mode 변수 추가, create/modify
})

//수정 페이지 이동 : mode : modify
app.get("/modify/:id", async (req, res) => {
    const post = await postService.getPostById(collection, req.params.id);  //post_service.js에 있는 getPostbyId함수 사용
    console.log(post);
    res.render("write", { title : "테스트 게시판 ", mode: "modify", post });
});

//게시글 수정 api
app.post("/modify/", async (req, res) => {                                  ///modify/url로 POST요청이 오는 경우 실행
    const { id, title, writer, password, content } = req.body;

    const post = {
        title,
        writer,
        password,
        content,
        createdDt: new Date().toISOString(),
    };

    const result = postService.updatePost(collection, id, post);                //게시글 수정 결과 반환, 수정이 된다면 상세페이지로 redirect
    res.redirect(`/detail/${id}`);
});

//게시글 삭제 api
app.delete("/delete", async (req, res) => {
    const { id, password } = req.body;

    try{
        const result = await collection.deleteOne({ _id: ObjectId(id), password: password });   //collection의 deleteOne()함수 사용, 게시글 하나 삭제
    
        console.log("Deletion result:", result)

        if (result.deletedCount !== 1){                                                         //deleteOne()의 결과는 DeleteResult, 삭제 성공이면 deletedCount 값이 1
            console.log("삭제 실패");
            return res.json({ isSuccess: false });                                              //1이 아니면 실패했다는 뜻이므로 isSuccess: false
        }
        return res.json({ isSuccess: true });
    } catch(error){                                                                             //네트워크 오류 등 예외 상황 위해 try catch로 예외처리
        console.error(error);
        return res.json({ isSuccess: false });
    }
});
//상세페이지로 이동
app.get("/detail/:id", async (req, res) => {
    const result = await postService.getDetailPost(collection, req.params.id);  //id정보를 넘겨서 몽고디비의 게시글 데이터를 가져오기
    res.render("detail", {
        title: "테스트 게시판",
        post : result.value,
    });
});

// 패스워드 체크
app.post("/check_password", async (req, res) => {                               //post 요청 : req.body에서 id, password 데이터를 구조 분해 할당으로 각각 가져옴
    const{ id, password } = req.body;

    const post = await postService.getPostByIdAndPassword(collection, { id, password });    // post_service.js에 있는 getPostByIdAndPassWord 함수 불러오기 -> 게시글 데이터 확인

    if (!post) {                                                                 //데이터가 있으면 isExist true, 없으면 isExist False
        return res.status(404).json({ isExist : false});
    }else {
        return res.json({ isExist: true});          
    }
})

//몽고디비
let collection;
app.listen(3000, async() => {
    console.log("Server Started");                                          
    const mongoClient = await mongodbConnection();                          //mongodbConnection()의 결과는 mongoClient
    collection = mongoClient.db().collection("post");                       //mongoClient.db()로 디비 선택 collection()으로 컬렉션 선택 후 collection에 할당
    console.log("Mongodb Connected");
})
