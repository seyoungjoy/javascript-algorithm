// 연속 부분 수열 2
// 연속 수열에서 m 이하인 수열이 몇개가 나오는지
function solution(m, arr){
    let answer = 0, sum=0, lt=0;
    for(let rt=0; rt<arr.length; rt++){
        sum += arr[rt];
        while(sum>m){
            sum -=arr[lt++];
        }
        answer += (rt-lt+1);
    }
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));