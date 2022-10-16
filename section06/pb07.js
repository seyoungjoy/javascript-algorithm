// 교육과정 설계
// 필수과목이, 반드시 이수, 순서도 있음
// 수업설계 확인 프로그램

function solution(need, plan){
    let answer="YES";
    let que = need.split("");
    for(let i=0; i<b.length; i++){
        // 1 무조건 첫번째 필수과목이 나올때까지 비교
        if(que[0]===plan[i]) que.shift();
    }
    if(que.length!==0) answer="NO"
    return answer;
}

let a="CBA";
let b="DGCBAE";
console.log(solution(a, b));