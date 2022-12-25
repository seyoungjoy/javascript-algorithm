function solution(s){
    let answer=0;
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(s[i] === "(") {
            stack.push(s[i]);
        }
        else{
            stack.pop();
            // 닫혔을 때 경우 1 : 레이저.
            if(s[i-1]==="("){
                answer += stack.length;
            }// 닫혔을 때 경우 2 : 막대기의 끝일 경우
            else {
                answer ++;
            }

        }
    }

    return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a));