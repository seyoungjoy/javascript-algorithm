// 뒤집은 소수
// 숫자를 뒤집어서 소수이면 출력
// 만약 첫 자리가 0 이면 0은 무시

function solution(arr){
    let answer=[];
    let reverseArr = arr.map(item => parseInt(item.toString().split('').reverse().join('')));
    for(let i=2; i<reverseArr[i-2]; i++){
        if(reverseArr[i]%i!==0) answer.push(reverseArr[i-2]);
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));