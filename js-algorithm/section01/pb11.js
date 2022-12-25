// 대문자 찾기
// my solution 1
function solution1(str){
    let answer = 0;
    let reg = /[A-Z]/
    for(let x of str){
        if(reg.test(x)) answer++;
    }
    return answer;
}

// solution 2
function solution(str){
    let answer = 0;
    for(let x of str){
        if(x===x.toUpperCase()) answer++;
    }
    return answer;
}
console.log(solution("KoreATimeGood"));