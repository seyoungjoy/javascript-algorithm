// my solution 1
function solution1(n,arr){
    let answer = 0;
    for(let i=0; i<arr.length; i++){
        let one = arr[i].toString().split('')[1];
        if(one==n){
            answer ++;
        }
    }
    return answer;
}
// solution 2
function solution(n,arr){
    let answer = 0;
    for(let x of arr){
        if(x%10 === n) answer ++;
    }
    return answer;
}
console.log(solution(3,[25,23,11,47,53,17,33]));
console.log(solution(0,[12,20,54,30,87,91,30]));
