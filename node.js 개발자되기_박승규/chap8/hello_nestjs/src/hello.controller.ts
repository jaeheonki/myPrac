//Nestjs 첫 컨트롤러 코드

import { Controller, Get } from "@nestjs/common";       //필요한 함수 임포트, 대부분 필요한 함수는 nestjs/common에 있다다

@Controller()                                           //@Controller 데코레이터는 클래스에 붙이며 컨트롤러로 사용하게 해준다
export class HelloController {                          //외부 모듈에 포함되어야 하므로 export를 붙여서 다른 클래스에서 불러올 수 있게 해준다
    @Get()                                              //@Controller와 @Get에 아무런 값이 없으므로 localhost:3000으로 접속시 값이 나옴
    hello(){
        return "Hello NestJS! My First NestJS";
    }
}