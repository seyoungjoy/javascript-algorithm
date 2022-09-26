// 두 배열을 합쳐서 오름차순으로 정렬된 배열을 출력.
function solution(arr1, arr2){
    // 1) concat을 이용한 방법
    // return arr1.concat(arr2).sort((a,b)=> a-b,0);

    // 2) 스프레드 연산자
    let answer = [...arr1, ...arr2];
    return answer.sort((a,b)=> a-b,0);
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));