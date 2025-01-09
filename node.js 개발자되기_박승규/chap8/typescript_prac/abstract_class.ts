//추상 메소드 : 메소드의 구현체가 없는 메소드, 구현해야 하는 기능을 강제 할 수 있어 깜빡하고 구현하지 않는 실수 예방 가능
//대부분의 코드가 비슷하지만 특정 부분만 다르게 구현하는 클래스를 여러 개 작성할 때 유용하다

abstract class Logger {     //로그를 남기는 방법을 추상클래스로 구현, 어떻게 남기는지는 개별 클래스로
    prepare(){
        console.log("================")
        console.log("prepare for log")
    }
    log(message : string){  //로그를 남기는 절차를 정의한 메소드드
        this.prepare();
        this.execute(message);
        this.complete();
    };

    abstract execute(message: string) : void;       //추상메소드

    complete(){
        console.log("Finished")
        console.log("")
    }
}

//추상 클래스는 상속에 사용
class FileLogger extends Logger {
    filename : string;

    constructor(filename : string){     //상속을 받은 경우, 기본 생성자가 아니라면 super()을 먼저 실행행
        super();
        this.filename = filename;
    }

    execute(message: string) : void {   //추상 메소드 구현
        console.log(`[${this.filename}]>`, message);
    }
}

class ConsoleLogger extends Logger {
    execute(message: string) : void {
        console.log(message);
    }
}

const fileLogger = new FileLogger("test.log");
fileLogger.log("Log on File");

const consoleLogger = new ConsoleLogger();
consoleLogger.log("Log on Console");