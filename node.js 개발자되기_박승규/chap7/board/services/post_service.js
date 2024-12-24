const paginator = require("../utils/paginator");
const { ObjectId } = require("mongodb");
//글쓰기, 글 리스트 불러오기

const projectionOption = {
    projection : {                                                                                  //결과값에서 일부만 가져올 떄 적용
        password: 0,                                                                                //비밀번호와 댓글들의 비밀번호는 가져오지 X
        "comments.password" : 0,
    },
};

//하나의 게시물 정보를 가져오는 함수
async function getDetailPost(collection, id){                                  
    //findOneAndUpdate(filter, update, options) : filter : 원하는 데이터, update : 찾은 도큐먼트에 갱신할 데이터에 대한 내용, options : 프로젝션, 소팅 등                     
    return await collection.findOneAndUpdate({ _id: ObjectId(id) }, { $inc: { hits: 1 } }, projectionOption); //가져올때마다 hits(조회수) 를 1씩 증가시킨다 $inc : increase, his를 1씩 증가시킨다
}

//글 목록
async function list(collection, page, search){
    const perPage = 10;                                                                             //한 페이지에 노출할 글 개수
    const query = { title : new RegExp(search, "i") };                                              //title이 search와 부분일치 하는지 확인
    const cursor = collection.find(query, { limit : perPage, skip : (page - 1) * perPage}).sort({   //글 목록 리스트를 가져오기 위해 몽고디비 collection의 find()함수 사용
                                                                                                    //skip : 2페이지인 경우 11~20 가져오기 위해 사용
        createdDt : -1,                                                                             //생성일 역순으로 정렬(sort 사용)
    });
    const totalCount = await collection.count(query);                                               //Promise 사용
    const posts = await cursor.toArray();
    const paginatorObj = paginator({ totalCount, page, perPage : perPage });                        //페이지네이터 생성
    return [posts, paginatorObj];
}

async function writePost(collection, post){                                                         //Post를 board 컬렉션에 저장함수
    post.hits = 0;
    post.createdDt = new Date().toISOString();                                                      //날짜를 ISO 포맷으로 저장
    return await collection.insertOne(post);                                                        //컬렉션에 post 저장, 결괏값 : Promise
}



module.exports = {                                                                                  //module.exports : require()로 파일을 임포트할때 외부로 노출하는 객체를 모아둔다
    list,
    writePost,
    getDetailPost,
};