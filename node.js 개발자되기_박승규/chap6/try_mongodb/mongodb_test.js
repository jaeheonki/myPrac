//mongodb와 커넥션을 확인하기 위해서 데이터베이스 정보를 출력하는 소스코드

const { MongoClient, ServerApiVersion } = require('mongodb');

//myFirstDatabase : 데이터베이스 이름
//retryWrites = true : 네트워크 오류 발생/정상적인 연결 X일때 쓰기작업을 자동으로 재시도
// w=majority : 쓰기를 시도할 때 다수의 인스턴스에 쓰기 요청을 전달하고 성공 확인을 받음
const uri = "mongodb+srv://uj07096:0927hmhmhm!@cluster0.kesmt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 
const client = new MongoClient(uri); //client 객체 생성

async function run() {
  await client.connect(); // connect()를 사용해 mongodb에 접속 시도
  const adminDB = client.db('test').admin(); //admin DB 인스턴스
  const listDatabases = await adminDB.listDatabases(); 
  // 데이터 정보를 가져옴, adminDB 인스턴스에 원래 listDatabases()함수가 있고 함수를 호출하면 해당 데이터베이스의 정보를 반환해줌
  console.log(listDatabases);
  return "OK";
}

run() //실행 함수
  .then(console.log)
  .catch(console.error)
  .finally(()=> client.close());


  //웬만한 작업은 비동기 처리, 아주 간단한 함수의 경우에만 콜백처리
