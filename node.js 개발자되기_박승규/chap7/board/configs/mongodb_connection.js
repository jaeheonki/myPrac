const { MongoClient } = require("mongodb");
// 몽고디비 연결 주소, board가 있는데 기본값으로 선택하는 데이터베이스
// 명시적으로 생성하지 않으면 첫 데이터가 추가될 때 지정한 데이터베이스도 자동으로 생성
const uri = "mongodb+srv://uj07096:0927hmhmhm!@cluster0.kesmt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/board";

//함수를 호출하는 사람이 몽고디비의  uri값을 몰라도 사용할 수 있게 함수를 한 번 감싸기
module.exports = function(callback){
    return MongoClient.connect(uri, callback);
}
//원래는 MongoClient.connect(uri, callback)을 실행해야 하지만 mongodb-connection(callback)으로 감싸서 실행 가능

