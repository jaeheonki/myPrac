//MongoDB Drive 만큼 많이 사용하는 몽구스 알아보기
//mongoose란 ? mongodb 패키지보다 조금 더 편리한 기능을 제공하는 라이브러리
// 객체를 document로 매핑하는 기능이 있음(ODM이라고도 불림)

//여기서는 뒤에 CRUD 에서 쓰일 Person스키마 생성  
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const personSchema = new Schema({
    name : String,
    age : Number,
    email: { type : String, required : true},
});

module.exports = mongoose.model('Person', personSchema);