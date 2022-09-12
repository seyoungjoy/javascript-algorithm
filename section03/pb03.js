/*
# section03 문자열 탐색
- 숫자만 추출
*/

function solution(str){
    return Number(str.replace(/[^0-9]/g,''));
}

let str="g0en2T0s8eSoft";
console.log(solution(str));

// parseInt 정수
// Number 