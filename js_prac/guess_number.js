//0~100사이의 숫자 업다운 게임
const readline = require('readline'); //console에서 입력을 받기 위해 패키지 불러오기

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (userinput) => {
            resolve(userinput);
        });
    });
}
async function restart(){ //다시 게임을 시작할지 입력을 받는 함수
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
async function guess_num_game(){
    while(true){ //restart를 활용해 게임을 재시작하였을 시에 com_num이 초기화되지 않는 오류 발견, 고민하다 다중 while loop 사용
        cnt = 1;
        let com_num = Math.floor(Math.random()*100); //0~99 사이의 정수
        console.log(com_num)
        while(true){
            if(cnt == 4) { //3번 안에 못맞출 시 탈락
                console.log(cnt-1 + '번에 정답을 맞추지 못하여 패배하였습니다.\n정답은 '+ com_num + '입니다');
                const ans = await restart('다시 하시겠습니까 ? (예/아니오) :');
                    if(ans == true){
                        console.log('\n');
                        break; //내부 무한루프를 벗어난다
                    }
                    else {
                        console.log('프로그램을 종료합니다. \n');
                        return; //내 외부 무한루프를 모두 return으로 벗어난다
                    }
            }
            else{
                let user_num = parseInt(await getUserInput(cnt + '번째 시도입니다. 숫자는 ? '), 10);
                if(!isNaN(user_num)){ //입력된 숫자가 NaN인지 평가
                    if(user_num < com_num){
                        console.log("up");
                        cnt++;
                    }
                    else if(user_num > com_num){
                        console.log("down")
                        cnt++;
                    }
                    else {
                        console.log("축하합니다. 정답입니다 !")
                        //맞췄을 시에 다시 플레이할 지 질문하는 함수
                        const ans = await restart('다시 하시겠습니까 ? (예/아니오) :');
                        if(ans){
                            console.log('\n');
                            break; //내부 무한루프를 벗어난다
                        }
                        else {
                            console.log('프로그램을 종료합니다. \n');
                            return; //내 외부 무한루프를 모두 return으로 벗어난다
                        }
                    }
                }
                else{
                    console.log("적절하지 않은 형식의 숫자입니다. 다시 입력해주십시오. \n");
                }
            }


        }   
    }
}
guess_num_game();