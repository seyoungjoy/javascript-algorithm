// 자릿수의 합
// 각 자릿수의 합이 최대인 값 출력
// 이때 중복값일경우 원래 큰 숫자를 출력
// 원본 요소를 반환해야하기때문에 max일때 따로 그 값을 저장하는게 포인트!

function solution(arr){
    const leng = arr.length;
    let max = 0;
    let answer = '';
    for(let i=0; i<leng; i++){
        let sum = arr[i].toString().split('').reduce((a,b) => Number(a)+Number(b),0);
        if(sum > max){
            max=sum;
            answer = arr[i];
        } else if(sum === max){
            if(answer < arr[i]) answer = arr[i];
            //2) answer = Math.max(answer,arr[i]);
        }
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
