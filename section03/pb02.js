/*
# section03 문자열 탐색
- 유효한 Palindrome(회문)
- 문제 : 알파벳만 가지고 회문검사(대소문자 구분 x, 알파벳 이외의 문자 무시)
*/

// 정규식으로 알파벳만 추출 후 회문 검사
function solution(s){
    let answer="NO";
    let l = s.length;
    let reg = /[a-zA-Z]/;
    let str = '';
    for(let i=0; i<l; i++){
        if(reg.test(s[i])) str += s[i];
    }
    if(str.toLowerCase() === str.toLowerCase().split('').reverse().join('')) answer="YES"
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

