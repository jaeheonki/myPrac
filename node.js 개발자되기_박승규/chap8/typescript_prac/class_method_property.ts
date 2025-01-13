//javascript/typescript에서의 클래스

class Hello {                       //보통 클래스의 앞글자는 대문자로로
    constructor(){                  //생성자 메소드(명시)
        this.sayHello("created");
    }
    sayHello(message : string){
        console.log(message);
    }
}

const hello = new Hello();
hello.sayHello("안녕하세요");

//클래스 속성 : 클레스 몸체 블록에 변수를 선언하면 클래스 속성, this.변수명 으로 접근

class Rectangle{
    width : number;         //클래스 변수수
    height: number;
    
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 5);
rectangle.getArea();