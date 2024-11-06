const axios = require("axios"); // axios 임포트
//(1) 영화 순위 정보 url
const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/moieinfo.json";

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
    .then((data) => {       //(4) return 된 데이터 처리
        if(!data.articleList || data.articleList.size == 0){ (5)//크기가 0 이면 에러
            throw new Error("No Data");
        }
        return data.articleList; //
    })