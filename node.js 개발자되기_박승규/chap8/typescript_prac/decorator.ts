//데코레이터 : 클래스명 앞에 @데코레이터명
//데코레이터별 데코레이터 함수의 시그니처 :
//클래스 데코레이터 : (constructor:{new(...args:any[]) => {}})
//메소드 데코레이터 : (target:any, propertyKey:string, propertyDecriptor:PropertyDescriptor)
//속성 데코레이터   : (target:any, perpertyKey:string)
//매개변수 데코레이터 : (target:object, propertyKey:string, parameterIndex:number)
//접근자 데코레이터 : (target:any, propertyKey:string, descriptor:PropertyDescriptor)


type Constructor = new(...args: any[]) => {};               //생성자 메소드 타입
function HelloDecorator(constructor : Constructor) {
    return class extends constructor {                      // 익명 클래스 반환
        constructor(){                                      //생성자 재정의
            console.log(`Hello!`);
            super();                                        //DecoratorTest의 생성자 실행행
        }
    }
}

@HelloDecorator
class Decoratortest {
    constructor(){
        console.log(`instance constructed`)
    }
}

const decoTest = new Decoratortest();

//메소드의 시간을 측정하는 코드
console.time("실행 시간");                      //실행시간 측정 시작
execute();                                     //setTimeout()을 이용해 0.5초가 걸리도록
function execute() {
    setTimeout(() => {
        console.log("실행");
        console.timeEnd("실행 시간");           //실행 시간 측정 종료
    }, 500);
}

//위의 시간 측정 코드를 메서드 데코레이터로
function Timer(){       //데코레이터 팩토리 함수 : 데코레이터를 만들어서 반환하는 함수
    return function (target : any, key: string, descriptor: PropertyDescriptor){    //메소드 데코레이터 선언 : 결괏값으로 익명 함수를 반환
        const originalMethod = descriptor.value;                                    //decriptor.value에는 기존 메소드가 값으로 되어 있다(함수도 값으로 할당 가능)
        descriptor.value = function (...args: any[]){                               //메소드의 동작을 변경함 -> 시간 측정 동작 추가
            console.time(`Elapsed time`);                                           
            const result = originalMethod.apply(this, args);                        //this : 데코레이터가 적용된 클래스의 인스턴스스
            console.timeEnd(`Elapsed time`);
            return result;
        };
    }
}

class ElapsedTime {
    @Timer()
    hello(){
        console.log(`Hello`);
    }
}