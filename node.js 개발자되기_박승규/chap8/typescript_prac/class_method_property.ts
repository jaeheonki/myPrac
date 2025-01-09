//javascript/typescript에서의 클래스

class Hello {
    constructor(){                  //생성자 메소드(명시)
        this.sayHello("created");
    }
    sayHello(message : string){
        console.log(message);
    }
}

const hello = new Hello();
hello.sayHello("안녕하세요");