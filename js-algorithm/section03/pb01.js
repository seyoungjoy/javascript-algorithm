    /*
section03 문자열 탐색
- 회문 문자열
- 문제 : 회문 문자열(앞, 뒤로 읽었을 때 똑같은 문자열)을 검사하는 프로그램(대소문자 구분x)

순수함수 : 부수효과가 없는 함수
*/

// 반복문을 이용한 회문 문자열 탐색
function solution1(s){
    let answer="YES";
    let rStr = '';
    let l = s.length;

    for(let i=l-1; i>=0; i--){
        rStr += s[i];
    }
    if(s.toLowerCase() !== rStr.toLowerCase()) answer="NO"
    return answer;
}

// reverse 메소드를 이용한 회문 문자열 탐색
function solution(str){
    let answer="NO";
    let s = str.toLowerCase();
    let rStr = s.split('').reverse().join('');
    if(s === rStr) answer="YES";
    return answer;
}

let str="goooG";
console.log(solution(str));