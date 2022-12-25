// 뒤집은 소수
// 숫자를 뒤집어서 소수이면 출력
// 만약 첫 자리가 0 이면 0은 무시
// 소수란? 약수를 1과 자신만 가지는 수.
function isPrime(num){
    if(num===1) return false; //만약에 숫자가 1이면 소수가 아님
    for(let i=2; i<= parseInt(Math.sqrt(num)); i++){
        // 만약에 20이라는 숫자가 소수인지 확인할거면 2부터 20의 제곱근(4)까지만 반복문을 돌린다.
        if(num%i===0) return false; // 나누었을때 0이되면 소수가 아님
    }
    return true; //위의 관문들을 모두 통과했다면 그 수는 소수!
}

function solution(arr){
    let answer = [];
    let answerArr = arr.map((item) => parseInt(item.toString().split('').reverse().join('')))
    for(let x of answerArr){
        if(isPrime(x)) answer.push(x);
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));