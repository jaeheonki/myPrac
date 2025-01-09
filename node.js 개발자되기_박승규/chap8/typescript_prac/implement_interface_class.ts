//인터페이스를 구현한 클래스 , implements 키워드 사용

interface Iclicker {
    count : number;
    click(): number;
}
class Clicker implements Iclicker { // 인터페이스를 상속받아놓고 인터페이스를 구현하지 않으면 에러 발생, 따라서 클래스에 구현을 강제하기 위한 요소로도 사용 가능
    count : number = 0;

    click(): number {
        this.count += 1
        console.log(`Click! [count] : ${this.count}`);
        return this.count;
    }
}

const clicker = new Clicker();
clicker.click();                //Click! [count] : 1
clicker.click();                //Click! [count] : 2
clicker.click();                //Click! [count] : 3
