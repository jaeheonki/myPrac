const readline = require('readline'); //console에서 입력을 받기 위해 패키지 불러오기

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (userinput) => {
            if(!isNaN(userinput)){
                resolve(userinput);
            }
            else{
                console.log('잘못된 입력 입니다. ');
                resolve(getUserInput());
            }
        });
    });
}
async function calculator(){
    let num1 = parseInt(await getUserInput('첫 번째 숫자를 입력하세요. \n'), 10);
    let op = await getUserInput('+, -, *, % 중 이용할 연산자는 ?').trim();
    let num2 = parseInt(await getUserInput('두 번째 숫자를 입력하세요. \n'), 10);

    if(!isNaN(num1) && !isNaN(num2) && !(op === '')){
        switch(op){
            case '+' :
                
            case '-' :
            
            case '*' :

            case '%' :

        }
    }
    else{
        console.log('오류입니다.');
        return;
    }
}