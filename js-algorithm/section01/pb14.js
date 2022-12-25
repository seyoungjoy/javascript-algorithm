// 가장 긴 문자열
function solution(strArr){
    let answer = [];
    for(let x of strArr){
        answer.push(x.length)
    }
    let max = Math.max(...answer);
    let idx = answer.findIndex(item => item === max)
    return strArr[idx];
}
console.log(solution(["5", "teacher", "time", "student", "beautiful", "good"]));