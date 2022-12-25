// 문자 찾기
function solution(str,target){
    let answer = 0;
    for(let x of str){
        if(x===target){
            answer++;
        }
    }
    return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));