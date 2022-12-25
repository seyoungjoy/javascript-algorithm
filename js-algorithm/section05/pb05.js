// sliding window 창문을 열고 닫다?
//
// 3일간의 최대 매출액 구하기

function solution(k, arr){
    // 1) 반복문 O(n)
    let max = 0;
    for(let i=0; i<arr.length-(k-1); i++){
        let value = arr[i]+arr[i+1]+arr[i+2];
        if(max<value){
            max=value;
        }
    }
    return max;

    // 2) sliding window
    // 창문을 닦으면서 가는 방법으로 정해진수만큼 묶어서 추가되는건 더하고 빠지는건 값에서 빼주는 방법으로 값을 비교.
    let answer = 0;
    let sum = 0;
    // 초기합 세팅
    for(let i=0; i<k; i++) sum+=arr[i];
    answer=sum;

    for(let i=k; i<arr.length; i++){
        sum+=(arr[i]-arr[i-k]);
        answer=Math.max(answer,sum);
    }
    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));