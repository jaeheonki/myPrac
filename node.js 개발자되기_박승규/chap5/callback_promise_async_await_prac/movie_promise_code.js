//Promise 를 활용한 영화 상위 20위까지 뽑기, axios 임포트 활용

const axios = require("axios"); // axios 임포트
//(1) 영화 순위 정보 url
const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

axios
    .get(url)           //(2) url 요청
    .then((result) =>{  //결과값 처리
        if(result.status != 200){
            throw new Error("Failed!");
        }
        if(result.data){        //(3)결과값 있으면 결과를 반환
            return result.data;
        }
        throw new Error("No Data valid."); //data 없을 시 에러
    })
    .then((data) => {       //(4) return 된 데이터 처리 !! then에서는 Promise에서 앞에 return된 데이터 값을 받는다. 
        if(!data.articleList || data.articleList.size == 0){    //(5)크기가 0 이면 에러
            throw new Error("No Data");
        }
        return data.articleList; //(6) 영화 데이터 반환
    })
    .then((articles) => {
        return articles.map((article, idx) => { //  (7) 영화 리스트를 제목과 순위 정보로 분리
            return { title: article.title, rank : idx + 1};
        });
    })
    .then((results) => {
        for (let movieInfo of results){
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
        }
    })
    .catch((err)=> {    //에러 처리
        console.log("<<ERROR>>");
        console.error(err);
    })