//mongodb 활용해서 crud api 만들어보기, 나중에 프로젝트에서 쓰일 수도?
const MongoClient = require('mongodb').MongoClient;
//앞의 코드에서는 DB 이름이 myFirstDataBase였지만, 여기서는 test로 바꿈
const url = "mongodb+srv://uj07096:0927hmhmhm!@cluster0.kesmt.mongodb.net/test?retryWrites=true&w=majority";

//(1)MongoClient 생성
const client = new MongoClient(url, {useNewUrlParser: true});

async function main(){
    try{
        // (2) 커넥션 생성, 연결 -> client.connect() 함수 사용
        await client.connect();

        console.log('MongoDB connection success');

        //(3) test 데이터베이스 person 컬렉션 가져오기
        //client.db('test') : test 데이터 베이스 사용, .collection('person') : person 컬렉션 사용, 생성되어 있지 않으면 새로 생성함
        const collection = client.db('test').collection('person');
        //(4) 문서 추가(Create)
        await collection.insertOne({ name : 'Andy', age : 30});
        console.log('ADD Complete');

        //(5) 문서 찾기(Read)
        const documents = await collection.find({ name : 'Andy'}).toArray(); //결과값이 여러개일 수 있으므로 toArray() 사용
        console.log('documet found : ', documents);

        //(6) 문서 갱신(Update) -> 이름이 Andy인 문서를 age:31 로 바꾼다 $set : 몽고디비의 연산자
        await collection.updateOne({name : 'Andy' }, {$set: {age: 31} });
        console.log('Document Update');

        //(7) 갱신된 문서 확인
        const updatedDocuments = await collection.find({name : 'Andy' }).toArray();
        console.log('updated Documents : ', updatedDocuments);

        //(8) 문서 삭제하기(Delete)
        //await collection.deleteOne({name: 'Andy'});
        //console.log('document deleted');

        //(9) 연결 끊기
        await client.close();
    }
        catch(err){
            console.error(err);
    }
}

main();
