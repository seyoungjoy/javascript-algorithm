// 버블 정렬 : 배열의 자리가 연쇄적으로 변하면서 정렬
function solution(arr){
    let answer=arr;
    // j, j+1 번째를 비교할 것이기 때문에 -1
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));