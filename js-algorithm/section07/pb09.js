// 결혼식
function solution(times){
    let timeArr = [];
    let count = 0;
    let answer = 0;
    for(let x of times){
        timeArr.push([x[0], "s"]);
        timeArr.push([x[1], "e"]);
    }
    timeArr.sort((a,b)=>{
        if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
        else return a[0]-b[0];
    })
    for(let x of timeArr){
        if(x[1]==="s"){
            count++;
        } else {
            count--;
        }
        answer = Math.max(count,answer);
    }
    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));