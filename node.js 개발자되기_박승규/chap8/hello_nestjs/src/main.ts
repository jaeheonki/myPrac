//nestjs의 기동 시 실행되는 main.ts

import { NestFactory } from "@nestjs/core";
import { HelloModule } from "./hello.module";

async function bootstrap() {                                                    //NestJS에서는 진입점을 bootstrap()으로 이름 짓는 것이 관례이다
    const app = await NestFactory.create(HelloModule);                          //CREATE()함수에 루트 모듈을 넣어서 NestApplication 객체를 생성
                                                                                //Nest Application 객체에는 HTTP 부분을 모듈화한 HTTPAdapter가 존재재
    await app.listen(3000, () => { console.log("Server Started "); });          //nestJS의 애플리케이션을 실행하는 함수 :  express와 같다다

}

bootstrap();