// 중복문자제거
// indexof : 일치하는 첫번째 문자열만 반환.
function solution(str){
    let answer = '';
    for(let i=0; i<str.length; i++){
        if(str.indexOf(str[i])===i){
            answer += str[i];
        }
    }
    return answer;
}

console.log(solution("ksekkset"));