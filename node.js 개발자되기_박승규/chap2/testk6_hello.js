//k6를 이용해 동시에 처리하는지 테스트

import http from "k6/http";

export const options = {
    vus: 100, //가상 유저를 설정하는 항목
    duration : "10s",   //몇초 동안 테스트를 진행할지 //test 옵션
};
export default function () {
    http.get("http://localhost:8000"); //test에 사용할 함수 지정
}