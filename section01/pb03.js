// my solution 1
function solution1(n){
    let answer = 0;
    if(n%12){
        answer = n/12+1
    } else{
        answer = n/12
    }
    return Math.floor(answer);
}

// solution 2
function solution(n){
    return Math.ceil(n/12);
}
console.log(solution(12));
console.log(solution(25));
console.log(solution(178));