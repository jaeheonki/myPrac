//앞에서 프로미스로 구현했던 top20영화 제목 가져오는 코드를 async-await를 사용해 더 가독성 좋게 표현
//기존에 Promise를 사용할 때는 .then이 너무 많아 가독성이 떨어졌었음

const axios = require("axios");

async function getTop20Movies(){
    const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";
    try{
        const result = await axios.get(url); //네트워크에서 정보를 받아오므로 await로 비동기 처리
        const { data } = result; //result에는 data 프로퍼티가 있다
        if( !data.articleList || data.articleList.size == 0){ //데이터가 비어있을때 에러 처리
            throw new Error("No data available");
        }
        const movieInfos = data.articleList.map((article, idx) => {
            return { title: article.title, rank : idx + 1};
        });
        //위에서 data.articleList.map으로 받아온 movieInfo를 출력
        for (let movieInfo of movieInfos){
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
        }
    }
    catch(err){ //예외처리
        throw new Error(err);
    }
}
//함수 호출
getTop20Movies();

//웬만해선 async-await를 사용하지만(가독성을 위해), Promise가 필요한 경우(setTimeout()을 사용하거나 여러 태스크를 동시에 실행할 경우)