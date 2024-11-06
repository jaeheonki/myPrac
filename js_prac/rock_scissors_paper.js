const readline = require('readline'); //console에서 입력을 받기 위해 패키지 불러오기

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//User의 input을 받아오는 함수(Promise 사용) -> User의 패를 입력으로 받거나, 다시 할지 말지를 받음, question 변수에 질문 넣음
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (userinput) => {
            resolve(userinput);
        });
    });

}
//getUserInput을 이용해 다시 할지 말지 여부를 받는 함수, return값은 boolean으로 
async function restart(){
    while(true){
        const ans = await getUserInput('다시 하시겠습니까 ? (예/아니오) : ')
        if(ans == '예'){
            return true;
        }
        if(ans == '아니오'){
            return false;
        }
        else{
            console.log('잘못 입력하셨습니다. 다시 입력해주세요 ');
        }
    }
}
// 게임을 수행하는 함수 
async function rock_scissors_paper() {
    let cnt = 0; //cnt로 연승 수 기록
    while (true) {
        const userInput = await getUserInput('가위, 바위, 보! (지면 종료) : ');
        const com_hand_array = ['가위', '바위', '보']; //컴퓨터가 낼 수 있는 패를 담은 배열 
        //math.floor : 소숫점을 없애는 메소드
        //math.random()을 이용해 0~1사이의 랜덤한 소수를 뽑은 후, 배열의 길이를 곱하고, math.floor()를 이용해 0~배열의 길이 사이의 무작위 정수 뽑아냄
        let com = com_hand_array[Math.floor(Math.random() * com_hand_array.length)]; 


        if (userInput == com) {
            console.log("컴퓨터의 선택 : " + com);
            console.log('무승부입니다 ! \n');
        }
        else if (
            (userInput == '가위' && com == '보') ||
            (userInput == '바위' && com == '가위') ||
            (userInput == '보' && com == '바위')
        ) {
            console.log("컴퓨터의 선택 : " + com);
            cnt++; //승리시 연승 수 올라감
            console.log('이겼습니다 ! 현재 ' + cnt + '연승중 입니다. \n');
        }
        else if (
            (userInput == '가위' && com == '바위') ||
            (userInput == '바위' && com == '보') ||
            (userInput == '보' && com == '가위')
        ) {
            console.log("컴퓨터의 선택 : " + com);
            console.log("패배하였습니다 ! \n당신의 기록 : " + cnt + "연승 \n");
            
            //패배시 replay여부를 물어봐서 게임 진행을 매끄럽게 만들기
            const ans = await restart('다시 하시겠습니까 ? (예/아니오) :');
            if(ans == true){ //restart()함수에서 받은 boolean값으로 조건문 이행 
                cnt = 0;
                continue;
            }
            else {
                console.log('프로그램을 종료합니다. \n');
                break;
            }
        }
        else {
            console.log('잘못된 입력입니다. 다시 입력해주세요 \n\n');
        }
    }
}
rock_scissors_paper();