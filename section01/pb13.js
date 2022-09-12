// 대소문자 변환
function solution(str){
    let answer = [];
    for(let x of str){
        if(x===x.toUpperCase()) answer.push(x.toLowerCase())
        else answer.push(x.toUpperCase())
    }
    return answer.join('');
}
console.log(solution("StuDY"));