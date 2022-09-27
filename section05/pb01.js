// 두 배열을 합쳐서 오름차순으로 정렬된 배열을 출력.
function solution(arr1, arr2){
    // my solution 1. concat을 이용한 방법
    // return arr1.concat(arr2).sort((a,b)=> a-b,0);

    // my solution 2. 스프레드 연산자
    // let answer = [...arr1, ...arr2];
    // return answer.sort((a,b)=> a-b,0);

    // sort => nlogN
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = p2 = 0;
    while(p1<n && p2<m){
        if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]);
        else answer.push(arr2[p2++]);
    }
    while(p1<n) answer.push(arr1[p1++]);
    while(p2<m) answer.push(arr2[p2++]);
    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));
