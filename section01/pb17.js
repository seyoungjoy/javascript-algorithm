// 중복단어제거
function solution(n, str){
    let answer = [];
    for(let i=0; i<n; i++){
        if(str.indexOf(str[i]) === i){
            answer.push(str[i]);
        }
    }
    return answer;
}

console.log(solution(5, ["good", "time", "good", "time", "student"]));