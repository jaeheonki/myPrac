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