// 가운데 문자 출력
function solution(str){
    let answer;
    let l = str.length;
    if(l%2 === 0){
        answer = str.substring(l/2-1,l/2+1);
    } else{
        answer = str[Math.ceil(l/2)-1];
    }
    return answer;
}

console.log(solution("study"));
console.log(solution("good"));