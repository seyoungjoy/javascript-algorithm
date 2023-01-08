// 회의실 배정
function solution(meeting){
    let answer=0;
    // 회의가 끝나는 시간을 기준으로 정렬
    let arr = meeting.sort((a,b) => {
        if(a[1]===b[1]) return a[0]-b[0];
        else return a[1]-b[1];
    })
    let endTime = 0;
    for(let x of arr){
        if(x[0] >= endTime){
            answer++;
            endTime = x[1];
        }
    }

    return answer;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));