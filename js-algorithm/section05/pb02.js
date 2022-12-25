// 두 배열에서 공통 원소를 뽑아 낸 다음 오름차순 정렬하여 출력
function solution1(arr1, arr2){
    // two pointers
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = p2 = 0;
    arr1.sort((a,b)=> a-b,0);
    arr2.sort((a,b)=> a-b,0);

    while(p1 < n && p2 < m){
        console.log(p1,p2)
        if(arr1[p1]<arr2[p2]){
            p1++
        } else if(arr1[p1]===arr2[p2]){
            answer.push(arr1[p1]);
            p1++;
            p2++;
        } else{
            p2++;
        }
    }
    return answer;
}

function solution2(arr1, arr2){
    let answer=[];
    let arr=[...arr1, ...arr2];
    for(let i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) !== i) answer.push(arr[i]);
    }
    answer.sort((a,b)=>a-b,0);
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];

console.log(solution2(a, b));
