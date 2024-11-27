//mongoose를 활용해서 CRUD API 코드 작성

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./person-model");

mongoose.set("strictQuery", false); //설정해줘야 경고가 뜨지 않는다

const app = express();
app.use(bodyParser.json()); //bodyParser.json 미들웨어 추가해야 HTTP에서 Body 파싱 가능
app.listen(3000, async () => {
    console.log("Server Started");
    const mongodbUri  = "mongodb+srv://uj07096:0927hmhmhm!@cluster0.kesmt.mongodb.net/test?retryWrites=true&w=majority";

    mongoose.connect(mongodbUri, { useNewUrlParser : true})
            .then(console.log("MongoDB Connected"));
});

//person data 모두 출력하기
app.get("/person", async (req, res) => {
    const person = await Person.find({});
    //find()가 비어있으면 필터링 없이 모든 데이터 가져오기, 이름이 andy인 데이터 찾고 싶으면 find({name: 'andy'})
    //find(filter, projection, option)
    // 만약 age를 숨기고 싶은 경우 find({}, {age : 0})이라고 적으면 age를 숨기기 가능
    //option종류 : 
    // sort : (정렬순서 -> 1은 오름차순, -1은 내림차순 Person.find({}, {sort : {name: 1}});), 
    // limit : (결과 문서 수 지정 -> Person.find({}, limit : 10});, 
    // skip : (결과 문서 중 앞에서 제외할 문서 수 지정 -> Person.find({}, {skip : 5});
        res.send(person);
});

//특정 이메일(인수값)으로 person 찾기
app.get("/person/:email", async(req, res) => {
    const person = await Person.findOne({ email : req.params.email }); //find()와 인수로 받는 값이 같으나, 결괏값이 하나만 있다
    res.send(person);
});

//person 데이터 추가하기
app.post("/person", async(req, res) => {
    const person = new Person(req.body);
    await person.save(); //new 로 선언한 후, save()로 DB에 저장
    // == const result = await Person.create(req.body);
    // res.send(result);
    res.send(person);
});

//person 데이터 수정하기

app.put("/person/:email", async(req, res) => {
    const person = await Person.findOneAndUpdate(  //updateOne() 함수와 거의 같음, 여러개를 동시에 수정할 떄는 updateMany()사용, 인수는 updateOne()과 동일
        { email : req.params.email},
        { $set: req.body },
        {new: true}
        // == Person.updateOne({ email : req.params.email } , { $set : req.body });
    );
    console.log(person);
    res.send(person);
});

//person 데이터 삭제
app.delete("/person/:email", async(req, res) => {
    await Person.deleteMany({email: req.params.email });
    res.send({ success : true });
});