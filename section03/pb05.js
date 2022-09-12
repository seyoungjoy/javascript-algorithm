/*
# section03 문자열 탐색
- 문자열 압축
- 같은 문자열이 2번이상 반복될때 그 숫자를 옆에 표기하여 문자열을 압축.
*/

function solution(s){
    let answer = '';
    let l = s.length;
    let cnt =1;
    for(let i=0; i<l; i++){
        if(s[i]===s[i+1]){
            cnt ++;
        } else{
            answer += s[i];
            if(cnt > 1) answer += cnt;
            cnt = 1;
        }
    }
    return answer;

}

let str="KKHSSSSSSSE";
console.log(solution(str));