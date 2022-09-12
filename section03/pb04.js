/*
# section03 문자열 탐색
- 문자거리
*/

function solution(s, t){
    let answer = [];
    let l = s.length;
    let cnt = 1001;
    for(let i=0; i<l; i++){
        if(s[i] !== t) cnt ++;
        else cnt=0;
        answer[i] = cnt;
    }
    cnt=1001;
    for(let j=l-1; j>=0; j--){
        if(s[j] !== t) cnt ++;
        else cnt=0;
        if(answer[j] > cnt) answer[j]=cnt;
    }
    return answer;

}

let str="ttteachermode";

console.log(solution(str, 'e'));